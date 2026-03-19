import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { Plugin } from "vite";
import { routesMeta } from "./src/seo/routes-meta";

const __dirname_safe =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://mousikeaps.it";

/**
 * Vite plugin that generates a static HTML file for each route
 * with the correct OG / Twitter / canonical meta tags baked in,
 * so social crawlers (WhatsApp, Facebook, Twitter) see unique previews.
 */
export function seoPrerender(): Plugin {
  return {
    name: "seo-prerender",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve(__dirname_safe, "dist");
      const indexPath = path.join(distDir, "index.html");

      if (!fs.existsSync(indexPath)) return;
      const template = fs.readFileSync(indexPath, "utf-8");

      for (const route of routesMeta) {
        // Skip root – it already has the correct index.html
        if (route.path === "/") {
          // Still patch the root index.html in place
          const patched = patchHtml(template, route);
          fs.writeFileSync(indexPath, patched, "utf-8");
          continue;
        }

        const dir = path.join(distDir, route.path.replace(/^\//, ""));
        fs.mkdirSync(dir, { recursive: true });

        const outFile = path.join(dir, "index.html");
        // Don't overwrite if already exists (shouldn't happen in SPA)
        const patched = patchHtml(template, route);
        fs.writeFileSync(outFile, patched, "utf-8");
      }

      // Generate _redirects in dist/ (overwrites the one copied from public/)
      const redirectLines: string[] = [];
      for (const route of routesMeta) {
        if (route.path === "/") continue;
        const clean = route.path.replace(/^\//, "");
        const target = `/${clean}/index.html`;
        redirectLines.push(`${route.path}    ${target}    200`);
        redirectLines.push(`${route.path}/   ${target}    200`);
      }
      redirectLines.push(`/*    /index.html    200`);
      fs.writeFileSync(path.join(distDir, "_redirects"), redirectLines.join("\n") + "\n", "utf-8");

      console.log(`[seo-prerender] Generated ${routesMeta.length} static HTML files + _redirects`);
    },
  };
}

interface Meta {
  title: string;
  description: string;
  ogImage: string;
  canonical: string;
}

function patchHtml(html: string, meta: Meta): string {
  // Ensure ogImage is absolute
  const ogImage = meta.ogImage.startsWith("http") ? meta.ogImage : `${BASE_URL}${meta.ogImage}`;
  let result = html;

  // Title
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Meta description
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${meta.description}">`
  );

  // Canonical
  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // OG tags
  result = result.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${meta.title}">`
  );
  result = result.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${meta.description}">`
  );
  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${meta.canonical}">`
  );
  result = result.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${ogImage}">`
  );

  // Twitter tags
  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${meta.title}">`
  );
  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${meta.description}">`
  );
  result = result.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${ogImage}">`
  );

  return result;
}

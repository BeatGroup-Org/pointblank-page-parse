

## Problema

Nel file `index.html` ci sono ancora 3 riferimenti al vecchio dominio Lovable (`pointblank-page-parse.lovable.app`) invece di `mousikeaps.it`:

- Riga 10: `<link rel="canonical">`
- Riga 14: `<meta property="og:url">`
- Riga 32: `"url"` nel JSON-LD

Quando condividi una pagina su WhatsApp, Facebook ecc., questi servizi leggono i meta tag Open Graph e il canonical, mostrando il dominio sbagliato.

Inoltre nel sitemap c'è ancora `/eventi/2` (vecchio ID numerico) da aggiornare a `/eventi/jacopo-carlini`.

## Modifiche

1. **`index.html`** — Sostituire tutte e 3 le occorrenze di `https://pointblank-page-parse.lovable.app` con `https://mousikeaps.it`.

2. **`public/sitemap.xml`** — Cambiare `<url><loc>https://mousikeaps.it/eventi/2</loc></url>` in `<url><loc>https://mousikeaps.it/eventi/jacopo-carlini</loc></url>` e aggiungere l'URL per Dario Panza (`/eventi/dario-panza`).


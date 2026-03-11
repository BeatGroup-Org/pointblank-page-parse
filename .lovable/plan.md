

## Ottimizzazione SEO del sito Mousikè

### Problemi identificati e soluzioni

#### 1. `index.html` — Fix meta globali
- Cambiare `lang="en"` → `lang="it"`
- Migliorare `<meta description>` con keywords: "Scuola di musica a Lamezia Terme. Formazione musicale, produzioni culturali, programmi educativi e inclusione sociale. Mousikè APS."
- Aggiornare `og:description` e `twitter:description` con lo stesso testo
- Cambiare `meta author` da "Lovable" a "Mousikè APS"
- Rimuovere `twitter:site` "@Lovable" o sostituirlo con account social reale
- Aggiungere `og:url`, `og:locale` (`it_IT`)
- Aggiungere JSON-LD strutturato per `MusicSchool` / `Organization`

#### 2. Creare `public/sitemap.xml`
Sitemap statica con tutte le route:
- `/`, `/chi-siamo`, `/staff`, `/formazione`, `/produzioni`, `/programmi-educativi`, `/eventi`, `/contatti`, `/amministrazione-trasparente`

#### 3. Aggiornare `public/robots.txt`
Aggiungere la riga `Sitemap: https://pointblank-page-parse.lovable.app/sitemap.xml`

#### 4. Title e meta description per pagina — `react-helmet-async`
Installare `react-helmet-async` e aggiungere `<Helmet>` in ogni pagina con title e description unici:

| Pagina | Title | Description |
|--------|-------|-------------|
| `/` | Mousikè — Scuola di Musica a Lamezia Terme | Centro culturale ed educativo... |
| `/formazione` | Formazione Musicale — Mousikè | Corsi di musica per tutte le età... |
| `/produzioni` | Produzioni Culturali — Mousikè | Musical e spettacoli: La Bella e la Bestia... |
| `/programmi-educativi` | Ma che Musica Maestro — Mousikè | Programmi educativi nelle scuole... |
| `/eventi` | Eventi — Mousikè | Concerti, spettacoli ed eventi... |
| `/chi-siamo` | Chi Siamo — Mousikè | La storia e la missione di Mousikè APS... |
| `/staff` | Il Team — Mousikè | I docenti e lo staff di Mousikè... |
| `/contatti` | Contatti — Mousikè | Contattaci per info e iscrizioni... |

#### 5. File da creare/modificare
- **Modifica:** `index.html` (lang, meta, JSON-LD)
- **Crea:** `public/sitemap.xml`
- **Modifica:** `public/robots.txt` (aggiungere Sitemap)
- **Installa:** `react-helmet-async`
- **Modifica:** `src/main.tsx` (aggiungere `HelmetProvider`)
- **Modifica:** tutte le 9 pagine in `src/pages/` (aggiungere `<Helmet>` con title e description unici)


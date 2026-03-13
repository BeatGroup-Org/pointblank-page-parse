

## Anteprime social personalizzate per ogni pagina

### Il problema

Essendo un'app React SPA, quando WhatsApp, Facebook o Twitter leggono i meta tag, vedono solo quelli statici in `index.html` (sempre gli stessi). React Helmet aggiorna i tag lato client, ma i crawler social non eseguono JavaScript.

### La soluzione

Creare un **plugin Vite** che dopo il build genera un file HTML dedicato per ogni rotta, con i meta tag OG corretti già inseriti nel markup statico. In questo modo ogni URL avrà la sua anteprima social.

### Modifiche

**1. Nuovo file `src/seo/routes-meta.ts`**
Mappa centralizzata delle rotte con titolo, descrizione, immagine OG e URL canonico per ogni pagina (Home, Chi Siamo, Staff, Formazione, Produzioni, Programmi Educativi, Eventi, Contatti, Amministrazione Trasparente, + le due pagine evento).

**2. Nuovo file `vite-plugin-seo.ts`**
Plugin Vite (`closeBundle` hook) che:
- Legge `dist/index.html`
- Per ogni rotta in `routes-meta.ts`, sostituisce i meta tag OG/Twitter/canonical/title nel markup
- Salva il risultato in `dist/<percorso>/index.html` (es. `dist/eventi/jacopo-carlini/index.html`)

**3. Aggiornare `vite.config.ts`**
Aggiungere il plugin SEO alla lista dei plugin Vite.

**4. Aggiornare ogni pagina (Helmet)**
Aggiungere tag `og:title`, `og:description`, `og:image`, `og:url` e `twitter:*` nei `<Helmet>` di tutte le 10+ pagine, come fallback client-side. Le pagine evento useranno l'immagine hero dell'evento come `og:image`.

**5. Aggiornare `index.html`**
Nessuna modifica necessaria - i meta tag di default restano come fallback.

### Risultato atteso

Condividendo `mousikeaps.it/eventi/jacopo-carlini` su WhatsApp, l'anteprima mostrerà:
- Titolo: "Masterclass di Pianoforte con Jacopo Carlini — Mousikè"
- Descrizione specifica dell'evento
- Immagine hero di Jacopo Carlini
- URL: mousikeaps.it/eventi/jacopo-carlini


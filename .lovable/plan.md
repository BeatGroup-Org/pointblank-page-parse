

## Sostituire la favicon con il Logo Rotondo Mousike'

### Cosa cambia

L'icona del sito (favicon) viene sostituita con il logo rotondo Mousike' appena caricato. Quando condividi il link, vedrai il logo corretto invece di quello di Lovable.

### Dettaglio tecnico

**File da copiare:**
- `user-uploads://Logo_Rotondo_Mousikè.png` -> `public/favicon.png`

**File: `index.html`**
- Sostituire il tag `<link rel="icon" ...>` attuale (che punta a Google Storage) con: `<link rel="icon" type="image/png" href="/favicon.png">`
- Aggiungere `<link rel="apple-touch-icon" href="/favicon.png">` per dispositivi iOS


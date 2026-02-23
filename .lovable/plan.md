

## Gallery "La Nostra Scuola" con scorrimento continuo (marquee)

### Cosa cambia

La sezione attuale con griglia statica viene sostituita da una gallery a scorrimento continuo (loop infinito), con immagini piu grandi e ben visibili. Il titolo viene messo in maiuscolo, coerente con le altre sezioni (es. "I NOSTRI PERCORSI", "IL NOSTRO TEAM").

### Layout

- **Titolo**: "LA NOSTRA SCUOLA" in maiuscolo, font bold/black, stile coerente con CorsiSection e TeamSection
- **Sottotitolo**: breve descrizione a destra (layout flex come ora)
- **Gallery**: striscia orizzontale di immagini che scorre in loop continuo (marquee), con pausa al hover
- **Immagini**: piu grandi (es. 400x300 o 16:10), bordi arrotondati, leggero overlay hover
- Riutilizza l'animazione `marquee` gia presente in `src/index.css` (usata anche da PartnerSection)

### Dettaglio tecnico

**File modificato: `src/components/sections/ScuolaGallerySection.tsx`**

- Titolo con classi `uppercase font-black tracking-tight` su piu righe ("LA NOSTRA" / "SCUOLA")
- Sostituire la griglia con un contenitore `overflow-hidden` e un `flex` con `animate-marquee`
- Duplicare l'array immagini (`[...images, ...images]`) per ottenere il loop continuo
- Immagini con dimensioni piu grandi: larghezza ~400px, aspect ratio 4:3 o simile
- Aggiungere una velocita di scorrimento adeguata (piu lenta dei loghi partner, dato che le immagini sono piu grandi)

**File modificato: `src/index.css`**

- Aggiungere una variante `animate-marquee-slow` con durata piu lunga (es. 30-40s) per le immagini grandi, oppure riutilizzare quella esistente se la velocita risulta adeguata

### Risultato

Una striscia fotografica che scorre orizzontalmente in loop infinito, si ferma al passaggio del mouse, con immagini grandi e ben visibili. Titolo in maiuscolo coerente con il resto del sito.


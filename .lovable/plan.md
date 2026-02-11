
## Ristrutturazione sezione "Percorsi Formativi" con Carosello

### Obiettivo
Trasformare la sezione da una griglia di card a un **carosello orizzontale** con tile grandi e immagini di sfondo, seguendo lo stile del riferimento (tile con immagine, titolo, numero progressivo e link "Scopri di piu").

### Struttura visiva

Ogni tile del carosello avra:
- **Immagine di sfondo** a tutta altezza (placeholder con gradienti colorati per ora)
- **Overlay scuro** per leggibilita del testo
- **Numero progressivo** (01, 02, 03...) in stile tipografico
- **Titolo del corso** in grande
- **Link "Scopri di piu"** in basso
- **Hover effect** con leggero zoom dell'immagine

L'header della sezione avra il titolo con le parole distribuite su piu righe in stile bold, come nel riferimento.

### Dettagli tecnici

**File modificato: `src/components/sections/CorsiSection.tsx`**

- Rimozione della griglia attuale con card e icone
- Utilizzo dei componenti `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` gia presenti nel progetto (Embla Carousel)
- Configurazione del carosello con `slidesToScroll: 1` e visualizzazione parziale delle slide adiacenti (basis ~35% su desktop, ~80% su mobile)
- Ogni slide sara un div con:
  - Sfondo colorato placeholder (gradienti diversi per ogni corso)
  - Altezza ~400px
  - Overlay gradient dal basso per il testo
  - Numero formattato con zero-padding (01, 02, etc.)
  - Titolo in font-bold bianco
  - Link "Scopri di piu" con freccia
- Frecce di navigazione posizionate nell'header accanto al titolo
- Fade-in animation mantenuta con `useFadeIn`

**Dati corsi invariati** (5 corsi: Musica classica, Musica pop, Strumenti popolari calabresi, Musicoterapia e teatroterapia, Certificazioni Trinity), ma senza icone Lucide -- sostituite dai placeholder visivi.

### Risultato
Un carosello moderno e visivamente impattante, allineato allo stile del sito di riferimento, pronto per ricevere le immagini reali quando disponibili.

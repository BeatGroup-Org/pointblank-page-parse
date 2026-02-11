
## Sostituzione StatsSection con griglia "Ambiti di Azione"

### Cosa cambia

La sezione "Numeri" (StatsSection) viene completamente sostituita con una griglia 2x2 di tile visive che rappresentano i 4 ambiti di intervento di Mousike'. Lo stile grafico riprende esattamente quello di CorsiSection (immagine full card in bianco e nero, overlay scuro, numerazione in alto a sinistra, hover con zoom).

### Contenuto delle 4 tile

| # | Titolo | Sottotesto | Immagine (Unsplash) |
|---|--------|------------|---------------------|
| 01 | Formazione musicale | Percorsi strutturati per bambini, ragazzi e adulti | Lezione di musica / studente con strumento |
| 02 | Programmi educativi nelle scuole | Interventi continuativi negli istituti pubblici del territorio | Laboratorio in aula scolastica |
| 03 | Produzioni culturali | Musical, spettacoli e restituzione pubblica del percorso formativo | Scena teatrale / spettacolo |
| 04 | Inclusione e impatto sociale | La musica come strumento di integrazione e crescita | Attivita' di gruppo / laboratorio inclusivo |

### Layout responsive

- **Desktop**: griglia 2 colonne x 2 righe
- **Tablet**: 2 colonne
- **Mobile**: 1 colonna

Nessun carosello, nessun autoplay, nessun slider.

### Dettaglio tecnico

**File: `src/components/sections/StatsSection.tsx`** (riscrittura completa)

1. Definire un array `ambiti` con 4 oggetti contenenti: `title`, `subtitle`, `image` (URL Unsplash con grayscale)
2. Usare una griglia CSS: `grid grid-cols-1 md:grid-cols-2 gap-4`
3. Ogni tile replica esattamente la struttura della card di CorsiSection:
   - Container `group relative h-[320px] md:h-[380px] rounded-lg overflow-hidden cursor-pointer`
   - `<img>` con classi `absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105`
   - Overlay `bg-gradient-to-t from-black/70 via-black/20 to-transparent`
   - Numerazione `01`-`04` discreta in alto a sinistra
   - Titolo bold, sottotesto piccolo sotto il titolo
   - Link "Scopri di piu'" con freccia ArrowRight (come in CorsiSection)
4. Mantenere il `useFadeIn` hook e la classe `fade-in-section`
5. Aggiungere un header alla sezione con titolo (es. "I NOSTRI AMBITI" o "COSA FACCIAMO") nello stesso stile di CorsiSection

**Nessun altro file da modificare** — StatsSection e' gia' importato e posizionato in Index.tsx.

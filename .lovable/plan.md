

## Fix di tutti i CTA della homepage

### Riepilogo delle modifiche

Non esiste ancora una pagina Contatti, quindi va creata. Inoltre, le 4 card della sezione "IL NOSTRO IMPEGNO" e il bottone "Scopri le produzioni" devono mostrare un popup "sezione in costruzione".

### 1. Creare la pagina Contatti (`src/pages/Contatti.tsx`)
- Pagina semplice con Header, Footer e un contenuto placeholder (titolo "Contatti", testo di benvenuto, eventualmente indirizzo/telefono/email)
- Aggiungere la rotta `/contatti` in `App.tsx`

### 2. Hero Section (`HeroSection.tsx`)
- "Scopri il programma educativo" --> collegare a `/formazione` con `Link`
- "Prenota una lezione di prova" --> collegare a `/contatti` con `Link`

### 3. Sezione "IL NOSTRO IMPEGNO" (`StatsSection.tsx`)
- Al click su ciascuna delle 4 card, aprire un Dialog (popup) con:
  - La favicon di Mousike (`/favicon.png`)
  - Testo: "Sezione in costruzione"
  - Un sottotitolo: "Questa sezione sara disponibile a breve."
  - Bottone "Chiudi"
- Rimuovere il testo "Scopri di piu" dalle card (o mantenerlo ma far aprire il popup)

### 4. Sezione "PRODUCIAMO CULTURA" (`ProduzioniSection.tsx`)
- Il bottone "Scopri le produzioni" apre lo stesso tipo di popup "Sezione in costruzione" (con favicon e testo)

### 5. Sezione "IL NOSTRO TEAM" (`TeamSection.tsx`)
- "Scopri il team" --> gia collegato a `/staff` -- nessuna modifica necessaria

### 6. Sezione "I NOSTRI PERCORSI FORMATIVI" (`CorsiSection.tsx`)
- "Prenota una prova" --> cambiare destinazione da `/formazione` a `/contatti`

### 7. Sezione "LA NOSTRA SCUOLA" (`ScuolaGallerySection.tsx`)
- "Vieni a trovarci" --> collegare a `/contatti` con `Link` e `asChild`

### Dettagli tecnici

**File da creare:**
- `src/pages/Contatti.tsx` -- pagina contatti base

**File da modificare:**
- `src/App.tsx` -- aggiungere rotta `/contatti`
- `src/components/sections/HeroSection.tsx` -- wrappare i 2 bottoni con `Link`
- `src/components/sections/StatsSection.tsx` -- aggiungere stato + Dialog popup "in costruzione"
- `src/components/sections/ProduzioniSection.tsx` -- aggiungere Dialog popup sul bottone CTA
- `src/components/sections/CorsiSection.tsx` -- cambiare destinazione Link a `/contatti`
- `src/components/sections/ScuolaGallerySection.tsx` -- wrappare bottone con `Link to="/contatti"`

**Popup "in costruzione"** -- struttura comune:
- Usa il componente `Dialog` di Radix gia presente nel progetto
- Mostra l'immagine `/favicon.png` (la favicon di Mousike)
- Testo centrato, stile minimal, coerente con il design del sito


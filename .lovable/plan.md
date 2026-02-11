
## Ristrutturazione sezione Team con Carosello

### Obiettivo
Trasformare la sezione Team dalla griglia attuale a un **carosello orizzontale** con tile grandi (immagine + info), seguendo lo stile "Expert Lecturers" del riferimento.

### Struttura visiva

Ogni tile avra:
- **Immagine di sfondo** (placeholder grigio per ora) nella parte superiore
- **Area info bianca** in basso con: nome, ruolo, descrizione breve e pulsante "info" toggle
- Le tile saranno grandi (~550px larghezza su desktop)

**Header della sezione:**
- Titolo su piu righe bold uppercase: "IL NOSTRO" / "TEAM"
- Pulsante "Scopri il team" accanto al titolo (su desktop), sotto su mobile
- Frecce di navigazione e counter nella riga sopra il carosello

### Dettagli tecnici

**File: `src/components/sections/TeamSection.tsx`**

- Aggiunta di una **descrizione breve** per ogni membro del team (testo placeholder)
- Utilizzo di `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`
- Ogni slide con `basis-[85%] sm:basis-[50%] lg:basis-[40%]`
- Parte superiore: div con sfondo grigio placeholder (h-[280px]) per la foto
- Parte inferiore: sfondo bianco con nome (font-bold), ruolo (testo piccolo grigio), descrizione, e pulsante "info" con toggle show/hide (stato locale con useState)
- Header con titolo bold uppercase multilinea + bottone "Scopri il team" arrotondato
- Frecce di navigazione posizionate sopra il carosello a destra
- Fade-in animation mantenuta
- Rimozione font-family inline (`DM Sans`) dal vecchio codice

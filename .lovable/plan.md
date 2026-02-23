
## Migliorare la visibilita della seconda CTA nella Hero

### Cosa cambia

In `src/components/sections/HeroSection.tsx`, aggiornare lo stile del bottone "Prenota una prova":

- **Stato normale**: sfondo bianco, testo arancione (colore primary)
- **Hover**: sfondo trasparente, testo arancione, bordo bianco

### Dettaglio tecnico

**File: `src/components/sections/HeroSection.tsx`** (riga ~27)

Sostituire le classi del secondo Button da:
`border-white text-white hover:bg-white/10`

Con:
`bg-white text-primary border-white hover:bg-transparent hover:text-primary`

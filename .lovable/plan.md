
## Fix CTA: colori invertiti tra le due card

### Problema
Entrambe le card CTA hanno lo stesso stile; il testo del secondo bottone non e' visibile.

### Soluzione
Differenziare le due card con colori bianco e arancione invertiti:

**Card 1 (Percorso musicale):** sfondo arancione, testo bianco, bottone bianco con testo arancione
**Card 2 (Scuola/Ente):** sfondo bianco, testo scuro, bottone arancione con testo bianco (stile attuale)

### Dettaglio tecnico

**File: `src/components/sections/CtaSection.tsx`**

- Card 1: `bg-primary` con `text-primary-foreground`, bottone `bg-white text-primary hover:bg-white/90`
- Card 2: `bg-card border border-border`, bottone rimane `bg-primary text-primary-foreground` (invariato)
- Paragrafo card 1: `text-primary-foreground/80` per leggibilita' su arancione

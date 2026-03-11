

## Aggiornare i testi della pagina "Ma che Musica Maestro"

Sostituire tutti i contenuti testuali della pagina `/programmi-educativi` mantenendo la stessa struttura componente (Hero + immagine + TextSection alternate + CTA).

### Mappatura sezioni

| Sezione | Titolo | Sfondo |
|---------|--------|--------|
| **Hero** | "Ma che Musica Maestro" (invariato) + nuovo sottotitolo "Il progetto musicale di Mousikè APS a Lamezia Terme" + nuovi paragrafi introduttivi (3 paragrafi) | `bg-secondary` |
| **Immagine** | Invariata | — |
| **TextSection 1** | "Un percorso che mette insieme formazione e palcoscenico" | `bg-background` |
| **TextSection 2** | "Le famiglie dentro il progetto" | `bg-secondary` (alt) |
| **TextSection 3** | "La musica come esperienza culturale" | `bg-background` |
| **TextSection 4** | "Collaborazioni e incontri che lasciano il segno" | `bg-secondary` (alt) |
| **TextSection 5** | "Un progetto che lascia tracce" | `bg-background` |
| **TextSection 6** | "Il valore di Ma che Musica Maestro" | `bg-secondary` (alt) |
| **CTA** | Invariata | `bg-secondary` |

### Modifiche file

**`src/pages/ProgrammiEducativi.tsx`** — Riscrivere il contenuto di tutte le sezioni con il nuovo testo fornito. I nomi **Antoniano di Bologna**, **Sabrina Simoni**, **Massimo Varini** e **Ma che Musica Maestro** restano in grassetto (`<strong className="text-foreground">`). Si aggiungono 2 nuove TextSection (da 5 a 7 sezioni di testo) per coprire tutti i paragrafi. Il kicker dell'hero diventa il nuovo sottotitolo. Struttura componente, immagine e CTA finale restano invariati.


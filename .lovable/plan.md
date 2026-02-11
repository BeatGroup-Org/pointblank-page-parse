

## Restyling sezione apertura "Chi Siamo"

### Cosa cambia

La prima sezione della pagina "Chi siamo" passa da un layout a colonna singola (titolo sopra, testo sotto) a un layout a **due colonne** ispirato allo screenshot di riferimento:

- **Colonna sinistra**: titolo grande, bold, in nero, molto prominente (dimensione extra-large)
- **Colonna destra**: testo descrittivo, dimensione normale, con buon respiro tra i paragrafi

Su mobile le due colonne si impilano verticalmente (titolo sopra, testo sotto).

### Dettaglio tecnico

**File: `src/pages/ChiSiamo.tsx`**

Sostituire la sezione 1 (attualmente usa il componente `TextSection`) con un layout custom a due colonne:

- Container con `grid md:grid-cols-2 gap-12 md:gap-16`
- Colonna sinistra: `<h1>` con dimensioni `text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none` per replicare il titolo grande e impattante dello screenshot
- Colonna destra: paragrafi con lo stile attuale (`text-muted-foreground text-base md:text-lg leading-relaxed`)
- Padding generoso (`py-20 md:py-28`), sfondo `bg-background`
- Animazione `useFadeIn` mantenuta

Le altre sezioni restano invariate.



## Piano: Aggiungere riquadro foto verticale alla sezione "Il valore del progetto"

### Modifica

Trasformare la sezione "Il valore del progetto" da layout a colonna singola (solo testo) a layout a due colonne: **foto verticale a sinistra + testo a destra**.

### Dettaglio tecnico

**File**: `src/pages/ProgrammiEducativi.tsx`

1. **Non usare il componente `TextSection`** per questa sezione — sostituirlo con markup custom che includa un grid a 2 colonne (`md:grid-cols-[1fr_2fr]`)
2. **Colonna sinistra**: un riquadro con aspect-ratio verticale (circa 3:4) con un placeholder grigio e un'immagine segnaposto. L'utente potrà poi sostituire l'immagine
3. **Colonna destra**: il titolo e i 4 paragrafi di testo (stessi stili attuali)
4. Su mobile, il layout diventa a colonna singola (foto sopra, testo sotto)




## Piano: Aggiungere riquadro foto a destra nella sezione "Collaborazioni"

La seconda sezione dopo "Il valore del progetto" è **"Collaborazioni e incontri che lasciano il segno"** (riga 143-161), attualmente un `TextSection` a colonna singola.

### Modifica in `src/pages/ProgrammiEducativi.tsx`

1. **Sostituire** il `TextSection` "Collaborazioni" con markup custom a due colonne: `md:grid-cols-[2fr_1fr]` (testo a sinistra, foto a destra — speculare alla sezione sopra)
2. **Colonna sinistra**: titolo + i due paragrafi esistenti
3. **Colonna destra**: riquadro verticale placeholder (`aspect-[3/4]`, `rounded-2xl`, `bg-muted`) come nella sezione sopra
4. Usare un nuovo `useFadeIn()` ref e `fade-in-section` per l'animazione
5. Mantenere sfondo `bg-secondary` (come aveva con `alt`)




## Piano: Fix sezione "Il valore del progetto" non visibile

### Problema
La sezione a riga 110 ha `className="fade-in-section ..."` ma nessun `ref` da `useFadeIn()`. Senza il ref, l'IntersectionObserver non aggiunge mai la classe `visible`, quindi la sezione resta nascosta.

### Soluzione

**File**: `src/pages/ProgrammiEducativi.tsx`

1. Aggiungere un nuovo ref: `const valoreRef = useFadeIn();` (accanto agli altri ref, riga 42)
2. Collegare il ref al div della sezione a riga 110: `<div ref={valoreRef} className="fade-in-section ...">`




## Collegare le card "IL NOSTRO IMPEGNO" alle pagine corrispondenti

### Problema
Le 4 card della sezione "IL NOSTRO IMPEGNO" aprono tutte un dialog "in costruzione" invece di navigare alle rispettive pagine, che ora esistono.

### Modifiche

**File:** `src/components/sections/StatsSection.tsx`

1. Rimuovere `useState`, `UnderConstructionDialog` e lo state `dialogOpen`
2. Importare `useNavigate` da `react-router-dom`
3. Aggiungere un campo `href` a ciascun elemento dell'array `ambiti`:
   - Formazione musicale → `/formazione`
   - Programmi educativi nelle scuole → `/programmi-educativi`
   - Produzioni culturali → `/produzioni`
   - Inclusione e impatto sociale → `/chi-siamo` (sezione più vicina al tema, oppure anchor `#impatto` sulla homepage)
4. Sostituire `onClick={() => setDialogOpen(true)}` con `onClick={() => navigate(a.href)}`
5. Rimuovere il componente `<UnderConstructionDialog>` dal JSX


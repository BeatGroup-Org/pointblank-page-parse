

## Aggiungere "Contatti" al menu e al footer

### 1. Header (`src/components/Header.tsx`)
- Aggiungere `{ label: "Contatti", href: "/contatti" }` all'array `navLinks` (riga 17)
- Aggiungere un sesto SVG shape (`bg-shape-6`) nella sezione `ambient-background-shapes` per mantenere la coerenza con le animazioni hover

### 2. Footer (`src/components/Footer.tsx`)
- Aggiungere `<a href="/contatti" ...>Contatti</a>` nella sezione "Link utili", dopo "Amministrazione Trasparente" (riga 39)

### Dettagli tecnici

**File modificati:**
- `src/components/Header.tsx` -- aggiungere voce nell'array `navLinks` + SVG shape aggiuntivo
- `src/components/Footer.tsx` -- aggiungere link nella lista "Link utili"

Nessuna nuova dipendenza. La rotta `/contatti` e la pagina `Contatti.tsx` esistono gia.


## Menu Eventi + Sezione Eventi in Homepage

### 1. Link "Eventi" nel menu di navigazione

**File: `src/components/Header.tsx`**
- Aggiungere `{ label: "Eventi", href: "/eventi" }` all'array `navLinks`
- Modificare il tag `<a>` nel menu per usare un semplice `window.location` o un link diretto per le voci che puntano a pagine (href che iniziano con `/`) invece di ancoraggi `#`

### 2. Nuova sezione "Prossimi Eventi" in homepage

**Nuovo file: `src/components/sections/EventiPreviewSection.tsx`**
- Importa l'`EventCard` e i dati eventi da un file condiviso (o li ridefinisce internamente prendendo solo i primi 3)
- Mostra i primi 3 eventi in una griglia responsive (3 colonne desktop, 2 tablet, 1 mobile) con lo stesso stile delle card nella pagina `/eventi`
- Sotto la griglia, un bottone CTA "Vedi tutti gli eventi" che linka a `/eventi`
- Stile CTA: bottone con bordo, icona freccia, coerente col design del sito

### 3. Condivisione dati e componente EventCard

**Nuovo file: `src/data/eventi.ts`**
- Spostare l'array `eventi` e l'interfaccia `Evento` qui, in modo che sia la pagina `/eventi` sia la sezione homepage usino gli stessi dati

**Nuovo file: `src/components/EventCard.tsx`**
- Spostare il componente `EventCard` qui per riutilizzarlo in entrambi i contesti

**Modifica: `src/pages/Eventi.tsx`**
- Importare `eventi` e `EventCard` dai nuovi file condivisi invece di definirli internamente

### 4. Inserimento in homepage

**File: `src/pages/Index.tsx`**
- Importare `EventiPreviewSection`
- Inserirlo dopo `CorsiSection` e prima di `ProduzioniSection`

### Riepilogo file

| File | Azione |
|------|--------|
| `src/data/eventi.ts` | Nuovo — dati e interfaccia condivisi |
| `src/components/EventCard.tsx` | Nuovo — componente card riutilizzabile |
| `src/components/sections/EventiPreviewSection.tsx` | Nuovo — sezione homepage con 3 card + CTA |
| `src/pages/Eventi.tsx` | Modifica — importa da file condivisi |
| `src/pages/Index.tsx` | Modifica — aggiunge EventiPreviewSection dopo CorsiSection |
| `src/components/Header.tsx` | Modifica — aggiunge "Eventi" a navLinks |

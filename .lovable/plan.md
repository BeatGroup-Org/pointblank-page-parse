

## Restyling sezione "La musica è di tutti"

### Cosa cambia

La sezione 5 ("La musica è di tutti") passa dal layout `TextSection` centrato a un layout a due colonne **specchiato** rispetto a "Dentro le scuole, ogni anno":

- **Titolo grande** allineato a **destra** (invece che a sinistra)
- **Immagine placeholder** a **sinistra**, testo a **destra**
- Stessa tipografia e spaziatura della sezione "Dentro le scuole"
- Lo stacco foto 3 (`PhotoBreak`) sotto viene rimosso perche' l'immagine e' integrata nella sezione

### Dettaglio tecnico

**File: `src/pages/ChiSiamo.tsx`**

Sostituire le righe 160-180 (sezione 5 + stacco foto 3) con un blocco custom:

- Nuovo `useFadeIn` ref (`musicaRef`)
- Container con padding `py-20 md:py-28`, sfondo `bg-background`
- Titolo `h2` con `text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight text-right` (allineato a destra)
- Grid `grid md:grid-cols-2 gap-12 md:gap-16 items-start`:
  - **Colonna sinistra**: placeholder immagine (`aspect-[4/5] bg-muted`)
  - **Colonna destra**: testo descrittivo con paragrafi + separatore `<hr>` in basso (come nella sezione scuole)


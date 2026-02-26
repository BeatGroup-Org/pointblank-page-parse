

## Eliminare CtaSection e aggiungere CTA nelle sezioni

### Cosa cambia

1. **Eliminare la sezione CTA dedicata** -- Rimuovere `<CtaSection />` da `Index.tsx` e rimuovere l'import.

2. **CorsiSection -- "I Nostri Percorsi Formativi"**
   - Aggiungere un bottone "Prenota una prova" in alto a destra nell'header, allineato con il titolo
   - Bottone arancione pill (`rounded-full bg-primary`)

3. **ProduzioniSection -- "Produciamo Cultura"**
   - Aggiungere un bottone "Scopri le produzioni" in alto a destra nell'header
   - Stesso stile pill arancione

4. **ScuolaGallerySection -- "La Nostra Scuola"**
   - Aggiungere un bottone "Vieni a trovarci" in alto a destra nell'header
   - Stesso stile pill arancione

### Posizionamento dei bottoni

In tutte e tre le sezioni, il bottone viene inserito nell'header della sezione, accanto alle frecce del carosello o allineato a destra rispetto al titolo, usando `flex items-end justify-between` gia presente.

### File modificati
- `src/pages/Index.tsx` -- rimuovere import e uso di CtaSection
- `src/components/sections/CorsiSection.tsx` -- aggiungere CTA "Prenota una prova"
- `src/components/sections/ProduzioniSection.tsx` -- aggiungere CTA "Scopri le produzioni"
- `src/components/sections/ScuolaGallerySection.tsx` -- aggiungere CTA "Vieni a trovarci"


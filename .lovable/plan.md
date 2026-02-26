

## Semplificare la sezione "Produciamo Cultura" -- solo gallery fotografica

### Cosa cambia

Trasformare le card del carosello da card interattive con overlay/testi/link a semplici foto grandi in un carosello gallery.

### Modifiche a `src/components/sections/ProduzioniSection.tsx`

**Rimuovere da ogni card:**
- Overlay gradient scuro
- Numerazione progressiva (01, 02, 03)
- Titolo sovrapposto
- Link "Scopri di piu"
- `cursor-pointer`

**Mantenere:**
- Header con titolo, descrizione e CTA "Scopri le produzioni"
- Carosello con frecce di navigazione
- Effetto hover zoom sulle foto
- Altezza `h-[480px]` e `rounded-lg`

**Risultato:** Ogni slide sara semplicemente una foto grande con angoli arrotondati e zoom al passaggio del mouse, senza alcun testo o interazione sovrapposta.


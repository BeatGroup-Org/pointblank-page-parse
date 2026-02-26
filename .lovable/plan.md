

## Adeguare "Produciamo Cultura" allo stile di "Percorsi Formativi"

Trasformare la sezione Produzioni da griglia statica 3 colonne a carosello orizzontale con lo stesso stile visivo della sezione Corsi.

### Modifiche a `src/components/sections/ProduzioniSection.tsx`

**Layout**: Sostituire la griglia con un Embla Carousel (stesso componente usato in CorsiSection).

**Titolo**: Da centrato piccolo a titolo grande allineato a sinistra, stile multi-riga:
```
PRODUCIAMO
CULTURA
```

**Descrizione**: Spostata sotto il titolo, allineata a sinistra.

**Card**: Ogni immagine diventa una card alta (`h-[420px]`) con:
- Overlay gradient scuro dal basso
- Numerazione progressiva (01, 02, 03)
- Titolo della produzione in overlay
- Effetto zoom on hover (`group-hover:scale-105`)
- Immagini a colori (non grayscale, per differenziarle dai corsi)

**Navigazione**: Frecce prev/next in alto a destra (come CorsiSection).

**Rimozione**: Il bottone "Scopri le produzioni" viene rimosso (ogni card potra avere il proprio link in futuro).

**Sfondo sezione**: Cambia da `bg-background` a `bg-secondary` per coerenza visiva (o resta `bg-background` per contrasto -- da valutare con le sezioni adiacenti). Dato che PartnerSection precede e TeamSection segue, manterro `bg-background` per alternanza.

### Dettagli tecnici
- Import di `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` da `@/components/ui/carousel`
- Import di `ArrowRight` da `lucide-react` (opzionale, per coerenza)
- Array produzioni con `title` aggiunto a ciascuna (es. "Musical 1", "Musical 2", "Musical 3")
- Basis delle slide: `basis-[85%] sm:basis-[55%] lg:basis-[42%]` -- leggermente piu larghe rispetto ai corsi per foto piu grandi
- Altezza card: `h-[480px]` (piu alta dei corsi per enfatizzare le foto)


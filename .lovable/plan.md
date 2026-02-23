

## Ridurre spaziatura tra Eventi e La Nostra Scuola + sistemare contrasto CTA eventi

### Problema 1: Troppo spazio tra le sezioni
Entrambe le sezioni hanno `py-24` (96px sopra e sotto), creando quasi 200px di spazio tra le due. Si riduce il padding inferiore della sezione Eventi.

### Problema 2: CTA "Vedi tutti gli eventi" senza contrasto
Il bottone usa `border-white/20 text-white` su sfondo scuro (`bg-background`), risultando praticamente invisibile. Va reso visibile con bordo e testo a contrasto pieno.

### Modifiche tecniche

**`src/components/sections/EventiPreviewSection.tsx`**
- Riga 7: cambiare `py-24` in `pt-24 pb-12` per ridurre lo spazio sotto la sezione eventi
- Riga 30: cambiare la classe del Link CTA da `border-white/20 text-white` a `border-white/40 text-white` per aumentare il contrasto del bordo, oppure usare uno stile piu visibile come `bg-white/10 border border-white/50 text-white`

**`src/components/sections/ScuolaGallerySection.tsx`**
- Riga 44: cambiare `py-24` in `pt-12 pb-24` per ridurre lo spazio sopra la sezione scuola

Queste due modifiche insieme dimezzano lo spazio tra le sezioni da ~192px a ~96px.

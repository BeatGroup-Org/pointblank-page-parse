

## Restyling sezione "Dentro le scuole, ogni anno"

### Cosa cambia

La sezione 3 ("Dentro le scuole, ogni anno") passa dal layout `TextSection` centrato a un layout a **due colonne** identico alla sezione di apertura e allo stile dello screenshot di riferimento (Artist Spotlight):

- **Titolo grande** in alto a sinistra, bold, uppercase, multi-riga
- Sotto il titolo: sottotitolo (nome del progetto) + testo descrittivo a sinistra
- **Immagine placeholder** a destra (per ora `PhotoBreak` o placeholder, dato che non c'e' ancora una foto reale)
- Sfondo bianco (`bg-background`)

### Dettaglio tecnico

**File: `src/pages/ChiSiamo.tsx`**

Sostituire le righe 124-146 (sezione 3 + stacco foto 2) con un unico blocco custom:

- Titolo `h2` con stile `text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none` (come la sezione apertura e lo screenshot)
- Sotto: grid a due colonne (`grid md:grid-cols-2 gap-12 md:gap-16`)
  - **Colonna sinistra**: sottotitolo `h3` con il nome del progetto ("Ma che musica maestro"), testo descrittivo in paragrafi, separatore `<hr>` sotto il testo (come nello screenshot)
  - **Colonna destra**: placeholder immagine (box `bg-muted aspect-[4/5]` con testo "Foto in arrivo") -- sostituibile in futuro con foto reale
- Animazione `useFadeIn` mantenuta
- Padding `py-20 md:py-28`, container standard

Lo stacco foto 2 (`<PhotoBreak />`) viene rimosso perche' l'immagine e' ora integrata nella sezione stessa.


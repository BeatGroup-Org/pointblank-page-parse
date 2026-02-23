

## Aggiornare la sezione "Rete di collaborazioni" con carosello loghi

### Cosa cambia

La sezione passa da una griglia statica di nomi testuali a un carosello di loghi in movimento continuo (marquee/infinite scroll), con i 5 loghi forniti.

### Dettaglio tecnico

**File: `src/components/sections/PartnerSection.tsx`**

- Sostituire l'array di stringhe con un array di oggetti `{ nome, logo }` contenenti i 5 loghi (URL Supabase)
- Sostituire la griglia con un carosello marquee: due copie dell'array affiancate in un contenitore con `overflow-hidden`, animate con CSS `@keyframes scroll` per scorrimento orizzontale continuo
- Ogni logo sara' un `img` con altezza fissa (~60-70px), con `object-contain`, su sfondo trasparente
- Pausa al hover (`animation-play-state: paused`)

**File: `src/index.css`** (o inline in tailwind)

- Aggiungere keyframe `scroll` per traslazione orizzontale da 0 a -50% (dato che il contenuto e' duplicato)

I 5 loghi:
1. Calabria Straordinaria
2. Comune di Lamezia Terme
3. Tchaikovsky
4. Trinity Music
5. Zecchino D'Oro

### Struttura del marquee

```text
[overflow-hidden container]
  [flex row, animate scroll]
    [logo1] [logo2] [logo3] [logo4] [logo5]  <-- originale
    [logo1] [logo2] [logo3] [logo4] [logo5]  <-- duplicato per loop continuo
  [/flex]
[/container]
```

L'animazione trasla il contenitore interno del -50% creando l'effetto di scorrimento infinito.




## Video di sfondo nella Hero Section

### Cosa cambia

Sostituzione dell'immagine placeholder con un **video promo in loop** come sfondo della Hero Section.

### Ottimizzazioni per performance e caricamento rapido

- `preload="auto"` per iniziare il download subito
- `muted` (obbligatorio per autoplay nei browser moderni)
- `autoPlay`, `loop`, `playsInline` per partenza immediata e compatibilita mobile
- Nessun attributo `controls` per nascondere i controlli video
- `poster` non necessario perche il video parte subito
- Il tag `<img>` placeholder viene rimosso e sostituito dal `<video>`

### Modifiche tecniche

**File: `src/components/sections/HeroSection.tsx`**

1. Sostituire il tag `<img>` dentro il div di sfondo con un tag `<video>` con questi attributi:
   - `src`: URL Supabase del video promo
   - `autoPlay`, `loop`, `muted`, `playsInline`: per autoplay immediato e loop continuo
   - `preload="auto"`: caricamento anticipato
   - `className="w-full h-full object-cover opacity-30"`: stesse classi dell'immagine attuale per coprire tutto lo sfondo con overlay scuro

Nessun altro file viene modificato. Il layout, i testi e i bottoni della Hero restano invariati.


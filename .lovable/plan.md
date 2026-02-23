
## Immagini colorate nella sezione "IL NOSTRO IMPEGNO"

### Cosa cambia
Le immagini della sezione passano da bianco e nero a colorate, rimuovendo il filtro `grayscale`.

### Modifica tecnica

**`src/components/sections/StatsSection.tsx`** (riga ~52)
- Rimuovere la classe `grayscale` dal tag `<img>`, mantenendo tutte le altre classi (`transition-transform`, `group-hover:scale-105`, ecc.)

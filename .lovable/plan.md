

## Sostituzione immagini tile "Ambiti di Azione"

### Cosa cambia

Sostituire le 4 immagini Unsplash generiche nelle tile della sezione "Ambiti di Azione" con le immagini reali fornite, ospitate su Supabase Storage.

### Mappatura immagini

| Tile | Immagine attuale | Nuova immagine |
|------|-----------------|----------------|
| 01 - Formazione musicale | Unsplash | `A. Formazione musicale.jpg` |
| 02 - Programmi educativi nelle scuole | Unsplash | `A. Programmi educativi nelle scuole.jpg` |
| 03 - Produzioni culturali | Unsplash | `A. Produzione Culturale.JPG` |
| 04 - Inclusione e impatto sociale | Unsplash | `A. Inclusione e Impatto sociale.JPEG` |

### Dettaglio tecnico

**File: `src/components/sections/StatsSection.tsx`**

Sostituire i 4 URL Unsplash nell'array `ambiti` con i rispettivi URL Supabase signed forniti. Nessun'altra modifica al componente.


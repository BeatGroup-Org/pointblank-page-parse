

## Fix immagini "I Nostri Percorsi Formativi"

### Problema
- "Basso" e "Violino" condividono la stessa identica URL immagine
- Alcune immagini Unsplash potrebbero non caricarsi correttamente (URL non validi o rimossi)

### Soluzione

Modificare `src/components/sections/CorsiSection.tsx` aggiornando l'array `corsi` con URL Unsplash univoche e verificate per ogni strumento:

| Corso | Immagine attuale | Azione |
|-------|-----------------|--------|
| Canto Pop | `photo-1516280440614` | Verificare, eventualmente sostituire |
| Pianoforte | `photo-1520523839897` | OK (foto pianoforte) |
| Chitarra | `photo-1510915361894` | OK (foto chitarra) |
| Batteria | `photo-1543443258` | Verificare, eventualmente sostituire |
| Basso | `photo-1612225330812` | Sostituire con immagine specifica di basso elettrico |
| Violino | `photo-1612225330812` (DUPLICATA) | Sostituire con immagine di violino |
| Musical | `photo-1507676184212` | OK (foto teatro/musical) |

Ogni URL verra sostituita con una foto Unsplash unica e tematicamente corretta, utilizzando il formato `https://images.unsplash.com/photo-XXXX?w=800&q=80` per coerenza.

### File modificato
- `src/components/sections/CorsiSection.tsx` -- solo l'array `corsi` (righe 12-20)


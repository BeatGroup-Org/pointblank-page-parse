

## Modifiche al file `src/pages/Produzioni.tsx`

### Struttura attuale
1. "Una scelta strategica..." (TextSection, sfondo alt/secondary)
2. "Un Impatto Sociale Misurabile" (sezione a 2 colonne: foto sx + testo dx, sfondo secondary)

### Nuova struttura
1. "Una scelta strategica..." (TextSection, sfondo alt/secondary) — invariata
2. **Nuova sezione foto full-width** — la foto attuale viene estratta e messa in una sezione standalone `bg-background`, con immagine centrata, `max-w-5xl`, `rounded-2xl`, aspect ratio ampio (es. `aspect-[16/9]` o `aspect-[3/2]`)
3. "Un Impatto Sociale Misurabile" — torna a essere una `TextSection` a colonna singola (come era originariamente), con sfondo `alt` (secondary), contenente solo titolo e i due paragrafi di testo

### Dettagli tecnici
- Righe 157-185: sostituire l'intera sezione "Impatto Sociale" con:
  - Una sezione immagine standalone con `useFadeIn` (riusa `impattoRef` o ne crea uno nuovo)
  - Una `TextSection` con il testo esistente
- La foto usa la stessa URL Supabase già presente


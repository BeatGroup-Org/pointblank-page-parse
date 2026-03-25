

## Piano: Aggiungere un "a capo" tra le due frasi

### Modifica

**File**: `src/components/sections/MousikeIntroSection.tsx`

Inserire un segmento speciale (es. `{ text: "\n", break: true }`) nell'array `SEGMENTS` tra "la musica, la danza e il teatro." e "Le nostre produzioni…". Nel rendering, quando si incontra questo segmento, viene inserito un `<br className="block my-4" />` invece di una parola, creando la separazione visiva tra le due frasi.




## Piano: Correggere il word-wrap nella sezione MousikeIntro

### Problema
Le parole `inline-block` non vanno a capo perché nel DOM non c'è spazio bianco tra gli `<span>`. Il browser le tratta come un blocco continuo senza punti di interruzione.

### Soluzione
**File**: `src/components/sections/MousikeIntroSection.tsx`

Aggiungere uno spazio testuale `{" "}` dopo ogni `<span>` nel JSX, oppure sostituire `inline-block` con `inline` e usare un margine destro. L'approccio più semplice e affidabile: aggiungere `{" "}` dopo ogni span per creare i break point naturali del browser, rimuovendo `mr-[0.3em]` dato che lo spazio viene gestito dal carattere spazio.


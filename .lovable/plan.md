

## Fix definitivo anteprime social

### Problema
Nonostante il plugin `vite-plugin-seo.ts` generi file HTML statici per ogni rotta e il file `_redirects` sia configurato, il server continua a servire il `index.html` root per tutte le rotte. Verificando la pagina pubblicata `/eventi/jacopo-carlini`, il contenuto React si carica correttamente ma i meta tag OG nel `<head>` restano quelli della homepage.

### Causa probabile
1. Il file `_redirects` in `public/` viene copiato in `dist/` PRIMA che il plugin generi i file statici, ma potrebbe essere sovrascritto o ignorato
2. Il plugin genera il `_redirects` e i file HTML in momenti diversi della build, causando conflitti
3. Manca la gestione del trailing slash (es. `/eventi/jacopo-carlini/` vs `/eventi/jacopo-carlini`)

### Soluzione
Spostare la generazione del `_redirects` DENTRO il plugin `vite-plugin-seo.ts`, in modo che venga scritto direttamente in `dist/` DOPO la generazione dei file HTML statici. Questo garantisce coerenza e include automaticamente trailing slash.

### Modifiche

1. **`vite-plugin-seo.ts`** — Aggiungere la generazione automatica del file `_redirects` in `dist/` alla fine di `closeBundle()`:
   - Per ogni rotta in `routesMeta` (esclusa `/`), generare due regole: una con e una senza trailing slash
   - Aggiungere il catch-all `/* /index.html 200` alla fine
   - Questo sostituisce completamente il file copiato da `public/`

2. **`public/_redirects`** — Rimuovere il file statico (verrà generato automaticamente dal plugin durante il build). In alternativa, lasciarlo vuoto o con solo il catch-all come fallback per il dev server.

### Dettaglio tecnico

Il plugin scriverà in `dist/_redirects`:
```text
/chi-siamo        /chi-siamo/index.html        200
/chi-siamo/       /chi-siamo/index.html        200
/staff            /staff/index.html            200
/staff/           /staff/index.html            200
/eventi/dario-panza    /eventi/dario-panza/index.html    200
/eventi/dario-panza/   /eventi/dario-panza/index.html    200
... (tutte le rotte)
/*                /index.html                  200
```

Questo approccio:
- Elimina la duplicazione manuale tra `routes-meta.ts` e `_redirects`
- Gestisce sia URL con che senza trailing slash
- Viene generato DOPO i file HTML, garantendo che i file target esistano


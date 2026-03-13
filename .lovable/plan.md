

## Problema: il link condiviso punta sempre alla homepage

Quando condividi un URL come `mousikeaps.it/eventi/jacopo-carlini` su WhatsApp/Facebook, il crawler legge il tag `og:url` nel markup statico. Essendo una SPA, tutti gli URL servono lo stesso `index.html` che ha:

```html
<meta property="og:url" content="https://mousikeaps.it/" />
```

I social media usano `og:url` come URL canonico da mostrare — quindi visualizzano sempre il link della homepage.

Il plugin `vite-plugin-seo.ts` dovrebbe generare HTML separati per ogni rotta al build, ma ci sono due problemi:

1. **Le immagini OG degli eventi usano percorsi relativi** (`/assets/eventi/dario-panza-hero.png`) — i crawler richiedono URL assoluti
2. **Il plugin potrebbe non funzionare nell'ambiente di build di Lovable** — usa `__dirname` e `fs` che potrebbero avere path diversi

## Modifiche

### 1. `src/seo/routes-meta.ts`
Convertire le `ogImage` degli eventi in URL assoluti con il dominio `mousikeaps.it`:
- `/assets/eventi/dario-panza-hero.png` → `https://mousikeaps.it/assets/eventi/dario-panza-hero.png`
- `/assets/eventi/jacopo-carlini-hero.jpg` → `https://mousikeaps.it/assets/eventi/jacopo-carlini-hero.jpg`

### 2. `vite-plugin-seo.ts`
Rendere il plugin più robusto:
- Usare `import.meta.url` o `process.cwd()` invece di `__dirname` per compatibilità
- Aggiungere log di debug per verificare che il plugin giri correttamente
- Gestire il caso in cui le immagini OG siano relative, prefissandole con `https://mousikeaps.it`

### 3. `src/pages/EventoDetail.tsx`
Aggiornare i meta tag Helmet per usare URL assoluti per `og:image`, prefissando `https://mousikeaps.it` ai percorsi relativi delle immagini.

### 4. Tutte le altre pagine
Verificare che i `<Helmet>` di ogni pagina abbiano `og:url` con l'URL specifico della pagina (non della homepage).

### Nota importante
Le anteprime social personalizzate funzioneranno solo sul sito pubblicato (dopo il build), non nel preview di Lovable. Dopo la pubblicazione, potrebbe essere necessario svuotare la cache di WhatsApp/Facebook per vedere le nuove anteprime.


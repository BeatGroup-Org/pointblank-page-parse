

## Fix anteprime social e routing delle pagine condivise

### Problema identificato

Il sito è una SPA (Single Page Application). Quando un social crawler (WhatsApp, Facebook, Twitter) visita un URL come `mousikeaps.it/eventi/jacopo-carlini`, il server restituisce sempre il `index.html` della root con i meta tag della homepage. Il plugin `vite-plugin-seo.ts` genera correttamente file HTML statici per ogni rotta durante il build, ma l'hosting Lovable usa un rewrite SPA catch-all (`/* -> /index.html`) che ignora quei file statici.

Risultato: tutte le anteprime mostrano titolo, descrizione e immagine della homepage, e il link visualizzato si "taglia" al solo dominio.

### Soluzione

Aggiungere un file `public/_redirects` (compatibile Netlify, usato da Lovable) che mappa esplicitamente ogni rotta al suo file HTML statico, con il fallback SPA alla fine.

### Modifiche

1. **Creare `public/_redirects`**
   Mappare ogni rotta definita in `routes-meta.ts` al relativo file statico generato dal plugin, poi il catch-all SPA:
   ```text
   /chi-siamo        /chi-siamo/index.html        200
   /staff            /staff/index.html            200
   /formazione       /formazione/index.html       200
   /produzioni       /produzioni/index.html       200
   /programmi-educativi /programmi-educativi/index.html 200
   /eventi           /eventi/index.html           200
   /contatti         /contatti/index.html         200
   /amministrazione-trasparente /amministrazione-trasparente/index.html 200
   /eventi/dario-panza    /eventi/dario-panza/index.html    200
   /eventi/jacopo-carlini /eventi/jacopo-carlini/index.html 200
   /*                /index.html                  200
   ```

2. **Verificare `vite-plugin-seo.ts`** — il plugin attuale genera i file ma per il root `index.html` la patch potrebbe non funzionare correttamente perché i tag `og:title`, `og:description`, `twitter:title`, `twitter:description` nell'HTML attuale sono duplicati e posizionati fuori dal `<head>` (righe 44-47, dopo `</script>` del JSON-LD). Riordineremo `index.html` per avere tutti i meta tag OG/Twitter in posizioni coerenti dentro `<head>`, in modo che il regex del plugin li trovi e li sostituisca correttamente.

3. **Pulire `index.html`** — rimuovere i tag OG/Twitter duplicati che si trovano in fondo al `<head>` (righe 44-47) e consolidarli con quelli già presenti sopra, in modo che ogni tag appaia una sola volta e il plugin possa fare il replace.


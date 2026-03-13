

## Ripristinare la favicon di Mousikè

Il file `index.html` non ha un tag `<link rel="icon">` esplicito che punti a `/favicon.png` (il logo Mousikè). Il browser quindi usa `/favicon.ico` che è quello di default di Lovable.

### Modifica

**`index.html`** — Aggiungere nella sezione `<head>`, dopo la riga dell'apple-touch-icon:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

Questo forzerà il browser a usare il logo Mousikè come favicon su tutte le pagine.


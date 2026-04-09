

## Piano: Aggiungere Google Ads gtag.js

### Modifica

**File**: `index.html`

Inserire lo snippet Google Tag nel `<head>`, subito dopo `<meta charset="UTF-8" />` e prima degli altri meta tag:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18032101058"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-18032101058');
</script>
```

Essendo nel `index.html` (punto di ingresso unico della SPA), si carica automaticamente su tutte le pagine.



## Inserire foto reali nella sezione "Produciamo Cultura"

### Cosa cambia

In `src/components/sections/ProduzioniSection.tsx`, sostituire i 3 placeholder con le foto dei musical fornite:

- Foto 1: Musical.jpg
- Foto 2: Musical 2.jpg
- Foto 3: Musical 3.jpg

### Dettaglio tecnico

**File: `src/components/sections/ProduzioniSection.tsx`**

- Creare un array con i 3 URL Supabase e relativi alt text
- Sostituire il ciclo `[1, 2, 3].map(...)` con un map sull'array delle produzioni
- Rimuovere `opacity-50` dal tag img (le foto reali non devono essere sbiadite)
- Aggiungere `hover:scale-105 transition-transform duration-500` per coerenza con le altre sezioni del sito

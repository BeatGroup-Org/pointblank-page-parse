

## Sostituire le immagini placeholder con le foto reali della scuola

### Cosa cambia

Le 8 immagini Unsplash placeholder nella gallery "La Nostra Scuola" vengono sostituite con le 8 foto reali fornite, ospitate su Supabase Storage.

### Dettaglio tecnico

**File modificato: `src/components/sections/ScuolaGallerySection.tsx`**

- Sostituire l'array `images` (righe 13-22) con i nuovi URL delle foto reali:
  1. Ingresso
  2. Chitarre
  3. Lezione Chitarra
  4. Lezione Piano
  5. PianoF
  6. Lezioni di Batteria
  7. Lezioni di Canto
  8. Ingresso 2

- Rimuovere la logica `.replace("w=800&h=600", "w=1600&h=1200")` nella lightbox (riga 112), dato che le nuove immagini non usano parametri Unsplash -- si usa direttamente l'URL originale a piena risoluzione

- Aggiornare gli alt text con descrizioni piu specifiche (es. "Ingresso della scuola", "Lezione di chitarra", ecc.)

Nessun nuovo file o dipendenza necessaria.


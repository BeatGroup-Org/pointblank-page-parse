

## Nuova sezione "La nostra scuola" con gallery

### Cosa cambia

Viene aggiunta una nuova sezione fotografica "La nostra scuola" nella homepage, posizionata subito dopo la sezione Eventi e prima di Corsi.

### Layout

- Titolo "LA NOSTRA SCUOLA" con sottotitolo descrittivo, stile coerente con le altre sezioni
- Griglia responsive di immagini: 2 colonne su mobile, 3 su tablet, 4 su desktop
- Ogni immagine con bordi arrotondati, effetto hover (leggero zoom) e overlay scuro
- 8 immagini segnaposto da Unsplash (tematica musicale/scuola), da sostituire in seguito con le foto reali

### Dettaglio tecnico

**1. Nuovo file: `src/components/sections/ScuolaGallerySection.tsx`**

- Usa `useFadeIn` per l'animazione di ingresso (come le altre sezioni)
- Griglia con `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Immagini con `aspect-square`, `object-cover`, `hover:scale-105`
- Array di immagini placeholder Unsplash a tema musicale

**2. File modificato: `src/pages/Index.tsx`**

- Import di `ScuolaGallerySection`
- Inserimento tra `EventiPreviewSection` e `CorsiSection`

### Sequenza homepage aggiornata

Hero > Stats > Partner > Eventi > **La nostra scuola (NUOVA)** > Corsi > Produzioni > Impatto > Team > CTA


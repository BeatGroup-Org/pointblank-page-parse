

## Rimuovere la sezione Galleria dagli eventi

### Cosa cambia

La sezione "Galleria" viene rimossa dalla pagina dettaglio evento. Il lightbox resta attivo solo per la locandina (click per ingrandire).

### Dettaglio tecnico

**File: `src/pages/EventoDetail.tsx`**

1. Rimuovere `const galleryRef = useFadeIn();` (riga 29)
2. Rimuovere l'intera sezione Gallery (righe 224-250)
3. Semplificare la logica del lightbox: rimuovere il caso `lightboxIdx >= 0` per la gallery, lasciando solo il caso `-1` per la locandina (riga 266)

Il lightbox continuera' a funzionare per la locandina (quando si clicca sulla sidebar).

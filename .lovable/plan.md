

## Aggiungere "Ultimo" in grassetto nella pagina evento

### Modifica

**File:** `src/pages/EventoDetail.tsx` — Aggiungere una riga `.replace(/Ultimo/g, "<strong class='text-foreground'>Ultimo</strong>")` nella catena di replace (dopo riga 145, prima di `.replace(/Giorgia/g, ...)`).

Inoltre aggiornare il testo dell'introduzione in **`src/data/eventi.ts`** per l'evento Jacopo Carlini (id 2), aggiungendo "Ultimo" nella lista dei collaboratori: `"...come Ultimo, Giorgia, Riccardo Cocciante e Alex Britti..."`.


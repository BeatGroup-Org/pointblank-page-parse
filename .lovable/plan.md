

## Locandina evento visibile per intero

### Cosa cambia

Aggiungere una sezione dedicata alla locandina nella pagina del singolo evento, subito dopo l'hero, che mostra l'immagine completa in formato verticale (tipo A4) senza tagli.

L'hero in alto resta com'e' (fa da copertina visiva), ma sotto viene aggiunta una sezione "Locandina" con l'immagine intera, cliccabile per aprirla nel lightbox a schermo pieno.

### Dettaglio tecnico

**File: `src/pages/EventoDetail.tsx`**

Aggiungere una nuova sezione tra l'hero (riga 87) e la Info Grid (riga 89):

```
{/* Locandina */}
<section className="bg-background">
  <div className="fade-in-section py-12 md:py-16 container mx-auto px-6 flex justify-center">
    <button
      onClick={() => setLightboxIdx(-1)}
      className="focus:outline-none focus:ring-2 focus:ring-primary rounded-xl overflow-hidden shadow-lg max-w-md w-full"
    >
      <img
        src={evento.immagine}
        alt={`Locandina - ${evento.titolo}`}
        className="w-full h-auto object-contain"
      />
    </button>
  </div>
</section>
```

Modificare il lightbox (riga 228+) per gestire anche `lightboxIdx === -1` come caso speciale che mostra `evento.immagine` invece di `evento.gallery[idx]`:

- Se `lightboxIdx === -1`: mostra `evento.immagine`
- Se `lightboxIdx >= 0`: mostra `evento.gallery[lightboxIdx]` (comportamento attuale)

Nessun nuovo file. Solo modifiche a `EventoDetail.tsx`.

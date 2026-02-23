

## Locandina sticky a lato della pagina

### Problema attuale

La locandina non si vede perche' ha la classe `fade-in-section` (che parte con `opacity: 0`) ma non ha il ref `useFadeIn()` collegato, quindi non diventa mai visibile.

### Cosa cambia

Invece di una sezione a tutta larghezza sotto l'hero, la locandina viene spostata in una **sidebar sticky** a destra che accompagna l'utente mentre scorre la pagina. Su mobile, la locandina appare sopra il contenuto in formato compatto.

### Dettaglio tecnico

**File: `src/pages/EventoDetail.tsx`**

1. Aggiungere un nuovo ref `const locandinaRef = useFadeIn();`

2. Rimuovere la sezione "Locandina" standalone (righe 89-103)

3. Avvolgere le sezioni Info Grid, Descrizione, Contatti e CTA in un layout a due colonne:

```
<div className="container mx-auto px-6 py-12 md:py-16">
  <div className="flex flex-col lg:flex-row gap-10">
    {/* Contenuto principale */}
    <div className="flex-1 min-w-0">
      ... info, descrizione, contatti, CTA ...
    </div>

    {/* Sidebar locandina sticky */}
    <div className="lg:w-80 xl:w-96 shrink-0">
      <div ref={locandinaRef} className="fade-in-section lg:sticky lg:top-24">
        <button onClick={() => setLightboxIdx(-1)} ...>
          <img src={evento.immagine} ... />
        </button>
      </div>
    </div>
  </div>
</div>
```

4. Su mobile (sotto `lg`): la locandina appare prima del contenuto in formato ridotto e centrato
5. Su desktop (`lg` in su): la locandina sta a destra con `position: sticky` e `top: 6rem`, seguendo lo scroll
6. Il lightbox (click per ingrandire) resta funzionante come gia' implementato

Nessun nuovo file. Solo modifiche a `EventoDetail.tsx`.



## Usare slug con nome artista nelle URL degli eventi

Cambiare le rotte da `/eventi/1`, `/eventi/2` a `/eventi/dario-panza`, `/eventi/jacopo-carlini`.

### Modifiche

1. **`src/data/eventi.ts`** — Aggiungere campo `slug` a ogni evento:
   - Evento 1: `slug: "dario-panza"`
   - Evento 2: `slug: "jacopo-carlini"`
   - Aggiungere `slug: string` all'interfaccia `Evento`

2. **`src/pages/EventoDetail.tsx`** (riga 15-16) — Cercare per `slug` invece che per `id`:
   - `const { slug } = useParams<{ slug: string }>()`
   - `const evento = eventi.find((e) => e.slug === slug)`

3. **`src/App.tsx`** (riga 36) — Cambiare rotta:
   - Da `<Route path="/eventi/:id"` a `<Route path="/eventi/:slug"`

4. **`src/components/EventCard.tsx`** (riga 67) — Link con slug:
   - Da `` to={`/eventi/${evento.id}`} `` a `` to={`/eventi/${evento.slug}`} ``


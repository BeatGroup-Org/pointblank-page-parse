

## Fix navigazione: logo "Mousikè" e scroll-to-top tra pagine

### Problema 1 — Logo "Mousikè"
Il link del logo nell'header punta a `href="#"` invece che alla homepage. Va cambiato per navigare a `/` e scrollare in cima.

### Problema 2 — Scroll-to-top al cambio pagina
Quando si naviga tra pagine (es. da Chi Siamo a Eventi), la nuova pagina non parte dall'alto. Serve un componente `ScrollToTop` che riporti la finestra in cima ad ogni cambio di route, con un effetto elegante e leggero.

### Dettaglio tecnico

**File: `src/components/Header.tsx`**
- Riga 162: cambiare il tag `<a href="#">` del logo in un elemento che usa `navigate("/")` con `window.scrollTo(0, 0)`, oppure un `<Link to="/">` con onClick che scrolla in cima.

**Nuovo file: `src/components/ScrollToTop.tsx`**
- Componente che ascolta i cambi di `location.pathname` (da `react-router-dom`) e chiama `window.scrollTo({ top: 0, behavior: "instant" })` ad ogni cambio.
- Comportamento "instant" (non "smooth") per evitare uno scroll visibile dalla posizione precedente: la pagina appare direttamente dall'alto.
- In aggiunta, un effetto di **fade-in** leggero sul `<main>` al mount della pagina (opacity da 0 a 1 in ~300ms con CSS transition) per dare un senso di caricamento elegante senza pesantezza.

**File: `src/App.tsx`**
- Aggiungere `<ScrollToTop />` dentro `<BrowserRouter>`, prima di `<Routes>`.


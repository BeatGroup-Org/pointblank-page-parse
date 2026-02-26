

## Navigazione al maestro specifico dalla pagina Formazione

### Cosa cambia
Cliccando su un docente nella pagina Formazione, l'utente verra portato direttamente alla sezione di quel maestro nella pagina Staff, invece che all'inizio della pagina.

### Come funziona

1. **`src/pages/Staff.tsx`** -- Aggiungere un `id` ad ogni sezione maestro basato sul nome (es. `id="orlando-vescio"`). Modificare lo `scrollTo(0,0)` nell'useEffect per controllare se c'e un hash nell'URL e, in caso, scrollare all'elemento corrispondente.

2. **`src/pages/Formazione.tsx`** -- Cambiare i link da `to="/staff"` a `to={/staff#slug}` dove lo slug e il nome del docente in lowercase con trattini (es. `/staff#orlando-vescio`).

### Dettagli tecnici
- Lo slug viene generato con: `name.toLowerCase().replace(/\s+/g, "-")`
- Lo scroll all'elemento usa `document.getElementById(hash).scrollIntoView({ behavior: "smooth" })`
- L'useEffect in Staff controlla `location.hash`: se presente scrolla all'elemento, altrimenti scrolla in cima come prima


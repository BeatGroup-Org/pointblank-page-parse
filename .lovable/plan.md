

## Deep linking dai corsi in homepage alla sezione corrispondente in /formazione

### Cosa cambia

1. **`src/pages/Formazione.tsx`** -- Aggiungere un `id` a ogni sezione corso (es. `id="canto-pop"`, `id="pianoforte"`, ecc.) generato dallo slug del nome corso. Aggiungere logica di scroll automatico all'hash nell'URL (come gia fatto per Staff).

2. **`src/components/sections/CorsiSection.tsx`** -- Cambiare i link "Scopri di piu" da `/formazione` a `/formazione#slug` (es. `/formazione#canto-pop`). Rendere anche l'intera card cliccabile con lo stesso link, usando `Link` di react-router-dom.

### Slug mapping
- Canto Pop -> `#canto-pop`
- Pianoforte -> `#pianoforte`
- Chitarra -> `#chitarra` (match parziale con "Chitarra Classica, Acustica ed Elettrica")
- Batteria -> `#batteria`
- Basso -> `#basso`
- Violino -> `#violino`
- Musical -> `#musical`

### Dettagli tecnici
- Lo slug in Formazione viene generato con `corso.nome.toLowerCase().replace(/\s+/g, "-")` e applicato come `id` al wrapper del CorsoRow
- In CorsiSection lo slug viene generato dal titolo con la stessa logica
- Per il match Chitarra/Chitarra Classica: il link puntera a `/formazione#chitarra-classica,-acustica-ed-elettrica` oppure si normalizza lo slug. Piu semplice: aggiungere un campo `slug` esplicito ai dati dei corsi in entrambi i file per garantire corrispondenza
- L'useEffect in Formazione usera `useLocation` per rilevare l'hash e scrollare con `scrollIntoView({ behavior: "smooth" })`


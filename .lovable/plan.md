

## Aggiungere CTA "CONTATTACI" al pannello flottante

### Modifica

**File:** `src/components/ContactFab.tsx`

- Aggiungere un link "CONTATTACI" ben in evidenza, posizionato come primo elemento del pannello (prima dei recapiti)
- Stile: bottone pieno con sfondo primary (arancione), testo bianco, uppercase, font bold, larghezza piena, border-radius arrotondato
- Usa `Link` da `react-router-dom` per navigare a `/contatti`
- Al click chiude il pannello (`setOpen(false)`)

### Struttura risultante del pannello
1. **CTA "CONTATTACI"** -- bottone arancione pieno, ben visibile
2. Indirizzo, telefono, email (invariati)
3. Icone social (invariate)


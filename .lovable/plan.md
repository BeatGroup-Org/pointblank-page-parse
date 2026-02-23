

## Aggiornare dati evento Dario Panza

### Cosa cambia

Per l'evento Panza (id: 1) in `src/data/eventi.ts`:

- **Data**: da `"13–14 Mar 2026"` a `"13–14 Marzo 2026"`
- **Luogo**: da `"Lamezia Terme"` a `"Civico Trame – Lamezia Terme"`
- **Ora / Ora Fine**: rimuovere `ora` e `oraFine` (gli orari sono gia' nel programma dettagliato)
- **Ingresso**: rimuovere `ingresso` e `prezzoInfo`

### Dettaglio tecnico

**File: `src/data/eventi.ts`** -- evento con id 1:

- Cambiare `data` in `"13–14 Marzo 2026"`
- Cambiare `luogo` in `"Civico Trame – Lamezia Terme"`
- Eliminare le righe `ora: "10:00"`, `oraFine: "18:00"`, `ingresso: "a pagamento"`, `prezzoInfo: "Contributo 20€"`

Nessuna modifica necessaria a `EventoDetail.tsx`: la griglia info gia' gestisce i campi opzionali con rendering condizionale.


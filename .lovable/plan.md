

## Passare da file ICS a Google Calendar

### Cosa cambia
Il bottone "Aggiungi al calendario" nella pagina dettaglio evento non scarichera piu un file .ics, ma aprira direttamente Google Calendar in una nuova scheda con tutti i dati dell'evento gia compilati.

### Dettaglio tecnico

**File modificato: `src/lib/generateIcs.ts`**
- Rinominare/sostituire la funzione con una nuova `openGoogleCalendar` che costruisce l'URL di Google Calendar:
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=...&dates=...&location=...&details=...`
- I parametri vengono ricavati dai dati dell'evento (titolo, dataISO, ora, oraFine, luogo, descrizione)
- Il formato date Google Calendar e `YYYYMMDDTHHmmSS/YYYYMMDDTHHmmSS`
- Apre il link con `window.open()` in una nuova scheda

**File modificato: `src/pages/EventoDetail.tsx`**
- Aggiornare l'import: da `generateIcsDownload` a `openGoogleCalendar`
- Aggiornare `handleCalendar` per chiamare la nuova funzione
- Cambiare il testo del bottone in "Aggiungi a Google Calendar"

**Parametri passati a Google Calendar:**
- `text`: titolo dell'evento
- `dates`: data inizio/fine in formato UTC-compatible
- `location`: indirizzo o luogo
- `details`: descrizione estesa o breve dell'evento

Il file `generateIcs.ts` puo essere rinominato o riutilizzato; la vecchia funzione ICS non servira piu.

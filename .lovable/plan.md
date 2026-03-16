

## Form di Iscrizione Masterclass Jacopo Carlini

Creeremo un form nativo integrato nella pagina evento di Carlini, con lo stile del sito. I dati compilati genereranno un messaggio WhatsApp pre-compilato da inviare alla segreteria.

### Struttura del form (dal mockup)

**Dati personali:** Nome*, Cognome*, Data di nascita, Codice fiscale, Telefono*, Email, Città di provenienza, Strumento, Livello di preparazione

**Tipo di partecipazione** (selezione singola):
- Masterclass collettiva
- Lezione individuale
- Masterclass + Lezione individuale (consigliato)

**Note aggiuntive:** textarea libera

**Privacy:** checkbox GDPR obbligatoria

**Invio:** bottone che apre WhatsApp con messaggio pre-compilato contenente tutti i dati

### Modifiche tecniche

1. **Nuovo file `src/components/IscrizioneForm.tsx`**
   - Form React con stato locale (useState) per tutti i campi
   - Validazione client-side (nome, cognome, telefono, privacy obbligatori)
   - Stile coerente con il sito (colori primary/gold, font SF UI, card con bordi)
   - Al submit: genera messaggio WhatsApp formattato e apre `wa.me/393339568927`
   - Il tipo di partecipazione usa card selezionabili (come nel mockup), con badge "Consigliato" sulla terza opzione

2. **Modifica `src/data/eventi.ts`**
   - Aggiungere un campo opzionale `mostraFormIscrizione?: boolean` all'interfaccia `Evento`
   - Impostarlo a `true` per l'evento Carlini

3. **Modifica `src/pages/EventoDetail.tsx`**
   - Se `evento.mostraFormIscrizione` è true, renderizzare la sezione `IscrizioneForm` dopo il programma e prima della CTA WhatsApp
   - Il form diventa il modo principale per iscriversi, con un titolo "Iscriviti alla Masterclass"

### Messaggio WhatsApp generato

```text
📋 ISCRIZIONE MASTERCLASS JACOPO CARLINI

👤 Nome: Mario Rossi
📅 Nascita: 15/03/1995
🏷️ CF: RSSMRA95C15...
📞 Tel: 333 1234567
📧 Email: mario@email.com
📍 Città: Lamezia Terme
🎵 Strumento: Pianoforte
📊 Livello: Intermedio

✅ Partecipazione: Masterclass collettiva + Lezione individuale

📝 Note: Vorrei lavorare su un brano di Debussy

Accetto il trattamento dati (GDPR 679/2016)
```


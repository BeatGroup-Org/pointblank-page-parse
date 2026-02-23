
## Ristrutturare le pagine dettaglio evento

### Nuova struttura

Ogni pagina dettaglio evento avra' tre sezioni principali:

1. **Intro / Presentazione** -- testo di presentazione dell'evento e dell'ospite
2. **Programma dettagliato** -- elenco strutturato delle giornate con orari e attivita'
3. **CTA e Contatti** -- call to action con messaggio motivante + bottoni prenotazione + contatti

### Modifiche al modello dati

**File: `src/data/eventi.ts`**

Aggiungere nuovi campi all'interfaccia `Evento`:

```typescript
// Nuovi campi
introduzione?: string;        // testo lungo di presentazione (sostituisce descrizioneEstesa per il rendering)
programma?: {
  giorno: string;             // es. "Giovedi' 13 Marzo"
  fasce: {
    orario: string;           // es. "16:30 - 19:00"
    titolo: string;           // es. "Masterclass di Batteria"
    descrizione?: string;     // testo descrittivo della fascia
    punti?: string[];         // elenco puntato opzionale
  }[];
}[];
ctaMessaggio?: string;        // es. "Posti limitati per garantire qualita'..."
ctaLabel?: string;            // es. "Info costi e prenotazioni"
```

Per l'evento Panza (id: 1), popolare tutti i campi con i contenuti forniti:
- `introduzione`: i 4 paragrafi di presentazione
- `programma`: 2 giornate (Giovedi' 13 e Venerdi' 14) con le rispettive fasce orarie
- `ctaMessaggio`: "Posti limitati per garantire qualita' e interazione diretta."
- `ctaLabel`: "Info costi e prenotazioni"

### Modifiche alla pagina dettaglio

**File: `src/pages/EventoDetail.tsx`**

Riorganizzare il contenuto principale (dentro la colonna sinistra del layout a due colonne) nelle tre sezioni:

**Sezione 1 -- Intro**
- Info grid compatta (data, ora, luogo, ingresso) come gia' presente
- Sotto: il testo di `evento.introduzione` (se presente) oppure fallback su `descrizioneEstesa`/`descrizione`
- Stile: paragrafi ampi, leggibili, con spaziatura generosa

**Sezione 2 -- Programma**
- Visibile solo se `evento.programma` esiste
- Per ogni giorno: titolo del giorno come heading
- Per ogni fascia: orario in evidenza, titolo della fascia, descrizione e lista puntata
- Layout pulito con separatori tra le giornate
- Nuovo ref `programmaRef = useFadeIn()` per l'animazione

**Sezione 3 -- CTA e Contatti (unificati)**
- `ctaMessaggio` come testo introduttivo sopra i bottoni
- Bottoni WhatsApp e Calendario (gia' esistenti)
- Sotto i bottoni: i contatti di riferimento (gia' esistenti)
- Tutto in un'unica sezione coesa

Viene rimossa la sezione "Descrizione" separata e la sezione "Contatti" separata, che vengono accorpate nelle nuove sezioni 1 e 3.

### Riepilogo file modificati

- `src/data/eventi.ts` -- nuovi campi interfaccia + contenuti Panza
- `src/pages/EventoDetail.tsx` -- ristrutturazione layout in 3 sezioni

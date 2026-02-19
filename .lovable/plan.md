

## Pagina Dettaglio Evento + Categoria e Rassegna

Questo piano unifica la creazione della pagina dettaglio evento (gia' approvata) con l'aggiunta dei campi **categoria** e **rassegna** al modello dati.

---

### Nuovi campi

- **Categoria**: il tipo di evento (es. "Masterclass", "Concerto", "Musical", "Saggio")
- **Rassegna**: la rassegna o il ciclo a cui appartiene (es. "Stagione Concertistica 2025/26", "Ma che Musica Maestro")

Entrambi sono opzionali e verranno mostrati come badge colorati sia nelle EventCard che nella pagina dettaglio.

---

### Dettaglio tecnico

**1. `src/data/eventi.ts`** -- Estendere interfaccia e dati

Aggiungere all'interfaccia `Evento`:

```
categoria?: string;       // es. "Masterclass", "Concerto", "Musical", "Saggio"
rassegna?: string;        // es. "Stagione Concertistica 2025/26"
```

Piu' tutti i campi per il dettaglio evento gia' previsti nel piano precedente:

```
dataISO?: string;
oraFine?: string;
indirizzo?: string;
descrizioneEstesa?: string;
ingresso?: "gratuito" | "a pagamento";
prezzoInfo?: string;
contattoNome?: string;
contattoTelefono?: string;
contattoEmail?: string;
whatsappNumero?: string;
gallery?: string[];
```

Popolare i dati di esempio con categoria e rassegna per ogni evento esistente.

**2. `src/components/EventCard.tsx`** -- Mostrare i badge

Aggiungere sotto il badge del luogo (o sopra il titolo) dei badge per categoria e rassegna, usando il componente Badge gia' presente nel progetto.

**3. `src/pages/EventoDetail.tsx`** -- Nuova pagina dettaglio

La pagina completa con:
- Hero con immagine e titolo
- Badge per categoria e rassegna sotto il titolo
- Griglia info: data, ora, luogo, ingresso
- Descrizione estesa
- Contatti di riferimento
- Pulsanti: "Prenota su WhatsApp" e "Aggiungi al calendario"
- Gallery fotografica opzionale
- Stile coerente con Chi Siamo (fade-in, colori, tipografia)

**4. `src/lib/generateIcs.ts`** -- Utility per file .ics

Funzione per generare e scaricare un file calendario standard.

**5. `src/App.tsx`** -- Nuova rotta

Aggiungere `<Route path="/eventi/:id" element={<EventoDetail />} />`

**6. `src/components/EventCard.tsx`** -- Link al dettaglio

Sostituire `href="#"` con un `<Link to={'/eventi/${evento.id}'}>`

---

### Esempio dati aggiornati

```
{
  id: 1,
  titolo: "Masterclass di Batteria con Dario Panza",
  categoria: "Masterclass",
  rassegna: "Stagione Concertistica 2025/26",
  data: "13-14 Mar 2026",
  ...
}
```


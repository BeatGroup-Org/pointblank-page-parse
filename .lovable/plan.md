

## Aggiornamento Eventi Reali

### Dati da inserire

Sostituire tutti i 6 eventi placeholder con i 7 eventi reali forniti:

| # | Titolo | Data | Luogo | Immagine tematica |
|---|--------|------|-------|-------------------|
| 1 | Masterclass di Batteria con Dario Panza | 13-14 Mar 2026 | Lamezia Terme | Batteria/drummer |
| 2 | Masterclass di Pianoforte e Composizione con Jacopo Carlini | 10-11 Apr 2026 | Lamezia Terme | Pianoforte |
| 3 | Concerto di Jacopo Carlini con Chiara Vescio | 10-11 Apr 2026 | Lamezia Terme | Concerto dal vivo |
| 4 | Musical "Alice nel Paese delle Meraviglie" | Maggio 2026 | Teatro Costabile, Lamezia Terme | Teatro/musical |
| 5 | Concerti "Ma che Musica Maestro" | Fine Maggio 2026 | Lamezia Terme | Orchestra scolastica |
| 6 | Saggio di Fine Anno — Musica Pop | Giugno 2026 | Lamezia Terme | Concerto pop |
| 7 | Saggio di Fine Anno — Musica Classica | Giugno 2026 | Lamezia Terme | Orchestra classica |

### Modifiche all'interfaccia `Evento`

- Rendere il campo `ora` opzionale (`ora?: string`) dato che molti eventi reali non hanno un orario specifico
- Aggiungere campo opzionale `descrizione?: string` per la breve descrizione di ogni evento

### File da modificare

**1. `src/data/eventi.ts`**
- Aggiornare l'interfaccia `Evento`: `ora` diventa opzionale, aggiungere `descrizione`
- Sostituire l'array con i 7 eventi reali, ciascuno con immagine Unsplash tematica

**2. `src/components/EventCard.tsx`**
- Mostrare il blocco "time" solo se `evento.ora` e' presente
- Mostrare la descrizione sotto il titolo se presente

**3. `src/components/sections/EventiPreviewSection.tsx`**
- Nessuna modifica necessaria (mostra gia i primi 3 eventi automaticamente)

**4. `src/pages/Eventi.tsx`**
- Nessuna modifica necessaria (mostra gia tutti gli eventi automaticamente)

### Risultato

- Homepage: mostra i primi 3 eventi reali (Masterclass Panza, Masterclass Carlini, Concerto Carlini)
- Pagina /eventi: mostra tutti e 7 gli eventi reali
- Card senza orario non mostrano il campo "time"




## Aggiungere l'evento "Masterclass di Pianoforte con Jacopo Carlini"

### Modifiche

**1. `src/data/eventi.ts`** — Aggiungere il secondo evento all'array `eventi` con id 2, seguendo la stessa struttura dell'evento Dario Panza. I nomi da evidenziare in grassetto nella pagina dettaglio saranno: Giorgia, Riccardo Cocciante, Alex Britti, Orchestra Sinfonica Nazionale della RAI. Useremo l'immagine placeholder `/placeholder.svg` per `immagine` (senza locandina), da sostituire quando disponibili le foto.

Dati principali:
- Titolo: "Masterclass di Pianoforte con Jacopo Carlini"
- Data: "10–11 Aprile 2026", dataISO: "2026-04-10"
- Luogo: "Chiostro San Domenico – Lamezia Terme"
- Categoria: "Masterclass", Rassegna: "Stagione Concertistica 2025/26"
- Programma completo su 2 giorni (masterclass collettiva, lezioni individuali, concerto "Dialogo in Musica")
- Stessi contatti della segreteria Mousikè

**2. `src/pages/EventoDetail.tsx`** — Aggiungere i nomi Giorgia, Riccardo Cocciante, Alex Britti e Chiara Vescio alla logica di evidenziazione in grassetto (`.replace()`).

**3. `public/sitemap.xml`** — Aggiungere `<url><loc>https://mousikeaps.it/eventi/2</loc></url>`.


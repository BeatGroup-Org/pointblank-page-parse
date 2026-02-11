

## Pagina "I Prossimi Eventi"

### Cosa viene creato

Una nuova pagina `/eventi` che mostra una griglia di card evento, ispirata al design degli screenshot (sfondo bianco, card scure con immagine, titolo, data, ora e un bottone di collegamento).

### Layout della pagina

- **Header**: lo stesso header a pillola gia presente nel sito
- **Sezione hero**: titolo grande "I Prossimi Eventi" in alto a sinistra (stile bold, serif) + breve descrizione a destra
- **Griglia card**: 3 colonne su desktop, 2 su tablet, 1 su mobile
- **Footer**: lo stesso footer del sito

### Struttura di ogni card evento

```text
+-------------------------------+
| [Immagine evento]             |
|   [Badge location]            |
+-------------------------------+
| Titolo Evento (bold, bianco)  |
|                               |
| date            time          |
| 12 Feb 2026     18:30 (CET)  |
|                               |
| [->] bottone link             |
+-------------------------------+
```

- Sfondo card scuro (quasi nero) con bordi arrotondati
- Immagine in alto con aspect ratio ~16:10 e bordi arrotondati interni
- Badge in alto a sinistra sull'immagine con il nome della location
- Sotto: titolo in bianco, poi riga con "date" e "time" come label grigie e valori in bianco
- In basso a sinistra: icona freccia in un quadratino bianco (link all'evento)

### Dati statici

5-6 eventi di esempio con titoli come "Open Day", "Workshop Produzione", "Masterclass DJ", ecc. I dati (titolo, data, ora, location, immagine placeholder) sono definiti in un array nel componente.

### File coinvolti

**1. Nuovo: `src/pages/Eventi.tsx`**
- Componente pagina con Header, sezione hero, griglia card e Footer
- Array di eventi statici con: id, titolo, data, ora, location, immagine (placeholder scuro)
- Ogni card come componente interno `EventCard`

**2. Modifica: `src/App.tsx`**
- Aggiunta rotta `/eventi` che punta alla nuova pagina

**3. Modifica: `src/index.css`**
- Pochi stili aggiuntivi per le card evento (sfondo scuro, hover effect leggero)


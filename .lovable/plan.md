

## Pagina Percorsi Formativi

### Obiettivo
Creare una pagina unica `/formazione` che presenta tutti i corsi di Mousike con i rispettivi docenti, accessibile dal link "Corsi" / "Formazione Musicale" nel menu.

### Struttura della pagina

La pagina avra un hero compatto con titolo, seguito da una sezione per ogni corso. Ogni corso mostra:
- Nome dello strumento/disciplina
- Card dei docenti associati (foto, nome, ruolo -- riutilizzando i dati gia presenti in `team.ts`)
- Informazioni sulla modalita di lezione

In fondo, una nota specifica per il Musical con le due varianti (intermedio e avanzato).

### Corsi e docenti

| Corso | Docenti |
|-------|---------|
| Canto Pop | Chiara Vescio, Marco Losardo, Eugenio Nicolazzo |
| Pianoforte | Orlando Vescio, Valentina Monteleone |
| Chitarra Classica, Acustica ed Elettrica | Vittorio Lanzo |
| Batteria | Domenico Lico |
| Basso | Bianca Bertucci |
| Violino | Deborah Stranges |
| Musical | Eugenio Nicolazzo |

### Dettagli lezioni
- **Tutti i corsi (tranne Musical)**: lezione individuale, 1 ora, orario concordato con l'allievo.
- **Musical Intermedio**: 1 appuntamento collettivo a settimana, 1h30.
- **Musical Avanzato**: 2 appuntamenti collettivi settimanali, 1h30 ciascuno.

### File da creare/modificare

1. **`src/pages/Formazione.tsx`** (nuovo) -- pagina con hero, lista corsi con card docenti, sezione Musical con le due varianti. I dati dei docenti verranno importati da `team.ts` e matchati per nome.

2. **`src/App.tsx`** -- aggiungere la route `/formazione`.

3. **`src/components/Header.tsx`** -- cambiare il link "Corsi" da `#corsi` a `/formazione` (diventa "Formazione Musicale" o resta "Corsi" a scelta).

4. **`src/components/sections/CorsiSection.tsx`** -- aggiornare i link "Scopri di piu" per puntare a `/formazione`.

### Design visivo

Ogni corso sara presentato come una sezione con:
- Titolo del corso a sinistra
- A destra (o sotto su mobile), le foto circolari dei docenti con nome e link alla pagina staff
- Badge con le info sulla lezione (individuale, 1h)
- Per il Musical: due sotto-card per Intermedio e Avanzato con icone distintive

Lo stile seguira il design system esistente (sfondo scuro, font SF UI, animazioni fade-in con `useFadeIn`).

### Dettagli tecnici

- I dati dei docenti vengono gia da `team.ts` con immagini e descrizioni
- Verra creato un array `corsiData` nella pagina (o in un file `src/data/corsi.ts`) che mappa ogni corso ai nomi dei docenti
- Il matching avviene cercando il docente per nome nell'array `team`
- Click sulla foto del docente porta a `/staff` (o ancora meglio, scrolla al docente specifico)


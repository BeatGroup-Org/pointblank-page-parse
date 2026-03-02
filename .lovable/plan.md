

## Pagina Contatti interattiva con flusso guidato

### Flusso utente

**Step 1 -- Scegli l'argomento** (cards cliccabili)
- Informazioni sui programmi formativi
- Prenotare una lezione di prova
- Avere info sulle produzioni
- Proporre una iniziativa
- Sostenere la scuola
- Altro

**Step 1b -- Se scelto "Info programmi formativi" OPPURE "Lezione di prova"**
Seleziona il corso di interesse (chips/cards):
- Canto Pop, Pianoforte, Chitarra, Batteria, Basso, Violino, Musical, Altro

**Step 2 -- Scegli come contattarci** (3 bottoni con icone)
- WhatsApp (apre wa.me con messaggio preimpostato)
- Email (apre mailto con oggetto e corpo preimpostati)
- Chiama (apre tel:)

### Messaggi preimpostati

| Argomento | Messaggio |
|-----------|-----------|
| Info programmi formativi | "Ciao! Vorrei informazioni sul corso di [corso scelto]." |
| Lezione di prova | "Ciao! Vorrei prenotare una lezione di prova per il corso di [corso scelto]." |
| Info produzioni | "Ciao! Vorrei informazioni sulle vostre produzioni." |
| Proporre iniziativa | "Ciao! Vorrei proporre una iniziativa di collaborazione." |
| Sostenere la scuola | "Ciao! Vorrei sapere come sostenere la scuola." |
| Altro | "Ciao! Vorrei contattarvi per..." |

### Dettagli tecnici

**File creato:** `src/data/corsi.ts` -- array corsi estratto da CorsiSection per riuso in entrambi i componenti

**File modificato:** `src/pages/Contatti.tsx` -- riscrittura completa con:
- Stato React: `argomento`, `corso` (mostrato quando argomento e "info-corsi" o "lezione-prova")
- Cards argomento con bordo evidenziato al click
- Chips/cards per selezione corso (visibili per entrambi gli argomenti che richiedono scelta corso)
- 3 bottoni contatto (WhatsApp, Email, Telefono) con link dinamici basati su argomento + corso
- WhatsApp: `https://wa.me/393339568927?text={messaggio}`
- Email: `mailto:mousike.aps@gmail.com?subject={oggetto}&body={corpo}`
- Telefono: `tel:+393339568927`
- Transizioni animate tra gli step
- Sezione statica in fondo con indirizzo, telefono, email

**File modificato:** `src/components/sections/CorsiSection.tsx` -- importa corsi da `src/data/corsi.ts`


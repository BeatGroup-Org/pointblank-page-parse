

## Spostare "Oggi" dentro "La musica e' di tutti"

### Cosa cambia

La sezione "Oggi" (attualmente separata, righe 207-221) viene rimossa come sezione autonoma e il suo contenuto viene integrato nella sezione "La musica e' di tutti", sotto il testo esistente sull'inclusione. "Oggi" diventa un sottotitolo (`h3`) nello stesso stile di "Ma che musica maestro".

### Struttura risultante

La colonna di testo della sezione "La musica e' di tutti" (righe 183-202) diventa:

1. Testo esistente sull'inclusione
2. Linea separatrice (`hr`)
3. Sottotitolo **"Oggi"** (stesso stile `h3` di "Ma che musica maestro")
4. Testo della sezione Oggi

### Dettaglio tecnico

**File: `src/pages/ChiSiamo.tsx`**

1. **Righe 183-202** -- Nella colonna destra del grid "La musica e' di tutti", dopo l'`hr` esistente (riga 201), aggiungere:
   - Un `h3` con classe `text-xl md:text-2xl font-bold mb-4 mt-8` con testo "Oggi"
   - Un nuovo `div` con le stesse classi del testo esistente (`space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed`) contenente i tre paragrafi della sezione Oggi

2. **Righe 207-221** -- Rimuovere l'intera `TextSection` "Oggi" (non serve piu')

In questo modo la struttura e' simmetrica: "Dentro le scuole" ha il sottotitolo "Ma che musica maestro", e "La musica e' di tutti" ha il sottotitolo "Oggi".

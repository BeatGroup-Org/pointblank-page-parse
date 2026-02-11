

## Allineare le foto ai titoli delle sezioni

### Cosa cambia

Le due foto verticali ("Ma che musica maestro" e "La musica e' di tutti") vengono spostate verso l'alto con un **margine negativo**, in modo che il loro bordo superiore sia quasi allineato ai titoli delle rispettive sezioni. Tutto il resto della pagina rimane invariato.

Questo fa si' che le sezioni finiscano prima verticalmente, riducendo lo spazio percepito senza toccare padding, font o layout.

### Dettaglio tecnico

**File: `src/pages/ChiSiamo.tsx`**

1. **Sezione "Dentro le scuole"** (riga 137): al contenitore della foto `<div className="w-full aspect-[4/5] overflow-hidden">` aggiungere `md:-mt-32` per tirare la foto verso l'alto su desktop, allineandola circa al titolo. Su mobile resta invariata.

2. **Sezione "La musica e' di tutti"** (riga 176): stesso intervento sul contenitore della foto — aggiungere `md:-mt-32` per allinearla al titolo su desktop.

Nessuna altra modifica. Il margine negativo funziona perche' le sezioni usano `items-start` nel grid, quindi la foto sale senza influenzare la colonna di testo.


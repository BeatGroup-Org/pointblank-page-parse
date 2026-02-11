

## Allineare il testo a destra nella sezione "La musica e' di tutti"

### Cosa cambia

Tutto il testo nella colonna destra della sezione "La musica e' di tutti" viene giustificato a destra (`text-right`), inclusi i paragrafi, il sottotitolo "Oggi" e il separatore. Il titolo grande e' gia' allineato a destra.

### Dettaglio tecnico

**File: `src/pages/ChiSiamo.tsx`**

1. **Riga 183** -- Al contenitore principale del testo `<div className="space-y-4">` aggiungere `text-right`
2. **Riga 202** -- Al sottotitolo `<h3>` "Oggi" aggiungere `text-right` (se non ereditato)

Un singolo `text-right` sul div padre (riga 183) dovrebbe propagarsi a tutti gli elementi figli, quindi potrebbe bastare solo quello.


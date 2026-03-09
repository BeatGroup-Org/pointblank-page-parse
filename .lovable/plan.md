

## Fix: sezione interattiva non visibile nella pagina Contatti

### Problema
Il `ref` di `useFadeIn` e applicato al `div` esterno (riga 137), ma la classe `fade-in-section` e sul `div` interno (riga 138). L'hook aggiunge `visible` solo all'elemento referenziato, quindi il div interno resta nascosto.

### Soluzione

**File:** `src/pages/Contatti.tsx`

Unificare ref e classe sullo stesso elemento: spostare `fade-in-section` e `ref={stepsRef}` sullo stesso `div`.

- Riga 137-138: cambiare da due div separati a un unico div con sia `ref={stepsRef}` che `className="fade-in-section container mx-auto px-6 max-w-3xl"`
- Rimuovere il `div` interno con `fade-in-section` e il relativo tag di chiusura (riga 314)


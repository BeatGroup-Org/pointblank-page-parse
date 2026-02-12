

## Pallino contatti flottante con logo Mousike'

### Cosa fa

Un pulsante circolare fisso in basso a destra, sempre visibile su tutte le pagine, che mostra il **logo rotondo Mousike'** (lo stesso usato come favicon). Cliccandolo si apre un pannello con i contatti della scuola. Un secondo clic lo chiude (mostrando una X).

### Aspetto

- **Pallino chiuso**: immagine `/favicon.png` (logo rotondo) su sfondo circolare con ombra e leggera animazione pulse
- **Pallino aperto**: icona X per chiudere
- **Pannello**: card con indirizzo (link Maps), telefono (`tel:`), email (`mailto:`), social

### Dettaglio tecnico

**Nuovo file: `src/components/ContactFab.tsx`**

- Pulsante fisso `fixed bottom-6 right-6 z-50`
- Quando chiuso: mostra `<img src="/favicon.png">` invece di un'icona Lucide
- Quando aperto: mostra icona `X` di Lucide e il pannello contatti
- Pannello con animazione Tailwind (`animate-in fade-in slide-in-from-bottom`)
- Contatti cliccabili: indirizzo, telefono, email, social

**File: `src/App.tsx`**

- Importare `<ContactFab />` e aggiungerlo dentro `<BrowserRouter>` ma fuori da `<Routes>`, cosi' appare su tutte le pagine




## Piano: Spostare il paragrafo sul nome in una riga a larghezza piena

### Modifica in `src/pages/ProgrammiEducativi.tsx`

1. Rimuovere il terzo `<p>` (righe 89-93) dalla colonna destra del grid a 2 colonne nell'Hero.
2. Aggiungere, subito dopo la chiusura del grid (`</div>` riga 95), un nuovo `<p>` a larghezza piena (`max-w-3xl`) con lo stesso testo, sempre dentro il container dell'Hero.

La struttura diventa:
```
<div grid 2 colonne>
  <div> titolo </div>
  <div> par.1 + par.2 </div>
</div>
<p full-width> "Anche il nome racconta..." </p>
```


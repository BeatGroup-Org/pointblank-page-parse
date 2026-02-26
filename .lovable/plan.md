

## Pulizia del menu di navigazione

### Problema
Il menu contiene 8 voci, di cui 4 sono ancore a sezioni della homepage (`#programma`, `#produzioni`, `#impatto`, `#contatti`) e non pagine reali. L'utente vuole mantenere solo i link a pagine effettive.

### Cosa cambia

**`src/components/Header.tsx`** -- Ridurre l'array `navLinks` da 8 a 4 voci, mantenendo solo le pagine reali:

| Voce attuale | Azione |
|---|---|
| Chi siamo (`/chi-siamo`) | Mantieni |
| Programma (`#programma`) | Rimuovi |
| Formazione Musicale (`/formazione`) | Mantieni |
| Eventi (`/eventi`) | Mantieni |
| Produzioni (`#produzioni`) | Rimuovi |
| Impatto (`#impatto`) | Rimuovi |
| Team (`/staff`) | Mantieni |
| Contatti (`#contatti`) | Rimuovi |

Risultato finale:
```
Chi siamo -> /chi-siamo
Formazione Musicale -> /formazione
Eventi -> /eventi
Team -> /staff
```

Ridurre anche le SVG decorative (`bg-shape`) da 6 a 4 per corrispondere al numero di voci. Semplificare la logica di click rimuovendo i casi hash (tutti i link saranno ora route).


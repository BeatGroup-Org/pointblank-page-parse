

## Riordino sezioni homepage ed eliminazione Programma educativo

### Cosa cambia

1. **Eliminazione** della sezione "Programma educativo" (`ProgrammaSection`) dalla homepage
2. **Riordino** delle sezioni rimanenti secondo la nuova sequenza

### Nuova sequenza

| # | Sezione | Componente |
|---|---------|------------|
| 1 | Header | `Header` |
| 2 | Hero | `HeroSection` |
| 3 | Il nostro impegno | `StatsSection` |
| 4 | Partner | `PartnerSection` |
| 5 | Anteprima Eventi | `EventiPreviewSection` |
| 6 | Video Promo | `VideoPromoSection` |
| 7 | Percorsi Formativi | `CorsiSection` |
| 8 | Produzioni Culturali | `ProduzioniSection` |
| 9 | Impatto Sociale | `ImpattoSection` |
| 10 | Team | `TeamSection` |
| 11 | CTA finale | `CtaSection` |
| 12 | Footer | `Footer` |

### Dettaglio tecnico

**File: `src/pages/Index.tsx`**
- Rimuovere l'import di `ProgrammaSection`
- Riordinare i componenti nel JSX secondo la sequenza sopra (spostare `PartnerSection` subito dopo `StatsSection`, `VideoPromoSection` dopo `EventiPreviewSection`, rimuovere `ProgrammaSection`)

Nessun altro file viene modificato. Il file `ProgrammaSection.tsx` resta nel progetto ma non viene piu' utilizzato.


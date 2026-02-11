

## CTA a forma di pillola (rounded-full)

Aggiungere `rounded-full` a tutti i bottoni CTA del sito che attualmente hanno angoli standard, per richiamare la forma a pillola dell'header.

### Bottoni da modificare

| File | Bottone | Modifica |
|------|---------|----------|
| `HeroSection.tsx` | "Scopri il programma educativo" | Aggiungere `rounded-full` |
| `HeroSection.tsx` | "Prenota una prova" | Aggiungere `rounded-full` |
| `CtaSection.tsx` | "Prenota una prova" | Aggiungere `rounded-full` |
| `CtaSection.tsx` | "Porta il progetto nel tuo istituto" | Aggiungere `rounded-full` |
| `ProduzioniSection.tsx` | "Scopri le produzioni" | Aggiungere `rounded-full` |
| `ProgrammaSection.tsx` | "Scopri il programma" | Aggiungere `rounded-full` |

### Bottoni gia' corretti (nessuna modifica)

- `TeamSection.tsx` — gia' ha `rounded-full`
- `EventiPreviewSection.tsx` — gia' ha `rounded-full`

### Dettaglio tecnico

Per ogni bottone, si aggiunge semplicemente la classe `rounded-full` al className esistente. Esempio:

```
// Prima
className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"

// Dopo
className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8"
```

Nessun altro cambiamento di stile o struttura.

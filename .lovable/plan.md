
## Adeguare lo stile della pagina Contatti alle altre pagine

### Differenze attuali
- **Titolo**: "Contattaci" usa `text-4xl font-bold`, mentre le altre pagine usano titoli molto grandi (`text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight`)
- **Sottotitolo/kicker**: Le altre pagine hanno un kicker sopra il titolo (es. "Mousike -- Formazione"), qui manca
- **Animazioni**: Le altre pagine usano `useFadeIn` per le sezioni, qui non viene usato
- **Layout hero**: Le altre pagine hanno sezioni hero piu spaziose con padding verticali generosi; qui il titolo e compresso in un `max-w-3xl`

### Modifiche previste

**File:** `src/pages/Contatti.tsx`

1. **Titolo hero** -- Trasformare in stile coerente: aggiungere kicker "Mousike -- Contatti", titolo grande uppercase font-black, e spostare il sottotitolo sotto
2. **Animazioni** -- Aggiungere `useFadeIn` alle sezioni principali (hero, step argomenti, recapiti)
3. **Layout** -- Usare lo stesso pattern di spaziatura delle altre pagine (py-20 md:py-28 per le sezioni, container senza max-w troppo restrittivo per l'hero)
4. **Titoli di sezione** -- I titoli "Di cosa hai bisogno?", "Come vuoi contattarci?", "I nostri recapiti" sono gia uppercase/tracking-wider, coerenti con il resto

### Dettaglio tecnico

- Importare `useFadeIn` e applicare ref + classe `fade-in-section` alle sezioni
- Hero: kicker `text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4` + titolo `text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight`
- Sezione hero dentro `bg-secondary` come in Formazione, con `pt-32 pb-16`
- Il contenuto interattivo (step 1, step 2, recapiti) resta in `max-w-3xl` per leggibilita

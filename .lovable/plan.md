

## Adeguamento stile pagina Amministrazione Trasparente

### Cosa cambia

La pagina attuale usa uno stile generico (titoli `text-4xl font-bold`, layout centrato `max-w-3xl`). Va allineata allo stile di Chi Siamo che usa titoli grandi, bold/black, uppercase e un layout piu ampio.

### Modifiche a `src/pages/AmministrazioneTrasparente.tsx`

1. **Struttura generale**: rimuovere il wrapper `<div>` e usare `<> <Header/> <main>...</main> <Footer/> </>` come in Chi Siamo

2. **Hero/Apertura**: adottare lo stesso layout a due colonne di Chi Siamo:
   - Colonna sinistra: titolo grande `text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight`
   - Colonna destra: testo descrittivo con `text-muted-foreground text-base md:text-lg leading-relaxed`
   - Sfondo `bg-background` (non `bg-secondary`), padding `py-20 md:py-28`

3. **Sezione "Contributi Pubblici"**: 
   - Titolo h2 aggiornato a `text-3xl md:text-4xl font-bold` (gia coerente, ma verificare)
   - Sfondo alternato `bg-secondary` per contrasto
   - Container piu ampio (rimuovere `max-w-3xl`, usare il container standard come Chi Siamo)

4. **Sezione "Riferimenti Normativi"**:
   - Sfondo `bg-background`
   - Stesso stile tipografico

5. **Font e dimensioni**: assicurarsi che tutti i testi usino le stesse classi di Chi Siamo (`text-base md:text-lg leading-relaxed` per i paragrafi)

### Risultato
La pagina avra lo stesso "respiro" visivo di Chi Siamo, con il titolo grande uppercase a sinistra e il testo a destra nell'hero, e sezioni con sfondo alternato coerenti col resto del sito.



## Pagina Produzioni Culturali

### Cosa creare

Una nuova pagina `/produzioni` dedicata alle produzioni culturali di Mousike, seguendo lo stile delle altre pagine (ChiSiamo, Formazione, Staff).

### Struttura della pagina

1. **Hero** -- sfondo `bg-secondary`, kicker "Mousike -- Produzioni", titolo grande uppercase "IL PERCORSO NEI MUSICAL", sottotitolo con il paragrafo introduttivo sulla Mousike greca
2. **Sezione "Le Produzioni"** -- tre card/blocchi per le produzioni principali:
   - **La Bella e la Bestia** -- descrizione + stat "~700 spettatori, 2 sold out"
   - **I Miserabili** -- descrizione + stat "100+ protagonisti, ~2.500 spettatori"
   - **Il Concerto Walt Disney** -- descrizione + stat "1.000+ presenze, obiettivo 2.500"
   - Riutilizzare le 3 immagini già presenti nel carousel di `ProduzioniSection.tsx` per accompagnare le card
3. **Sezione "Una Scelta Strategica"** -- testo su visione, inclusione sociale, partenariati (stile `TextSection` come in ChiSiamo)
4. **Sezione "Radici nel Territorio, Sguardo sull'Europa"** -- testo su radicamento locale + Erasmus+ (sfondo alternato `bg-secondary`)
5. **Sezione "Un Impatto Sociale Misurabile"** -- testo finale + eventuale CTA per contatti
6. **CTA finale** -- due bottoni "Contattaci" e "Scopri la formazione" come in ChiSiamo

### File da creare/modificare

**Nuovo file:** `src/pages/Produzioni.tsx`
- Segue esattamente il pattern di ChiSiamo: Header, sezioni con `useFadeIn`, `TextSection`-like blocks, Footer
- Le produzioni saranno presentate in layout alternato immagine/testo (simile a Staff) con stat in evidenza

**Modifica:** `src/App.tsx`
- Aggiungere route `/produzioni`

**Modifica:** `src/components/Header.tsx`
- Aggiungere "Produzioni" nei `navLinks` (tra "Formazione Musicale" e "Eventi")

**Modifica:** `src/components/sections/ProduzioniSection.tsx`
- Cambiare il bottone CTA da `UnderConstructionDialog` a `Link` verso `/produzioni`

### Dettagli tecnici

- Ogni produzione in layout a 2 colonne (immagine + testo) con alternanza sinistra/destra come in ChiSiamo/Staff
- Numeri chiave evidenziati con font bold/large per impatto visivo
- Tutte le sezioni animate con `useFadeIn`
- Typography coerente: titoli `text-5xl md:text-6xl lg:text-7xl font-black uppercase`, corpo `text-muted-foreground text-base md:text-lg leading-relaxed`


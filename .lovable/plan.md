

## Pagina "Chi Siamo"

### Panoramica

Creare una nuova pagina `/chi-siamo` con layout arioso, fondo chiaro, tono autentico. Struttura a sezioni alternate (testo / foto a tutta larghezza), coerente con lo stile della homepage.

### Struttura della pagina

| # | Tipo | Contenuto |
|---|------|-----------|
| 1 | Header | Navigazione fissa (componente esistente) |
| 2 | Sezione testo | **Chi siamo** -- testo di apertura |
| 3 | Stacco foto | Immagine ampia (lezione/prova) -- placeholder per ora |
| 4 | Sezione testo | **La nostra scuola** |
| 5 | Sezione testo | **Dentro le scuole, ogni anno** |
| 6 | Stacco foto | Immagine ampia (laboratorio/produzione scolastica) -- placeholder |
| 7 | Sezione testo | **Il palco come punto d'incontro** |
| 8 | Sezione testo | **La musica e' di tutti** |
| 9 | Stacco foto | Immagine ampia (gruppo/coro/momento inclusivo) -- placeholder |
| 10 | Sezione testo | **Oggi** |
| 11 | CTA finale | Due bottoni centrati: "Vieni a conoscerci" e "Scopri i nostri percorsi" |
| 12 | Footer | Componente esistente |

### Dettaglio tecnico

**1. Nuovo file: `src/pages/ChiSiamo.tsx`**

- Importa `Header`, `Footer`, `Button`, `useFadeIn`
- Ogni sezione testo usa `useFadeIn` per l'animazione di ingresso, con `py-20 md:py-28`, `container mx-auto px-6 max-w-3xl`
- Testo reso con paragrafi separati (`<p>` distinti con `mb-4`), non blocchi unici, per rispettare il ritmo delle frasi brevi
- Alternanza `bg-background` / `bg-secondary` per le sezioni testo
- Stacchi foto: sezione full-width con immagine `aspect-[21/9]` o simile, `object-cover`, con `bg-muted` come fallback e immagini placeholder
- CTA finale centrata con due `Button` pill, stile identico a quelli della homepage

**2. Modifica: `src/App.tsx`**

- Aggiungere rotta `/chi-siamo` con import lazy o diretto di `ChiSiamo`

**3. Modifica: `src/components/Header.tsx`**

- Aggiungere "Chi siamo" ai `navLinks` con `href: "/chi-siamo"`

### Note di stile

- Font e colori: ereditati dal tema globale (SF Pro Display/Text, palette warm)
- Nessuna icona nelle sezioni testo -- solo tipografia pulita
- Le immagini placeholder potranno essere sostituite successivamente con foto reali da Supabase Storage
- Scroll to top automatico al caricamento della pagina


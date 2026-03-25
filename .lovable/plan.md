

## Piano: Migliorare tipografia e leggibilità della sezione MousikeIntro

### Modifiche al file `src/components/sections/MousikeIntroSection.tsx`

**Obiettivo**: Dare gerarchia visiva al paragrafo evidenziando parole chiave in `font-semibold text-foreground` mentre il resto rimane in `font-light text-muted-foreground`. Aumentare leggermente la dimensione del testo.

**Parole da evidenziare** (in grassetto/semibold + colore foreground):
- "mousikè" (anche corsivo)
- "l'insieme delle arti"
- "la musica, la danza e il teatro"
- "linguaggi diversi"
- "talento e crescita personale"
- "apprendimento coinvolgente"

**Approccio tecnico**:
- Sostituire la stringa piatta con un array di segmenti `{ text: string, bold: boolean, italic?: boolean }`
- Ogni segmento viene splittato in parole per mantenere l'animazione word-by-word
- Le parole dei segmenti bold ricevono classe `font-semibold text-foreground`, le altre `font-light text-muted-foreground`
- Testo base: `text-xl md:text-2xl leading-relaxed`


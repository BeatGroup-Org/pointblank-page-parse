

## Audit Font — Rimozione font non-SF

### Problema

Il sito usa **3 famiglie di font diverse**, ma solo SF Pro e' caricata. Le altre due (`Playfair Display` e `DM Sans`) non sono caricate tramite `@font-face` ne' da Google Fonts, quindi il browser usa un fallback generico (`serif` o `sans-serif`), creando inconsistenza visiva.

### Occorrenze da correggere

| File | Riga | Font errato | Contesto |
|------|------|-------------|----------|
| `src/components/Header.tsx` | 157 | Playfair Display | Logo "Mousike" |
| `src/components/Footer.tsx` | 9 | Playfair Display | Logo "Mousike" nel footer |
| `src/pages/Eventi.tsx` | 127 | Playfair Display | Titolo "I Prossimi Eventi" |
| `src/components/sections/StatsSection.tsx` | 19 | Playfair Display | Numeri statistiche |
| `src/index.css` | 267 | Playfair Display | Link nel menu fullscreen |
| `src/components/sections/ProgrammaSection.tsx` | 25 | DM Sans | Titoli card programma |
| `src/components/sections/ImpattoSection.tsx` | 28 | DM Sans | Titoli card impatto |

### Soluzione

Rimuovere tutti gli `style={{ fontFamily: ... }}` inline e la dichiarazione in CSS, lasciando che i font SF Pro definiti in `tailwind.config.ts` e `index.css` si applichino automaticamente:

- **Titoli grandi** (logo, titoli sezione, numeri stats, link menu): usano `SF Pro Display` tramite la regola base `h1-h4` e `body`
- **Titoli card**: usano `SF Pro Display` (sono `h3`, gia' coperti dalla regola base)
- **Link menu in CSS**: sostituire `'Playfair Display'` con `'SF Pro Display'`

### File da modificare

1. **`src/components/Header.tsx`** — Rimuovere `style={{ fontFamily: "'Playfair Display', serif" }}` dalla riga 157
2. **`src/components/Footer.tsx`** — Rimuovere `style={{ fontFamily: "'Playfair Display', serif" }}` dalla riga 9
3. **`src/pages/Eventi.tsx`** — Rimuovere `style={{ fontFamily: "'Playfair Display', serif" }}` dalla riga 127
4. **`src/components/sections/StatsSection.tsx`** — Rimuovere `style={{ fontFamily: "'Playfair Display', serif" }}` dalla riga 19
5. **`src/components/sections/ProgrammaSection.tsx`** — Rimuovere `style={{ fontFamily: "'DM Sans', sans-serif" }}` dalla riga 25
6. **`src/components/sections/ImpattoSection.tsx`** — Rimuovere `style={{ fontFamily: "'DM Sans', sans-serif" }}` dalla riga 28
7. **`src/index.css`** riga 267 — Cambiare `font-family: 'Playfair Display', 'SF Pro Display', serif;` in `font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;`

Nessuna altra anomalia riscontrata nel resto del codice.


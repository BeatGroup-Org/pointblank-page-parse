

## Installazione Font SF Pro (Display + Text)

### Font caricati

**SF UI Display** (9 pesi):
- Ultralight, Thin, Light, Regular, Medium, Semibold, Bold, Heavy, Black

**SF UI Text** (11 file, pesi + italici):
- Light, Regular, Medium, Semibold, Bold, Heavy
- Italici: Light, Regular, Medium, Semibold, Bold, Heavy

### Modifiche previste

**1. Copia file font in `public/fonts/`**
- Tutti i 20 file `.ttf` vengono copiati nella cartella `public/fonts/`

**2. Aggiornamento `src/index.css`**
- Rimozione dell'import Google Fonts (DM Sans + Playfair Display)
- Dichiarazioni `@font-face` per SF UI Display (9 pesi, normal)
- Dichiarazioni `@font-face` per SF UI Text (6 pesi normal + 6 italic)
- Body usa `'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif`
- Titoli (h1-h4) usano SF Pro Display con peso bold/semibold
- Testi piccoli e paragrafi possono usare SF Pro Text per migliore leggibilita

**3. Aggiornamento `tailwind.config.ts`**
- Aggiunta font family custom `sans` e `display` nel tema Tailwind

### Risultato
Tutto il sito usera esclusivamente SF Pro, con Display per titoli e UI generale, e Text per contenuti di corpo dove serve massima leggibilita.


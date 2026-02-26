

## Nuova pagina "Amministrazione Trasparente"

### Panoramica
Creare una pagina dedicata `/amministrazione-trasparente` con le informazioni obbligatorie di trasparenza, un'area per scaricare il PDF dei contributi pubblici (placeholder per ora), e i riferimenti normativi. La pagina verra anche aggiunta al footer nei "Link utili".

### Cosa viene creato/modificato

**1. Nuovo file `src/pages/AmministrazioneTrasparente.tsx`**
Pagina con layout coerente al resto del sito (Header + Footer), strutturata in 3 blocchi:

- **Intestazione**: titolo "Amministrazione Trasparente" + descrizione introduttiva
- **Sezione "Contributi Pubblici"**: testo normativo (art. 1, commi 125-129, Legge 124/2017) + card con pulsante "Scarica PDF" (per ora disabilitato o con link placeholder, in attesa del file reale)
- **Sezione "Riferimenti Normativi"**: testo esplicativo sulla normativa

Stile coerente con le altre pagine (uso di `useFadeIn`, sezioni alternate `bg-background`/`bg-secondary`, tipografia esistente).

**2. `src/App.tsx`** -- Aggiungere la route `/amministrazione-trasparente`

**3. `src/components/Footer.tsx`** -- Aggiungere il link "Amministrazione Trasparente" nella colonna "Link utili", puntando alla nuova pagina

### Note
- Il pulsante "Scarica PDF" sara presente ma puntera a un placeholder (`#`) finche l'utente non fornira il file reale da caricare
- Non serve aggiungere la pagina al menu principale (Header) dato che e una pagina informativa/legale, basta il link nel footer

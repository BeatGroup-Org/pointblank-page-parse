

## Menu Animato Fullscreen con GSAP

### Obiettivo
Sostituire il menu attuale con un menu fullscreen animato ispirato al codice fornito, con pannelli che scorrono, link animati e forme decorative di sfondo.

### Dipendenza da aggiungere
- **gsap** (con CustomEase plugin incluso nel pacchetto base)

### Modifiche

**1. `src/components/Header.tsx` - Riscrittura completa**

- Header fisso con logo "Mousike" a sinistra e bottone "Menu/Close" a destra (icona + animata che ruota a 315 gradi all'apertura)
- Al click si apre un overlay fullscreen con:
  - Overlay scuro cliccabile per chiudere
  - 3 pannelli di sfondo che scorrono da destra con stagger
  - Link di navigazione (Programma, Corsi, Produzioni, Impatto, Team, Contatti) che entrano dal basso con rotazione
  - Forme SVG decorative che si animano al hover su ogni link
- Chiusura con ESC, click overlay, o bottone
- Mantiene il comportamento scroll (header con sfondo quando si scrolla)

**2. `src/index.css` - Aggiunta stili per il menu**

Aggiunta di classi CSS dedicate al menu fullscreen:
- `.nav-overlay-wrapper`: contenitore fullscreen nascosto di default
- `.overlay`: sfondo scuro semi-trasparente
- `.menu-content`: pannello menu che scorre da destra
- `.backdrop-layer`: pannelli di sfondo animati con colori scuri
- `.menu-list`: lista dei link con font grande e overflow hidden per le animazioni
- `.nav-link`: link con hover background
- `.ambient-background-shapes` e `.bg-shape`: forme SVG decorative posizionate in modo assoluto
- `.nav-close-btn`: bottone con testo "Menu"/"Close" sovrapposto e icona +
- Responsive: su mobile i link sono piu piccoli

### Comportamento Animazioni (GSAP)
- **Apertura**: overlay fade in, 3 pannelli scorrono da destra con stagger, link entrano dal basso con leggera rotazione
- **Chiusura**: menu scorre fuori a destra, overlay scompare
- **Hover link**: forme SVG di sfondo si animano con scale e fade (back.out easing)
- **Bottone**: testo "Menu" scorre su per mostrare "Close", icona ruota di 315 gradi


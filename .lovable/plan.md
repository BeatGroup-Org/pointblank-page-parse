

## Piano: Word-by-word fade-in nella sezione MousikeIntro

### Modifiche

**1. `src/components/sections/MousikeIntroSection.tsx`**
- Rimuovere il titolo `<h2>` completamente
- Unire i due paragrafi in un unico testo
- Spezzare il testo parola per parola in `<span>` individuali
- Usare `IntersectionObserver` sulla sezione per attivare l'animazione
- Ogni parola riceve un `transition-delay` incrementale (es. 30-50ms per parola) e parte con `opacity: 0 / translateY(4px)`, poi diventa visibile quando la sezione entra nel viewport
- La parola *mousikè* mantiene il tag `<em>`

**2. `src/index.css`** (o stile inline)
- Aggiungere classe `.word-fade-in` con `opacity: 0; transform: translateY(4px); transition: opacity 0.4s, transform 0.4s`
- Classe `.word-fade-in.visible` con `opacity: 1; transform: translateY(0)`

### Approccio tecnico
- Hook custom o `useEffect` + `IntersectionObserver` dentro il componente
- Al trigger, aggiunge classe `visible` a tutte le parole con delay scaglionato via `style={{ transitionDelay: \`${i * 40}ms\` }}`
- Nessun titolo, solo il testo centrato con sfondo `bg-secondary`


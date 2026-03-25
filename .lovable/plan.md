

## Problema

La sezione "Un Impatto Sociale Misurabile" (riga 171) ha la classe `fade-in-section` ma **non ha un `ref` collegato a `useFadeIn()`**. Senza il ref, l'IntersectionObserver non aggiunge mai la classe `visible`, quindi l'opacità resta a 0 e la sezione è completamente invisibile.

## Soluzione

1. **Creare un ref** con `useFadeIn()` nel componente `Produzioni` (aggiungere `const impattoRef = useFadeIn();`)
2. **Collegare il ref** al `<div>` con classe `fade-in-section` alla riga 171: `ref={impattoRef}`

Modifica unica nel file `src/pages/Produzioni.tsx`.


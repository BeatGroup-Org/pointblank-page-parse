

## Aggiungere la sezione Team nella pagina Chi Siamo (condivisa con la Homepage)

### Cosa cambia

La sezione Team viene aggiunta nella pagina "Chi Siamo" subito dopo la CTA finale e prima del Footer. Per evitare duplicazione di codice, il componente `TeamSection` gia' esistente viene semplicemente importato e riutilizzato — lo stesso identico componente usato in homepage.

Questo significa che ogni modifica futura al componente `TeamSection.tsx` si riflettera' automaticamente sia in homepage che in Chi Siamo.

### Dettaglio tecnico

**File: `src/pages/ChiSiamo.tsx`**

1. Aggiungere l'import di `TeamSection` da `@/components/sections/TeamSection`
2. Inserire `<TeamSection />` dopo la sezione CTA finale (riga 240) e prima di `</main>`

Nessuna modifica necessaria a `TeamSection.tsx` ne' alla homepage: il componente e' gia' autonomo e riutilizzabile.


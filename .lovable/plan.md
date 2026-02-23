

## Rimuovere la sezione Video Promo dalla homepage

### Cosa cambia

La sezione Video Promo viene rimossa dalla homepage.

### Dettaglio tecnico

**File: `src/pages/Index.tsx`**

- Rimuovere l'import di `VideoPromoSection`
- Rimuovere `<VideoPromoSection />` dal JSX

La sequenza aggiornata sarà:
Hero > Stats > Partner > Eventi > Corsi > Produzioni > Impatto > Team > CTA

**File: `src/components/sections/VideoPromoSection.tsx`**

- Il file può essere eliminato in quanto non più utilizzato.


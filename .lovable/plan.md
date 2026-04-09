

## Piano: Tracciamento conversioni Google Ads sui click di contatto

### Cosa fare

1. **Creare un helper centralizzato** `src/lib/trackConversion.ts` con la funzione:
   ```ts
   export const trackContactConversion = () => {
     if (typeof window.gtag === 'function') {
       window.gtag('event', 'conversion', {
         'send_to': 'AW-18032101058/OLHICIX5ypIcEMKNsJZD'
       });
     }
   };
   ```

2. **Aggiungere la dichiarazione TypeScript per gtag** in `src/vite-env.d.ts`:
   ```ts
   declare function gtag(...args: any[]): void;
   interface Window { gtag: typeof gtag; }
   ```

3. **Aggiungere `onClick={trackContactConversion}`** ai link di contatto (tel:, mailto:, wa.me) in questi file:
   - `src/pages/Contatti.tsx` — 3 bottoni (WhatsApp, Email, Chiama)
   - `src/components/ContactFab.tsx` — 2 link (tel, mailto)
   - `src/components/Footer.tsx` — 2 link (tel, mailto)
   - `src/components/Header.tsx` — 2 link (tel, mailto)
   - `src/pages/EventoDetail.tsx` — link tel, mailto, e bottone WhatsApp
   - `src/components/IscrizioneForm.tsx` — nel `window.open` del WhatsApp (chiamare prima di `window.open`)

### Note
- Non si blocca la navigazione: `onClick` viene eseguito prima che il browser segua l'`href`
- Il check `typeof window.gtag === 'function'` evita errori se gtag non è caricato


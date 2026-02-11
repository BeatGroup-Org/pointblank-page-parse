

## Nuova sezione Video Promo prima del Programma Educativo

### Cosa cambia

Viene creato un nuovo componente `VideoPromoSection` e inserito nella homepage tra `StatsSection` e `ProgrammaSection`.

### Dettagli

**Nuovo file: `src/components/sections/VideoPromoSection.tsx`**

- Un tag `<video>` a piena larghezza con `autoPlay`, `loop`, `muted`, `playsInline` e `preload="metadata"` (usa `metadata` invece di `auto` per non scaricare tutto il video subito, riducendo il peso iniziale)
- Nessun testo, nessun overlay: solo il video
- Classe `w-full` per adattarsi al contenitore, senza padding extra

**File modificato: `src/pages/Index.tsx`**

- Import di `VideoPromoSection`
- Inserimento tra `<StatsSection />` e `<ProgrammaSection />`

### Note tecniche

- `preload="metadata"` carica solo i metadati del video inizialmente, avviando il download completo solo quando il video entra in viewport (il browser gestisce questo automaticamente con autoplay)
- `muted` e `playsInline` garantiscono compatibilita con tutti i browser e dispositivi mobile


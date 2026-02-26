
## Rimuovere tutti gli eventi tranne Dario Panza

### Cosa cambia
L'array `eventi` in `src/data/eventi.ts` verra ridotto al solo evento di Dario Panza (id: 1). Gli eventi con id 2-7 (Jacopo Carlini, Musical Alice, Concerti "Ma che Musica Maestro", Saggi di Fine Anno) verranno eliminati.

### File da modificare

**`src/data/eventi.ts`** -- Rimuovere le righe 101-184 (eventi id 2-7), mantenendo solo l'evento Dario Panza e la chiusura dell'array.

### Impatto
- La pagina `/eventi` mostrera solo la card di Dario Panza
- La sezione "Prossimi Eventi" in homepage mostrera solo una card invece di tre
- Nessun altro file da modificare: `EventCard`, `EventiPreviewSection` e `Eventi.tsx` iterano dinamicamente sull'array

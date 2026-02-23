

## Separare immagine Hero/Anteprima dalla Locandina + aggiornare evento Panza

### Cosa cambia

Ogni evento avra' due immagini distinte:
- **`immagine`**: usata per l'hero della pagina dettaglio e per le card di anteprima (formato 16:9, orizzontale)
- **`locandina`** (nuovo campo opzionale): usata nella sidebar sticky e nel lightbox (formato A4, verticale)

Se `locandina` non e' presente, la sidebar non viene mostrata per quell'evento.

Per l'evento Dario Panza, l'hero viene aggiornato con la nuova foto orizzontale fornita.

### Dettaglio tecnico

**1. File: `src/data/eventi.ts`**

Aggiungere il campo `locandina?: string` all'interfaccia `Evento` (dopo `immagine`).

Per l'evento Panza (id: 1):
- `immagine` diventa la nuova URL hero fornita (`Dario Panza Hero.png`)
- `locandina` prende la URL attuale della locandina (`Dario Panza (1).png`)

```
locandina?: string;
```

**2. File: `src/pages/EventoDetail.tsx`**

Sostituire `evento.immagine` con `evento.locandina` nei due punti dove appare la sidebar/locandina:
- Riga 101 (mobile): `src={evento.locandina}`
- Riga 209 (desktop sticky): `src={evento.locandina}`
- Riga 262 (lightbox, caso `-1`): `src={evento.locandina}`

Condizionare la visibilita' della sidebar e del blocco mobile alla presenza di `evento.locandina`:
- Avvolgere il blocco mobile (righe 95-106) con `{evento.locandina && (...)}`
- Avvolgere il blocco desktop (righe 202-215) con `{evento.locandina && (...)}`

L'hero (riga 56) resta con `evento.immagine` -- nessuna modifica.

**3. File: `src/components/EventCard.tsx`**

Nessuna modifica necessaria: le card usano gia' `evento.immagine`.


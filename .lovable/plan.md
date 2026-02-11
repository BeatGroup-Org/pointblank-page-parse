
## Ristrutturazione Tile Team: Espansione al Click

### Comportamento attuale vs. richiesto

**Attuale**: Ogni tile ha sempre visibile l'immagine sopra e il box info sotto, con un pulsante "Info" che mostra/nasconde solo la descrizione.

**Richiesto (da screenshot)**: 
- Stato normale: le tile mostrano **solo l'immagine** a tutta altezza, senza testo visibile
- Al click su una tile, questa si **allarga** rispetto alle altre e mostra un **pannello bianco sovrapposto** in basso con nome, ruolo e descrizione
- Le tile non selezionate restano piu strette, mostrando solo l'immagine

### Modifiche previste

**File: `src/components/sections/TeamSection.tsx`**

1. **Rimozione area info separata**: Eliminare la struttura attuale con immagine + box info sotto. Ogni tile sara un unico div con immagine di sfondo a tutta altezza (~450px)

2. **Logica di espansione**: 
   - Stato di default: tutte le tile hanno `basis-[25%]` su desktop, mostrando solo l'immagine
   - Al click: la tile selezionata si espande a `basis-[45%]` e le altre si restringono
   - Su mobile: `basis-[70%]` di default, `basis-[85%]` quando espansa

3. **Pannello info overlay**:
   - Quando una tile e selezionata, appare un pannello bianco posizionato `absolute` in basso a destra della tile
   - Contiene: nome (font-bold grande), ruolo (testo piccolo grigio), e descrizione
   - Transizione animata con `transition-all duration-500`

4. **Rimozione pulsante Info/Chiudi**: Non serve piu un pulsante esplicito -- il click sull'intera tile apre/chiude il pannello

5. **Transizioni fluide**: `transition-[flex-basis]` sulle tile per animare l'espansione/contrazione

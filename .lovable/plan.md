

## Header a Pillola con Barra di Scorrimento

### Cosa cambia

L'header attuale (barra piena da bordo a bordo) diventa una **pillola centrata** con angoli arrotondati e una **barra di progresso** sottile che indica quanto si e' scrollata la pagina.

### Dettagli visivi

- **Forma a pillola**: l'header ha `border-radius` arrotondato, un leggero margine dai bordi, e un aspetto "flottante"
- **Barra di scorrimento**: una sottile linea colorata nella parte bassa della pillola che si riempie da sinistra a destra man mano che si scrolla la pagina (0% in cima, 100% in fondo)
- Quando si e' in cima alla pagina, la pillola e' trasparente; quando si scrolla, diventa con sfondo sfumato e backdrop-blur
- Il menu fullscreen rimane invariato

### Modifiche tecniche

**1. `src/components/Header.tsx`**

- Aggiungere stato `scrollProgress` (0-1) calcolato nel listener scroll esistente
- Modificare le classi dell'header: aggiungere margin top/orizzontale, border-radius pieno (`rounded-full`), max-width contenuto e centratura
- Aggiungere un `div` in basso all'header come barra di progresso, con `width` in percentuale legata a `scrollProgress`
- Il bottone Menu e il logo restano nelle stesse posizioni

**2. `src/index.css`**

- Aggiungere stile per la barra di progresso (altezza 2-3px, colore accent, transizione smooth, border-radius per integrarsi nella pillola)

### Struttura risultante

```text
+--------------------------------------------------+
|  Mousike               [====progress====]   Menu  |
+--------------------------------------------------+
         ^                                    ^
     rounded-full                        rounded-full
     margini laterali + top
```

La barra di progresso sara' posizionata in basso dentro la pillola, sottile e discreta.


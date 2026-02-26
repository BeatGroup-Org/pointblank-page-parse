

## Unire "La Nostra Scuola" e "Prossimi Eventi" in un unico fascione

### Cosa cambia

Le due sezioni separate (`ScuolaGallerySection` e `EventiPreviewSection`) verranno sostituite da un unico componente che le affianca su due colonne:

```text
+-------------------------------+-------------------------------+
|     LA NOSTRA SCUOLA          |       PROSSIMI EVENTI         |
|     (galleria foto,           |       (lista eventi,          |
|      50% larghezza)           |        50% larghezza)         |
+-------------------------------+-------------------------------+
```

### Struttura del nuovo componente

Creare `src/components/sections/ScuolaEventiSection.tsx` che combina i due contenuti:

- **Layout**: Una `section` con sfondo unico (`bg-background`) e un grid `grid-cols-1 lg:grid-cols-2` per affiancare le due meta
- **Colonna SX -- La Nostra Scuola**: Titolo "LA NOSTRA SCUOLA", sottotitolo, griglia 2x2 (o 2x3) di miniature cliccabili con lightbox (recupera la logica attuale del lightbox)
- **Colonna DX -- Prossimi Eventi**: Titolo "PROSSIMI EVENTI", sottotitolo, lista verticale dei primi 3 eventi (card compatte, impilate), bottone "Vedi tutti gli eventi"
- Su mobile le due colonne si impilano verticalmente (prima Scuola, poi Eventi)

### File coinvolti

| File | Azione |
|------|--------|
| `src/components/sections/ScuolaEventiSection.tsx` | Nuovo -- componente combinato |
| `src/pages/Index.tsx` | Rimuovere import di `EventiPreviewSection` e `ScuolaGallerySection`, aggiungere import di `ScuolaEventiSection` al loro posto |

I file originali `EventiPreviewSection.tsx` e `ScuolaGallerySection.tsx` restano nel progetto (usati altrove o come fallback) ma non verranno piu importati nella homepage.

### Dettagli tecnici

- La colonna SX mostra le 8 foto in una griglia 2 colonne con aspect-ratio quadrato, con click per aprire il lightbox (Dialog) -- stessa logica attuale
- La colonna DX mostra `eventi.slice(0, 3)` come card compatte (immagine piccola a sinistra, testo a destra) per adattarsi allo spazio ridotto, con link "Vedi tutti" in fondo
- Padding verticale uniforme `py-24`, gap tra colonne `gap-12`
- Altezza minima delle due colonne allineata per un aspetto bilanciato


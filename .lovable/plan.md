

## Aggiungere frecce di navigazione e lightbox alla gallery "La Nostra Scuola"

### Cosa cambia

1. La gallery passa dal marquee automatico a un **Embla Carousel** con frecce di navigazione (come la sezione Corsi), mantenendo le immagini grandi e il layout orizzontale.
2. Cliccando su un'immagine si apre un **lightbox/dialog a schermo intero** con zoom dell'immagine, navigazione tra le foto e chiusura con X o click fuori.

### Dettaglio tecnico

**File modificato: `src/components/sections/ScuolaGallerySection.tsx`**

- Sostituire il marquee con `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` (da `@/components/ui/carousel`, come in CorsiSection)
- Frecce posizionate in alto a destra sopra le immagini (stesso pattern di CorsiSection)
- Ogni `CarouselItem` con larghezza simile a prima (~400px, usando `basis-[85%] sm:basis-[45%] lg:basis-[30%]`)
- Aggiungere un `Dialog` (da `@/components/ui/dialog`) come lightbox:
  - Click su immagine apre il dialog con l'immagine a dimensione piena
  - Stato React per tracciare quale immagine e' selezionata (`selectedIndex`)
  - Frecce sinistra/destra dentro il dialog per navigare tra le foto
  - Pulsante X per chiudere
  - Sfondo scuro semitrasparente
- Rimuovere la classe `animate-marquee-slow` (non piu necessaria)

**Nessun nuovo file o dipendenza richiesta** - si riutilizzano Carousel e Dialog gia presenti nel progetto.


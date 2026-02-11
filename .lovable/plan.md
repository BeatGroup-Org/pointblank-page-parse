

## Foto in bianco e nero per le card dei Percorsi Formativi

### Cosa cambia

Ogni card del carosello ricevera un'immagine di sfondo in bianco e nero, tematica rispetto al corso. L'immagine sostituira il gradient colorato come sfondo principale, mantenendo l'overlay scuro per la leggibilita del testo.

### Immagini scelte (da Unsplash, gratuite)

| Corso | Foto | Motivazione |
|-------|------|-------------|
| Musica classica | Violino / orchestra classica | Strumenti ad arco, atmosfera classica |
| Musica pop | Microfono da studio / cantante | Ambiente pop/studio di registrazione |
| Strumenti popolari calabresi | Chitarra acustica / strumenti folk | Richiamo alla musica tradizionale |
| Musicoterapia e teatroterapia | Mani su tamburo / cerchio terapeutico | Aspetto terapeutico e sensoriale |
| Certificazioni Trinity | Pianoforte / spartiti musicali | Rigore accademico, esame formale |

### Modifiche tecniche

**File: `src/components/sections/CorsiSection.tsx`**

1. Aggiungere un campo `image` a ogni oggetto nell'array `corsi` con URL Unsplash (con parametro `&grayscale` per il bianco e nero)
2. Sostituire il `<div>` con gradient colorato con un tag `<img>` che:
   - Usa `object-cover` per riempire la card
   - Applica il filtro `grayscale` via CSS (`className="grayscale"`)
   - Mantiene l'effetto zoom on hover (`group-hover:scale-105`)
3. Mantenere l'overlay scuro (`bg-gradient-to-t from-black/70`) sopra l'immagine per garantire leggibilita del testo
4. Rimuovere il campo `gradient` dall'array dato che non servira piu

### Risultato visivo

Le card avranno lo stesso layout attuale (numerazione, titolo, link "Scopri di piu") ma con una foto in bianco e nero sullo sfondo invece del gradient colorato, con effetto zoom al passaggio del mouse.


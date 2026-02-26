
## Allineare la sezione Corsi in homepage con la pagina Formazione

### Problema
La sezione "I Nostri Percorsi Formativi" in homepage mostra corsi generici (Musica classica, Musica pop, Strumenti popolari calabresi, ecc.) che non corrispondono ai corsi reali della pagina `/formazione` (Canto Pop, Pianoforte, Chitarra, Batteria, Basso, Violino, Musical).

### Cosa cambia

**`src/components/sections/CorsiSection.tsx`** -- Aggiornare l'array `corsi` per riflettere i 7 percorsi reali:

| Vecchio | Nuovo |
|---------|-------|
| Musica classica | Canto Pop |
| Musica pop | Pianoforte |
| Strumenti popolari calabresi | Chitarra Classica, Acustica ed Elettrica |
| Musicoterapia e teatroterapia | Batteria |
| Certificazioni Trinity | Basso |
| *(nuovo)* | Violino |
| *(nuovo)* | Musical |

- Le immagini verranno aggiornate con foto Unsplash pertinenti allo strumento (chitarra, batteria, violino, ecc.)
- I link "Scopri di piu" punteranno tutti a `/formazione`
- Nessun altro file da modificare

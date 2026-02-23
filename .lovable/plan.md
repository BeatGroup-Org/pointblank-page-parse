

## Pagina Staff / Maestri

### Cosa fa

Crea una nuova pagina dedicata `/staff` che presenta ogni membro del team in modo approfondito, con sezioni orizzontali alternate (foto a sinistra + testo a destra, poi foto a destra + testo a sinistra, ecc.).

I dati dei membri sono gli stessi gia' definiti in `TeamSection.tsx`. Verranno estratti in un file dati condiviso cosi' che sia la homepage (carousel anteprima) sia la pagina staff usino la stessa fonte.

### Layout

Ogni membro occupa una sezione a tutto schermo con layout a due colonne che si alternano:

```text
+--------------------------------------------------+
|  [Header]                                        |
+--------------------------------------------------+
|                                                  |
|  I NOSTRI MAESTRI          (titolo grande)        |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  [FOTO]          |  Nome                         |
|  aspect 4/5      |  Ruolo (badge/sottotitolo)    |
|                  |  Descrizione lunga             |
|                  |  ...                           |
|                                                  |
+--------------------------------------------------+
|                                                  |
|                  |  Nome                [FOTO]    |
|  Descrizione     |  Ruolo              aspect 4/5 |
|  lunga ...       |                               |
|                  |                               |
|                                                  |
+--------------------------------------------------+
|                  ...ecc...                        |
+--------------------------------------------------+
|  [Footer]                                        |
+--------------------------------------------------+
```

Su mobile le colonne si impilano verticalmente (foto sopra, testo sotto).

### Stile

- Riprende lo stile "Chi Siamo": sfondo chiaro, titoli grandi `font-black uppercase`, padding generoso, animazioni `useFadeIn`
- Le immagini verticali hanno `aspect-[4/5]` con `object-cover`, come gia' usato nella pagina Chi Siamo
- L'alternanza foto/testo usa lo stesso pattern della sezione "Dentro le scuole" (foto SX) e "La musica e' di tutti" (foto DX) gia' presenti in Chi Siamo
- Su desktop, le immagini avranno un leggero margine negativo superiore (`md:-mt-16`) per dare dinamismo, come gia' fatto in Chi Siamo

### Dettaglio tecnico

**1. Nuovo file: `src/data/team.ts`**

Estrarre l'array `team` da `TeamSection.tsx` in un file dati dedicato con interfaccia tipizzata:

```typescript
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const team: TeamMember[] = [
  { name: "Orlando Vescio", role: "...", image: "...", description: "..." },
  { name: "Chiara Vescio", ... },
  { name: "Eugenio Nicolazzo", ... },
];
```

**2. Aggiornare: `src/components/sections/TeamSection.tsx`**

- Rimuovere l'array `team` locale
- Importare `team` da `@/data/team`
- Il bottone "Scopri il team" diventera' un `Link` a `/staff`

**3. Nuovo file: `src/pages/Staff.tsx`**

La pagina completa con:
- Header e Footer
- Sezione apertura con titolo grande ("I Nostri Maestri")
- Per ogni membro: sezione con griglia a 2 colonne alternata
  - Indice pari: foto a sinistra, testo a destra
  - Indice dispari: testo a sinistra, foto a destra
- Ogni sezione usa `useFadeIn` per l'animazione di entrata
- Su mobile: colonna singola, foto sopra testo sotto
- Separatore visivo tra le sezioni (linea sottile o cambio sfondo alternato `bg-background` / `bg-secondary`)

**4. Aggiornare: `src/App.tsx`**

Aggiungere la rotta:
```
<Route path="/staff" element={<Staff />} />
```

**5. Aggiornare: `src/components/Header.tsx`**

Aggiungere "Staff" ai `navLinks` oppure aggiornare il link "Team" per puntare a `/staff`.


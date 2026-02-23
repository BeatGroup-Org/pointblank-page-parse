

## Aggiornamento completo Staff

### Cosa cambia

1. L'interfaccia `TeamMember` viene estesa con un campo `shortDescription` (descrizione di anteprima per la homepage) separato dalla `description` completa (per la pagina Staff)
2. L'array `team` passa da 3 a 9 membri, con tutti i dati forniti (nuove foto, ruoli aggiornati, descrizioni complete)
3. La `TeamSection` in homepage usa `shortDescription` nel pannello espandibile
4. La pagina `/staff` usa `description` (testo lungo) e supporta paragrafi multipli

### Dettaglio tecnico

**1. `src/data/team.ts`** -- Nuova interfaccia e 9 membri

```typescript
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  shortDescription: string;  // anteprima per homepage
  description: string;       // testo completo per pagina staff
}
```

I 9 membri nell'ordine fornito:
1. Orlando Vescio -- Pianoforte, Fisarmonica | Presidente e Direttore Artistico
2. Chiara Vescio -- Canto Pop Rock | Direttrice Artistica
3. Eugenio Nicolazzo -- Canto Pop e Musical
4. Valentina Monteleone -- Pianoforte
5. Vittorio Lanzo -- Chitarra Classica, Acustica ed Elettrica
6. Domenico Lico -- Batteria
7. Deborah Stranges -- Violino
8. Marco Losardo -- Canto Pop Rock
9. Bianca Bertucci -- Basso Elettrico

Tutte le foto aggiornate con i nuovi URL Supabase forniti.

**2. `src/components/sections/TeamSection.tsx`** -- Usare `shortDescription`

Cambiare `member.description` in `member.shortDescription` nel pannello overlay del carousel (riga 99).

**3. `src/pages/Staff.tsx`** -- Nessuna modifica strutturale

La pagina funziona gia' con l'array `team` e mostra `member.description`. Funzionera' automaticamente con i 9 membri e le descrizioni lunghe.


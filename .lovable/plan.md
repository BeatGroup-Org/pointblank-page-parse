
## Aggiornamento Sezione Team: Foto e Dati Reali

### Cosa cambia

Sostituzione dei 6 membri placeholder con i **3 membri reali** di Mousike, con foto e descrizioni fornite.

### Dati aggiornati

| Nome | Ruolo | Foto |
|------|-------|------|
| Orlando Vescio | Pianista e direttore artistico | URL Supabase fornito |
| Chiara Vescio | Cantante e vocal coach | URL Supabase fornito |
| Eugenio Nicolazzo | Interprete e performer | URL Supabase fornito |

### Modifiche tecniche

**File: `src/components/sections/TeamSection.tsx`**

1. **Array `team`**: Sostituzione dei 6 membri fittizi con i 3 reali, aggiungendo un campo `image` con gli URL Supabase forniti e le descrizioni fornite
2. **Tag `<img>`**: Sostituzione di `src="/placeholder.svg"` con `src={member.image}`, rimozione di `opacity-40` per mostrare le foto a piena visibilita
3. **Ruoli aggiornati**:
   - Orlando Vescio: "Pianista e Direttore Artistico"
   - Chiara Vescio: "Cantante e Vocal Coach"
   - Eugenio Nicolazzo: "Interprete e Performer"

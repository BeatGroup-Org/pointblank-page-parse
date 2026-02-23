

## Titoli homepage tutti in maiuscolo

### Cosa cambia

Tutti i titoli `<h2>` e `<h3>` delle sezioni homepage vengono convertiti in maiuscolo per uniformare lo stile visivo. Alcune sezioni lo hanno gia (Corsi, Team, Scuola Gallery), le altre vengono allineate.

### Sezioni da aggiornare

| Sezione | Titolo attuale | Titolo aggiornato |
|---------|---------------|-------------------|
| StatsSection | "Il nostro impegno" | "IL NOSTRO IMPEGNO" + classe `uppercase` |
| EventiPreviewSection | "Prossimi Eventi" | "PROSSIMI EVENTI" + classe `uppercase` |
| PartnerSection | "Rete di collaborazioni" | "RETE DI COLLABORAZIONI" + classe `uppercase` |
| ProduzioniSection | "Produciamo cultura" | "PRODUCIAMO CULTURA" + classe `uppercase` |
| ImpattoSection | "Impatto oltre la musica" | "IMPATTO OLTRE LA MUSICA" + classe `uppercase` |
| CtaSection | "Vuoi iniziare un percorso musicale?" / "Sei una scuola o un ente?" | Stessi testi + classe `uppercase` |

### Sezioni gia conformi (nessuna modifica)

- **HeroSection**: h1 del sito, resta com'e
- **CorsiSection**: gia in maiuscolo ("I NOSTRI PERCORSI")
- **TeamSection**: gia in maiuscolo ("IL NOSTRO TEAM")
- **ScuolaGallerySection**: gia in maiuscolo ("LA NOSTRA SCUOLA")

### Dettaglio tecnico

Per ogni sezione da aggiornare si aggiunge la classe `uppercase` al tag `<h2>` (o `<h3>` per CtaSection) e si converte il testo nel markup in maiuscolo per coerenza. Nessun nuovo file, nessuna nuova dipendenza.




## Aggiornamento contatti reali su tutto il sito

### Cosa cambia

Sostituire tutti i dati placeholder con i contatti reali della scuola in ogni punto del sito dove compaiono.

### Dati reali

- **Facebook**: https://www.facebook.com/scuoladimusicalamezia
- **Instagram**: https://www.instagram.com/scuoladimusicamousike/
- **Indirizzo**: Via Duca d'Aosta, 23, 88046 Lamezia Terme CZ
- **Telefono/WhatsApp**: +39 333 956 8927
- **Email**: lasciata in sospeso (mantengo il placeholder `info@mousike.it` per ora)
- **YouTube**: nessun link fornito, rimuovo il link o lo lascio con `#`

### File da modificare

**1. `src/components/Footer.tsx`**
- Indirizzo: "Via Duca d'Aosta, 23, 88046 Lamezia Terme CZ"
- Telefono: "+39 333 956 8927"
- Social: link reali a Facebook e Instagram, rimuovo YouTube (o lo lascio disabilitato)

**2. `src/components/ContactFab.tsx`**
- Indirizzo + link Google Maps aggiornato
- Telefono: `tel:+393339568927` e testo "+39 333 956 8927"
- Social: link reali a Facebook e Instagram, rimuovo YouTube

**3. `src/data/eventi.ts`**
- `indirizzo`: "Via Duca d'Aosta, 23, 88046 Lamezia Terme CZ"
- `contattoTelefono`: "+39 333 956 8927"
- `whatsappNumero`: "393339568927"

Nessun nuovo file, solo aggiornamento dati in 3 file esistenti.


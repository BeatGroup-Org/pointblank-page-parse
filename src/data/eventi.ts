export interface Evento {
  id: number;
  titolo: string;
  data: string;
  dataISO?: string;
  ora?: string;
  oraFine?: string;
  luogo: string;
  indirizzo?: string;
  immagine: string;
  descrizione?: string;
  descrizioneEstesa?: string;
  categoria?: string;
  rassegna?: string;
  ingresso?: "gratuito" | "a pagamento";
  prezzoInfo?: string;
  contattoNome?: string;
  contattoTelefono?: string;
  contattoEmail?: string;
  whatsappNumero?: string;
  gallery?: string[];
}

export const eventi: Evento[] = [
  {
    id: 1,
    titolo: "Masterclass di Batteria con Dario Panza",
    data: "13–14 Mar 2026",
    dataISO: "2026-03-13",
    ora: "10:00",
    oraFine: "18:00",
    luogo: "Lamezia Terme",
    indirizzo: "Via Duca d'Aosta, 23, 88046 Lamezia Terme CZ",
    categoria: "Masterclass",
    rassegna: "Stagione Concertistica 2025/26",
    ingresso: "a pagamento",
    prezzoInfo: "Contributo 20€",
    descrizione:
      "Batterista di fama nazionale, Dario Panza guiderà una masterclass dedicata al ritmo, alla tecnica e all'espressività nella batteria moderna.",
    descrizioneEstesa:
      "Un weekend intensivo con Dario Panza, batterista di fama nazionale. Due giorni dedicati al ritmo, alla tecnica e all'espressività nella batteria moderna.\n\nLa masterclass è aperta a batteristi di tutti i livelli e prevede sessioni pratiche, ascolto guidato e momenti di confronto. Ogni partecipante avrà la possibilità di suonare e ricevere feedback diretto dal maestro.\n\nAl termine della masterclass è previsto un momento di jam session aperto al pubblico.",
    contattoNome: "Segreteria Mousikè",
    contattoTelefono: "+39 333 956 8927",
    contattoEmail: "info@mousike.it",
    whatsappNumero: "393339568927",
    immagine:
      "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Eventi/Dario%20Panza%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9FdmVudGkvRGFyaW8gUGFuemEgKDEpLnBuZyIsImlhdCI6MTc3MTg0MzQzNCwiZXhwIjoyNjM1ODQzNDM0fQ.aiDjah7zqfQQ9zoVEQNdSQqZ9xHQKTyz_fsGrAlbCTE",
    gallery: [
      "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Eventi/Dario%20Panza%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9FdmVudGkvRGFyaW8gUGFuemEgKDEpLnBuZyIsImlhdCI6MTc3MTg0MzQzNCwiZXhwIjoyNjM1ODQzNDM0fQ.aiDjah7zqfQQ9zoVEQNdSQqZ9xHQKTyz_fsGrAlbCTE",
      "https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    titolo: "Masterclass di Pianoforte e Composizione con Jacopo Carlini",
    data: "10–11 Apr 2026",
    dataISO: "2026-04-10",
    ora: "10:00",
    oraFine: "18:00",
    luogo: "Lamezia Terme",
    categoria: "Masterclass",
    rassegna: "Stagione Concertistica 2025/26",
    ingresso: "a pagamento",
    prezzoInfo: "Contributo 20€",
    descrizione:
      "Un doppio appuntamento con il pianista e compositore Jacopo Carlini: una masterclass formativa seguita da un'esibizione dal vivo.",
    immagine:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    titolo: "Concerto di Jacopo Carlini con Chiara Vescio",
    data: "10–11 Apr 2026",
    dataISO: "2026-04-10",
    ora: "21:00",
    luogo: "Lamezia Terme",
    categoria: "Concerto",
    rassegna: "Stagione Concertistica 2025/26",
    ingresso: "gratuito",
    descrizione:
      "Un'esibizione dal vivo con il pianista Jacopo Carlini e la vocalist Chiara Vescio.",
    immagine:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    titolo: 'Musical "Alice nel Paese delle Meraviglie"',
    data: "Maggio 2026",
    luogo: "Teatro Costabile, Lamezia Terme",
    categoria: "Musical",
    rassegna: "Produzioni Mousikè",
    ingresso: "a pagamento",
    descrizione:
      "Un grande spettacolo musicale che coinvolge allievi e insegnanti in una produzione ricca di musica, danza e scenografie.",
    immagine:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    titolo: 'Concerti "Ma che Musica Maestro"',
    data: "Fine Maggio 2026",
    luogo: "Lamezia Terme",
    categoria: "Concerto",
    rassegna: "Ma che Musica Maestro",
    ingresso: "gratuito",
    descrizione:
      "Serie di concerti dedicati ai laboratori dell'I.C. Perri Pitagora Don Milani con oltre 300 alunni.",
    immagine:
      "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    titolo: "Saggio di Fine Anno — Musica Pop",
    data: "Giugno 2026",
    luogo: "Lamezia Terme",
    categoria: "Saggio",
    rassegna: "Produzioni Mousikè",
    ingresso: "gratuito",
    descrizione:
      "Grande appuntamento per celebrare la conclusione dell'anno accademico con circa 100 musicisti che si esibiranno.",
    immagine:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    titolo: "Saggio di Fine Anno — Musica Classica",
    data: "Giugno 2026",
    luogo: "Lamezia Terme",
    categoria: "Saggio",
    rassegna: "Produzioni Mousikè",
    ingresso: "gratuito",
    descrizione:
      "Grande appuntamento per celebrare la conclusione dell'anno accademico con circa 100 musicisti che si esibiranno.",
    immagine:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&h=400&fit=crop",
  },
];

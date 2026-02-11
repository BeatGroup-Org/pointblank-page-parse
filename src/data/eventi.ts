export interface Evento {
  id: number;
  titolo: string;
  data: string;
  ora?: string;
  luogo: string;
  immagine: string;
  descrizione?: string;
}

export const eventi: Evento[] = [
  {
    id: 1,
    titolo: "Masterclass di Batteria con Dario Panza",
    data: "13–14 Mar 2026",
    luogo: "Lamezia Terme",
    descrizione:
      "Batterista di fama nazionale, Dario Panza guiderà una masterclass dedicata al ritmo, alla tecnica e all'espressività nella batteria moderna.",
    immagine:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    titolo: "Masterclass di Pianoforte e Composizione con Jacopo Carlini",
    data: "10–11 Apr 2026",
    luogo: "Lamezia Terme",
    descrizione:
      "Un doppio appuntamento con il pianista e compositore Jacopo Carlini: una masterclass formativa seguita da un'esibizione dal vivo.",
    immagine:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    titolo: "Concerto di Jacopo Carlini con Chiara Vescio",
    data: "10–11 Apr 2026",
    luogo: "Lamezia Terme",
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
    descrizione:
      "Grande appuntamento per celebrare la conclusione dell'anno accademico con circa 100 musicisti che si esibiranno.",
    immagine:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&h=400&fit=crop",
  },
];

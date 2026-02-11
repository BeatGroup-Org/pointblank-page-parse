export interface Evento {
  id: number;
  titolo: string;
  data: string;
  ora: string;
  luogo: string;
  immagine: string;
}

export const eventi: Evento[] = [
  {
    id: 1,
    titolo: "Open Day — Scopri Mousikè",
    data: "15 Mar 2026",
    ora: "10:00",
    luogo: "Lamezia Terme",
    immagine: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    titolo: "Workshop Produzione Musicale",
    data: "22 Mar 2026",
    ora: "15:00",
    luogo: "Lamezia Terme",
    immagine: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    titolo: "Masterclass DJ Set con Andrea Ferro",
    data: "05 Apr 2026",
    ora: "18:30",
    luogo: "Lamezia Terme",
    immagine: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    titolo: "Concerto di Fine Anno Accademico",
    data: "12 Apr 2026",
    ora: "21:00",
    luogo: "Teatro Comunale, Lamezia Terme",
    immagine: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    titolo: "Seminario Sound Design per Film",
    data: "28 Apr 2026",
    ora: "14:00",
    luogo: "Online",
    immagine: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    titolo: "Summer Music Camp — Iscrizioni Aperte",
    data: "10 Mag 2026",
    ora: "09:00",
    luogo: "Lamezia Terme",
    immagine: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop",
  },
];

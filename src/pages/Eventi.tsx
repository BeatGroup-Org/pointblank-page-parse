import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

interface Evento {
  id: number;
  titolo: string;
  data: string;
  ora: string;
  luogo: string;
  immagine: string;
}

const eventi: Evento[] = [
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

const EventCard = ({ evento }: { evento: Evento }) => (
  <div className="event-card group">
    {/* Image */}
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={evento.immagine}
        alt={evento.titolo}
        className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
        <MapPin size={12} />
        {evento.luogo}
      </span>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-white leading-snug mb-4">
        {evento.titolo}
      </h3>

      <div className="mt-auto flex items-end justify-between">
        <div className="flex gap-6">
          <div>
            <span className="event-label">date</span>
            <div className="flex items-center gap-1.5 text-white text-sm font-medium">
              <Calendar size={13} className="text-white/50" />
              {evento.data}
            </div>
          </div>
          <div>
            <span className="event-label">time</span>
            <div className="flex items-center gap-1.5 text-white text-sm font-medium">
              <Clock size={13} className="text-white/50" />
              {evento.ora}
            </div>
          </div>
        </div>

        <a
          href="#"
          className="event-link-btn"
          aria-label={`Dettagli: ${evento.titolo}`}
        >
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </div>
);

const Eventi = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            I Prossimi Eventi
          </h1>
          <p className="text-muted-foreground max-w-md text-base md:text-lg">
            Scopri gli appuntamenti in programma: open day, workshop, masterclass e concerti dal vivo.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventi.map((e) => (
            <EventCard key={e.id} evento={e} />
          ))}
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Eventi;

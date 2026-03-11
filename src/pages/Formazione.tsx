import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFadeIn } from "@/hooks/useFadeIn";
import { team } from "@/data/team";
import { Link } from "react-router-dom";
import { Music, Users, Clock, User } from "lucide-react";

interface Corso {
  nome: string;
  slug: string;
  docenti: string[];
  isMusical?: boolean;
}

const corsiData: Corso[] = [
  { nome: "Canto Pop", slug: "canto-pop", docenti: ["Chiara Vescio", "Marco Losardo", "Eugenio Nicolazzo"] },
  { nome: "Pianoforte", slug: "pianoforte", docenti: ["Orlando Vescio", "Valentina Monteleone"] },
  { nome: "Chitarra Classica, Acustica ed Elettrica", slug: "chitarra", docenti: ["Vittorio Lanzo"] },
  { nome: "Batteria", slug: "batteria", docenti: ["Domenico Lico"] },
  { nome: "Basso", slug: "basso", docenti: ["Bianca Bertucci"] },
  { nome: "Violino", slug: "violino", docenti: ["Deborah Stranges"] },
  { nome: "Musical", slug: "musical", docenti: ["Eugenio Nicolazzo"], isMusical: true },
];

const findDocente = (name: string) => team.find((m) => m.name === name);

const Formazione = () => {
  const heroRef = useFadeIn();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Formazione Musicale — Mousikè</title>
        <meta name="description" content="Corsi di musica individuali e collettivi a Lamezia Terme: canto, pianoforte, chitarra, batteria, basso, violino e musical." />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div ref={heroRef} className="fade-in-section container mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Mousikè — Formazione
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight">
            Percorsi<br />Formativi
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Ogni percorso è pensato per accompagnare l'allievo nella crescita musicale con lezioni
            individuali, un'ora dedicata in cui il docente si concentra esclusivamente su di te.
            L'orario viene concordato in base alle esigenze di entrambi.
          </p>
        </div>
      </section>

      {/* Corsi */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-20">
          {corsiData.map((corso) => (
            <CorsoRow key={corso.nome} corso={corso} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CorsoRow = ({ corso }: { corso: Corso }) => {
  const ref = useFadeIn();
  const docenti = corso.docenti.map(findDocente).filter(Boolean);

  return (
    <div id={corso.slug} ref={ref} className="fade-in-section scroll-mt-24">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
        {/* Left: corso info */}
        <div className="lg:w-1/3 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
            {corso.nome}
          </h2>

          {!corso.isMusical && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground">
                <User size={14} />
                Lezione individuale
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground">
                <Clock size={14} />
                1 ora
              </span>
            </div>
          )}

          {corso.isMusical && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-border bg-secondary/50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Music size={16} className="text-primary" />
                  <h3 className="font-bold text-sm uppercase tracking-wide">Intermedio</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-foreground">
                    <Users size={12} />
                    Collettivo
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-foreground">
                    <Clock size={12} />
                    1 volta / settimana — 1h 30
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-secondary/50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Music size={16} className="text-primary" />
                  <h3 className="font-bold text-sm uppercase tracking-wide">Avanzato</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-foreground">
                    <Users size={12} />
                    Collettivo
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-foreground">
                    <Clock size={12} />
                    2 volte / settimana — 1h 30 ciascuno
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: docenti */}
        <div className="lg:flex-1 flex flex-wrap gap-6">
          {docenti.map((docente) => (
            <Link
              key={docente!.name}
              to={`/staff#${docente!.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex flex-col items-center text-center w-[140px] md:w-[160px]"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-300">
                <img
                  src={docente!.image}
                  alt={docente!.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm font-semibold leading-tight">{docente!.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{docente!.role}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-border" />
    </div>
  );
};

export default Formazione;

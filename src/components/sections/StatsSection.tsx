import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";

const ambiti = [
  {
    title: "Formazione musicale",
    subtitle: "Percorsi strutturati per bambini, ragazzi e adulti",
    image: "https://images.unsplash.com/photo-1514119412350-e174d90d585e?w=800&q=80&grayscale",
  },
  {
    title: "Programmi educativi nelle scuole",
    subtitle: "Interventi continuativi negli istituti pubblici del territorio",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80&grayscale",
  },
  {
    title: "Produzioni culturali",
    subtitle: "Musical, spettacoli e restituzione pubblica del percorso formativo",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80&grayscale",
  },
  {
    title: "Inclusione e impatto sociale",
    subtitle: "La musica come strumento di integrazione e crescita",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&grayscale",
  },
];

const StatsSection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-20 bg-card">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-2">
            Cosa facciamo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            I nostri ambiti
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ambiti.map((a, i) => (
            <div
              key={a.title}
              className="group relative h-[320px] md:h-[380px] rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={a.image}
                alt={a.title}
                className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Numerazione */}
              <span className="absolute top-4 left-4 text-white/60 text-sm font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Contenuto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1">
                <h3 className="text-xl font-bold text-white">{a.title}</h3>
                <p className="text-sm text-white/70 leading-snug">{a.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-xs text-white/80 mt-2 group-hover:gap-2 transition-all">
                  Scopri di più <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import { useFadeIn } from "@/hooks/useFadeIn";
import { Users, Globe, BookOpen, Sparkles } from "lucide-react";

const blocks = [
  { icon: Users, title: "Inclusione disabilità", desc: "Percorsi dedicati a studenti con disabilità cognitive e relazionali, integrati nelle attività collettive." },
  { icon: Globe, title: "Integrazione migranti", desc: "La musica come linguaggio universale per favorire l'integrazione di comunità migranti nel tessuto sociale." },
  { icon: BookOpen, title: "Contrasto alla dispersione", desc: "Supporto a situazioni di fragilità familiare e scolastica attraverso la partecipazione attiva." },
  { icon: Sparkles, title: "Autostima e senso civico", desc: "Sviluppo di competenze trasversali, fiducia in sé stessi e responsabilità verso la comunità." },
];

const ImpattoSection = () => {
  const ref = useFadeIn();

  return (
    <section id="impatto" className="py-24 bg-secondary">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Impatto oltre la musica</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {blocks.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpattoSection;

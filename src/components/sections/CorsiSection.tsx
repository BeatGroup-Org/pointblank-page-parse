import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Music, Guitar, Drum, Heart, Award } from "lucide-react";

const corsi = [
  { icon: Music, title: "Musica classica", desc: "Piano, violino, flauto e teoria musicale con docenti qualificati." },
  { icon: Guitar, title: "Musica pop", desc: "Chitarra, basso, batteria e canto moderno per tutti i livelli." },
  { icon: Drum, title: "Strumenti popolari calabresi", desc: "Lira calabrese, organetto e tamburello nella tradizione popolare." },
  { icon: Heart, title: "Musicoterapia e teatroterapia", desc: "Percorsi terapeutici attraverso musica e teatro per il benessere della persona." },
  { icon: Award, title: "Certificazioni Trinity", desc: "Preparazione agli esami Trinity College London con percorsi certificati." },
];

const CorsiSection = () => {
  const ref = useFadeIn();

  return (
    <section id="corsi" className="py-24 bg-secondary">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Percorsi formativi</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {corsi.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                <Icon size={28} className="text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Scopri di più
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CorsiSection;

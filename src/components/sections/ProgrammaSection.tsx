import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

const ProgrammaSection = () => {
  const ref = useFadeIn();

  return (
    <section id="programma" className="py-24 bg-background">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Il nostro programma educativo nelle scuole
        </h2>
        <p className="text-sm text-primary font-semibold tracking-widest uppercase text-center mb-8">
          "Ma che musica maestro"
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { title: "Intervento continuativo", desc: "Presenza stabile negli istituti pubblici del territorio con percorsi strutturati e progressivi." },
            { title: "Inclusione", desc: "Coinvolgimento attivo di studenti con difficoltà cognitive, relazionali e sociali." },
            { title: "Intergenerazionalità", desc: "Collaborazione tra bambini, ragazzi e adulti in un percorso condiviso." },
            { title: "Produzione finale", desc: "Ogni percorso si conclude con una restituzione pubblica in teatri e spazi cittadini." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Scopri il programma
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgrammaSection;

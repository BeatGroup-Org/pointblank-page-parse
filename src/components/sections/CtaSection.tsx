import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

const CtaSection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-background">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-10 text-center">
            <h3 className="text-2xl font-bold mb-3">Vuoi iniziare un percorso musicale?</h3>
            <p className="text-muted-foreground mb-6 text-sm">Scopri i nostri corsi e prenota una lezione di prova gratuita.</p>
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Prenota una prova
            </Button>
          </div>
          <div className="bg-card border border-border rounded-lg p-10 text-center">
            <h3 className="text-2xl font-bold mb-3">Sei una scuola o un ente?</h3>
            <p className="text-muted-foreground mb-6 text-sm">Porta il nostro programma educativo nel tuo istituto.</p>
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Porta il progetto nel tuo istituto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

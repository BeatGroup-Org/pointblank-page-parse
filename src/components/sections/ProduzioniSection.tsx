import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

const ProduzioniSection = () => {
  const ref = useFadeIn();

  return (
    <section id="produzioni" className="py-24 bg-background">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Produciamo cultura</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Musical, concerti e collaborazioni artistiche rappresentano la restituzione pubblica del percorso educativo.
          Ogni produzione è il risultato del lavoro di studenti, docenti e professionisti insieme.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/placeholder.svg" alt={`Produzione ${i}`} className="w-full h-full object-cover opacity-50" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Scopri le produzioni
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProduzioniSection;

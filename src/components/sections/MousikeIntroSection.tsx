import { useFadeIn } from "@/hooks/useFadeIn";

const MousikeIntroSection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-secondary">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center uppercase">
          MUSICA CHE DIVENTA RACCONTO
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-muted-foreground text-center leading-relaxed">
            Nella cultura greca, con la parola <em>mousikè</em> si intendeva l'insieme delle arti: la musica, la danza e il teatro.
          </p>
          <p className="text-muted-foreground text-center leading-relaxed">
            Le nostre produzioni e i percorsi di formazione nascono da questa visione: offrire ai ragazzi esperienze che intrecciano linguaggi diversi, talento e crescita personale, trasformando ogni spettacolo in un'occasione di apprendimento coinvolgente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MousikeIntroSection;

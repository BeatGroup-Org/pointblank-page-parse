import { useFadeIn } from "@/hooks/useFadeIn";

const partners = [
  "IC Lamezia 1", "IC Lamezia 2", "IC Nicotera-Costabile",
  "Comune di Lamezia Terme", "Regione Calabria", "Conservatorio Torrefranca",
  "Associazione Prometeo", "Teatro Grandinetti",
];

const PartnerSection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-secondary">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Rete di collaborazioni</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Collaboriamo stabilmente con scuole, enti pubblici e associazioni del territorio per costruire un impatto duraturo.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p} className="bg-card border border-border rounded-lg p-5 flex items-center justify-center text-center">
              <span className="text-sm font-medium text-muted-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;

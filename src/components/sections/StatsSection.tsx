import { useFadeIn } from "@/hooks/useFadeIn";

const stats = [
  { value: "10+", label: "Anni di attività continuativa" },
  { value: "400+", label: "Studenti coinvolti ogni anno" },
  { value: "15+", label: "Collaborazioni con istituti pubblici" },
  { value: "20+", label: "Produzioni annuali in teatri cittadini" },
];

const StatsSection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-20 bg-card">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {s.value}
              </div>
              <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

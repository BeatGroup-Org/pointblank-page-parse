import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

const team = [
  { name: "Marco Ferraro", role: "Direttore artistico" },
  { name: "Laura Greco", role: "Docente di pianoforte" },
  { name: "Antonio Scali", role: "Docente di chitarra e musica pop" },
  { name: "Francesca Morelli", role: "Musicoterapeuta" },
  { name: "Giuseppe Catanzaro", role: "Docente di strumenti popolari" },
  { name: "Chiara De Luca", role: "Docente di canto e teatro" },
];

const TeamSection = () => {
  const ref = useFadeIn();

  return (
    <section id="team" className="py-24 bg-background">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Il nostro team</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((t) => (
            <div key={t.name} className="text-center bg-card rounded-lg p-6 border border-border">
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                <img src="/placeholder.svg" alt={t.name} className="w-full h-full object-cover opacity-50" />
              </div>
              <h3 className="font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground px-8">
            Scopri il team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

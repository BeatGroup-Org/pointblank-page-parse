import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight, Plus, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const team = [
  {
    name: "Marco Ferraro",
    role: "Direttore artistico",
    description:
      "Musicista e direttore d'orchestra con oltre 20 anni di esperienza nella formazione musicale e nella direzione artistica di eventi culturali.",
  },
  {
    name: "Laura Greco",
    role: "Docente di pianoforte",
    description:
      "Diplomata al Conservatorio con lode, ha tenuto concerti in tutta Europa e si dedica all'insegnamento con passione e metodo innovativo.",
  },
  {
    name: "Antonio Scali",
    role: "Docente di chitarra e musica pop",
    description:
      "Chitarrista professionista con collaborazioni in ambito pop e rock. Specializzato nell'insegnamento della musica moderna e contemporanea.",
  },
  {
    name: "Francesca Morelli",
    role: "Musicoterapeuta",
    description:
      "Specializzata in musicoterapia e teatroterapia, lavora con bambini e adulti utilizzando la musica come strumento di benessere e crescita personale.",
  },
  {
    name: "Giuseppe Catanzaro",
    role: "Docente di strumenti popolari",
    description:
      "Esperto di tradizioni musicali calabresi, insegna lira calabrese, tamburello e altri strumenti della tradizione popolare del Sud Italia.",
  },
  {
    name: "Chiara De Luca",
    role: "Docente di canto e teatro",
    description:
      "Cantante lirica e attrice teatrale, unisce le due discipline per offrire un percorso formativo completo nell'espressione artistica vocale e scenica.",
  },
];

const TeamSection = () => {
  const ref = useFadeIn();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 bg-background">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            <span className="block">IL NOSTRO</span>
            <span className="block">TEAM</span>
          </h2>
          <div className="mt-6 md:mt-0">
            <Button
              variant="outline"
              className="rounded-full text-primary border-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              Scopri il team
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true, slidesToScroll: 1 }}
          className="w-full"
        >
          {/* Nav row */}
          <div className="flex items-center justify-end gap-2 mb-6">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-border" />
          </div>

          <CarouselContent className="-ml-4">
            {team.map((member, i) => (
              <CarouselItem
                key={member.name}
                className="pl-4 basis-[85%] sm:basis-[50%] lg:basis-[40%]"
              >
                <div className="group rounded-lg overflow-hidden border border-border bg-card h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="h-[280px] bg-muted relative overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={member.name}
                      className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 text-xs font-bold text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{member.role}</p>

                    {expandedIndex === i && (
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {member.description}
                      </p>
                    )}

                    <div className="mt-auto pt-4">
                      <button
                        onClick={() =>
                          setExpandedIndex(expandedIndex === i ? null : i)
                        }
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:opacity-70 transition-opacity"
                      >
                        {expandedIndex === i ? (
                          <>
                            <X className="w-4 h-4" /> Chiudi
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" /> Info
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Mobile CTA */}
        <div className="text-center mt-10 md:hidden">
          <Button
            variant="outline"
            className="rounded-full text-primary border-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            Scopri il team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

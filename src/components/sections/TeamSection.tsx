import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { team } from "@/data/team";

const TeamSection = () => {
  const ref = useFadeIn();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleTileClick = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Sfondo%20Logo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9TZm9uZG8gTG9nby5qcGciLCJpYXQiOjE3NzA4Mjg2ODYsImV4cCI6MjYzNDgyODY4Nn0.8V-slvODQxYswjVPJQ3HcYZnxj3yVvENkKJXHTjmfWQ"
          alt="Sfondo sezione team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white">
            <span className="block">IL NOSTRO</span>
            <span className="block">TEAM</span>
          </h2>
          <div className="mt-6 md:mt-0">
            <Link to="/staff">
              <Button
                variant="outline"
                className="rounded-full text-primary border-primary hover:bg-primary hover:text-primary-foreground px-8"
              >
                Scopri il team
              </Button>
            </Link>
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
            {team.map((member, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <CarouselItem
                  key={member.name}
                  className={`pl-4 transition-[flex-basis] duration-500 ease-in-out cursor-pointer ${
                    isExpanded
                      ? "basis-[85%] sm:basis-[55%] lg:basis-[45%]"
                      : "basis-[70%] sm:basis-[40%] lg:basis-[25%]"
                  }`}
                  onClick={() => handleTileClick(i)}
                >
                  <div className="relative h-[450px] rounded-lg overflow-hidden bg-muted">
                    {/* Background image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Info overlay - appears on expand */}
                    <div
                      className={`absolute bottom-0 right-0 left-0 bg-white p-5 transition-all duration-500 ${
                        isExpanded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }`}
                    >
                      <h3 className="font-bold text-xl text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Mobile CTA */}
        <div className="text-center mt-10 md:hidden">
            <Link to="/staff">
              <Button
                variant="outline"
                className="rounded-full text-primary border-primary hover:bg-primary hover:text-primary-foreground px-8"
              >
                Scopri il team
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

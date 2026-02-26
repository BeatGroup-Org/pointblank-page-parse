import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const corsi = [
  { title: "Canto Pop", slug: "canto-pop", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80" },
  { title: "Pianoforte", slug: "pianoforte", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80" },
  { title: "Chitarra", slug: "chitarra", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80" },
  { title: "Batteria", slug: "batteria", image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=800&q=80" },
  { title: "Basso", slug: "basso", image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=800&q=80" },
  { title: "Violino", slug: "violino", image: "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=800&q=80" },
  { title: "Musical", slug: "musical", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80" },
];

const CorsiSection = () => {
  const ref = useFadeIn();

  return (
    <section id="corsi" className="py-24 bg-secondary">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        {/* Header */}
        <header className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            <span className="block">I NOSTRI</span>
            <span className="block">PERCORSI</span>
            <span className="block">FORMATIVI</span>
          </h2>
        </header>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", slidesToScroll: 1, loop: false }}
          className="w-full"
        >
          <div className="flex items-center gap-2 justify-end mb-6">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-border" />
            <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-border" />
          </div>

          <CarouselContent className="-ml-4">
            {corsi.map((corso, i) => (
              <CarouselItem
                key={corso.title}
                className="pl-4 basis-[85%] sm:basis-[45%] lg:basis-[35%]"
              >
                <Link to={`/formazione#${corso.slug}`} className="group relative h-[420px] rounded-lg overflow-hidden cursor-pointer block">
                  {/* Background placeholder */}
                  <img
                    src={corso.image}
                    alt={corso.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <span className="text-sm font-medium opacity-70 mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                      {corso.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      Scopri di più
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CorsiSection;

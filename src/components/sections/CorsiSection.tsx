import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const corsi = [
  {
    title: "Musica classica",
    gradient: "from-amber-800 via-amber-900 to-amber-950",
  },
  {
    title: "Musica pop",
    gradient: "from-indigo-700 via-indigo-800 to-indigo-950",
  },
  {
    title: "Strumenti popolari calabresi",
    gradient: "from-emerald-700 via-emerald-800 to-emerald-950",
  },
  {
    title: "Musicoterapia e teatroterapia",
    gradient: "from-rose-700 via-rose-800 to-rose-950",
  },
  {
    title: "Certificazioni Trinity",
    gradient: "from-sky-700 via-sky-800 to-sky-950",
  },
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
                <div className="group relative h-[420px] rounded-lg overflow-hidden cursor-pointer">
                  {/* Background placeholder */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${corso.gradient} transition-transform duration-500 group-hover:scale-105`}
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
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
                    >
                      Scopri di più
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CorsiSection;

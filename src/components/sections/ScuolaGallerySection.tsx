import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1524650359799-842906ca1c06?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&h=600&fit=crop",
];

const ScuolaGallerySection = () => {
  const ref = useFadeIn();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section ref={ref} className="fade-section py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            LA NOSTRA<br />SCUOLA
          </h2>
          <p className="text-muted-foreground max-w-md text-base">
            Spazi creativi dove la musica prende vita ogni giorno.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", slidesToScroll: 1, loop: true }}
          className="w-full"
        >
          <div className="flex items-center gap-2 justify-end mb-6">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-border" />
            <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-border" />
          </div>

          <CarouselContent className="-ml-4">
            {images.map((src, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-[85%] sm:basis-[45%] lg:basis-[30%]"
              >
                <div
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={src}
                    alt={`La nostra scuola - foto ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/95 flex items-center justify-center [&>button]:hidden">
          {selectedIndex !== null && (
            <>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors"
                aria-label="Chiudi"
              >
                <X size={28} />
              </button>

              <button
                onClick={goPrev}
                className="absolute left-4 z-50 text-white/70 hover:text-white transition-colors"
                aria-label="Foto precedente"
              >
                <ChevronLeft size={36} />
              </button>

              <img
                src={images[selectedIndex].replace("w=800&h=600", "w=1600&h=1200")}
                alt={`La nostra scuola - foto ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />

              <button
                onClick={goNext}
                className="absolute right-4 z-50 text-white/70 hover:text-white transition-colors"
                aria-label="Foto successiva"
              >
                <ChevronRight size={36} />
              </button>

              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {selectedIndex + 1} / {images.length}
              </span>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ScuolaGallerySection;

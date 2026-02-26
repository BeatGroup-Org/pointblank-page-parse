import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Carosello%20Scuola/1.%20Ingresso.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9DYXJvc2VsbG8gU2N1b2xhLzEuIEluZ3Jlc3NvLkpQRyIsImlhdCI6MTc3MTg0OTIwMiwiZXhwIjoyNjM1ODQ5MjAyfQ.c6pGdeMno80e2UxExCBlWNl66u9Dy489o04wZEzYJMQ", alt: "Ingresso della scuola" },
  { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Carosello%20Scuola/2.%20Chitarre.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9DYXJvc2VsbG8gU2N1b2xhLzIuIENoaXRhcnJlLkpQRyIsImlhdCI6MTc3MTg0OTIxNSwiZXhwIjoyNjM1ODQ5MjE1fQ.tAzrWKIvvfCu7qBAhw7uAWc96FEqlTU_sBkzqYvZUEM", alt: "Chitarre in esposizione" },
  { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Carosello%20Scuola/3.%20Lezione%20Chitarra.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9DYXJvc2VsbG8gU2N1b2xhLzMuIExlemlvbmUgQ2hpdGFycmEuSlBHIiwiaWF0IjoxNzcxODQ5MjI3LCJleHAiOjI2MzU4NDkyMjd9.MJartVspjX3P5JDr6uY-R31HW6qCvfaIvlRPdUlwtOw", alt: "Lezione di chitarra" },
  { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Carosello%20Scuola/4.%20Lezione%20piano.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9DYXJvc2VsbG8gU2N1b2xhLzQuIExlemlvbmUgcGlhbm8uSlBHIiwiaWF0IjoxNzcxODQ5MjQwLCJleHAiOjI2MzU4NDkyNDB9.1zCJ3aXJKxTw5nVFvNErm3y7IZTDKTQaU05z3E4c4Sw", alt: "Lezione di pianoforte" },
  { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Carosello%20Scuola/5.%20PianoF.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9DYXJvc2VsbG8gU2N1b2xhLzUuIFBpYW5vRi5KUEciLCJpYXQiOjE3NzE4NDkyNTYsImV4cCI6MjYzNTg0OTI1Nn0.XYpuaf2S68SANI843rg0ftfXz1Wfq43G4zbV7GpzWZ0", alt: "Pianoforte a coda" },
  { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Carosello%20Scuola/6.%20Lezioni%20di%20Batteria.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9DYXJvc2VsbG8gU2N1b2xhLzYuIExlemlvbmkgZGkgQmF0dGVyaWEuSlBHIiwiaWF0IjoxNzcxODQ5MjY3LCJleHAiOjI2MzU4NDkyNjd9.tqhmazNV6almNY6E6v8k8cH5JTgYfHHcZmIb2uhc9Ns", alt: "Lezione di batteria" },
  { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Carosello%20Scuola/7.%20Lezioni%20di%20canto%20.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9DYXJvc2VsbG8gU2N1b2xhLzcuIExlemlvbmkgZGkgY2FudG8gLkpQRyIsImlhdCI6MTc3MTg0OTI3NywiZXhwIjoyNjM1ODQ5Mjc3fQ.V81zvVRa7kAu4NupjUSzQnN6spgDgnZ5iUQOD5KjJf8", alt: "Lezione di canto" },
  { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Carosello%20Scuola/8.%20Ingresso%202.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9DYXJvc2VsbG8gU2N1b2xhLzguIEluZ3Jlc3NvIDIuSlBHIiwiaWF0IjoxNzcxODQ5MjkwLCJleHAiOjI2MzU4NDkyOTB9.mb9EtqjZdy4RmvI-MVyxHVfcpI0uKukUVrClW_KtIsA", alt: "Secondo ingresso della scuola" },
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
    <section ref={ref} className="fade-section pt-12 pb-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              LA NOSTRA<br />SCUOLA
            </h2>
            <p className="text-muted-foreground max-w-md text-base mt-4">
              Spazi creativi dove la musica prende vita ogni giorno.
            </p>
          </div>
          <Button className="rounded-full px-6" size="lg">
            Vieni a trovarci <ArrowRight size={16} className="ml-2" />
          </Button>
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
                    src={src.src}
                    alt={src.alt}
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
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
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

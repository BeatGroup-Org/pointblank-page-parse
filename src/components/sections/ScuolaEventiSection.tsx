import { useState } from "react";
import { ChevronLeft, ChevronRight, X, ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { eventi } from "@/data/eventi";

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

const ScuolaEventiSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % images.length);
  };
  const goPrev = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonna SX — La Nostra Scuola */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-3">
              LA NOSTRA<br />SCUOLA
            </h2>
            <p className="text-muted-foreground text-base mb-8">
              Spazi creativi dove la musica prende vita ogni giorno.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Colonna DX — Prossimi Eventi */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-3">
              PROSSIMI<br />EVENTI
            </h2>
            <p className="text-muted-foreground text-base mb-8">
              Open day, workshop, masterclass e concerti dal vivo.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {eventi.slice(0, 3).map((e) => (
                <Link
                  key={e.id}
                  to={`/eventi/${e.id}`}
                  className="group flex gap-4 rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-28 min-h-[100px] flex-shrink-0 overflow-hidden">
                    <img
                      src={e.immagine}
                      alt={e.titolo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="py-3 pr-4 flex flex-col justify-center flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-foreground leading-snug mb-1.5 line-clamp-2">
                      {e.titolo}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {e.data}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {e.luogo}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center pr-4">
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>

            <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Link to="/eventi">
                Vedi tutti gli eventi
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
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

export default ScuolaEventiSection;

import { useFadeIn } from "@/hooks/useFadeIn";

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

  return (
    <section ref={ref} className="fade-section py-24 bg-background">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            LA NOSTRA<br />SCUOLA
          </h2>
          <p className="text-muted-foreground max-w-md text-base">
            Spazi creativi dove la musica prende vita ogni giorno.
          </p>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee-slow hover:[animation-play-state:paused]">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[400px] aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <img
                src={src}
                alt={`La nostra scuola - foto ${(i % images.length) + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScuolaGallerySection;

import { useFadeIn } from "@/hooks/useFadeIn";

const images = [
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1524650359799-842906ca1c06?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600&h=600&fit=crop",
];

const ScuolaGallerySection = () => {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="fade-section py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            La Nostra Scuola
          </h2>
          <p className="text-muted-foreground max-w-md text-base">
            Spazi creativi dove la musica prende vita ogni giorno.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={src}
                alt={`La nostra scuola - foto ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScuolaGallerySection;

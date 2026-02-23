import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background placeholder */}
    <div className="absolute inset-0">
      <img
        src="https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Hero2.JPEG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9IZXJvMi5KUEVHIiwiaWF0IjoxNzcxODQ3MDE3LCJleHAiOjI2MzU4NDcwMTd9.hvbn-KVIy3CSNHb5hLcNU3izH2zp5LlOEBg0r29csng"
        alt="Hero Mousike"
        className="w-full h-full object-cover blur-[2px] scale-105"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-left text-white max-w-4xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
        La musica che costruisce il futuro.
      </h1>
      <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
        Centro culturale ed educativo a Lamezia Terme.
        <br />
        Formazione musicale, inclusione sociale e produzioni artistiche.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-start">
        <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6">
          Scopri il programma educativo
        </Button>
        <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 text-base px-8 py-6">
          Prenota una prova
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;

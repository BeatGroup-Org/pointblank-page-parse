import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background placeholder */}
    <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 to-foreground/70">
      <img
        src="/placeholder.svg"
        alt="Studenti durante una performance musicale"
        className="w-full h-full object-cover opacity-30"
      />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
        La musica che costruisce il futuro.
      </h1>
      <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
        Centro culturale ed educativo a Lamezia Terme.
        <br />
        Formazione musicale, inclusione sociale e produzioni artistiche.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6">
          Scopri il programma educativo
        </Button>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">
          Prenota una prova
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;

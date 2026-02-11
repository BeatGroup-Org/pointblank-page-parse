import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background placeholder */}
    <div className="absolute inset-0">
      <img
        src="https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Sfondo%20Logo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9TZm9uZG8gTG9nby5qcGciLCJpYXQiOjE3NzA4Mjg2ODYsImV4cCI6MjYzNDgyODY4Nn0.8V-slvODQxYswjVPJQ3HcYZnxj3yVvENkKJXHTjmfWQ"
        alt="Sfondo Hero Mousikè"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <video
        src="https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Video%20Promo%20Test.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9WaWRlbyBQcm9tbyBUZXN0Lm1wNCIsImlhdCI6MTc3MDgyODM4NSwiZXhwIjoyNjM0ODI4Mzg1fQ.czzRpzv8LxsDiW3APLTG_r_BnLJ0SXHcut5gu2fq9ho"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
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

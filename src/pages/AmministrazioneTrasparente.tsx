import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFadeIn } from "@/hooks/useFadeIn";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Section = ({
  title,
  children,
  alt = false,
}: {
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) => {
  const ref = useFadeIn();
  return (
    <section className={alt ? "bg-secondary" : "bg-background"}>
      <div
        ref={ref}
        className="fade-in-section py-20 md:py-28 container mx-auto px-6 max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

const AmministrazioneTrasparente = () => {
  const heroRef = useFadeIn();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="bg-secondary">
        <div
          ref={heroRef}
          className="fade-in-section pt-32 pb-20 md:pt-40 md:pb-28 container mx-auto px-6 max-w-3xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amministrazione Trasparente
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Informazioni e documenti relativi all'associazione culturale
            Mousikè, in ottemperanza agli obblighi di trasparenza previsti dalla
            normativa vigente.
          </p>
        </div>
      </section>

      {/* Contributi Pubblici */}
      <Section title="Contributi Pubblici">
        <p>
          In conformità a quanto previsto dall'art. 1, commi 125-129, della
          Legge 4 agosto 2017, n. 124, pubblichiamo le informazioni relative ai
          contributi, sovvenzioni e comunque vantaggi economici di qualunque
          genere ricevuti dalle pubbliche amministrazioni e dai soggetti di cui
          all'art. 2-bis del D.Lgs. 14 marzo 2013 n. 33.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="rounded-xl bg-primary/10 p-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground text-lg mb-1">
              Contributi Pubblici Ricevuti
            </h3>
            <p className="text-sm text-muted-foreground">
              Documento riepilogativo dei contributi pubblici ricevuti
              dall'associazione.
            </p>
          </div>
          <Button variant="outline" disabled>
            Scarica PDF
          </Button>
        </div>
        <p className="text-sm text-muted-foreground/60 mt-3">
          Il documento sarà disponibile a breve.
        </p>
      </Section>

      {/* Riferimenti Normativi */}
      <Section title="Riferimenti Normativi" alt>
        <p>
          La pubblicazione di queste informazioni risponde agli obblighi di
          trasparenza introdotti dalla Legge 4 agosto 2017, n. 124, art. 1,
          commi 125-129, come modificata dal D.L. 30 aprile 2019, n. 34 (c.d.
          "Decreto Crescita").
        </p>
        <p>
          Le informazioni pubblicate sono relative ai contributi, sovvenzioni e
          comunque vantaggi economici di qualunque genere ricevuti dalle
          pubbliche amministrazioni e dai soggetti di cui all'art. 2-bis del
          D.Lgs. 14 marzo 2013 n. 33.
        </p>
      </Section>

      <Footer />
    </div>
  );
};

export default AmministrazioneTrasparente;

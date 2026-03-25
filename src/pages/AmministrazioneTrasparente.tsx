import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
        className="fade-in-section py-20 md:py-28 container mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
          {title}
        </h2>
        <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

const AmministrazioneTrasparente = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const introRef = useFadeIn();

  return (
    <>
      <Helmet>
        <title>Amministrazione Trasparente - Mousikè</title>
        <meta name="description" content="Documenti e informazioni di trasparenza dell'associazione culturale Mousikè APS di Lamezia Terme." />
        <link rel="canonical" href="https://mousikeaps.it/amministrazione-trasparente" />
        <meta property="og:title" content="Amministrazione Trasparente - Mousikè" />
        <meta property="og:description" content="Documenti e informazioni di trasparenza dell'associazione culturale Mousikè APS di Lamezia Terme." />
        <meta property="og:url" content="https://mousikeaps.it/amministrazione-trasparente" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
        <meta name="twitter:title" content="Amministrazione Trasparente - Mousikè" />
        <meta name="twitter:description" content="Documenti e informazioni di trasparenza dell'associazione culturale Mousikè APS di Lamezia Terme." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
      </Helmet>
      <Header />
      <main>
        {/* Hero – layout a due colonne come Chi Siamo */}
        <section className="bg-background">
          <div
            ref={introRef}
            className="fade-in-section py-20 md:py-28 container mx-auto px-6"
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight">
                  Amministrazione
                  <br />
                  Trasparente
                </h1>
              </div>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Informazioni e documenti relativi all'associazione culturale
                  Mousikè, in ottemperanza agli obblighi di trasparenza previsti
                  dalla normativa vigente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contributi Pubblici */}
        <Section title="Contributi Pubblici" alt>
          <p>
            In conformità a quanto previsto dall'art. 1, commi 125-129, della
            Legge 4 agosto 2017, n. 124, pubblichiamo le informazioni relative
            ai contributi, sovvenzioni e comunque vantaggi economici di
            qualunque genere ricevuti dalle pubbliche amministrazioni e dai
            soggetti di cui all'art. 2-bis del D.Lgs. 14 marzo 2013 n. 33.
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
        <Section title="Riferimenti Normativi">
          <p>
            La pubblicazione di queste informazioni risponde agli obblighi di
            trasparenza introdotti dalla Legge 4 agosto 2017, n. 124, art. 1,
            commi 125-129, come modificata dal D.L. 30 aprile 2019, n. 34 (c.d.
            "Decreto Crescita").
          </p>
          <p>
            Le informazioni pubblicate sono relative ai contributi, sovvenzioni
            e comunque vantaggi economici di qualunque genere ricevuti dalle
            pubbliche amministrazioni e dai soggetti di cui all'art. 2-bis del
            D.Lgs. 14 marzo 2013 n. 33.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default AmministrazioneTrasparente;

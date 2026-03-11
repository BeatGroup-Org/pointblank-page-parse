import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";
import musicaMaestroImg from "@/assets/chi-siamo-musica-maestro.jpg";

const TextSection = ({
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

const ProgrammiEducativi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroRef = useFadeIn();
  const imageRef = useFadeIn();
  const ctaRef = useFadeIn();

  return (
    <>
      <Helmet>
        <title>Ma che Musica Maestro — Mousikè</title>
        <meta name="description" content="Programmi educativi musicali nelle scuole di Lamezia Terme. Laboratori, percorsi didattici e inclusione attraverso la musica." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary">
          <div
            ref={heroRef}
            className="fade-in-section py-20 md:py-28 container mx-auto px-6"
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  Mousikè — Programmi Educativi
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight">
                  Ma che Musica
                  <br />
                  Maestro
                </h1>
              </div>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  C'è un progetto che da oltre quindici anni accompagna la crescita di
                  migliaia di alunne e alunni di Lamezia Terme, trasformando la musica
                  in un viaggio di scoperta, consapevolezza e meraviglia.
                </p>
                <p>
                  <strong className="text-foreground">Ma che Musica Maestro</strong> nasce
                  come laboratorio musicale e diventa, anno dopo anno, uno degli
                  appuntamenti più attesi della vita culturale della città.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Immagine */}
        <section className="bg-background">
          <div ref={imageRef} className="fade-in-section">
            <div className="w-full aspect-[21/9] overflow-hidden">
              <img
                src={musicaMaestroImg}
                alt="Ma che Musica Maestro - spettacolo dal vivo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Lo Spettacolo */}
        <TextSection title="Grandi produzioni, grandi emozioni">
          <p>
            Grandi produzioni nei teatri e nei luoghi più simbolici del territorio,
            concerti straordinari, centinaia di giovani protagonisti sul palco: non
            semplici spettacoli, ma momenti in cui tutto ciò che è stato imparato,
            vissuto e sentito prende forma davanti a una comunità intera.
          </p>
          <p>
            Perché <strong className="text-foreground">Ma che Musica Maestro</strong> non
            è mai stato solo un percorso per ragazze e ragazzi. Le famiglie sono
            state da sempre rese partecipi in maniera attiva — non semplici
            spettatori, ma compagni di viaggio e protagonisti dei concerti, in un
            abbraccio collettivo fatto di musica, amore e sentimento condiviso.
          </p>
        </TextSection>

        {/* Visione */}
        <TextSection title="La musica come cultura" alt>
          <p>
            Al cuore del progetto c'è una visione precisa: la musica come cultura.
            Dalla musica popolare alla lirica, dal canto pop all'ensemble orchestrale,
            un percorso che accompagna i ragazzi verso una consapevolezza autentica
            del mondo musicale — e del mondo intero.
          </p>
        </TextSection>

        {/* Collaborazioni */}
        <TextSection title="Sinergie straordinarie">
          <p>
            Nel corso degli anni, sinergie straordinarie hanno arricchito questa
            esperienza: la collaborazione con{" "}
            <strong className="text-foreground">l'Antoniano di Bologna</strong>, con la
            presenza diretta della Rettrice del Coro{" "}
            <strong className="text-foreground">Sabrina Simoni</strong>, e masterclass
            con artisti di fama internazionale come{" "}
            <strong className="text-foreground">Massimo Varini</strong>, chitarrista di
            Laura Pausini, Biagio Antonacci e Andrea Bocelli.
          </p>
          <p>
            Incontri che hanno lasciato il segno, portando eccellenze nazionali sul
            territorio lametino.
          </p>
        </TextSection>

        {/* Talenti */}
        <TextSection title="Talenti che crescono" alt>
          <p>
            E i frutti si vedono: alcuni dei talenti scoperti e coltivati in questi
            anni si sono oggi affermati a livello nazionale nel panorama artistico
            italiano. Storie nate su questi palchi, cresciute fino a raggiungere
            traguardi straordinari.
          </p>
        </TextSection>

        {/* Marchio */}
        <TextSection title="Un marchio di qualità">
          <p>
            <strong className="text-foreground">Ma che Musica Maestro</strong> è
            diventato a tutti gli effetti un marchio — sinonimo di qualità, visione e
            lavoro autentico. La prova che un progetto educativo, quando è fatto con
            dedizione e amore, può davvero cambiare il corso di una vita.
          </p>
        </TextSection>

        {/* CTA */}
        <section className="bg-secondary">
          <div
            ref={ctaRef}
            className="fade-in-section py-20 md:py-28 container mx-auto px-6 text-center max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vuoi saperne di più?
            </h2>
            <p className="text-muted-foreground mb-8 text-base md:text-lg">
              Scopri la nostra offerta formativa o contattaci per informazioni
              sui programmi educativi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contatti">Contattaci</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link to="/formazione">Scopri la formazione</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProgrammiEducativi;

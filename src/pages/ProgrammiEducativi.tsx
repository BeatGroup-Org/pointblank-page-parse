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
        <title>Ma Che Musica Maestro! - Mousikè</title>
        <meta name="description" content="Nato nel 2012, Ma Che Musica Maestro! è un progetto musicale di Mousikè APS a Lamezia Terme pensato per bambini e ragazzi, per crescere attraverso la musica." />
        <link rel="canonical" href="https://mousikeaps.it/programmi-educativi" />
        <meta property="og:title" content="Ma Che Musica Maestro! - Mousikè" />
        <meta property="og:description" content="Nato nel 2012, Ma Che Musica Maestro! è un progetto musicale di Mousikè APS a Lamezia Terme pensato per bambini e ragazzi, per crescere attraverso la musica." />
        <meta property="og:url" content="https://mousikeaps.it/programmi-educativi" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
        <meta name="twitter:title" content="Ma Che Musica Maestro! - Mousikè" />
        <meta name="twitter:description" content="Nato nel 2012, Ma Che Musica Maestro! è un progetto musicale di Mousikè APS a Lamezia Terme pensato per bambini e ragazzi, per crescere attraverso la musica." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
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
                  Il progetto musicale di Mousikè APS a Lamezia Terme
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight">
                   Ma Che Musica
                   <br />
                   Maestro!
                 </h1>
              </div>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Nato nel 2012, <strong className="text-foreground">Ma Che Musica Maestro!</strong> è un progetto
                  musicale pensato per bambine, bambini, ragazze e ragazzi, con l'obiettivo di offrire
                  loro l'opportunità di crescere attraverso la musica in un ambiente accogliente e stimolante.
                </p>
                <p>
                  Il percorso educativo permette ai più piccoli non solo di avvicinarsi allo studio di
                  uno strumento ma anche di vivere un'esperienza formativa completa, capace di sviluppare
                  ascolto, rispetto e fiducia in sé stessi, aiutandoli a scoprire ed esprimere la propria
                  voce in armonia con gli altri.
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
                alt="Ma Che Musica Maestro! - spettacolo dal vivo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Formazione e palcoscenico */}
        <section className="bg-background">
          <div className="fade-in-section py-20 md:py-28 container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
              {/* Foto verticale */}
              <div className="w-full aspect-[3/4] rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground text-sm">Foto</span>
              </div>
              {/* Testo */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Il valore del progetto: dove la formazione incontra il palcoscenico
                </h2>
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p>
                    Nel corso degli anni, <strong className="text-foreground">Ma Che Musica Maestro!</strong> ha
                    coinvolto centinaia di giovani in un percorso continuo in cui la formazione musicale si
                    intreccia con l'esperienza diretta del palcoscenico, tra prove, studio e condivisione.
                  </p>
                  <p>
                    Il progetto prende forma in spettacoli dal vivo, concerti e produzioni musicali ospitati
                    nei teatri e nei luoghi più significativi del territorio. In questi momenti, il lavoro
                    svolto durante l'anno permette ai partecipanti di mettere in pratica le competenze
                    acquisite, esprimere il proprio talento e vivere pienamente la propria dimensione artistica.
                  </p>
                  <p>
                    Questo incontro tra apprendimento e scena contribuisce a far emergere sensibilità,
                    attitudini e capacità espressive, accompagnando i giovani in un percorso di crescita
                    artistica e personale.
                  </p>
                  <p>
                    Alcuni di loro hanno poi proseguito il proprio cammino nel mondo della musica e dello
                    spettacolo, portando con sé un'esperienza nata proprio all'interno di un'iniziativa
                    costruita con serietà, cura e visione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborazioni */}
        <TextSection title="Collaborazioni e incontri che lasciano il segno" alt>
          <p>
            Le numerose collaborazioni a livello nazionale rappresentano uno degli aspetti più
            significativi del progetto. Tra queste si ricordano la partnership con{" "}
            <strong className="text-foreground">l'Antoniano di Bologna</strong>, con la partecipazione
            di <strong className="text-foreground">Sabrina Simoni</strong>, e le masterclass con artisti
            come <strong className="text-foreground">Massimo Varini</strong>, musicista e chitarrista
            noto per il suo lavoro con alcuni dei più importanti nomi della musica italiana.
          </p>
          <p>
            L'obiettivo è offrire ai partecipanti l'opportunità di confrontarsi direttamente con
            professionisti di alto livello, trasformando le conoscenze acquisite durante i laboratori
            annuali in momenti concreti di pratica e scoperta. In questo modo, i ragazzi affinano le
            proprie competenze tecniche e artistiche, accrescono fiducia e consapevolezza di sé e
            imparano il valore dell'impegno, della dedizione e della collaborazione, vivendo esperienze
            che lasciano un segno duraturo nel loro percorso formativo.
          </p>
        </TextSection>

        {/* Famiglie */}
        <TextSection title="Le famiglie dentro il progetto">
          <p>
            Uno degli aspetti più belli di <strong className="text-foreground">Ma Che Musica Maestro!</strong> è
            il coinvolgimento attivo delle famiglie. Nel tempo, genitori e figli hanno condiviso prove,
            concerti ed emozioni. Partecipare insieme permette di rafforzare i legami familiari,
            sperimentare la collaborazione tra generazioni e vivere la musica come momento collettivo.
            In questo modo, la musica diventa strumento di legame, condivisione e inclusione, rendendo
            il percorso formativo un'esperienza completa e significativa per tutti.
          </p>
          <p>
            Anche il nome racconta lo spirito del progetto: <strong className="text-foreground">Ma Che Musica Maestro!</strong> richiama
            entusiasmo e allegria, ispirandosi alla famosa sigla di Canzonissima del 1970, interpretata
            da Raffaella Carrà, un simbolo di una musica che unisce, coinvolge e fa stare bene insieme.
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

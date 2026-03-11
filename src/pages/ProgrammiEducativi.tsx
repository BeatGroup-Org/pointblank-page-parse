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
        <title>Ma Che Musica Maestro! — Mousikè</title>
        <meta name="description" content="Il progetto musicale di Mousikè APS a Lamezia Terme. Da oltre quindici anni, Ma Che Musica Maestro! accompagna la crescita dei più giovani attraverso la musica." />
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
                  Da oltre quindici anni, <strong className="text-foreground">Ma Che Musica Maestro!</strong> accompagna
                  la crescita di bambine, bambini, ragazze e ragazzi di Lamezia Terme
                  attraverso la musica.
                </p>
                <p>
                  Nato come laboratorio musicale, il progetto è cresciuto nel tempo fino
                  a diventare uno degli appuntamenti più riconoscibili e partecipati del
                  percorso educativo e culturale portato avanti da Mousikè APS.
                </p>
                <p>
                  Non si tratta solo di imparare a cantare o stare su un palco.
                  <br />
                  Si tratta di fare esperienza della musica come linguaggio, disciplina,
                  ascolto, relazione.
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
        <TextSection title="Un percorso che mette insieme formazione e palcoscenico">
          <p>
            Nel corso degli anni, <strong className="text-foreground">Ma Che Musica Maestro!</strong> ha
            coinvolto centinaia di giovani in un lavoro continuo fatto di prove, studio,
            emozione e condivisione.
          </p>
          <p>
            Il progetto prende forma in spettacoli dal vivo, concerti e produzioni
            musicali ospitati nei teatri e nei luoghi più significativi del territorio.
            Ogni esibizione è il risultato di un percorso vero: un momento in cui ciò che
            è stato costruito durante l'anno incontra il pubblico e diventa esperienza
            collettiva.
          </p>
        </TextSection>

        {/* Famiglie */}
        <TextSection title="Le famiglie dentro il progetto" alt>
          <p>
            Uno degli aspetti più belli di <strong className="text-foreground">Ma che Musica Maestro</strong> è
            il coinvolgimento attivo delle famiglie.
          </p>
          <p>
            Nel tempo, genitori e figli hanno condiviso prove, concerti ed emozioni,
            rendendo questo progetto qualcosa di più di un semplice laboratorio. È
            diventato uno spazio di partecipazione, affetto e crescita comune, in cui la
            musica crea legami e rafforza il senso di comunità.
          </p>
        </TextSection>

        {/* Esperienza culturale */}
        <TextSection title="La musica come esperienza culturale">
          <p>
            Alla base del progetto c'è un'idea precisa: la musica è cultura.
          </p>
          <p>
            Per questo il percorso proposto da Mousikè APS mette in contatto i più
            giovani con linguaggi diversi, repertori differenti e modalità espressive
            capaci di allargare lo sguardo: dalla musica popolare al canto, dall'ensemble
            alle forme più strutturate della performance dal vivo.
          </p>
          <p>
            L'obiettivo non è solo formare piccoli interpreti, ma accompagnare ragazze e
            ragazzi verso una relazione più profonda con la musica, con l'ascolto e con il
            mondo che li circonda.
          </p>
        </TextSection>

        {/* Collaborazioni */}
        <TextSection title="Collaborazioni e incontri che lasciano il segno" alt>
          <p>
            Negli anni, il progetto si è arricchito grazie a collaborazioni di grande
            valore, che hanno portato a Lamezia Terme esperienze formative e artistiche di
            rilievo nazionale.
          </p>
          <p>
            Tra queste, la collaborazione con{" "}
            <strong className="text-foreground">l'Antoniano di Bologna</strong>, con la
            presenza di <strong className="text-foreground">Sabrina Simoni</strong>, e le
            masterclass con artisti come{" "}
            <strong className="text-foreground">Massimo Varini</strong>, musicista e
            chitarrista noto per il suo lavoro con alcuni dei più importanti nomi della
            musica italiana.
          </p>
          <p>
            Esperienze che hanno dato ai partecipanti l'occasione di confrontarsi con
            professionalità autorevoli, senza mai perdere il legame con il territorio.
          </p>
        </TextSection>

        {/* Tracce */}
        <TextSection title="Un progetto che lascia tracce">
          <p>
            Nel tempo, <strong className="text-foreground">Ma che Musica Maestro</strong> ha
            contribuito a far emergere sensibilità, attitudini e talenti, accompagnando
            tanti giovani in un percorso di crescita artistica e personale.
          </p>
          <p>
            Alcuni di loro hanno poi proseguito il proprio cammino nel mondo della musica
            e dello spettacolo, portando con sé un'esperienza nata proprio qui, all'interno
            di un progetto costruito con serietà, cura e visione.
          </p>
        </TextSection>

        {/* Valore */}
        <TextSection title="Il valore di Ma che Musica Maestro" alt>
          <p>
            Oggi <strong className="text-foreground">Ma che Musica Maestro</strong> rappresenta
            una delle esperienze più significative di educazione musicale a Lamezia Terme.
          </p>
          <p>
            È un progetto che unisce formazione, spettacolo dal vivo, partecipazione e
            radicamento territoriale.
            <br />
            Ed è, soprattutto, la dimostrazione che la musica, quando è proposta con
            qualità e continuità, può diventare uno strumento concreto di crescita per i
            più giovani e per l'intera comunità.
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

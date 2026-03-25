import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

const produzioniData = [
  {
    title: "La Bella e la Bestia",
    description:
      "Il primo grande musical prodotto da Mousikè APS, realizzato interamente con artisti del territorio. Lo spettacolo ha registrato due sold out consecutivi in teatro, accogliendo circa 700 spettatori complessivi e confermando la straordinaria capacità di Mousikè di coinvolgere la comunità attraverso l'arte.",
    stats: [
      { value: "~700", label: "Spettatori" },
      { value: "2", label: "Sold out consecutivi" },
    ],
    image:
      "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Musical.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9NdXNpY2FsLmpwZyIsImlhdCI6MTc3MTg0NjU2OSwiZXhwIjoyNjM1ODQ2NTY5fQ.0JDyQ_3KG7PQlF-sIxLOtWURZYUqV03KRbvwtqUYBI4",
  },
  {
    title: "I Miserabili",
    description:
      "Realizzato in collaborazione con l'associazione Gala, il colossal è andato in scena nel suggestivo scenario del Parco Mitoio di Lamezia Terme, rappresentando al contempo l'apertura ufficiale di un anfiteatro di straordinario valore strategico per la valorizzazione culturale e turistica della città.",
    stats: [
      { value: "100+", label: "Protagonisti sul palco" },
      { value: "~2.500", label: "Spettatori in 2 serate" },
    ],
    image:
      "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Musical%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9NdXNpY2FsIDIuanBnIiwiaWF0IjoxNzcxODQ2NTc4LCJleHAiOjI2MzU4NDY1Nzh9.Y3DLSuNJ6jxpQozF9tVOWWqvZIyglsBhS-1AUuQ7Vw0",
  },
  {
    title: "Il Concerto Walt Disney",
    description:
      "Un viaggio emozionante attraverso le più celebri colonne sonore della Walt Disney, pensato per grandi e piccini. Ha già superato le 1.000 presenze e, grazie alle continue repliche in programma, punta a raggiungere le 2.500 presenze entro fine stagione.",
    stats: [
      { value: "1.000+", label: "Presenze" },
      { value: "2.500", label: "Obiettivo stagione" },
    ],
    image:
      "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Musical%203.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9NdXNpY2FsIDMuanBnIiwiaWF0IjoxNzcxODQ2NTk1LCJleHAiOjI2MzU4NDY1OTV9.C3jobsNd4tlhZ2iPDUHc6oc6J8omYmGsFovtQJWJx-k",
  },
];

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

const Produzioni = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroRef = useFadeIn();
  const ctaRef = useFadeIn();

  return (
    <>
      <Helmet>
        <title>Produzioni Culturali - Mousikè</title>
        <meta name="description" content="Musical e spettacoli prodotti da Mousikè APS a Lamezia Terme: La Bella e la Bestia, Disney in Concerto e nuove produzioni." />
        <link rel="canonical" href="https://mousikeaps.it/produzioni" />
        <meta property="og:title" content="Produzioni Culturali - Mousikè" />
        <meta property="og:description" content="Musical e spettacoli prodotti da Mousikè APS a Lamezia Terme: La Bella e la Bestia, Disney in Concerto e nuove produzioni." />
        <meta property="og:url" content="https://mousikeaps.it/produzioni" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
        <meta name="twitter:title" content="Produzioni Culturali - Mousikè" />
        <meta name="twitter:description" content="Musical e spettacoli prodotti da Mousikè APS a Lamezia Terme: La Bella e la Bestia, Disney in Concerto e nuove produzioni." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary">
          <div
            ref={heroRef}
            className="fade-in-section py-24 md:py-32 container mx-auto px-6"
          >
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Mousikè - Produzioni
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight">
                  Il percorso
                  <br />
                  nei musical
                </h1>
              </div>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Da alcuni anni, Mousikè APS ha intrapreso con convinzione il
                  percorso nel mondo dei musical - una scelta non casuale, poiché
                  il nome stesso dell'associazione richiama la Mousikè greca, la
                  dea che unisce in sé le arti della musica, della danza e del
                  teatro.
                </p>
                <p>
                  Ogni produzione nasce da questa visione integrata: offrire al
                  territorio un'esperienza artistica completa, capace di
                  emozionare, formare e coinvolgere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Le Produzioni */}
        {produzioniData.map((prod, index) => (
          <ProduzioneRow key={prod.title} prod={prod} index={index} />
        ))}

        {/* Una Scelta Strategica */}
        <TextSection title="Una Scelta Strategica" alt>
          <p>
            Le motivazioni che hanno spinto Mousikè APS ad investire nel mondo
            dei musical sono molteplici. Al centro vi è la volontà di creare
            cultura attraverso la musica, con una visione orientata alla
            produzione di nuovi spettacoli e alla valorizzazione del talento
            locale.
          </p>
          <p>
            Un impegno che guarda con particolare attenzione all'inclusione
            sociale, sviluppato attraverso forme di partenariato significative
            con altre associazioni attive in questo settore.
          </p>
        </TextSection>

        {/* Radici nel Territorio */}
        <TextSection title="Radici nel Territorio, Sguardo sull'Europa">
          <p>
            Mousikè APS ha sempre fatto del territorio la propria forza: ogni
            produzione nasce dal talento locale, coinvolgendo artisti, famiglie e
            comunità di Lamezia Terme e della Calabria. Questo radicamento non è
            un limite, ma una solida base da cui proiettarsi verso orizzonti più
            ampi.
          </p>
          <p>
            L'associazione guarda con crescente interesse al resto d'Italia e
            all'Europa, con l'obiettivo di costruire reti culturali durature. In
            questo contesto si inserisce l'impegno verso programmi europei come
            Erasmus+, che permettono scambi artistici e formativi tra
            organizzazioni di paesi diversi, arricchendo il tessuto culturale
            locale con esperienze e visioni internazionali.
          </p>
        </TextSection>

        {/* Impatto Sociale */}
        <section className="bg-secondary">
          <div className="fade-in-section py-20 md:py-28 container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
              {/* Foto */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Foto</span>
              </div>
              {/* Testo */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Un Impatto Sociale Misurabile
                </h2>
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p>
                    I numeri delle produzioni parlano da soli: migliaia di spettatori,
                    famiglie e studenti coinvolti in pochi anni di attività. Il musical
                    si conferma non solo come forma d'arte, ma come strumento di
                    aggregazione e coesione sociale per l'intera comunità.
                  </p>
                  <p>
                    Ogni spettacolo è un momento in cui Lamezia Terme si ritrova, si
                    emoziona e riscopre il valore della cultura come bene comune.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section className="py-24 bg-background">
          <div
            ref={ctaRef}
            className="fade-in-section container mx-auto px-6 max-w-3xl text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                <Link to="/contatti">Contattaci</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary/10 px-8"
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

const ProduzioneRow = ({ prod, index }: { prod: typeof produzioniData[number]; index: number }) => {
  const ref = useFadeIn();
  const reversed = index % 2 !== 0;
  return (
    <section className={index % 2 === 0 ? "bg-background" : "bg-secondary"}>
      <div ref={ref} className="fade-in-section py-20 md:py-28 container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${reversed ? "md:direction-rtl" : ""}`}>
          <div className={reversed ? "md:order-2" : ""}>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
              <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className={reversed ? "md:order-1" : ""}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-none tracking-tight mb-6">
              {prod.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              {prod.description}
            </p>
            <div className="flex gap-8">
              {prod.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-black text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produzioni;

import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { eventi } from "@/data/eventi";

const Eventi = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>Eventi — Mousikè</title>
      <meta name="description" content="Concerti, spettacoli, workshop e masterclass organizzati da Mousikè APS a Lamezia Terme." />
      <link rel="canonical" href="https://mousikeaps.it/eventi" />
      <meta property="og:title" content="Eventi — Mousikè" />
      <meta property="og:description" content="Concerti, spettacoli, workshop e masterclass organizzati da Mousikè APS a Lamezia Terme." />
      <meta property="og:url" content="https://mousikeaps.it/eventi" />
      <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
      <meta name="twitter:title" content="Eventi — Mousikè" />
      <meta name="twitter:description" content="Concerti, spettacoli, workshop e masterclass organizzati da Mousikè APS a Lamezia Terme." />
      <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
    </Helmet>
    <Header />

    <main className="pt-28 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I Prossimi Eventi
          </h1>
          <p className="text-muted-foreground max-w-md text-base md:text-lg">
            Scopri gli appuntamenti in programma: open day, workshop, masterclass e concerti dal vivo.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventi.map((e) => (
            <EventCard key={e.id} evento={e} />
          ))}
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Eventi;

import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { eventi } from "@/data/eventi";

const Eventi = () => (
  <div className="min-h-screen bg-background">
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

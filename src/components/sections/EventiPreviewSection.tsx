import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { eventi } from "@/data/eventi";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";

const EventiPreviewSection = () => (
  <section className="pt-24 pb-12 bg-background">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight uppercase">
          PROSSIMI EVENTI
        </h2>
        <p className="text-muted-foreground max-w-md text-base">
          Open day, workshop, masterclass e concerti dal vivo.
        </p>
      </div>

      {/* Grid - primi 3 eventi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {eventi.slice(0, 3).map((e) => (
          <EventCard key={e.id} evento={e} />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
          <Link to="/eventi">
            Vedi tutti gli eventi
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default EventiPreviewSection;

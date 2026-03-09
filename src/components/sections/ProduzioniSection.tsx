import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const produzioni = [
  {
    title: "Musical",
    src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Musical.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9NdXNpY2FsLmpwZyIsImlhdCI6MTc3MTg0NjU2OSwiZXhwIjoyNjM1ODQ2NTY5fQ.0JDyQ_3KG7PQlF-sIxLOtWURZYUqV03KRbvwtqUYBI4",
  },
  {
    title: "Concerto dal vivo",
    src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Musical%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9NdXNpY2FsIDIuanBnIiwiaWF0IjoxNzcxODQ2NTc4LCJleHAiOjI2MzU4NDY1Nzh9.Y3DLSuNJ6jxpQozF9tVOWWqvZIyglsBhS-1AUuQ7Vw0",
  },
  {
    title: "Spettacolo finale",
    src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Musical%203.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9NdXNpY2FsIDMuanBnIiwiaWF0IjoxNzcxODQ2NTk1LCJleHAiOjI2MzU4NDY1OTV9.C3jobsNd4tlhZ2iPDUHc6oc6J8omYmGsFovtQJWJx-k",
  },
];

const ProduzioniSection = () => {
  const ref = useFadeIn();

  return (
    <section id="produzioni" className="py-24 bg-background">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        {/* Header */}
        <header className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="block">PRODUCIAMO</span>
              <span className="block">CULTURA</span>
            </h2>
            <p className="text-muted-foreground max-w-md mt-4 leading-relaxed">
              Musical, concerti e collaborazioni artistiche: la restituzione pubblica del percorso educativo.
            </p>
          </div>
          <Button asChild className="rounded-full px-6" size="lg">
            <Link to="/produzioni">
              Scopri le produzioni <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </header>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", slidesToScroll: 1, loop: false }}
          className="w-full"
        >
          <div className="flex items-center gap-2 justify-end mb-6">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-border" />
            <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-border" />
          </div>

          <CarouselContent className="-ml-4">
            {produzioni.map((prod) => (
              <CarouselItem
                key={prod.title}
                className="pl-4 basis-[85%] sm:basis-[55%] lg:basis-[42%]"
              >
                <div className="group relative h-[480px] rounded-lg overflow-hidden">
                  <img
                    src={prod.src}
                    alt={prod.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <UnderConstructionDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default ProduzioniSection;

import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

const ProduzioniSection = () => {
  const ref = useFadeIn();

  return (
    <section id="produzioni" className="py-24 bg-background">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Produciamo cultura</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Musical, concerti e collaborazioni artistiche rappresentano la restituzione pubblica del percorso educativo.
          Ogni produzione è il risultato del lavoro di studenti, docenti e professionisti insieme.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Musical.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9NdXNpY2FsLmpwZyIsImlhdCI6MTc3MTg0NjU2OSwiZXhwIjoyNjM1ODQ2NTY5fQ.0JDyQ_3KG7PQlF-sIxLOtWURZYUqV03KRbvwtqUYBI4", alt: "Musical - Produzione 1" },
            { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Musical%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9NdXNpY2FsIDIuanBnIiwiaWF0IjoxNzcxODQ2NTc4LCJleHAiOjI2MzU4NDY1Nzh9.Y3DLSuNJ6jxpQozF9tVOWWqvZIyglsBhS-1AUuQ7Vw0", alt: "Musical - Produzione 2" },
            { src: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Musical%203.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9NdXNpY2FsIDMuanBnIiwiaWF0IjoxNzcxODQ2NTk1LCJleHAiOjI2MzU4NDY1OTV9.C3jobsNd4tlhZ2iPDUHc6oc6J8omYmGsFovtQJWJx-k", alt: "Musical - Produzione 3" },
          ].map((prod, i) => (
            <div key={i} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img src={prod.src} alt={prod.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Scopri le produzioni
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProduzioniSection;

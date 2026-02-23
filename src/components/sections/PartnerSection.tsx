import { useFadeIn } from "@/hooks/useFadeIn";

const partners = [
  { nome: "Calabria Straordinaria", logo: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Loghi%20Social%20Proof/Calabria%20Straordinaria.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9Mb2doaSBTb2NpYWwgUHJvb2YvQ2FsYWJyaWEgU3RyYW9yZGluYXJpYS5wbmciLCJpYXQiOjE3NzE4NDU5NDAsImV4cCI6MjYzNTg0NTk0MH0.0WFSviswykJTa_vz3PBzyYnWJD3CXRVrRe-EUtme32Q" },
  { nome: "Comune di Lamezia Terme", logo: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Loghi%20Social%20Proof/Comune%20di%20Lamezia%20Terme.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9Mb2doaSBTb2NpYWwgUHJvb2YvQ29tdW5lIGRpIExhbWV6aWEgVGVybWUucG5nIiwiaWF0IjoxNzcxODQ1OTc2LCJleHAiOjI2MzU4NDU5NzZ9.00eRM1im3wT8LJ_O6kXdHW2BdhOkA8s8GemfcJWee5Y" },
  { nome: "Tchaikovsky", logo: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Loghi%20Social%20Proof/Tchaikovsky.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9Mb2doaSBTb2NpYWwgUHJvb2YvVGNoYWlrb3Zza3kucG5nIiwiaWF0IjoxNzcxODQ1OTg5LCJleHAiOjI2MzU4NDU5ODl9.v7l4YAn6U4RBg1jWig971Vq4e_jRx1nN0ql7fbeBJnk" },
  { nome: "Trinity Music", logo: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Loghi%20Social%20Proof/Trinity%20Music.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9Mb2doaSBTb2NpYWwgUHJvb2YvVHJpbml0eSBNdXNpYy5wbmciLCJpYXQiOjE3NzE4NDYwMDIsImV4cCI6MjYzNTg0NjAwMn0.a7QIyrAAirO6kxLBGynNSuCk34BshxVH4ycRCukXAq8" },
  { nome: "Zecchino D'Oro", logo: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Loghi%20Social%20Proof/Zecchino%20D'Oro.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9Mb2doaSBTb2NpYWwgUHJvb2YvWmVjY2hpbm8gRCdPcm8ucG5nIiwiaWF0IjoxNzcxODQ2MDEzLCJleHAiOjI2MzU4NDYwMTN9.ee6B7bKXGrBQkWOwbioKVcO-V-gjxjbILyWImIaVZBg" },
];

const PartnerSection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-24 bg-secondary">
      <div ref={ref} className="fade-in-section container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Rete di collaborazioni</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Collaboriamo stabilmente con scuole, enti pubblici e associazioni del territorio per costruire un impatto duraturo.
        </p>

        <div className="overflow-hidden">
          <div className="flex items-center gap-16 animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((p, i) => (
              <img
                key={`${p.nome}-${i}`}
                src={p.logo}
                alt={p.nome}
                className="h-24 w-auto object-contain shrink-0 opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;

import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";

const ambiti = [
  {
    title: "Formazione musicale",
    subtitle: "Percorsi strutturati per bambini, ragazzi e adulti",
    image: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/A.%20Formazione%20musicale.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9BLiBGb3JtYXppb25lIG11c2ljYWxlLmpwZyIsImlhdCI6MTc3MDgzNTEwOSwiZXhwIjoyNjM0ODM1MTA5fQ.xesWC9XRNTUnzZITW77ucL75cLyO0dQg-YYW8wDQXJk",
  },
  {
    title: "Programmi educativi nelle scuole",
    subtitle: "Interventi continuativi negli istituti pubblici del territorio",
    image: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/A.%20Programmi%20educativi%20nelle%20scuole.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9BLiBQcm9ncmFtbWkgZWR1Y2F0aXZpIG5lbGxlIHNjdW9sZS5qcGciLCJpYXQiOjE3NzA4MzQ4ODIsImV4cCI6MjYzNDgzNDg4Mn0.Y5joUh1M5nXyDgNoDylTveXsnlnWgFA044r1ee2phk4",
  },
  {
    title: "Produzioni culturali",
    subtitle: "Musical, spettacoli e restituzione pubblica del percorso formativo",
    image: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/A.%20Produzione%20Culturale.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9BLiBQcm9kdXppb25lIEN1bHR1cmFsZS5KUEciLCJpYXQiOjE3NzA4MzQ2MzEsImV4cCI6MjYzNDgzNDYzMX0.T0Ijtnqisq0KVBUIqMd4QZ2jTz1VQJjgx9O4K2oynF8",
  },
  {
    title: "Inclusione e impatto sociale",
    subtitle: "La musica come strumento di integrazione e crescita",
    image: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/A.%20Inclusione%20e%20Impatto%20sociale.JPEG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9BLiBJbmNsdXNpb25lIGUgSW1wYXR0byBzb2NpYWxlLkpQRUciLCJpYXQiOjE3NzA4MzQ2NDcsImV4cCI6MjYzNDgzNDY0N30.1V8VG-Bqi-tecMF2MHSLJRP7vwc4OBPm-hM8xNop_6g",
  },
];

const StatsSection = () => {
  const ref = useFadeIn();

  return (
    <section className="py-20 bg-card">
      <div ref={ref} className="fade-in-section container mx-auto px-6">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-2">
            Cosa facciamo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase">
            IL NOSTRO IMPEGNO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ambiti.map((a, i) => (
            <div
              key={a.title}
              className="group relative h-[320px] md:h-[380px] rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={a.image}
                alt={a.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Numerazione */}
              <span className="absolute top-4 left-4 text-white/60 text-sm font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Contenuto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1">
                <h3 className="text-xl font-bold text-white">{a.title}</h3>
                <p className="text-sm text-white/70 leading-snug">{a.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-xs text-white/80 mt-2 group-hover:gap-2 transition-all">
                  Scopri di più <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFadeIn } from "@/hooks/useFadeIn";
import { corsi } from "@/data/corsi";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowLeft,
  GraduationCap,
  Music,
  Theater,
  Lightbulb,
  Heart,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Argomento =
  | "info-corsi"
  | "lezione-prova"
  | "produzioni"
  | "iniziativa"
  | "sostenere"
  | "altro";

const argomenti: { id: Argomento; label: string; icon: React.ElementType }[] = [
  { id: "info-corsi", label: "Informazioni sui programmi formativi", icon: GraduationCap },
  { id: "lezione-prova", label: "Prenotare una lezione di prova", icon: Music },
  { id: "produzioni", label: "Avere info sulle produzioni", icon: Theater },
  { id: "iniziativa", label: "Proporre una iniziativa", icon: Lightbulb },
  { id: "sostenere", label: "Sostenere la scuola", icon: Heart },
  { id: "altro", label: "Altro", icon: HelpCircle },
];

const needsCourse = (a: Argomento | null) =>
  a === "info-corsi" || a === "lezione-prova";

function buildMessage(argomento: Argomento, corso: string | null): string {
  switch (argomento) {
    case "info-corsi":
      return corso && corso !== "altro"
        ? `Ciao! Vorrei informazioni sul corso di ${corso}.`
        : "Ciao! Vorrei informazioni sui vostri programmi formativi.";
    case "lezione-prova":
      return corso && corso !== "altro"
        ? `Ciao! Vorrei prenotare una lezione di prova per il corso di ${corso}.`
        : "Ciao! Vorrei prenotare una lezione di prova.";
    case "produzioni":
      return "Ciao! Vorrei informazioni sulle vostre produzioni.";
    case "iniziativa":
      return "Ciao! Vorrei proporre una iniziativa di collaborazione.";
    case "sostenere":
      return "Ciao! Vorrei sapere come sostenere la scuola.";
    case "altro":
    default:
      return "Ciao! Vorrei contattarvi per…";
  }
}

function buildSubject(argomento: Argomento, corso: string | null): string {
  switch (argomento) {
    case "info-corsi":
      return corso && corso !== "altro"
        ? `Info sul corso di ${corso}`
        : "Info programmi formativi";
    case "lezione-prova":
      return corso && corso !== "altro"
        ? `Lezione di prova – ${corso}`
        : "Lezione di prova";
    case "produzioni":
      return "Info produzioni";
    case "iniziativa":
      return "Proposta di iniziativa";
    case "sostenere":
      return "Sostenere la scuola";
    default:
      return "Contatto";
  }
}

const PHONE = "+393339568927";
const EMAIL = "mousike.aps@gmail.com";

const Contatti = () => {
  const [argomento, setArgomento] = useState<Argomento | null>(null);
  const [corso, setCorso] = useState<string | null>(null);

  const heroRef = useFadeIn();
  const stepsRef = useFadeIn();
  const recapitiRef = useFadeIn();

  const showCourses = needsCourse(argomento) && argomento !== null;
  const isReady = argomento !== null && (!needsCourse(argomento) || corso !== null);

  const message = argomento ? buildMessage(argomento, corso) : "";
  const subject = argomento ? buildSubject(argomento, corso) : "";

  const waUrl = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(message)}`;
  const mailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const telUrl = `tel:${PHONE}`;

  const reset = () => {
    setArgomento(null);
    setCorso(null);
  };

  const selectArgomento = (a: Argomento) => {
    setArgomento(a);
    setCorso(null);
  };

  const corsiOptions = [...corsi.map((c) => c.title), "Altro"];

  return (
    <>
      <Header />
      {/* Hero */}
      <section ref={heroRef} className="fade-in-section bg-secondary pt-32 pb-16">
        <div className="container mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Mousikè — Contatti
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight mb-4">
            Contattaci
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Dicci come possiamo aiutarti e scegli il modo che preferisci per raggiungerci.
          </p>
        </div>
      </section>

      <main className="py-20 md:py-28 bg-background">
        <div className="fade-in-section container mx-auto px-6 max-w-3xl" ref={stepsRef}>

          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors",
                argomento
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/20 text-primary"
              )}
            >
              1
            </span>
            <div className="h-px flex-1 bg-border" />
            {showCourses && (
              <>
                <span
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors",
                    corso
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/20 text-primary"
                  )}
                >
                  2
                </span>
                <div className="h-px flex-1 bg-border" />
              </>
            )}
            <span
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors",
                isReady
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {showCourses ? "3" : "2"}
            </span>
          </div>

          {/* Back button */}
          {argomento && (
            <button
              onClick={reset}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Ricomincia
            </button>
          )}

          {/* Step 1: Argomento */}
          <section className="mb-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Di cosa hai bisogno?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {argomenti.map((a) => {
                const Icon = a.icon;
                const selected = argomento === a.id;
                return (
                  <button
                    key={a.id}
                    onClick={() => selectArgomento(a.id)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl text-left transition-all border-2",
                      selected
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-primary/40"
                    )}
                  >
                    <Icon
                      size={22}
                      className={cn(
                        "shrink-0 transition-colors",
                        selected ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                    <span
                      className={cn(
                        "font-medium text-sm",
                        selected ? "text-foreground" : "text-foreground/80"
                      )}
                    >
                      {a.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Step 1b: Corso */}
          {showCourses && (
            <section className="mb-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                A quale corso sei interessato?
              </h2>
              <div className="flex flex-wrap gap-2">
                {corsiOptions.map((c) => {
                  const selected = corso === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setCorso(c)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all border-2",
                        selected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:border-primary/40"
                      )}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {/* Step 2: Contact methods */}
          {isReady && (
            <section className="mb-16 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Come vuoi contattarci?
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Il messaggio sarà già precompilato per te.
              </p>

              {/* Message preview */}
              <div className="bg-muted/50 rounded-xl p-4 mb-6 border border-border">
                <p className="text-sm text-muted-foreground italic">"{message}"</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-auto py-5 rounded-xl bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white flex flex-col items-center gap-2"
                >
                  <a href={waUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={24} />
                    <span className="text-sm font-semibold">WhatsApp</span>
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto py-5 rounded-xl flex flex-col items-center gap-2"
                >
                  <a href={mailUrl}>
                    <Mail size={24} />
                    <span className="text-sm font-semibold">Email</span>
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto py-5 rounded-xl flex flex-col items-center gap-2"
                >
                  <a href={telUrl}>
                    <Phone size={24} />
                    <span className="text-sm font-semibold">Chiama</span>
                  </a>
                </Button>
              </div>
            </section>
          )}

        </div>

        {/* Static contact info */}
        <div className="container mx-auto px-6 max-w-3xl mt-20" ref={recapitiRef}>
          <section className="fade-in-section border-t border-border pt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              I nostri recapiti
            </h2>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-0.5">Sede</h3>
                  <p className="text-muted-foreground text-sm">Via Duca d'Aosta 23, Lamezia Terme (CZ)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-0.5">Telefono</h3>
                  <p className="text-muted-foreground text-sm">+39 333 956 8927</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-0.5">Email</h3>
                  <p className="text-muted-foreground text-sm">{EMAIL}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contatti;

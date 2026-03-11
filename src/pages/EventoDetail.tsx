import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, MapPin, Ticket, Phone, Mail, User, ArrowLeft, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useFadeIn } from "@/hooks/useFadeIn";
import { eventi } from "@/data/eventi";
import { openGoogleCalendar } from "@/lib/generateIcs";

const EventoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const evento = eventi.find((e) => e.id === Number(id));
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!evento) return <Navigate to="/eventi" replace />;

  const heroRef = useFadeIn();
  const locandinaRef = useFadeIn();
  const infoRef = useFadeIn();
  const introRef = useFadeIn();
  const programmaRef = useFadeIn();
  const ctaRef = useFadeIn();
  

  const whatsappUrl = evento.whatsappNumero
    ? `https://wa.me/${evento.whatsappNumero}?text=${encodeURIComponent(
        `Ciao! Vorrei prenotare per l'evento "${evento.titolo}" del ${evento.data}. Grazie!`
      )}`
    : null;

  const handleCalendar = () => {
    if (!evento.dataISO) return;
    openGoogleCalendar({
      titolo: evento.titolo,
      dataISO: evento.dataISO,
      ora: evento.ora,
      oraFine: evento.oraFine,
      luogo: evento.indirizzo || evento.luogo,
      descrizione: evento.descrizioneEstesa || evento.descrizione,
    });
  };

  return (
    <>
      <Helmet>
        <title>{evento.titolo} — Mousikè</title>
        <meta name="description" content={`${evento.titolo} — ${evento.data}. ${evento.descrizione?.slice(0, 120) ?? "Evento Mousikè APS a Lamezia Terme."}`} />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full aspect-[21/9] min-h-[320px]">
          <img
            src={evento.immagine}
            alt={evento.titolo}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div
            ref={heroRef}
            className="fade-in-section absolute inset-0 flex flex-col justify-end container mx-auto px-6 pb-10 md:pb-16"
          >
            <Link
              to="/eventi"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 w-fit transition-colors"
            >
              <ArrowLeft size={16} />
              Tutti gli eventi
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {evento.categoria && (
                <Badge className="bg-primary/90 text-primary-foreground border-0 text-xs">
                  {evento.categoria}
                </Badge>
              )}
              {evento.rassegna && (
                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm text-xs">
                  {evento.rassegna}
                </Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl">
              {evento.titolo}
            </h1>
          </div>
        </section>

        {/* Content + Sidebar Layout */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-12 md:py-16">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Mobile: Locandina sopra il contenuto */}
              {evento.locandina && (
                <div className="lg:hidden flex justify-center">
                  <button
                    onClick={() => setLightboxIdx(-1)}
                    className="focus:outline-none focus:ring-2 focus:ring-primary rounded-xl overflow-hidden shadow-lg max-w-xs w-full"
                  >
                    <img
                      src={evento.locandina}
                      alt={`Locandina - ${evento.titolo}`}
                      className="w-full h-auto object-contain"
                    />
                  </button>
                </div>
              )}

              {/* Contenuto principale */}
              <div className="flex-1 min-w-0 space-y-12 md:space-y-16">
                {/* Info Grid */}
                <div ref={infoRef} className="fade-in-section">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <InfoItem icon={<Calendar size={20} />} label="Data" value={evento.data} />
                    {evento.ora && (
                      <InfoItem icon={<Clock size={20} />} label="Ora" value={evento.ora} />
                    )}
                    <InfoItem icon={<MapPin size={20} />} label="Luogo" value={evento.luogo} />
                    {evento.ingresso && (
                      <InfoItem
                        icon={<Ticket size={20} />}
                        label="Ingresso"
                        value={evento.ingresso === "gratuito" ? "Gratuito" : evento.prezzoInfo || "A pagamento"}
                      />
                    )}
                  </div>
                </div>

                {/* Sezione 1: Intro / Presentazione */}
                <div ref={introRef} className="fade-in-section">
                  <div
                    className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: (evento.introduzione || evento.descrizioneEstesa || evento.descrizione || "")
                        .replace(/Annalisa/g, "<strong class='text-foreground'>Annalisa</strong>")
                        .replace(/Willie Peyote/g, "<strong class='text-foreground'>Willie Peyote</strong>")
                        .replace(/Ernia/g, "<strong class='text-foreground'>Ernia</strong>")
                        .replace(/Serena Brancale/g, "<strong class='text-foreground'>Serena Brancale</strong>"),
                    }}
                  />
                </div>

                {/* Sezione 2: Programma dettagliato */}
                {evento.programma && evento.programma.length > 0 && (
                  <div ref={programmaRef} className="fade-in-section">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Programma</h2>
                    <div className="space-y-10">
                      {evento.programma.map((giornata, gi) => (
                        <div key={gi}>
                          {gi > 0 && <Separator className="mb-10" />}
                          <h3 className="text-xl font-bold mb-6 text-foreground">{giornata.giorno}</h3>
                          <div className="space-y-8">
                            {giornata.fasce.map((fascia, fi) => (
                              <div key={fi} className="pl-4 border-l-2 border-primary/30">
                                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
                                  {fascia.orario}
                                </p>
                                <h4 className="text-lg font-bold text-foreground mb-2">{fascia.titolo}</h4>
                                {fascia.descrizione && (
                                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {fascia.descrizione}
                                  </p>
                                )}
                                {fascia.punti && fascia.punti.length > 0 && (
                                  <ul className="mt-3 space-y-2">
                                    {fascia.punti.map((punto, pi) => (
                                      <li key={pi} className="flex items-start gap-2 text-muted-foreground">
                                        <span className="text-primary mt-1.5 shrink-0">–</span>
                                        <span>{punto}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sezione 3: CTA e Contatti */}
                <div ref={ctaRef} className="fade-in-section">
                  {evento.ctaMessaggio && (
                    <p className="text-lg md:text-xl font-medium text-foreground mb-6">
                      {evento.ctaMessaggio}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    {whatsappUrl && (
                      <Button
                        asChild
                        className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 gap-2"
                      >
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          {evento.ctaLabel || "Prenota su WhatsApp"}
                        </a>
                      </Button>
                    )}
                    {evento.dataISO && (
                      <Button
                        variant="outline"
                        className="rounded-full border-primary text-primary hover:bg-primary/10 px-8 gap-2"
                        onClick={handleCalendar}
                      >
                        <Calendar size={18} />
                        Aggiungi a Google Calendar
                      </Button>
                    )}
                  </div>

                  {/* Contatti di riferimento */}
                  {(evento.contattoNome || evento.contattoTelefono || evento.contattoEmail) && (
                    <div className="mt-8 pt-6 border-t border-border">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">
                        Contatti di riferimento
                      </h3>
                      <div className="flex flex-col gap-3">
                        {evento.contattoNome && (
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <User size={18} className="text-primary shrink-0" />
                            <span>{evento.contattoNome}</span>
                          </div>
                        )}
                        {evento.contattoTelefono && (
                          <a
                            href={`tel:${evento.contattoTelefono}`}
                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Phone size={18} className="text-primary shrink-0" />
                            <span>{evento.contattoTelefono}</span>
                          </a>
                        )}
                        {evento.contattoEmail && (
                          <a
                            href={`mailto:${evento.contattoEmail}`}
                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Mail size={18} className="text-primary shrink-0" />
                            <span>{evento.contattoEmail}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar locandina sticky - solo desktop */}
              {evento.locandina && (
                <div className="hidden lg:block lg:w-80 xl:w-96 shrink-0">
                  <div ref={locandinaRef} className="fade-in-section lg:sticky lg:top-24">
                    <button
                      onClick={() => setLightboxIdx(-1)}
                      className="focus:outline-none focus:ring-2 focus:ring-primary rounded-xl overflow-hidden shadow-lg w-full"
                    >
                      <img
                        src={evento.locandina}
                        alt={`Locandina - ${evento.titolo}`}
                        className="w-full h-auto object-contain"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* Lightbox */}
        {lightboxIdx !== null && (
          <div
            className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors"
              onClick={() => setLightboxIdx(null)}
              aria-label="Chiudi"
            >
              <X size={28} />
            </button>
            <img
              src={evento.locandina || evento.immagine}
              alt={`Locandina - ${evento.titolo}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">{label}</span>
    <div className="flex items-center gap-2 text-foreground font-medium">
      <span className="text-primary">{icon}</span>
      {value}
    </div>
  </div>
);

export default EventoDetail;

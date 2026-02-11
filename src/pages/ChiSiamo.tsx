import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";
import chiSiamoPhoto1 from "@/assets/chi-siamo-photo-1.png";

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

const PhotoBreak = () => (
  <section className="w-full bg-muted">
    <div className="w-full aspect-[21/9] bg-muted flex items-center justify-center">
      <span className="text-muted-foreground/50 text-sm tracking-wide uppercase">
        Foto in arrivo
      </span>
    </div>
  </section>
);

const ChiSiamo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ctaRef = useFadeIn();

  return (
    <>
      <Header />
      <main>
        {/* Sezione 1 – Apertura */}
        <TextSection title="Chi siamo">
          <p>
            Mousikè è nata da una convinzione semplice: che la musica possa
            cambiare il modo in cui una persona cresce.
          </p>
          <p>
            Non parliamo solo di imparare uno strumento.
            <br />
            Parliamo di imparare ad ascoltare, a stare in gruppo, a rispettare i
            tempi, a prendersi la responsabilità di quello che si suona.
          </p>
          <p>
            Da anni, a Lamezia Terme, accompagniamo bambini, ragazzi e adulti in
            questo percorso.
            <br />
            Lo facciamo ogni giorno, in aula, in prova, sul palco.
          </p>
        </TextSection>

        {/* Stacco foto 1 */}
        <section className="w-full">
          <img
            src={chiSiamoPhoto1}
            alt="Lezione di musica a Mousikè"
            className="w-full aspect-[21/9] object-cover"
            loading="lazy"
          />
        </section>

        {/* Sezione 2 – La scuola */}
        <TextSection title="La nostra scuola" alt>
          <p>
            Nelle nostre aule si studia.
            <br />
            Si sbaglia, si riprova, si migliora.
          </p>
          <p>
            C'è chi inizia da zero, chi arriva con un talento evidente, chi ha
            bisogno solo di trovare fiducia.
          </p>
          <p>
            La musica è uno strumento esigente.
            <br />
            Richiede costanza, disciplina, pazienza.
            <br />
            Ed è proprio questo che la rende formativa.
          </p>
          <p>
            Non formiamo solo musicisti.
            <br />
            Formiamo persone capaci di mettersi in gioco.
          </p>
        </TextSection>

        {/* Sezione 3 – Il legame con le scuole */}
        <TextSection title="Dentro le scuole, ogni anno">
          <p>
            Con il progetto "Ma che musica maestro" entriamo negli istituti
            pubblici della città e lavoriamo con centinaia di studenti.
          </p>
          <p>
            Non è un laboratorio occasionale.
            <br />
            È un percorso che dura mesi, che coinvolge insegnanti, famiglie,
            classi intere.
          </p>
          <p>
            Alla fine c'è sempre un momento pubblico, uno spettacolo, una
            restituzione.
            <br />
            Ma il lavoro vero succede prima: nelle prove, nelle relazioni, nella
            crescita di ciascuno.
          </p>
        </TextSection>

        {/* Stacco foto 2 */}
        <PhotoBreak />

        {/* Sezione 4 – Il palco */}
        <TextSection title="Il palco come punto d'incontro" alt>
          <p>
            Ogni produzione nasce da mesi di lavoro.
            <br />
            Musical, concerti, spettacoli.
          </p>
          <p>Sul palco salgono studenti, docenti, a volte intere famiglie.</p>
          <p>
            Non è solo esibizione.
            <br />
            È il momento in cui si vede il percorso fatto.
            <br />
            È il momento in cui un ragazzo capisce di potercela fare.
          </p>
          <p>E questo resta.</p>
        </TextSection>

        {/* Sezione 5 – Inclusione */}
        <TextSection title="La musica è di tutti">
          <p>
            Negli anni abbiamo lavorato con ragazzi con disabilità, con giovani
            che faticavano a trovare il proprio spazio, con realtà fragili.
          </p>
          <p>
            La musica crea un linguaggio comune.
            <br />
            Mette tutti allo stesso livello: davanti a uno strumento, davanti a
            un ritmo, davanti a una voce.
          </p>
          <p>
            È lì che succede qualcosa di importante.
            <br />
            Senza proclami. Senza etichette.
          </p>
        </TextSection>

        {/* Stacco foto 3 */}
        <PhotoBreak />

        {/* Sezione 6 – Oggi */}
        <TextSection title="Oggi" alt>
          <p>
            Oggi Mousikè è una scuola, certo.
            <br />
            Ma è anche un luogo della città.
          </p>
          <p>Un posto in cui si cresce, si studia, si condivide.</p>
          <p>
            Continuiamo a fare quello che abbiamo sempre fatto:
            <br />
            lavorare con serietà, con passione, con la convinzione che la musica
            possa davvero costruire il futuro di chi la vive.
          </p>
        </TextSection>

        {/* CTA finale */}
        <section className="py-24 bg-background">
          <div
            ref={ctaRef}
            className="fade-in-section container mx-auto px-6 max-w-3xl text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Vieni a conoscerci
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary/10 px-8"
              >
                Scopri i nostri percorsi
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ChiSiamo;

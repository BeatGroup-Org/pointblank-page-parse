import { useEffect, useRef, useState } from "react";

const FULL_TEXT = `Nella cultura greca, con la parola mousikè si intendeva l'insieme delle arti: la musica, la danza e il teatro. Le nostre produzioni e i percorsi di formazione nascono da questa visione: offrire ai ragazzi esperienze che intrecciano linguaggi diversi, talento e crescita personale, trasformando ogni spettacolo in un'occasione di apprendimento coinvolgente.`;

const MousikeIntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = FULL_TEXT.split(" ");

  return (
    <section className="py-24 bg-secondary">
      <div ref={sectionRef} className="container mx-auto px-6 max-w-3xl">
        <p className="text-muted-foreground text-center leading-relaxed text-lg">
          {words.map((word, i) => {
            const isMouseike = word === "mousikè";
            return (
              <span
                key={i}
                className={`word-fade-in inline-block mr-[0.3em] ${visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 35}ms` }}
              >
                {isMouseike ? <em>{word}</em> : word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default MousikeIntroSection;

import { useEffect, useRef, useState } from "react";

type Segment = { text: string; bold?: boolean; italic?: boolean; break?: boolean };

const SEGMENTS: Segment[] = [
  { text: "Nella cultura greca, con la parola" },
  { text: "mousikè", bold: true, italic: true },
  { text: "si intendeva" },
  { text: "l'insieme delle arti:", bold: true },
  { text: "la musica, la danza e il teatro.", bold: true },
  { text: "\n", break: true },
  { text: "Le nostre produzioni e i percorsi di formazione nascono da questa visione: offrire ai ragazzi esperienze che intrecciano" },
  { text: "linguaggi diversi,", bold: true },
  { text: "talento e crescita personale,", bold: true },
  { text: "trasformando ogni spettacolo in un'occasione di" },
  { text: "apprendimento coinvolgente.", bold: true },
];

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

  // Flatten segments into individual words with styling info
  let wordIndex = 0;
  const words: { word: string; bold?: boolean; italic?: boolean; index: number }[] = [];
  SEGMENTS.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      words.push({ word: w, bold: seg.bold, italic: seg.italic, index: wordIndex++ });
    });
  });

  return (
    <section className="py-24 bg-secondary">
      <div ref={sectionRef} className="container mx-auto px-6 max-w-3xl">
        <p className="text-center text-xl md:text-2xl leading-relaxed">
          {words.map(({ word, bold, italic, index }) => {
            const baseClass = bold
              ? "font-semibold text-foreground"
              : "font-light text-muted-foreground";
            return (
              <span key={index}>
                <span
                  className={`word-fade-in inline ${baseClass} ${visible ? "visible" : ""}`}
                  style={{ transitionDelay: `${index * 35}ms` }}
                >
                  {italic ? <em>{word}</em> : word}
                </span>{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default MousikeIntroSection;

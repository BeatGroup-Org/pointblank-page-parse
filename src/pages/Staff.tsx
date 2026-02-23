import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFadeIn } from "@/hooks/useFadeIn";
import { team } from "@/data/team";

const Staff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const introRef = useFadeIn();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background">
          <div
            ref={introRef}
            className="fade-in-section py-20 md:py-28 container mx-auto px-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight">
              I nostri<br />maestri
            </h1>
          </div>
        </section>

        {/* Team members */}
        {team.map((member, i) => {
          const isEven = i % 2 === 0;
          return (
            <StaffMemberSection key={member.name} member={member} imageLeft={isEven} alt={!isEven} />
          );
        })}
      </main>
      <Footer />
    </>
  );
};

const StaffMemberSection = ({
  member,
  imageLeft,
  alt,
}: {
  member: (typeof team)[number];
  imageLeft: boolean;
  alt: boolean;
}) => {
  const ref = useFadeIn();

  const imageBlock = (
    <div className="w-full aspect-[4/5] overflow-hidden md:-mt-16">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );

  const textBlock = (
    <div className={`space-y-4 ${imageLeft ? "" : "md:text-right"}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight">
        {member.name}
      </h2>
      <p className="text-lg md:text-xl font-semibold text-primary">
        {member.role}
      </p>
      <hr className="border-border my-4" />
      <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
        <p>{member.description}</p>
      </div>
    </div>
  );

  return (
    <section className={alt ? "bg-secondary" : "bg-background"}>
      <div
        ref={ref}
        className="fade-in-section py-20 md:py-28 container mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {imageLeft ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Staff;

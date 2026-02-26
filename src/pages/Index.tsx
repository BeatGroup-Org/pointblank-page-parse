import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";

import CorsiSection from "@/components/sections/CorsiSection";
import ScuolaEventiSection from "@/components/sections/ScuolaEventiSection";
import ProduzioniSection from "@/components/sections/ProduzioniSection";
import ImpattoSection from "@/components/sections/ImpattoSection";
import TeamSection from "@/components/sections/TeamSection";
import PartnerSection from "@/components/sections/PartnerSection";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <StatsSection />
      <PartnerSection />
      <ProduzioniSection />
      <TeamSection />
      <CorsiSection />
      <ScuolaEventiSection />
      <CtaSection />
      <ImpattoSection />
    </main>
    <Footer />
  </>
);

export default Index;

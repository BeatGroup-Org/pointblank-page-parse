import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import VideoPromoSection from "@/components/sections/VideoPromoSection";
import ProgrammaSection from "@/components/sections/ProgrammaSection";
import CorsiSection from "@/components/sections/CorsiSection";
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
      <VideoPromoSection />
      <ProgrammaSection />
      <CorsiSection />
      <ProduzioniSection />
      <ImpattoSection />
      <TeamSection />
      <PartnerSection />
      <CtaSection />
    </main>
    <Footer />
  </>
);

export default Index;

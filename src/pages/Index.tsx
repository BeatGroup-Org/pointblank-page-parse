import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";

import CorsiSection from "@/components/sections/CorsiSection";
import EventiPreviewSection from "@/components/sections/EventiPreviewSection";
import ScuolaGallerySection from "@/components/sections/ScuolaGallerySection";
import ProduzioniSection from "@/components/sections/ProduzioniSection";
import ImpattoSection from "@/components/sections/ImpattoSection";
import TeamSection from "@/components/sections/TeamSection";
import PartnerSection from "@/components/sections/PartnerSection";

const Index = () => (
  <>
    <Helmet>
      <title>Mousikè - Scuola di Musica a Lamezia Terme</title>
      <meta name="description" content="Centro culturale ed educativo a Lamezia Terme. Corsi di musica, produzioni teatrali, programmi nelle scuole e inclusione sociale. Mousikè APS." />
      <link rel="canonical" href="https://mousikeaps.it/" />
      <meta property="og:title" content="Mousikè - Scuola di Musica a Lamezia Terme" />
      <meta property="og:description" content="Centro culturale ed educativo a Lamezia Terme. Corsi di musica, produzioni teatrali, programmi nelle scuole e inclusione sociale. Mousikè APS." />
      <meta property="og:url" content="https://mousikeaps.it/" />
      <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
      <meta name="twitter:title" content="Mousikè - Scuola di Musica a Lamezia Terme" />
      <meta name="twitter:description" content="Centro culturale ed educativo a Lamezia Terme. Corsi di musica, produzioni teatrali, programmi nelle scuole e inclusione sociale. Mousikè APS." />
      <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg" />
    </Helmet>
    <Header />
    <main>
      <HeroSection />
      <StatsSection />
      <PartnerSection />
      <ProduzioniSection />
      <TeamSection />
      <CorsiSection />
      <EventiPreviewSection />
      <ScuolaGallerySection />
      <ImpattoSection />
    </main>
    <Footer />
  </>
);

export default Index;

const OG_IMAGE_DEFAULT =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/thZ330Re6XMnk35BVH7RLZnxa6R2/social-images/social-1770828975515-Sfondo_Logo.jpg";

const BASE = "https://mousikeaps.it";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  canonical: string;
}

export const routesMeta: RouteMeta[] = [
  {
    path: "/",
    title: "Mousikè - Scuola di Musica a Lamezia Terme",
    description:
      "Centro culturale ed educativo a Lamezia Terme. Corsi di musica, produzioni teatrali, programmi nelle scuole e inclusione sociale. Mousikè APS.",
    ogImage: OG_IMAGE_DEFAULT,
    canonical: `${BASE}/`,
  },
  {
    path: "/chi-siamo",
    title: "Chi Siamo - Mousikè",
    description:
      "La storia e la missione di Mousikè APS, associazione culturale a Lamezia Terme impegnata nella formazione musicale e nell'inclusione sociale.",
    ogImage: OG_IMAGE_DEFAULT,
    canonical: `${BASE}/chi-siamo`,
  },
  {
    path: "/staff",
    title: "Il Team - Mousikè",
    description:
      "I docenti e lo staff di Mousikè APS. Professionisti della musica a Lamezia Terme.",
    ogImage: OG_IMAGE_DEFAULT,
    canonical: `${BASE}/staff`,
  },
  {
    path: "/formazione",
    title: "Formazione Musicale - Mousikè",
    description:
      "Corsi di musica a Lamezia Terme: canto, pianoforte, chitarra, batteria, violino e musical. Mousikè APS.",
    ogImage: OG_IMAGE_DEFAULT,
    canonical: `${BASE}/formazione`,
  },
  {
    path: "/produzioni",
    title: "Produzioni Culturali - Mousikè",
    description:
      "Musical e spettacoli prodotti da Mousikè APS a Lamezia Terme: La Bella e la Bestia, Disney in Concerto e nuove produzioni.",
    ogImage: OG_IMAGE_DEFAULT,
    canonical: `${BASE}/produzioni`,
  },
  {
    path: "/programmi-educativi",
    title: "Ma Che Musica Maestro! - Mousikè",
    description:
      "Il progetto musicale di Mousikè APS a Lamezia Terme. Da oltre quindici anni, Ma Che Musica Maestro! accompagna la crescita dei più giovani attraverso la musica.",
    ogImage: OG_IMAGE_DEFAULT,
    canonical: `${BASE}/programmi-educativi`,
  },
  {
    path: "/eventi",
    title: "Eventi - Mousikè",
    description:
      "Concerti, spettacoli, workshop e masterclass organizzati da Mousikè APS a Lamezia Terme.",
    ogImage: OG_IMAGE_DEFAULT,
    canonical: `${BASE}/eventi`,
  },
  {
    path: "/contatti",
    title: "Contatti - Mousikè",
    description:
      "Contatta Mousikè APS per informazioni, iscrizioni ai corsi di musica e collaborazioni a Lamezia Terme.",
    ogImage: OG_IMAGE_DEFAULT,
    canonical: `${BASE}/contatti`,
  },
  {
    path: "/amministrazione-trasparente",
    title: "Amministrazione Trasparente - Mousikè",
    description:
      "Documenti e informazioni di trasparenza dell'associazione culturale Mousikè APS di Lamezia Terme.",
    ogImage: OG_IMAGE_DEFAULT,
    canonical: `${BASE}/amministrazione-trasparente`,
  },
  {
    path: "/eventi/dario-panza",
    title: "Masterclass di Batteria con Dario Panza - Mousikè",
    description:
      "Batterista di fama nazionale, Dario Panza guiderà una masterclass dedicata al ritmo, alla tecnica e all'espressività nella batteria moderna. 13–14 Marzo 2026 a Lamezia Terme.",
    ogImage: `${BASE}/assets/eventi/dario-panza-hero.png`,
    canonical: `${BASE}/eventi/dario-panza`,
  },
  {
    path: "/eventi/jacopo-carlini",
    title: "Masterclass di Pianoforte con Jacopo Carlini - Mousikè",
    description:
      "Pianista, compositore e arrangiatore, Jacopo Carlini guiderà una masterclass dedicata al pianoforte contemporaneo. 10–11 Aprile 2026 a Lamezia Terme.",
    ogImage: `${BASE}/assets/eventi/jacopo-carlini-hero.jpg`,
    canonical: `${BASE}/eventi/jacopo-carlini`,
  },
];

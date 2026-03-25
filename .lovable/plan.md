

## Piano: Aggiungere sezione "Musica che diventa racconto" sotto la Hero

### Cosa fare
Creare un nuovo componente `MousikeIntroSection.tsx` e inserirlo in homepage tra `HeroSection` e `StatsSection`.

### Nuovo file: `src/components/sections/MousikeIntroSection.tsx`
- Stile simile a `PartnerSection`: sfondo `bg-secondary`, `py-24`, container centrato `max-w-5xl`
- Titolo: "MUSICA CHE DIVENTA RACCONTO" (uppercase, `text-3xl md:text-4xl font-bold text-center`)
- Testo: i due paragrafi forniti, centrati, con `text-muted-foreground max-w-2xl mx-auto leading-relaxed`
- Animazione fade-in con `useFadeIn`

### Modifica: `src/pages/Index.tsx`
- Importare `MousikeIntroSection`
- Inserirlo tra `<HeroSection />` e `<StatsSection />`


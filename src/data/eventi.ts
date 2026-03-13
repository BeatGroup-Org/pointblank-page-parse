import darioPanzaHero from "@/assets/eventi/dario-panza-hero.png";
import darioPanzaLocandina from "@/assets/eventi/dario-panza-locandina.png";
import jacopoCarliniHero from "@/assets/eventi/jacopo-carlini-hero.jpg";
import jacopoCarliniLocandina from "@/assets/eventi/jacopo-carlini-locandina.jpg";

export interface FasciaOraria {
  orario: string;
  titolo: string;
  descrizione?: string;
  punti?: string[];
}

export interface GiornataProgramma {
  giorno: string;
  fasce: FasciaOraria[];
}

export interface Evento {
  id: number;
  slug: string;
  titolo: string;
  data: string;
  dataISO?: string;
  ora?: string;
  oraFine?: string;
  luogo: string;
  indirizzo?: string;
  immagine: string;
  locandina?: string;
  descrizione?: string;
  descrizioneEstesa?: string;
  introduzione?: string;
  programma?: GiornataProgramma[];
  ctaMessaggio?: string;
  ctaLabel?: string;
  categoria?: string;
  rassegna?: string;
  ingresso?: "gratuito" | "a pagamento";
  prezzoInfo?: string;
  contattoNome?: string;
  contattoTelefono?: string;
  contattoEmail?: string;
  whatsappNumero?: string;
  gallery?: string[];
}

export const eventi: Evento[] = [
  {
    id: 1,
    slug: "dario-panza",
    titolo: "Masterclass di Batteria con Dario Panza",
    data: "13–14 Marzo 2026",
    dataISO: "2026-03-13",
    luogo: "Civico Trame – Lamezia Terme",
    indirizzo: "Via Duca d'Aosta, 23, 88046 Lamezia Terme CZ",
    categoria: "Masterclass",
    rassegna: "Stagione Concertistica 2025/26",
    descrizione:
      "Batterista di fama nazionale, Dario Panza guiderà una masterclass dedicata al ritmo, alla tecnica e all'espressività nella batteria moderna.",
    descrizioneEstesa:
      "Un weekend intensivo con Dario Panza, batterista di fama nazionale. Due giorni dedicati al ritmo, alla tecnica e all'espressività nella batteria moderna.\n\nLa masterclass è aperta a batteristi di tutti i livelli e prevede sessioni pratiche, ascolto guidato e momenti di confronto. Ogni partecipante avrà la possibilità di suonare e ricevere feedback diretto dal maestro.\n\nAl termine della masterclass è previsto un momento di jam session aperto al pubblico.",
    introduzione: "Due giornate dedicate alla batteria contemporanea con Dario Panza, musicista attivo tra jazz, pop e urban, oggi protagonista dei grandi live italiani.\n\nClasse 1988, Panza è noto per le sue collaborazioni live e in studio con Annalisa, Willie Peyote, Ernia e Serena Brancale. Un batterista capace di attraversare linguaggi diversi mantenendo una cifra personale riconoscibile, solida e moderna.\n\nLa masterclass nasce dall'esperienza concreta di chi vive palco e studio quotidianamente, portando un approccio professionale alla costruzione del suono, del groove e della performance.\n\nNon solo tecnica, ma visione del mestiere.",
    programma: [
      {
        giorno: "Giovedì 13 Marzo",
        fasce: [
          {
            orario: "16:30 – 19:00",
            titolo: "Masterclass di Batteria",
            descrizione: "Un incontro collettivo dedicato a:",
            punti: [
              "Costruzione del groove nella musica pop e urban",
              "Controllo dinamico e consapevolezza del suono",
              "Gestione del tempo nei contesti live",
              "Approccio professionale alla preparazione di un concerto",
            ],
          },
        ],
      },
      {
        giorno: "Venerdì 14 Marzo",
        fasce: [
          {
            orario: "9:30 – 17:00",
            titolo: "Lezioni individuali",
            descrizione: "Sessioni one to one su prenotazione, dedicate a chi desidera un confronto diretto e personalizzato con l'artista.\nAnalisi tecnica, esercizi mirati e lavoro specifico sulle esigenze del partecipante.",
          },
          {
            orario: "18:30",
            titolo: "Concerto Evento",
            descrizione: "Performance live aperta al pubblico.\nUn momento conclusivo in cui la formazione incontra il palco, con spazio anche al dialogo e alle domande.",
          },
        ],
      },
    ],
    ctaMessaggio: "Posti limitati per garantire qualità e interazione diretta.",
    ctaLabel: "Info costi e prenotazioni",
    contattoNome: "Segreteria Mousikè",
    contattoTelefono: "+39 333 956 8927",
    contattoEmail: "mousike.aps@gmail.com",
    whatsappNumero: "393339568927",
    immagine: darioPanzaHero,
    locandina: darioPanzaLocandina,
  },
  {
    id: 2,
    slug: "jacopo-carlini",
    titolo: "Masterclass di Pianoforte con Jacopo Carlini",
    data: "10–11 Aprile 2026",
    dataISO: "2026-04-10",
    luogo: "Chiostro San Domenico – Lamezia Terme",
    categoria: "Masterclass",
    rassegna: "Stagione Concertistica 2025/26",
    descrizione:
      "Pianista, compositore e arrangiatore, Jacopo Carlini guiderà una masterclass dedicata al pianoforte contemporaneo tra jazz e musica d'autore.",
    descrizioneEstesa:
      "Due giornate dedicate al pianoforte con Jacopo Carlini, musicista che spazia tra jazz, musica d'autore e produzione artistica.\n\nLa masterclass è aperta a pianisti di tutti i livelli e prevede una sessione collettiva, lezioni individuali e un concerto evento aperto al pubblico.",
    introduzione:
      "Mousikè torna ad aprile con due giornate dedicate al pianoforte con Jacopo Carlini, musicista che spazia tra jazz, musica d'autore e produzione artistica. Nel corso della sua carriera ha collaborato con importanti nomi della musica italiana come Ultimo, Giorgia, Riccardo Cocciante e Alex Britti, oltre ad aver lavorato con la Orchestra Sinfonica Nazionale della RAI.\n\nPianista, compositore e arrangiatore, Carlini è noto per la sua capacità di muoversi tra linguaggi musicali diversi mantenendo una cifra personale raffinata e contemporanea, portando nel suo lavoro una visione musicale aperta e profondamente comunicativa.\n\nLa masterclass nasce dall'esperienza concreta di un artista che vive quotidianamente il palco e lo studio, offrendo ai partecipanti un approccio professionale allo sviluppo del suono, dell'interpretazione e della performance pianistica.",
    programma: [
      {
        giorno: "Giovedì 10 Aprile",
        fasce: [
          {
            orario: "16:30 – 19:00",
            titolo: "Masterclass Collettiva di Pianoforte",
            descrizione: "Un incontro aperto dedicato a:",
            punti: [
              "Approccio al pianoforte contemporaneo tra jazz e musica d'autore",
              "Costruzione del suono e dell'identità musicale",
              "Dinamica, espressività e gestione dello spazio sonoro",
              "Il ruolo del pianista nei contesti live e creativi",
            ],
          },
        ],
      },
      {
        giorno: "Venerdì 11 Aprile",
        fasce: [
          {
            orario: "10:00 – 17:00",
            titolo: "Lezioni Individuali",
            descrizione:
              "Sessioni one to one su prenotazione, dedicate a chi desidera un confronto diretto e personalizzato con il maestro.\nAnalisi tecnica, lavoro sull'interpretazione, suggerimenti pratici e approfondimenti mirati sulle esigenze musicali di ogni partecipante.",
          },
          {
            orario: "18:30",
            titolo: "Dialogo in Musica – Jacopo Carlini & Chiara Vescio in concerto",
            descrizione:
              "Un momento conclusivo aperto al pubblico in cui la formazione incontra il palco. Un dialogo tra pianoforte e voce che diventa occasione di condivisione artistica, con spazio anche al confronto con il pubblico.",
          },
        ],
      },
    ],
    ctaMessaggio: "I posti sono limitati per garantire qualità, ascolto e interazione diretta con l'artista.",
    ctaLabel: "Info costi e prenotazioni",
    contattoNome: "Segreteria Mousikè",
    contattoTelefono: "+39 333 956 8927",
    contattoEmail: "mousike.aps@gmail.com",
    whatsappNumero: "393339568927",
    immagine: jacopoCarliniHero,
    locandina: jacopoCarliniLocandina,
  },
];

import darioPanzaHero from "@/assets/eventi/dario-panza-hero.png";
import darioPanzaLocandina from "@/assets/eventi/dario-panza-locandina.png";

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
];

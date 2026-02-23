export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const team: TeamMember[] = [
  {
    name: "Orlando Vescio",
    role: "Pianista e Direttore Artistico",
    image: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Orlando%20Vescio.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9PcmxhbmRvIFZlc2Npby5qcGciLCJpYXQiOjE3NzA4MjgxMTIsImV4cCI6MjYzNDgyODExMn0.NdKiVjsZF0HmxQirAnGYownaNZtbRhqIl2a-PhgDaO8",
    description:
      "Pianista e direttore artistico, è uno dei riferimenti storici di Mousikè. Da anni accompagna studenti e produzioni con un'idea chiara di musica come percorso di crescita e responsabilità. La sua esperienza didattica e il lavoro sul palco si intrecciano in un approccio rigoroso ma sempre attento alla persona.",
  },
  {
    name: "Chiara Vescio",
    role: "Cantante e Vocal Coach",
    image: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Chiara%20Vescio.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9DaGlhcmEgVmVzY2lvLmpwZyIsImlhdCI6MTc3MDgyNzk1NywiZXhwIjoyNjM0ODI3OTU3fQ.PdErH2n-lWy9hRHfUIm0CfDcV7BMr779iI4FAJoRHSI",
    description:
      "Cantante e vocal coach, unisce attività artistica e insegnamento. In scena porta intensità e cura del dettaglio; in aula lavora sulla tecnica, sull'ascolto e sulla consapevolezza espressiva. Il suo lavoro è orientato a far emergere l'identità vocale di ciascun allievo, senza forzature.",
  },
  {
    name: "Eugenio Nicolazzo",
    role: "Interprete e Performer",
    image: "https://apsvfcqshxmqigyihehe.supabase.co/storage/v1/object/sign/Customers/Mousike/Eugenio%20Nicolazzo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jODgwZDk1Ny0wYzcxLTRjZmUtOWQwOS1iNDlmMjVhNjc4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDdXN0b21lcnMvTW91c2lrZS9FdWdlbmlvIE5pY29sYXp6by5qcGciLCJpYXQiOjE3NzA4Mjc5ODQsImV4cCI6MjYzNDgyNzk4NH0.2eyMv2YM1cnMgqwT2_q8cYuYGUfxEnpl-SOvsbiOZ_g",
    description:
      "Interprete e performer, collabora alle principali produzioni musicali di Mousikè. La sua presenza scenica e l'esperienza nel musical contribuiscono a dare solidità ai progetti artistici della scuola. Con gli allievi condivide un lavoro concreto su interpretazione, ritmo e presenza.",
  },
];

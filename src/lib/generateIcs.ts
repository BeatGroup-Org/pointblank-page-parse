interface IcsParams {
  titolo: string;
  dataISO: string;
  ora?: string;
  oraFine?: string;
  luogo?: string;
  descrizione?: string;
}

export function generateIcsDownload(params: IcsParams) {
  const { titolo, dataISO, ora, oraFine, luogo, descrizione } = params;

  const formatDate = (date: string, time?: string) => {
    const d = date.replace(/-/g, "");
    if (time) {
      const t = time.replace(/:/g, "");
      return `${d}T${t}00`;
    }
    return d;
  };

  const dtStart = formatDate(dataISO, ora);
  const dtEnd = oraFine
    ? formatDate(dataISO, oraFine)
    : ora
      ? formatDate(dataISO, `${String(parseInt(ora.split(":")[0]) + 2).padStart(2, "0")}:${ora.split(":")[1]}`)
      : formatDate(dataISO);

  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Mousike//Eventi//IT",
    "BEGIN:VEVENT",
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `DTSTAMP:${now}`,
    `SUMMARY:${titolo}`,
    luogo ? `LOCATION:${luogo}` : "",
    descrizione ? `DESCRIPTION:${descrizione.replace(/\n/g, "\\n")}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");

  const blob = new Blob([lines], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${titolo.replace(/[^a-zA-Z0-9]/g, "_")}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

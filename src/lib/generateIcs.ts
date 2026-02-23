interface GoogleCalendarParams {
  titolo: string;
  dataISO: string;
  ora?: string;
  oraFine?: string;
  luogo?: string;
  descrizione?: string;
}

export function openGoogleCalendar(params: GoogleCalendarParams) {
  const { titolo, dataISO, ora, oraFine, luogo, descrizione } = params;

  const formatDateTime = (date: string, time?: string) => {
    const d = date.replace(/-/g, "");
    if (time) {
      const t = time.replace(/:/g, "");
      return `${d}T${t}00`;
    }
    return d;
  };

  const dtStart = formatDateTime(dataISO, ora);
  const dtEnd = oraFine
    ? formatDateTime(dataISO, oraFine)
    : ora
      ? formatDateTime(dataISO, `${String(parseInt(ora.split(":")[0]) + 2).padStart(2, "0")}:${ora.split(":")[1]}`)
      : formatDateTime(dataISO);

  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", titolo);
  url.searchParams.set("dates", `${dtStart}/${dtEnd}`);
  if (luogo) url.searchParams.set("location", luogo);
  if (descrizione) url.searchParams.set("details", descrizione);

  window.open(url.toString(), "_blank", "noopener,noreferrer");
}

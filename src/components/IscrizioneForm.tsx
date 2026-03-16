import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface IscrizioneFormProps {
  titoloEvento: string;
  whatsappNumero: string;
}

const PARTECIPAZIONE_OPTIONS = [
  { value: "collettiva", label: "Masterclass collettiva" },
  { value: "individuale", label: "Lezione individuale" },
  { value: "entrambe", label: "Masterclass + Lezione individuale", consigliato: true },
] as const;

const IscrizioneForm = ({ titoloEvento, whatsappNumero }: IscrizioneFormProps) => {
  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    dataNascita: "",
    codiceFiscale: "",
    telefono: "",
    email: "",
    citta: "",
    strumento: "",
    livello: "",
    partecipazione: "",
    note: "",
  });
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nome.trim()) e.nome = "Campo obbligatorio";
    if (!form.cognome.trim()) e.cognome = "Campo obbligatorio";
    if (!form.telefono.trim()) e.telefono = "Campo obbligatorio";
    if (!form.partecipazione) e.partecipazione = "Seleziona un'opzione";
    if (!privacy) e.privacy = "Devi accettare per proseguire";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const partecipazioneLabel = PARTECIPAZIONE_OPTIONS.find((o) => o.value === form.partecipazione)?.label || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `📋 ISCRIZIONE ${titoloEvento.toUpperCase()}`,
      "",
      `👤 Nome: ${form.nome.trim()} ${form.cognome.trim()}`,
    ];
    if (form.dataNascita) lines.push(`📅 Nascita: ${form.dataNascita}`);
    if (form.codiceFiscale.trim()) lines.push(`🏷️ CF: ${form.codiceFiscale.trim()}`);
    lines.push(`📞 Tel: ${form.telefono.trim()}`);
    if (form.email.trim()) lines.push(`📧 Email: ${form.email.trim()}`);
    if (form.citta.trim()) lines.push(`📍 Città: ${form.citta.trim()}`);
    if (form.strumento.trim()) lines.push(`🎵 Strumento: ${form.strumento.trim()}`);
    if (form.livello.trim()) lines.push(`📊 Livello: ${form.livello.trim()}`);
    lines.push("", `✅ Partecipazione: ${partecipazioneLabel}`);
    if (form.note.trim()) lines.push("", `📝 Note: ${form.note.trim()}`);
    lines.push("", "Accetto il trattamento dati (GDPR 679/2016)");

    const url = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="scroll-mt-24" id="iscrizione">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Iscriviti alla Masterclass</h2>
      <p className="text-muted-foreground mb-8">
        Compila il form e invia la tua iscrizione direttamente su WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        {/* Dati personali */}
        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">
            Dati personali
          </legend>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Nome" required error={errors.nome}>
              <Input value={form.nome} onChange={(e) => update("nome", e.target.value)} maxLength={100} />
            </Field>
            <Field label="Cognome" required error={errors.cognome}>
              <Input value={form.cognome} onChange={(e) => update("cognome", e.target.value)} maxLength={100} />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Data di nascita">
              <Input type="date" value={form.dataNascita} onChange={(e) => update("dataNascita", e.target.value)} />
            </Field>
            <Field label="Codice fiscale">
              <Input value={form.codiceFiscale} onChange={(e) => update("codiceFiscale", e.target.value)} maxLength={16} />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Telefono" required error={errors.telefono}>
              <Input type="tel" value={form.telefono} onChange={(e) => update("telefono", e.target.value)} maxLength={20} />
            </Field>
            <Field label="Email">
              <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} maxLength={255} />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label="Città di provenienza">
              <Input value={form.citta} onChange={(e) => update("citta", e.target.value)} maxLength={100} />
            </Field>
            <Field label="Strumento">
              <Input value={form.strumento} onChange={(e) => update("strumento", e.target.value)} maxLength={60} />
            </Field>
            <Field label="Livello di preparazione">
              <Input
                value={form.livello}
                onChange={(e) => update("livello", e.target.value)}
                placeholder="es. Principiante, Intermedio…"
                maxLength={60}
              />
            </Field>
          </div>
        </fieldset>

        {/* Partecipazione */}
        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-4">
            Tipo di partecipazione
          </legend>
          {errors.partecipazione && (
            <p className="text-sm text-destructive -mt-2">{errors.partecipazione}</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PARTECIPAZIONE_OPTIONS.map((opt) => {
              const selected = form.partecipazione === opt.value;
              return (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => update("partecipazione", opt.value)}
                  className={cn(
                    "relative rounded-xl border-2 p-4 text-left transition-all",
                    selected
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  {"consigliato" in opt && opt.consigliato && (
                    <Badge className="absolute -top-2.5 right-3 bg-primary text-primary-foreground text-[10px] px-2 border-0">
                      Consigliato
                    </Badge>
                  )}
                  <span className={cn("text-sm font-medium", selected ? "text-primary" : "text-foreground")}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Note */}
        <Field label="Note aggiuntive">
          <Textarea
            value={form.note}
            onChange={(e) => update("note", e.target.value)}
            placeholder="Esigenze particolari, brani su cui lavorare…"
            rows={3}
            maxLength={500}
          />
        </Field>

        {/* Privacy */}
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id="privacy"
              checked={privacy}
              onCheckedChange={(v) => {
                setPrivacy(v === true);
                if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: "" }));
              }}
              className="mt-0.5"
            />
            <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-snug cursor-pointer">
              Acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
              I dati saranno utilizzati esclusivamente per la gestione dell'iscrizione.
            </Label>
          </div>
          {errors.privacy && <p className="text-sm text-destructive">{errors.privacy}</p>}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-10 gap-2"
          size="lg"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Invia iscrizione su WhatsApp
        </Button>
      </form>
    </div>
  );
};

const Field = ({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label className="text-sm">
      {label}
      {required && <span className="text-primary ml-0.5">*</span>}
    </Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default IscrizioneForm;

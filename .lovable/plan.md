

## Integrazione Iubenda Privacy Policy nel form di iscrizione

Lo script Iubenda fornito genera un widget/link alla privacy policy. Lo integreremo nel form di iscrizione, collegandolo al testo della checkbox GDPR.

### Modifiche

1. **`index.html`** — Aggiungere lo script Iubenda nel `<head>`:
   ```html
   <script type="text/javascript" src="https://embeds.iubenda.com/widgets/544f6a7b-1d0e-406f-ad85-5363aab12887.js"></script>
   ```

2. **`src/components/IscrizioneForm.tsx`** (riga ~199-202) — Aggiornare il testo della Label privacy per includere un link alla policy Iubenda:
   ```
   Acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
   Leggi la <a href="..." class="iubenda-...">Privacy Policy</a>.
   ```
   Il link sarà generato automaticamente dal widget Iubenda caricato nello script.

3. **`src/components/Footer.tsx`** — Aggiungere un link "Privacy Policy" nella sezione "Link utili" del footer, sempre tramite il widget Iubenda.


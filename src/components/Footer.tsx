import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contatti" className="bg-foreground text-card py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Mousikè</h3>
          <p className="text-card/70 text-sm leading-relaxed">
            Centro culturale ed educativo a Lamezia Terme. Formazione musicale, inclusione sociale e produzioni artistiche.
          </p>
        </div>

        {/* Contatti */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contatti</h4>
          <div className="space-y-3 text-sm text-card/70">
            <div className="flex items-center gap-2"><MapPin size={16} /> Via Example 123, Lamezia Terme (CZ)</div>
            <div className="flex items-center gap-2"><Phone size={16} /> +39 0968 000000</div>
            <div className="flex items-center gap-2"><Mail size={16} /> info@mousike.it</div>
          </div>
        </div>

        {/* Link */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Link utili</h4>
          <div className="space-y-2 text-sm text-card/70">
            {["Programma", "Corsi", "Produzioni", "Team", "Contatti", "Privacy Policy"].map((l) => (
              <a key={l} href="#" className="block hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-card/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-card/50">
        <p>© {new Date().getFullYear()} Mousikè. Tutti i diritti riservati.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {["Facebook", "Instagram", "YouTube"].map((s) => (
            <a key={s} href="#" className="hover:text-primary transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

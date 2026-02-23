import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contatti" className="bg-foreground text-card py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Mousikè</h3>
          <p className="text-card/70 text-sm leading-relaxed">
            Centro culturale ed educativo a Lamezia Terme. Formazione musicale, inclusione sociale e produzioni artistiche.
          </p>
        </div>

        {/* Contatti */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contatti</h4>
          <div className="space-y-3 text-sm text-card/70">
            <a href="https://maps.google.com/?q=Via+Duca+d'Aosta+23+88046+Lamezia+Terme+CZ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MapPin size={16} /> Via Duca d'Aosta, 23, 88046 Lamezia Terme CZ
            </a>
            <a href="tel:+393339568927" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +39 333 956 8927
            </a>
            <a href="mailto:info@mousike.it" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> info@mousike.it
            </a>
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
          <a href="https://www.facebook.com/scuoladimusicalamezia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
          <a href="https://www.instagram.com/scuoladimusicamousike/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

import { useState } from "react";
import { Link } from "react-router-dom";
import { X, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { trackContactConversion } from "@/lib/trackConversion";
const ContactFab = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-card border border-border rounded-2xl shadow-xl p-5 w-72 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <h4 className="font-bold text-foreground text-lg mb-3">Contattaci</h4>
          <div className="space-y-3 text-sm">
            <a
              href="https://maps.google.com/?q=Via+Duca+d'Aosta+23+88046+Lamezia+Terme+CZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <MapPin size={16} className="shrink-0" />
              Via Duca d'Aosta, 23, 88046 Lamezia Terme CZ
            </a>
            <a
              href="tel:+393339568927"
              onClick={trackContactConversion}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} className="shrink-0" />
              +39 333 956 8927
            </a>
            <a
              href="mailto:mousike.aps@gmail.com"
              onClick={trackContactConversion}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} className="shrink-0" />
              mousike.aps@gmail.com
            </a>
          </div>
          <div className="flex gap-3 mt-4 pt-3 border-t border-border">
            <a href="https://www.facebook.com/scuoladimusicalamezia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/scuoladimusicamousike/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={18} /></a>
          </div>
          <Link
            to="/contatti"
            onClick={() => setOpen(false)}
            className="block w-full bg-primary text-primary-foreground font-bold py-3 rounded-full text-center uppercase tracking-wide hover:opacity-90 transition-opacity mt-4"
          >
            Contattaci
          </Link>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 bg-card border border-border"
        aria-label={open ? "Chiudi contatti" : "Apri contatti"}
      >
        {open ? (
          <X size={24} className="text-foreground" />
        ) : (
          <img
            src="/favicon.png"
            alt="Contattaci"
            className="w-10 h-10 rounded-full animate-pulse"
          />
        )}
      </button>
    </div>
  );
};

export default ContactFab;

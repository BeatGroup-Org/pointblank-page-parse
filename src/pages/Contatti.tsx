import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contatti = () => (
  <>
    <Header />
    <main className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contatti</h1>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Vuoi prenotare una lezione di prova o semplicemente saperne di più?
          Scrivici o vieni a trovarci nella nostra sede.
        </p>

        <div className="grid gap-8">
          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Sede</h3>
              <p className="text-muted-foreground">Lamezia Terme (CZ), Calabria</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Telefono</h3>
              <p className="text-muted-foreground">Contattaci per informazioni</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-primary mt-1 shrink-0" size={22} />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground">info@mousike.it</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Contatti;

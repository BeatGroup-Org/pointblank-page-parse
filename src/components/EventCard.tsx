import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import type { Evento } from "@/data/eventi";

const EventCard = ({ evento }: { evento: Evento }) => (
  <div className="event-card group">
    {/* Image */}
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={evento.immagine}
        alt={evento.titolo}
        className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
        <MapPin size={12} />
        {evento.luogo}
      </span>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-white leading-snug mb-2">
        {evento.titolo}
      </h3>

      {evento.descrizione && (
        <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
          {evento.descrizione}
        </p>
      )}

      <div className="mt-auto flex items-end justify-between">
        <div className="flex gap-6">
          <div>
            <span className="event-label">date</span>
            <div className="flex items-center gap-1.5 text-white text-sm font-medium">
              <Calendar size={13} className="text-white/50" />
              {evento.data}
            </div>
          </div>
          {evento.ora && (
            <div>
              <span className="event-label">time</span>
              <div className="flex items-center gap-1.5 text-white text-sm font-medium">
                <Clock size={13} className="text-white/50" />
                {evento.ora}
              </div>
            </div>
          )}
        </div>

        <a
          href="#"
          className="event-link-btn"
          aria-label={`Dettagli: ${evento.titolo}`}
        >
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </div>
);

export default EventCard;

import { type CoffeeEvent, getNextOccurrences, formatEventDate } from "@/lib/events";

interface EventCardProps {
  event: CoffeeEvent;
}

export function EventCard({ event }: EventCardProps) {
  const nextDates = getNextOccurrences(event.day, 3).map(formatEventDate);

  return (
    <div className="bg-espresso/50 border border-cream/10 rounded-card p-8 flex flex-col gap-5">
      <div className="flex items-start gap-4">
        <span className="text-4xl leading-none" aria-hidden="true">
          {event.emoji}
        </span>
        <div>
          <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-amber mb-1">
            Every {event.dayName} · {event.time}
          </p>
          <h3 className="font-display text-2xl font-bold text-cream leading-tight">
            {event.title}
          </h3>
        </div>
      </div>

      <p className="font-body text-base text-cream/70 leading-relaxed">
        {event.longDescription}
      </p>

      <div className="pt-2 border-t border-cream/10">
        <p className="font-body text-xs font-semibold tracking-wide uppercase text-amber/70 mb-2">
          Upcoming dates
        </p>
        <ul className="flex flex-col gap-1">
          {nextDates.map((date) => (
            <li key={date} className="font-body text-sm text-cream/60">
              {date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

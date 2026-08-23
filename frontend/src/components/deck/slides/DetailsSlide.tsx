import { CalendarDays, MapPin, ShieldCheck, Users } from "lucide-react";
import { Panel, SlideShell } from "../SlideShell";
import { round2Schedule } from "@/data/event";
import clock from "@/assets/r3d-clock.jpg";

const facts = [
  { icon: Users, k: "Team Size", v: "6 members", note: "Minimum 1 female member" },
  {
    icon: CalendarDays,
    k: "Registration Window",
    v: "20–25 August 2026",
    note: "Registration opens 20 Aug 2026 · IST",
  },
  {
    icon: MapPin,
    k: "Venues",
    v: "Computer Centre E310 ",
    note: "Round 1 labs · Round 2  auditorium",
  },
  {
    icon: ShieldCheck,
    k: "Eligibility",
    v: "Quantum University students",
    note: "All eligible branches & years",
  },
];

export function DetailsSlide() {
  return (
    <SlideShell
      index="03"
      eyebrow="Essentials"
      title="Important"
      accent="Event Details"
      subtitle="Everything a team needs before the first round."
      wide
    >
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {facts.map((f) => (
            <Panel key={f.k} className="flex flex-col">
              <f.icon size={20} className="text-primary" />
              <p className="mt-4 font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                {f.k}
              </p>
              <p className="mt-1.5 text-base font-medium">{f.v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.note}</p>
            </Panel>
          ))}
        </div>

        <Panel hover={false} className="flex flex-col">
          <img
            src={clock}
            alt="3D stopwatch with glowing blue rim"
            loading="lazy"
            width={1104}
            height={1104}
            className="mix-blend-multiply mx-auto mb-4 hidden w-32 drop-shadow-[0_24px_36px_rgb(34_197_94/0.18)] sm:block"
          />
          <p className="eyebrow">Round 2 · Day Schedule</p>
          <h3 className="mt-3 text-xl font-semibold">14 September 2026 · 7 hours</h3>
          <ul className="mt-5 space-y-3">
            {round2Schedule.map((r) => (
              <li
                key={r.time}
                className="flex items-baseline gap-4 border-b border-border/50 pb-3 last:border-0 last:pb-0"
              >
                <span className="w-36 shrink-0 font-mono text-[0.7rem] tracking-[0.1em] text-primary">
                  {r.time}
                </span>
                <span className="text-sm text-foreground">{r.label}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </SlideShell>
  );
}

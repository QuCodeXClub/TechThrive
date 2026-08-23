import { Trophy } from "lucide-react";
import { Panel, SlideShell } from "../SlideShell";
import { prizes } from "@/data/event";
import { cn } from "@/lib/utils";

export function PrizesSlide() {
  return (
    <SlideShell
      index="08"
      eyebrow="Recognition"
      title="Prizes &"
      accent="Recognition"
      subtitle="Recognition for winning teams, runners-up and every participant."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {prizes.map((p) => (
          <Panel
            key={p.title}
            className={cn(
              "flex flex-col",
              p.featured && "border-primary/50 shadow-[var(--shadow-lift)]",
            )}
          >
            <Trophy size={22} className={p.featured ? "text-primary" : "text-muted-foreground"} />
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <ul className="mt-4 space-y-2">
              {p.items.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">▸</span>
                  {i}
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </SlideShell>
  );
}

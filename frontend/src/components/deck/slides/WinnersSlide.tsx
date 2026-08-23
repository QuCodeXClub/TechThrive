import { SlideShell } from "../SlideShell";

import teamV1_1 from "@/assets/team-v1-1.jpg";
import teamV1_2 from "@/assets/team-v1-2.jpg";
import teamV1_3 from "@/assets/team-v1-3.jpg";

import teamV2_1 from "@/assets/four.jpeg";
import teamV2_2 from "@/assets/five.jpeg";
import teamV2_3 from "@/assets/six.jpeg";

const items = [
  {
    edition: "TechThrive 1.0",
    position: "Winner",
    image: teamV1_1,
    teamname: "Previous Winner",
    project: "Winning Project",
  },
  {
    edition: "TechThrive 1.0",
    position: "Winner",
    image: teamV1_2,
    teamname: "Previous Winner",
    project: "Winning Project",
  },
  {
    edition: "TechThrive 1.0",
    position: "Winner",
    image: teamV1_3,
    teamname: "Previous Winner",
    project: "Winning Project",
  },
  {
    edition: "TechThrive 2.0",
    position: "Winner",
    image: teamV2_1,
    teamname: "Previous Winner",
    project: "Winning Project",
  },
  {
    edition: "TechThrive 2.0",
    position: "Winner",
    image: teamV2_2,
    teamname: "Previous Winner",
    project: "Winning Project",
  },
  {
    edition: "TechThrive 2.0",
    position: "Winner",
    image: teamV2_3,
    teamname: "Previous Winner",
    project: "Winning Project",
  },
];

export function WinnersSlide() {
  return (
    <SlideShell
      index="07"
      eyebrow="Legacy"
      title="Previous"
      accent="Winners"
      subtitle="A look back at the winning teams from previous TechThrive editions."
      wide
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((winner, index) => (
          <article
            key={index}
            className="glass glass-hover group overflow-hidden p-0"
            style={{ perspective: "1000px" }}
          >
            {/* Team Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={winner.image}
                alt={`${winner.edition} ${winner.position}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-cine)] group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,oklch(0.22_0.02_260/0.55)_100%)]" />

              {/* Edition */}
              <span className="absolute top-3 left-3 rounded border border-primary/50 bg-card/85 px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.14em] text-primary uppercase backdrop-blur-sm">
                {winner.edition}
              </span>

              {/* Winner Badge */}
              <span className="absolute right-3 bottom-3 rounded border border-primary/50 bg-card/85 px-2 py-1 font-mono text-[0.6rem] tracking-[0.12em] text-primary uppercase backdrop-blur-sm">
                🏆 Winner
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
                {winner.position}
              </span>

              <h3 className="mt-2 text-lg font-semibold">{winner.teamname}</h3>

              <p className="mt-1 text-sm text-muted-foreground">{winner.project}</p>
            </div>
          </article>
        ))}
      </div>
    </SlideShell>
  );
}

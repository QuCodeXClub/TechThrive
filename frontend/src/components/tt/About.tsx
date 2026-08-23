import { Section, PlaceholderTag } from "./primitives";
import { stats } from "@/data/event";
import aboutBg from "@/assets/winnerSectionBg.jpg";

import teamV1_1 from "@/assets/team-v1-1.jpg";
import teamV1_2 from "@/assets/team-v1-2.jpg";
import teamV1_3 from "@/assets/team-v1-3.jpg";
import teamV2_1 from "@/assets/four.jpeg";
import teamV2_2 from "@/assets/five.jpeg";
import teamV2_3 from "@/assets/six.jpeg";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · Overview"
      title="About TechThrive"
      subtitle="TechThrive is CodeX Club's internal hackathon under the Department of CSE & Computer Applications, Quantum University. The event is designed to identify, evaluate and nominate the strongest student teams for the Smart India Hackathon."
    >
      <div className="reveal surface mb-10 p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">
            Note ·{" "}
          </span>
          SIH 2025 problem statements are reused as practice and evaluation challenges for the
          internal selection process.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.unit}
            className="reveal surface group p-5 transition-colors hover:border-primary/60"
          >
            <div className="font-display text-4xl font-bold text-primary sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-[0.68rem] tracking-[0.14em] text-foreground uppercase">
              {s.unit}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Editions() {
  const items = [
    {
      edition: "v1.0",
      position: "Winner",
      image: teamV1_1,
      teamname: "first",
    },
    {
      edition: "v1.0",
      position: "Winner",
      image: teamV1_2,
      teamname: "dfghj",
    },
    {
      edition: "v1.0",
      position: "Winner",
      image: teamV1_3,
      teamname: "first",
    },
    {
      edition: "v2.0",
      position: "Winner",
      image: teamV2_1,
    },
    {
      edition: "v2.0",
      position: "Winner",
      image: teamV2_2,
    },
    {
      edition: "v2.0",
      position: "Winner",
      image: teamV2_3,
    },
  ];

  return (
    <Section
      id="editions"
      eyebrow="02 · Legacy"
      title="Previous Editions"
      subtitle="TechThrive 1.0 and TechThrive 2.0 winners. Official names and projects will be published here."
      className="bg-panel/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((w, i) => (
          <article
            key={i}
            className="reveal surface overflow-hidden transition-colors hover:border-primary/60"
          >
            {/* Team Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-panel-2">
              <img
                src={w.image}
                alt={`${w.edition} winner team`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Team Information */}
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded border border-primary/40 px-2 py-0.5 font-mono text-[0.65rem] tracking-[0.12em] text-primary uppercase">
                  {w.edition}
                </span>

                <span className="font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">
                  {w.position}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-foreground">{w.teamname}</h3>

              <p className="mt-1 text-sm text-muted-foreground">PROJECT TITLE</p>

              <div className="mt-4">
                <PlaceholderTag />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

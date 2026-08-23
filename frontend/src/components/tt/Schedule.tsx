import { Section } from "./primitives";
import { round2Schedule, timeline } from "@/data/event";
import backgroundImage from "@/assets/backgroung2.o.jpeg";

export function Schedule() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Content */}
      <div className="relative z-10">
        <Section
          id="schedule"
          eyebrow="03 · Qualification Flow"
          title="Event Schedule"
          subtitle="From registration to SIH nomination — the complete selection path."
        >
          <ol className="relative ml-4 space-y-8 border-l border-border pl-8 sm:ml-6 sm:space-y-10 sm:pl-10">
            {timeline.map((t) => (
              <li key={t.title} className="reveal relative">
                <span
                  aria-hidden="true"
                  className="hex-clip absolute top-1 -left-[3.05rem] h-8 w-8 bg-primary shadow-[var(--glow-soft)] sm:-left-[3.55rem]"
                />

                <span
                  aria-hidden="true"
                  className="hex-clip absolute top-[0.45rem] -left-[2.85rem] h-6 w-6 bg-background sm:-left-[3.35rem]"
                />

                <p className="font-mono text-[0.65rem] tracking-[0.16em] text-primary uppercase">
                  {t.tag}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                  {t.title}
                </h3>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                  {t.date && <span className="text-foreground">{t.date}</span>}

                  {t.place && <span>{t.place}</span>}
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="reveal mt-16">
            <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Round 2 Time Division
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">14 September 2026 ·</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {round2Schedule.map((r) => (
                <div
                  key={r.time}
                  className="surface flex flex-col gap-1.5 p-4 transition-colors hover:border-primary/60"
                >
                  <span className="font-mono text-xs tracking-[0.1em] text-primary">{r.time}</span>

                  <span className="text-base font-medium text-foreground">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

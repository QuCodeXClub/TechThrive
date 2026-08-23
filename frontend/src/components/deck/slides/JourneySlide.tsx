import { SlideShell } from "../SlideShell";
import { timeline } from "@/data/event";

export function JourneySlide() {
  return (
    <SlideShell
      index="04"
      eyebrow="Process"
      title="The"
      accent="Journey"
      subtitle="From registration to SIH nomination — the full selection path."
      wide
    >
      <ol className="relative grid gap-4 md:grid-cols-5">
        <span
          aria-hidden
          className="pointer-events-none absolute top-[3.1rem] right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent md:block"
        />
        {timeline.map((t, i) => (
          <li key={t.tag} className="glass glass-hover relative flex flex-col p-5">
            <span className="font-mono text-[0.6rem] tracking-[0.2em] text-primary uppercase">
              {t.tag}
            </span>
            <span className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-sm text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-base font-semibold sm:text-lg">{t.title}</h3>
            {(t.date || t.place) && (
              <p className="mt-1.5 font-mono text-[0.62rem] tracking-[0.12em] text-muted-foreground uppercase">
                {[t.date, t.place].filter(Boolean).join(" · ")}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
          </li>
        ))}
      </ol>
    </SlideShell>
  );
}

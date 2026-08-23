import { Check, Presentation } from "lucide-react";
import { Section } from "./primitives";
import { evaluation, isPlaceholder, PPT_FORMAT_URL, pptSlides, rules } from "@/data/event";

export function Rules() {
  const pptMissing = isPlaceholder(PPT_FORMAT_URL);

  return (
    <Section
      id="rules"
      eyebrow="04 · Guidelines"
      title="Rules & Evaluation"
      subtitle="Read carefully before Round 1. Both rounds are time-bound and evaluated by a panel."
      className="bg-panel/40"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <ul className="reveal space-y-3">
          {rules.map((r) => (
            <li key={r} className="surface flex items-start gap-3 p-4">
              <Check size={18} className="mt-0.5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-foreground sm:text-base">{r}</span>
            </li>
          ))}
        </ul>

        <div className="reveal surface glow-accent flex flex-col justify-between gap-6 p-6">
          <div>
            <p className="eyebrow">Sample PPT Format</p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">
              Round 1 presentation template
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Use the official 8-slide structure. The downloadable template will be published here.
            </p>
          </div>
          {pptMissing ? (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-border bg-secondary px-5 py-3 text-sm font-semibold text-muted-foreground"
            >
              <Presentation size={18} /> PPT Template — Coming Soon
            </button>
          ) : (
            <a
              href={PPT_FORMAT_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              <Presentation size={18} /> View PPT Format
            </a>
          )}
        </div>
      </div>

      <div className="reveal mt-16">
        <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">Round 1 PPT Format</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pptSlides.map((s, i) => (
            <div key={s} className="surface p-4 transition-colors hover:border-primary/60">
              <span className="font-mono text-xs text-primary">
                Slide {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-medium text-foreground">{s}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-16">
        <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">Evaluation Criteria</h3>
        <div className="surface mt-6 divide-y divide-border">
          {evaluation.map((e) => (
            <div key={e.label} className="p-4 sm:p-5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium text-foreground sm:text-base">{e.label}</span>
                <span className="font-mono text-sm text-primary tabular-nums">{e.weight}%</span>
              </div>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${(e.weight / 20) * 100}%` }}
                />
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between p-4 sm:p-5">
            <span className="font-mono text-xs tracking-[0.16em] text-foreground uppercase">
              Total
            </span>
            <span className="font-mono text-lg font-semibold text-primary">100%</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

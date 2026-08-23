import { Check, Presentation } from "lucide-react";
import { Panel, SlideShell } from "../SlideShell";
import { evaluation, isPlaceholder, PPT_FORMAT_URL, pptSlides, rules } from "@/data/event";
import brain from "@/assets/sih-logo.jpeg";

export function RulesSlide() {
  const pptMissing = isPlaceholder(PPT_FORMAT_URL);

  return (
    <SlideShell
      index="05"
      eyebrow="Guidelines"
      title="Rules &"
      accent="Evaluation"
      subtitle="Read carefully before Round 1. Both rounds are time-bound and evaluated by a panel."
      wide
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Panel hover={false} className="deck-scroll max-h-[46vh] lg:max-h-[52vh]">
          <img
            src={brain}
            alt="3D glass head with glowing blue brain"
            loading="lazy"
            width={1024}
            height={1200}
            className="mix-blend-multiply mx-auto mb-4 w-28 drop-shadow-[0_24px_36px_rgb(34_197_94/0.16)]"
          />
          <p className="eyebrow">Rules</p>
          <ul className="mt-4 space-y-2.5">
            {rules.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed">
                <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel hover={false} className="deck-scroll max-h-[46vh] lg:max-h-[52vh]">
          <p className="eyebrow">Evaluation Criteria</p>
          <div className="mt-4 space-y-3.5">
            {evaluation.map((e) => (
              <div key={e.label}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm">{e.label}</span>
                  <span className="font-mono text-xs text-primary tabular-nums">{e.weight}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary/70">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                    style={{ width: `${(e.weight / 20) * 100}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-border/60 pt-3">
              <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase">Total</span>
              <span className="font-mono text-base font-semibold text-primary">100%</span>
            </div>
          </div>
        </Panel>

        <Panel hover={false} className="deck-scroll flex max-h-[46vh] flex-col lg:max-h-[52vh]">
          <p className="eyebrow">Round 1 PPT Format</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Use the official 8-slide structure. The downloadable template will be published here.
          </p>
          <ol className="mt-4 grid gap-2">
            {pptSlides.map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-3 rounded-md border border-border/50 bg-panel-2/40 px-3 py-2"
              >
                <span className="font-mono text-[0.62rem] text-primary tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5">
            {pptMissing ? (
              <button
                type="button"
                disabled
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-md border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold text-muted-foreground"
              >
                <Presentation size={18} /> PPT Template — Coming Soon
              </button>
            ) : (
              <a
                href={PPT_FORMAT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                <Presentation size={18} /> View PPT Format
              </a>
            )}
          </div>
        </Panel>
      </div>
    </SlideShell>
  );
}

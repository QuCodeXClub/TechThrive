import { useState } from "react";
import { ChevronDown, Download, ExternalLink, X } from "lucide-react";
import { Section } from "./primitives";
import { problemStatements, type ProblemStatement } from "@/data/problemStatements";
import { cn } from "@/lib/utils";

function DownloadProblemStatementsButton() {
  return (
    <a
      href="/problem-statements.pdf"
      target="_blank"
      rel="noreferrer"
      download
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
    >
      <Download size={16} />
      Download Problem Statements
    </a>
  );
}

function DetailModal({ ps, onClose }: { ps: ProblemStatement; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ps.title}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="surface max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-b-none p-6 sm:rounded-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="font-mono text-xs text-primary">{ps.id}</span>

            <h3 className="mt-1 text-xl font-semibold text-foreground sm:text-2xl">{ps.title}</h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-foreground hover:border-primary hover:text-primary"
          >
            <X size={18} />
          </button>
        </div>

        <Body ps={ps} />
      </div>
    </div>
  );
}

function Body({ ps }: { ps: ProblemStatement }) {
  return (
    <div className="mt-5 space-y-5 text-sm leading-relaxed sm:text-base">
      <div>
        <p className="eyebrow">Problem</p>
        <p className="mt-2 text-muted-foreground">{ps.problem}</p>
      </div>

      <div>
        <p className="eyebrow">Challenge</p>
        <p className="mt-2 text-muted-foreground">{ps.challenge}</p>
      </div>

      <div>
        <p className="eyebrow">Requirements</p>

        <ul className="mt-2 space-y-1.5">
          {ps.requirements.map((r, i) => (
            <li key={i} className="flex gap-2 text-muted-foreground">
              <span className="text-primary">•</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      {ps.additionalInfo && (
        <div>
          <p className="eyebrow">Additional information</p>
          <p className="mt-2 text-muted-foreground">{ps.additionalInfo}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 font-mono text-[0.68rem] tracking-[0.1em] uppercase">
        <span className="rounded border border-border px-2.5 py-1 text-muted-foreground">
          Domain: <span className="text-foreground">{ps.domain}</span>
        </span>

        <span className="rounded border border-border px-2.5 py-1 text-muted-foreground">
          Category: <span className="text-foreground">{ps.category}</span>
        </span>
      </div>
    </div>
  );
}

export function ProblemStatements() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [modal, setModal] = useState<ProblemStatement | null>(null);

  return (
    <Section
      id="problem-statements"
      eyebrow="05 · Round 1 — SIH 2025 Challenges"
      title="Problem Statements"
      subtitle="Explore the selected SIH 2025 challenges and view the complete problem details."
    >
      {/* Download Button */}
      <div className="reveal mb-8 flex flex-col gap-4 rounded-lg border border-border bg-panel p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-foreground">Official Problem Statements</p>

          <p className="mt-1 text-sm text-muted-foreground">
            Download the complete problem statement document for all selected challenges.
          </p>
        </div>

        <DownloadProblemStatementsButton />
      </div>

      {/* Problem Statements */}
      <div className="reveal">
        <div className="space-y-3">
          {problemStatements.map((ps, idx) => {
            const open = openId === ps.id;

            return (
              <div
                key={ps.id}
                className={cn(
                  "overflow-hidden rounded-lg border bg-panel transition-colors",
                  open ? "border-primary/60 shadow-[var(--glow-soft)]" : "border-border",
                )}
              >
                <h4>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`panel-${ps.id}`}
                    onClick={() => setOpenId(open ? null : ps.id)}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-5"
                  >
                    <span className="font-mono text-sm font-semibold text-primary tabular-nums sm:text-base">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-medium text-foreground sm:text-lg">
                        {ps.title}
                      </span>

                      <span className="mt-1 block font-mono text-[0.65rem] tracking-[0.1em] text-muted-foreground uppercase">
                        {ps.id} · {ps.domain}
                      </span>
                    </span>

                    <ChevronDown
                      size={20}
                      className={cn(
                        "shrink-0 text-muted-foreground transition-transform duration-300",
                        open && "rotate-180 text-primary",
                      )}
                    />
                  </button>
                </h4>

                {open && (
                  <div
                    id={`panel-${ps.id}`}
                    className="border-t border-border px-4 pt-4 pb-6 sm:px-6"
                  >
                    <Body ps={ps} />

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => setModal(ps)}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-panel-2 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                      >
                        <ExternalLink size={16} />
                        View Full Problem
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {modal && <DetailModal ps={modal} onClose={() => setModal(null)} />}
    </Section>
  );
}

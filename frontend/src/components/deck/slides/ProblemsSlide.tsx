import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { problemStatements, type ProblemStatement } from "@/data/problemStatements";
import { cn } from "@/lib/utils";

const PROBLEM_STATEMENT_URL =
  "https://drive.google.com/file/d/1CBeAZwM3AJ37HY1Cd29HSlZoLd0Tz2Ep/view";

function ProblemCard({ ps, index }: { ps: ProblemStatement; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-panel transition-all duration-300",
        open
          ? "border-primary/60 shadow-[var(--glow-soft)]"
          : "border-border/60 hover:border-primary/40",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-4 text-left sm:gap-5 sm:px-5 sm:py-5"
      >
        {/* Number */}
        <span className="shrink-0 font-mono text-sm font-semibold text-primary tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium sm:text-base">{ps.title}</span>

          <span className="mt-1 block truncate font-mono text-[0.6rem] tracking-[0.1em] text-muted-foreground uppercase">
            {ps.id} · {ps.domain}
          </span>
        </span>

        {/* Arrow */}
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-180 text-primary",
          )}
        />
      </button>

      {/* Expanded Details */}
      {open && (
        <div className="border-t border-border/60 px-4 pt-4 pb-5 sm:px-5">
          {/* Domain / Category */}
          <div className="flex flex-wrap gap-2 font-mono text-[0.62rem] tracking-[0.1em] uppercase">
            <span className="rounded border border-border/60 px-2.5 py-1 text-muted-foreground">
              Domain: <span className="text-foreground">{ps.domain}</span>
            </span>

            <span className="rounded border border-border/60 px-2.5 py-1 text-muted-foreground">
              Category: <span className="text-foreground">{ps.category}</span>
            </span>
          </div>

          {/* Problem */}
          <div className="mt-5">
            <p className="eyebrow">Problem</p>

            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ps.problem}</p>
          </div>

          {/* Challenge */}
          <div className="mt-5">
            <p className="eyebrow">Challenge</p>

            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ps.challenge}</p>
          </div>

          {/* Requirements */}
          <div className="mt-5">
            <p className="eyebrow">Requirements</p>

            <ul className="mt-2 space-y-1.5">
              {ps.requirements.map((requirement, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          {ps.additionalInfo && (
            <div className="mt-5">
              <p className="eyebrow">Additional Information</p>

              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {ps.additionalInfo}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function ProblemsSlide() {
  return (
    <SlideShell
      index="06"
      eyebrow="Round 1 — SIH 2025 Challenges"
      title="Problem"
      accent="Statements"
      wide
    >
      {/* Top Header */}
      <div className="mb-5 flex flex-col gap-4 rounded-lg border border-border/60 bg-panel-2/40 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div>
          <p className="text-sm font-semibold">Official Problem Statements</p>

          <p className="mt-1 text-xs text-muted-foreground">
            Explore the 8 selected SIH 2025 challenges below.
          </p>
        </div>

        {/* Single Official Link */}
        <a
          href={PROBLEM_STATEMENT_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          <ExternalLink size={16} />
          View Problem Statements
        </a>
      </div>

      {/* 8 Problem Cards */}
      <div className="deck-scroll max-h-[58vh] space-y-3 pr-1">
        {problemStatements.map((ps, index) => (
          <ProblemCard key={ps.id} ps={ps} index={index} />
        ))}
      </div>
    </SlideShell>
  );
}

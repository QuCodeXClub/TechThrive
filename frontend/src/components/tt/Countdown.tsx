import { useEffect, useState } from "react";
import { REGISTRATION_CLOSE_ISO, REGISTRATION_OPEN_ISO } from "@/data/event";

const OPEN = new Date(REGISTRATION_OPEN_ISO).getTime();
const CLOSE = new Date(REGISTRATION_CLOSE_ISO).getTime();

type State =
  | { phase: "before"; d: number; h: number; m: number; s: number }
  | { phase: "open" }
  | { phase: "closed" };

function compute(now: number): State {
  if (now >= CLOSE) return { phase: "closed" };
  if (now >= OPEN) return { phase: "open" };
  const diff = Math.max(0, OPEN - now);
  return {
    phase: "before",
    d: Math.floor(diff / 86400000),
    h: Math.floor(diff / 3600000) % 24,
    m: Math.floor(diff / 60000) % 60,
    s: Math.floor(diff / 1000) % 60,
  };
}

export function Countdown() {
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    setState(compute(Date.now()));
    const t = setInterval(() => setState(compute(Date.now())), 1000);
    return () => clearInterval(t);
  }, []);

  if (!state) {
    return <div className="surface h-24 animate-pulse" aria-hidden="true" />;
  }

  if (state.phase !== "before") {
    return (
      <div className="surface flex items-center gap-3 px-5 py-5">
        <span
          className={
            "h-2.5 w-2.5 shrink-0 rounded-full " +
            (state.phase === "open"
              ? "bg-primary shadow-[var(--glow-soft)]"
              : "bg-muted-foreground")
          }
        />
        <p className="font-mono text-sm tracking-[0.14em] text-foreground uppercase sm:text-base">
          {state.phase === "open" ? "Registration is open" : "Registration closed"}
        </p>
      </div>
    );
  }

  const units = [
    { v: state.d, l: "Days" },
    { v: state.h, l: "Hours" },
    { v: state.m, l: "Min" },
    { v: state.s, l: "Sec" },
  ];

  return (
    <div className="surface px-4 py-4 sm:px-5">
      <p className="eyebrow mb-3">Registration opens 20 Aug 2026 · IST</p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((u) => (
          <div
            key={u.l}
            className="rounded-md border border-border bg-panel-2 px-1 py-2.5 text-center sm:py-3"
          >
            <div className="font-mono text-xl font-semibold tabular-nums text-primary sm:text-2xl md:text-3xl">
              {String(Math.max(0, u.v)).padStart(2, "0")}
            </div>
            <div className="mt-1 font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
              {u.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

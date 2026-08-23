import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type DeckSlide = {
  id: string;
  label: string;
  render: () => ReactNode;
};

const TRANSITION_MS = 900;

type DeckCtx = {
  index: number;
  count: number;
  go: (i: number) => void;
  next: () => void;
  prev: () => void;
  goToId: (id: string) => void;
};

const Ctx = createContext<DeckCtx | null>(null);

export function useDeck() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDeck must be used inside <Deck />");
  return ctx;
}

/** True when the element (or an ancestor inside the slide) can still scroll in `dir`. */
function canScrollInside(target: EventTarget | null, dir: number) {
  let el = target as HTMLElement | null;
  while (el && !el.hasAttribute?.("data-deck-root")) {
    if (el.classList?.contains("deck-scroll")) {
      const max = el.scrollHeight - el.clientHeight;
      if (max > 4) {
        if (dir > 0 && el.scrollTop < max - 2) return true;
        if (dir < 0 && el.scrollTop > 2) return true;
      }
    }
    el = el.parentElement;
  }
  return false;
}

export function Deck({ slides, chrome }: { slides: DeckSlide[]; chrome?: ReactNode }) {
  const [index, setIndex] = useState(0);
  const lockRef = useRef(false);
  const accRef = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  indexRef.current = index;

  const go = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, i));
      if (clamped === indexRef.current || lockRef.current) return;
      lockRef.current = true;
      setIndex(clamped);
      window.setTimeout(() => {
        lockRef.current = false;
        accRef.current = 0;
      }, TRANSITION_MS);
    },
    [slides.length],
  );

  const next = useCallback(() => go(indexRef.current + 1), [go]);
  const prev = useCallback(() => go(indexRef.current - 1), [go]);

  const goToId = useCallback(
    (id: string) => {
      const i = slides.findIndex((s) => s.id === id);
      if (i >= 0) go(i);
    },
    [slides, go],
  );

  /* Lock the document so the page itself never scrolls */
  useEffect(() => {
    document.documentElement.classList.add("deck-mode");
    return () => document.documentElement.classList.remove("deck-mode");
  }, []);

  /* Wheel / trackpad */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      if (Math.abs(dy) < 1) return;
      if (canScrollInside(e.target, dy)) return; // let inner panel scroll
      e.preventDefault();
      if (lockRef.current) return;
      accRef.current += dy;
      if (accRef.current > 45) {
        accRef.current = 0;
        next();
      } else if (accRef.current < -45) {
        accRef.current = 0;
        prev();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  /* Keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(slides.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, slides.length]);

  /* Touch / swipe */
  const touch = useRef<{ y: number; target: EventTarget | null } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (!t) return;
    touch.current = { y: t.clientY, target: e.target };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    const t = e.changedTouches[0];
    if (!start || !t) return;
    const dy = start.y - t.clientY;
    if (Math.abs(dy) < 60) return;
    if (canScrollInside(start.target, dy)) return;
    if (dy > 0) next();
    else prev();
  };

  return (
    <Ctx.Provider value={{ index, count: slides.length, go, next, prev, goToId }}>
      <div
        ref={rootRef}
        data-deck-root=""
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="cine-bg fixed inset-0 overflow-hidden text-foreground"
        style={{ perspective: "1600px", perspectiveOrigin: "50% 50%" }}
      >
        <DeckBackdrop index={index} />

        {slides.map((s, i) => {
          const offset = i - index;
          const active = offset === 0;
          const near = Math.abs(offset) <= 1;
          return (
            <section
              key={s.id}
              id={s.id}
              aria-hidden={!active}
              data-active={active}
              className="deck-slide absolute inset-0"
              style={{
                transform: active
                  ? "translate3d(0, 0, 0) rotateX(0deg) scale(1)"
                  : `translate3d(0, ${offset * 62}%, ${-260 - Math.abs(offset) * 60}px) rotateX(${offset > 0 ? -9 : 9}deg) scale(0.9)`,
                transformOrigin: offset > 0 ? "50% 0%" : "50% 100%",
                opacity: active ? 1 : 0,
                filter: active ? "none" : "blur(14px)",
                pointerEvents: active ? "auto" : "none",
                transition: `transform ${TRANSITION_MS}ms var(--ease-cine), opacity ${TRANSITION_MS}ms var(--ease-cine), filter ${TRANSITION_MS}ms var(--ease-cine)`,
                willChange: "transform, opacity",
              }}
            >
              {near || active ? s.render() : null}
            </section>
          );
        })}

        {chrome}
        <DeckRail slides={slides} index={index} onSelect={go} />
        <DeckControls index={index} count={slides.length} onPrev={prev} onNext={next} />
      </div>
    </Ctx.Provider>
  );
}

function DeckBackdrop({ index }: { index: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="orb"
        style={{
          width: "46rem",
          height: "46rem",
          top: "-14rem",
          left: "-10rem",
          background: "var(--orb-1)",
          transform: `translate3d(0, ${index * -1.2}%, 0)`,
          transition: "transform 1.4s var(--ease-cine)",
        }}
      />
      <div
        className="orb"
        style={{
          width: "38rem",
          height: "38rem",
          bottom: "-12rem",
          right: "-8rem",
          background: "var(--orb-2)",
          animationDelay: "-6s",
        }}
      />
      <div className="grid-pattern absolute inset-0 opacity-60 [mask-image:radial-gradient(110%_90%_at_50%_20%,black,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_120%,var(--background),transparent_60%)]" />
    </div>
  );
}

function DeckRail({
  slides,
  index,
  onSelect,
}: {
  slides: DeckSlide[];
  index: number;
  onSelect: (i: number) => void;
}) {
  return (
    <nav
      aria-label="Slide navigation"
      className="absolute top-1/2 right-3 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex lg:right-6"
    >
      {slides.map((s, i) => {
        const active = i === index;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(i)}
            aria-current={active}
            aria-label={s.label}
            className="group flex items-center gap-3"
          >
            <span
              className={cn(
                "pointer-events-none rounded-full bg-background/70 px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.16em] uppercase opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100",
                active ? "text-primary" : "text-muted-foreground",
              )}
            >
              {s.label}
            </span>

            <span
              className={cn(
                "block rounded-full transition-all duration-500",
                active
                  ? "h-7 w-[3px] bg-primary shadow-[var(--glow-soft)]"
                  : "h-[3px] w-[3px] bg-foreground/30 group-hover:bg-primary/70",
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}

function DeckControls({
  index,
  count,
  onPrev,
  onNext,
}: {
  index: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 md:bottom-6 md:left-6 md:translate-x-0">
      <div className="glass flex items-center gap-3 px-3 py-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={index === 0}
          aria-label="Previous slide"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition hover:text-primary disabled:opacity-30"
        >
          ↑
        </button>
        <span className="font-mono text-[0.68rem] tracking-[0.18em] text-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")}
          <span className="text-muted-foreground"> / {String(count).padStart(2, "0")}</span>
        </span>
        <button
          type="button"
          onClick={onNext}
          disabled={index === count - 1}
          aria-label="Next slide"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition hover:text-primary disabled:opacity-30"
        >
          ↓
        </button>
      </div>
    </div>
  );
}

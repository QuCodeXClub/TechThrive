import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));

    if (el.classList.contains("reveal")) {
      io.observe(el);
    }

    return () => io.disconnect();
  }, []);

  return ref;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative px-5 pt-28 pb-16 sm:px-8 sm:pt-32 md:pb-24 lg:px-10", className)}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title) && (
          <header className="reveal mb-10 max-w-3xl md:mb-14">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}

            {title && (
              <h2 className="mt-3 text-3xl leading-tight font-semibold text-foreground sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {subtitle}
              </p>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
  );
}

export function Hexagon({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <span
      className={cn(
        "hex-clip inline-flex items-center justify-center bg-primary text-primary-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="surface flex min-w-0 flex-col gap-1 px-4 py-3">
      <span className="font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </span>

      <span className="text-sm font-medium text-foreground sm:text-base">{value}</span>
    </div>
  );
}

export function PlaceholderTag({
  children = "Placeholder — replace with official data",
}: {
  children?: ReactNode;
}) {
  return (
    <span className="inline-block rounded border border-border bg-secondary px-2 py-1 font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
      {children}
    </span>
  );
}

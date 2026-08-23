import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SlideShell({
  index,
  eyebrow,
  title,
  accent,
  subtitle,
  children,
  className,
  wide,
}: {
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  accent?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div className="deck-scroll h-full w-full">
      <div
        className={cn(
          /*
           * Navbar is fixed at the top with h-20.
           * Extra top padding keeps slide content completely
           * separate from the navbar.
           */
          "mx-auto flex min-h-full w-full flex-col justify-center px-5 pt-32 pb-20 sm:px-8 sm:pt-36 md:pb-24 lg:px-14 lg:pt-36",
          wide ? "max-w-[86rem]" : "max-w-6xl",
          className,
        )}
      >
        <div className="stagger">
          {(eyebrow || title) && (
            <header className="mb-8 md:mb-10">
              {eyebrow && (
                <p className="eyebrow flex items-center gap-3">
                  {index && (
                    <span className="glass inline-flex h-7 min-w-7 items-center justify-center px-2 font-mono text-[0.62rem] text-primary">
                      {index}
                    </span>
                  )}

                  {eyebrow}
                </p>
              )}

              {title && (
                <h2 className="mt-4 text-3xl leading-[1.05] font-semibold sm:text-4xl md:text-5xl">
                  {title}
                  {accent && <span className="text-gradient"> {accent}</span>}
                </h2>
              )}

              {subtitle && (
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {subtitle}
                </p>
              )}
            </header>
          )}

          {children}
        </div>
      </div>
    </div>
  );
}

export function Panel({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={cn("glass p-5 sm:p-6", hover && "glass-hover", className)}>{children}</div>
  );
}

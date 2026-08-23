import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { faqs } from "@/data/event";
import { cn } from "@/lib/utils";

export function FaqSlide() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SlideShell index="09" eyebrow="Answers" title="Frequently Asked" accent="Questions" wide>
      <div className="deck-scroll max-h-[58vh] space-y-2.5 pr-1">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={cn(
                "glass overflow-hidden transition-colors duration-500",
                isOpen && "border-primary/50",
              )}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium sm:text-base">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-muted-foreground transition-transform duration-500",
                      isOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>
              </h3>
              {isOpen && (
                <div
                  id={`faq-${i}`}
                  className="border-t border-border/50 px-5 py-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SlideShell>
  );
}

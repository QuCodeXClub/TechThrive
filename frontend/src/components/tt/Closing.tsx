import { useState } from "react";
import { ChevronDown, Mail, MapPin, Trophy } from "lucide-react";
import logo from "@/assets/codex-logo.png";
import { Section } from "./primitives";
import { faqs, isPlaceholder, prizes, REGISTRATION_URL } from "@/data/event";
import { cn } from "@/lib/utils";
import immg from "@/assets/unstop-logo.svg";
import logo1 from "@/assets/logo.svg";
export function Prizes() {
  return (
    <Section
      id="prizes"
      eyebrow="06 · Recognition"
      title="Prizes & Recognition"
      subtitle="Recognition for winning teams, runners-up and every participant."
      className="bg-panel/40"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {prizes.map((p) => (
          <div
            key={p.title}
            className={cn(
              "reveal surface flex flex-col p-6",
              p.featured && "border-primary/50 shadow-[var(--glow-soft)]",
            )}
          >
            <Trophy size={22} className={p.featured ? "text-primary" : "text-muted-foreground"} />
            <h3 className="mt-4 text-xl font-semibold text-foreground">{p.title}</h3>
            <ul className="mt-4 space-y-2">
              {p.items.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">▸</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Registration() {
  const disabled = isPlaceholder(REGISTRATION_URL);
  const facts = [
    { k: "Team Size", v: "6 members" },
    { k: "Requirement", v: "Minimum 1 female member" },
    { k: "Registration Window", v: "20–25 August 2026" },
    { k: "Eligibility", v: "Quantum University students · all eligible branches & years" },
  ];

  return (
    <Section id="register" eyebrow="07 · Join" title="Registration">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal surface p-6 sm:p-8">
          <dl className="grid gap-5 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {f.k}
                </dt>
                <dd className="mt-1.5 text-base font-medium text-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            {disabled ? (
              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-md border border-border bg-secondary px-6 py-4 text-base font-semibold text-muted-foreground sm:w-auto"
              >
                Registration Form — Coming Soon
              </button>
            ) : (
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-[var(--glow-accent)] transition hover:brightness-110 sm:w-auto"
              >
                Fill Registration Form
              </a>
            )}
          </div>
        </div>

        <div className="reveal surface flex flex-col justify-center gap-3 p-6 sm:p-8">
          <span className="eyebrow">Powered by</span>
          <p className="font-display text-3xl font-bold text-primary">
            <img src={immg} width="100px" height="100px" />
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            SIH nomination and external registration are processed through Unstop for shortlisted
            teams.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="08 · Answers"
      title="Frequently Asked Questions"
      className="bg-panel/40"
    >
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={cn(
                "overflow-hidden rounded-lg border bg-panel",
                isOpen ? "border-primary/50" : "border-border",
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
                  <span className="text-base font-medium text-foreground">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-muted-foreground transition-transform",
                      isOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>
              </h3>
              {isOpen && (
                <div
                  id={`faq-${i}`}
                  className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo1}
              alt="CodeX Club"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10"
            />
            <div>
              <p className="font-semibold text-foreground">CodeX Club</p>
              <p className="font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">
                TechThrive 2026
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Department of CSE &amp; Computer Applications, Quantum University.
          </p>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>CodeX Club, Department of CSE &amp; Computer Applications</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>Shyamji Auditorium &amp; Computer Centre E310, Quantum University</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Quick links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {["about", "schedule", "rules", "problem-statements", "prizes", "faq"].map((h) => (
              <li key={h}>
                <a href={`#${h}`} className="text-muted-foreground capitalize hover:text-primary">
                  {h.replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 w-full max-w-6xl font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">
        © 2026 CodeX Club · Quantum University
      </p>
    </footer>
  );
}

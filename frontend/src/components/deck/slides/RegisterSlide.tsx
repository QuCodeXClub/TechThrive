import { Mail, MapPin } from "lucide-react";
import { Panel, SlideShell } from "../SlideShell";
import { isPlaceholder, REGISTRATION_URL } from "@/data/event";
import unstop from "@/assets/unstop-logo.svg";
import logo1 from "@/assets/logo.svg";
import desk from "@/assets/backgroung2.o.jpeg";
import six from "@/assets/sih.jpeg";

const facts = [
  { k: "Team Size", v: "6 members" },
  { k: "Requirement", v: "Minimum 1 female member" },
  { k: "Registration Window", v: "20–25 August 2026" },
  {
    k: "Eligibility",
    v: "Quantum University students · all eligible branches & years",
  },
];

export function RegisterSlide() {
  const disabled = isPlaceholder(REGISTRATION_URL);

  return (
    <SlideShell index="10" eyebrow="Join" title="Think. Build." accent="Demonstrate." wide>
      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Panel hover={false} className="sm:p-8">
          <img
            src={desk}
            alt="3D minimal desk with laptop showing code brackets and a trophy"
            loading="lazy"
            width={1408}
            height={912}
            className="mb-6 w-full rounded-2xl border border-border object-cover"
          />

          <dl className="grid gap-5 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {f.k}
                </dt>

                <dd className="mt-1.5 text-base font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            {disabled ? (
              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-md border border-border bg-secondary/60 px-6 py-4 text-base font-semibold text-muted-foreground sm:w-auto"
              >
                Registration Form — Coming Soon
              </button>
            ) : (
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--glow-accent)] transition hover:brightness-110 sm:w-auto"
              >
                Fill Registration Form
              </a>
            )}
          </div>
        </Panel>

        <Panel hover={false} className="flex flex-col justify-center gap-3 sm:p-8">
          <img
            src={six}
            alt="3D blue numeral six on a white podium"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto w-28 self-center mix-blend-multiply drop-shadow-[0_24px_36px_rgb(34_197_94/0.18)]"
          />

          <span className="eyebrow">Powered by</span>

          <img src={unstop} alt="Unstop" className="h-10 w-auto self-start" />

          <p className="text-sm leading-relaxed text-muted-foreground">
            SIH nomination and external registration are processed through Unstop for shortlisted
            teams.
          </p>
        </Panel>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <Panel hover={false} className="flex items-center gap-3">
          <img src={logo1} alt="CodeX Club" className="h-10 w-10" />

          <div>
            <p className="text-sm font-semibold">CodeX Club</p>

            <p className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
              TechThrive 2026
            </p>
          </div>
        </Panel>

        <Panel hover={false} className="flex items-start gap-2.5">
          <Mail size={16} className="mt-0.5 shrink-0 text-primary" />

          <span className="text-sm text-muted-foreground">
            CodeX Club, Department of CSE &amp; Computer Applications
          </span>
        </Panel>

        <Panel hover={false} className="flex items-start gap-2.5">
          <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />

          <span className="text-sm text-muted-foreground">
            Shyamji Auditorium &amp; Computer Centre E310, Quantum University
          </span>
        </Panel>
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="mt-6 border-t border-border/70 pt-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <div>
            <p className="text-sm font-semibold text-foreground">CodeX Club</p>

            <p className="mt-1 font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
              © 2026 CodeX Club · Quantum University
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="CodeX Club LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/60 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <span className="text-sm font-bold">in</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="CodeX Club Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/60 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <span className="text-sm font-bold">ig</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="CodeX Club GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/60 text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <span className="text-sm font-bold">GH</span>
            </a>
          </div>
        </div>
      </footer>
    </SlideShell>
  );
}

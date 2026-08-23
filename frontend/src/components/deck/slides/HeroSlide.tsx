import { ArrowRight, CalendarDays, FileText } from "lucide-react";
import cubes from "@/assets/home.jpeg";
import logo1 from "@/assets/logo.svg";
import { Countdown } from "@/components/tt/Countdown";
import { heroChips, isPlaceholder, REGISTRATION_URL } from "@/data/event";
import { useDeck } from "../Deck";

export function HeroSlide() {
  const { goToId } = useDeck();
  const registerDisabled = isPlaceholder(REGISTRATION_URL);

  return (
    <div className="deck-scroll relative h-full w-full">
      <div className="relative mx-auto flex min-h-full w-full max-w-[86rem] flex-col justify-center px-5 py-20 sm:px-8 lg:px-14">
        <div className="stagger grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Powered by Unstop · Internal SIH Qualifier</p>

            <h1 className="mt-5 text-[3rem] leading-[0.92] font-bold tracking-tight sm:text-7xl lg:text-[5.5rem]">
              TechThrive
              <br />
              <span className="text-gradient">2026</span>
            </h1>

            <p className="mt-5 font-mono text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase">
              Internal Hackathon for SIH Qualification
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Quantum University&apos;s internal hackathon by CodeX Club — screening and nominating
              the strongest teams for the Smart India Hackathon.
            </p>

            <div className="mt-8 grid gap-3 sm:max-w-lg sm:grid-cols-2">
              {heroChips.map((c) => (
                <div key={c.label} className="glass glass-hover flex flex-col gap-1 px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                    <CalendarDays size={13} className="text-primary" />
                    {c.label}
                  </span>
                  <span className="text-sm font-medium sm:text-base">{c.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {registerDisabled ? (
                <button
                  type="button"
                  onClick={() => goToId("register")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--glow-accent)] transition hover:brightness-110"
                >
                  Register Now
                  <ArrowRight size={18} />
                </button>
              ) : (
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--glow-accent)] transition hover:brightness-110"
                >
                  Register Now
                  <ArrowRight size={18} />
                </a>
              )}

              <button
                type="button"
                onClick={() => goToId("rules")}
                className="glass glass-hover inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold"
              >
                <FileText size={18} className="text-primary" />
                View Rules &amp; PPT Format
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative">
              <img
                src={cubes}
                alt="3D rendered blue and white cubes representing building solutions"
                width={1200}
                height={1200}
                className="mix-blend-multiply mx-auto w-[78%] max-w-md drop-shadow-[0_40px_60px_rgb(34_197_94/0.18)] lg:w-full"
              />
            </div>
            <Countdown />
            <div className="glass flex items-center gap-4 p-5">
              <img
                src={logo1}
                alt="CodeX Club"
                width={72}
                height={72}
                className="h-14 w-14 shrink-0 sm:h-16 sm:w-16"
              />
              <div className="min-w-0">
                <p className="font-mono text-xs tracking-[0.16em] text-primary uppercase">
                  CodeX Club
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Department of CSE &amp; Computer Applications, Quantum University
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 font-mono text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
          Scroll to explore
        </p>
      </div>
    </div>
  );
}

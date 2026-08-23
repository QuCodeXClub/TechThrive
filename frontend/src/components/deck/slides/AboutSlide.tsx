import { Panel, SlideShell } from "../SlideShell";
import { stats } from "@/data/event";
import arch from "@/assets/qc.png";

export function AboutSlide() {
  return (
    <SlideShell
      index="02"
      eyebrow="Overview"
      title="About"
      accent="TechThrive"
      subtitle="TechThrive is CodeX Club's internal hackathon under the Department of CSE & Computer Applications, Quantum University. The event is designed to identify, evaluate and nominate the strongest student teams for the Smart India Hackathon."
      wide
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <Panel className="mb-6" hover={false}>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              <span className="font-mono text-xs tracking-[0.14em] text-primary uppercase">
                Note ·{" "}
              </span>
              SIH 2025 problem statements are reused as practice and evaluation challenges for the
              internal selection process.
            </p>
          </Panel>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <Panel key={s.unit} className="flex flex-col">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 font-mono text-[0.66rem] tracking-[0.14em] uppercase">
                  {s.unit}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
              </Panel>
            ))}
          </div>
        </div>

        <img
          src={arch}
          alt="3D white archway with a glowing blue flag"
          loading="lazy"
          width={1024}
          height={1200}
          className="mix-blend-multiply mx-auto hidden w-[70%] max-w-sm drop-shadow-[0_40px_60px_rgb(34_197_94/0.14)] lg:block lg:w-full"
        />
      </div>
    </SlideShell>
  );
}

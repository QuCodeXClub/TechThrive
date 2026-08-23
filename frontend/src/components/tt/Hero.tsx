import { ArrowRight, FileText } from "lucide-react";
import heroImg from "../../assets/hero10-min.jpg";
import logo1 from "../../assets/logo.svg";

import { Chip } from "./primitives";
import { Countdown } from "./Countdown";
import { heroChips, isPlaceholder, REGISTRATION_URL } from "@/data/event";

export function Hero() {
  const registerDisabled = isPlaceholder(REGISTRATION_URL);

  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* =====================================================
          GRADIENT OVERLAY
      ====================================================== */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />

      {/* =====================================================
          CYAN GLOW
      ====================================================== */}
      <div
        className="absolute -top-40 -left-32 z-10 h-[28rem] w-[28rem] rounded-full opacity-40 blur-[120px]"
        style={{
          background: "oklch(0.802 0.117 195 / 0.35)",
        }}
      />

      {/* =====================================================
          GRID PATTERN
      ====================================================== */}
      <div className="grid-pattern absolute inset-0 z-10 opacity-20 [mask-image:radial-gradient(120%_80%_at_30%_20%,black,transparent)]" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-20 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:px-10">
        {/* =================================================
            LEFT CONTENT
        ================================================== */}
        <div>
          {/* Eyebrow */}
          <p className="eyebrow">Powered by Unstop · Internal SIH Qualifier</p>

          {/* Heading */}
          <h1 className="mt-4 text-[2.6rem] leading-[1.02] font-bold text-white sm:text-6xl lg:text-7xl">
            TechThrive <span className="text-primary">2026</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Quantum University&apos;s internal hackathon by CodeX Club — screening and nominating
            the strongest teams for the Smart India Hackathon.
          </p>

          {/* =================================================
              EVENT CHIPS
          ================================================== */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroChips.map((c) => (
              <Chip key={c.label} label={c.label} value={c.value} />
            ))}
          </div>

          {/* =================================================
              BUTTONS
          ================================================== */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Register Button */}
            <a
              href={registerDisabled ? "#register" : REGISTRATION_URL}
              target={registerDisabled ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--glow-accent)] transition hover:brightness-110"
            >
              Register Now
              <ArrowRight size={18} />
            </a>

            {/* Rules Button */}
            <a
              href="#rules"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-black/30 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-primary hover:text-primary"
            >
              <FileText size={18} />
              View Rules &amp; PPT Format
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          COUNTDOWN + CODEX CLUB
      ====================================================== */}
      <div
        className="
          relative z-20 mt-12 flex w-full flex-col gap-5 px-5
          sm:px-8
          lg:absolute lg:bottom-8 lg:right-10
          lg:mt-0 lg:w-[420px] lg:px-0
        "
      >
        {/* Countdown */}
        <Countdown />

        {/* CodeX Club */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <img
            src={logo1}
            alt="CodeX Club"
            width={72}
            height={72}
            loading="lazy"
            className="h-16 w-16 shrink-0 drop-shadow-[0_0_22px_oklch(0.802_0.117_195/0.35)] sm:h-20 sm:w-20"
          />

          {/* Club Info */}
          <div className="min-w-0">
            <p className="font-mono text-xs tracking-[0.16em] text-primary uppercase">CodeX Club</p>

            <p className="mt-1 text-sm text-white/70">
              Department of CSE &amp; Computer Applications, Quantum University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

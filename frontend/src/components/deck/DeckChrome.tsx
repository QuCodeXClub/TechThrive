import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import logo from "@/assets/main logo.png";
import { isPlaceholder, REGISTRATION_URL } from "@/data/event";
import { cn } from "@/lib/utils";
import { useDeck, type DeckSlide } from "./Deck";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("techthrive-theme", theme);
}

export function DeckChrome({ slides }: { slides: DeckSlide[] }) {
  const { index, go, goToId } = useDeck();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("techthrive-theme");
    const initial =
      saved === "dark" || saved === "light"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  const registerDisabled = isPlaceholder(REGISTRATION_URL);

  const registerAction = () => {
    if (registerDisabled) {
      goToId("register");
      setOpen(false);
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100]">
      <nav className="pointer-events-auto mx-auto flex min-h-[72px] w-full items-center justify-between gap-3 border-b border-border/80 bg-background/90 px-4 shadow-[0_10px_30px_rgb(0_0_0/0.08)] backdrop-blur-xl sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={() => {
            go(0);
            setOpen(false);
          }}
          className="group flex min-w-0 items-center gap-2.5 rounded-lg outline-none transition hover:opacity-85 focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Go to first slide"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-primary/40 bg-foreground p-1 shadow-[var(--glow-soft)]">
            <img
              src={logo}
              alt="CodeX Club logo"
              width={64}
              height={48}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="truncate text-sm font-extrabold tracking-tight text-foreground sm:text-base">
            TechThrive <span className="text-primary">2026</span>
          </span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm transition hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={theme === "light" ? "Switch to night mode" : "Switch to day mode"}
            title={theme === "light" ? "Night mode" : "Day mode"}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          {registerDisabled ? (
            <button
              type="button"
              onClick={registerAction}
              className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--glow-accent)] transition hover:-translate-y-0.5 hover:brightness-105 sm:inline-flex"
            >
              Register Now
            </button>
          ) : (
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--glow-accent)] transition hover:-translate-y-0.5 hover:brightness-105 sm:inline-flex"
            >
              Register Now
            </a>
          )}

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm transition hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto max-h-[calc(100vh-72px)] w-full overflow-y-auto border-b border-border bg-background/95 px-4 pb-5 shadow-[0_18px_40px_rgb(0_0_0/0.12)] backdrop-blur-xl sm:px-6 lg:px-10">
          <ul className="mx-auto grid max-w-[86rem] grid-cols-1 gap-1 pt-2 sm:grid-cols-2 lg:grid-cols-3">
            {slides.map((slide, i) => (
              <li key={slide.id}>
                <button
                  type="button"
                  onClick={() => {
                    go(i);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-left text-sm transition hover:border-primary/30 hover:bg-accent/40",
                    i === index ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                  )}
                >
                  <span className="font-mono text-[0.65rem] tabular-nums text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{slide.label}</span>
                </button>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-2 sm:col-span-2 lg:col-span-3">
              {registerDisabled ? (
                <button
                  type="button"
                  onClick={registerAction}
                  className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-[var(--glow-accent)] sm:w-auto sm:px-7"
                >
                  Register Now
                </button>
              ) : (
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-[var(--glow-accent)] sm:w-auto sm:px-7"
                >
                  Register Now
                </a>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

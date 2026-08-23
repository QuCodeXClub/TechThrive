import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { navLinks, REGISTRATION_URL, isPlaceholder } from "@/data/event";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const registerDisabled = isPlaceholder(REGISTRATION_URL);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/92 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        className="
          mx-auto
          flex
          h-12
          w-full
          max-w-[1400px]
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo + Title */}
        <a href="#top" className="flex min-w-0 items-center gap-1.5">
          <img
            src={logo}
            alt="CodeX Club logo"
            width={38}
            height={32}
            className="h-8 w-auto shrink-0"
          />

          <span className="truncate text-xs font-semibold tracking-tight text-foreground sm:text-sm">
            TechThrive <span className="text-primary">2026</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-3 xl:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="
                  text-[0.72rem]
                  font-medium
                  text-muted-foreground
                  transition-colors
                  hover:text-primary
                "
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-1.5">
          {/* Register Button */}
          <a
            href={registerDisabled ? "#register" : REGISTRATION_URL}
            target={registerDisabled ? undefined : "_blank"}
            rel="noreferrer"
            className="
              hidden
              rounded-md
              bg-primary
              px-3
              py-1.5
              text-[0.72rem]
              font-semibold
              text-primary-foreground
              shadow-[var(--glow-soft)]
              transition
              hover:brightness-110
              sm:inline-flex
            "
          >
            Register Now
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="
              inline-flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              border
              border-border
              text-foreground
              transition
              hover:border-primary
              hover:text-primary
              xl:hidden
            "
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="
          max-h-[calc(100dvh-3rem)]
          overflow-y-auto
          border-t
          border-border
          bg-background
          xl:hidden
        "
      >
        <ul className="mx-auto flex max-w-[1400px] flex-col px-4 py-2 sm:px-6 lg:px-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="
                  block
                  border-b
                  border-border/60
                  py-2
                  text-sm
                  font-medium
                  text-foreground
                  transition-colors
                  hover:text-primary
                "
              >
                {l.label}
              </a>
            </li>
          ))}

          <li className="pt-3 pb-2">
            <a
              href={registerDisabled ? "#register" : REGISTRATION_URL}
              target={registerDisabled ? undefined : "_blank"}
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="
                block
                rounded-md
                bg-primary
                px-4
                py-2
                text-center
                text-sm
                font-semibold
                text-primary-foreground
              "
            >
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

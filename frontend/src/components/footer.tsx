import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-30 border-t border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        {/* Club Information */}
        <div>
          <div className="font-display text-sm font-semibold text-foreground">CodeX Club</div>

          <p className="mt-0.5 text-xs text-muted-foreground">
            TechThrive 2026 · Quantum University
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {/* LinkedIn */}
          <a
            href="https://in.linkedin.com/company/qucodex"
            target="_blank"
            rel="noreferrer"
            aria-label="CodeX Club LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <FaLinkedinIn size={16} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/qu_codex/"
            target="_blank"
            rel="noreferrer"
            aria-label="CodeX Club Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <FaInstagram size={17} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/QuCodeXClub"
            target="_blank"
            rel="noreferrer"
            aria-label="CodeX Club GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <FaGithub size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

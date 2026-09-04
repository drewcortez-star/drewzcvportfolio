import { Link } from "@tanstack/react-router";

export const RESUME_URL = "/Drew-Lorenz-Cortez-Resume.pdf";
export const LIVE_SITE_URL = "https://drewzcvportfolio-eight.vercel.app/";
export const FACEBOOK_URL = "https://www.facebook.com/share/1Bz7FZ1QHe/";

/**
 * Consistent header for every page other than the main library page.
 * Gives the same quick paths everywhere: Home, About / Case Study, Contact, Resume.
 */
export function SubpageNav({ current }: { current?: "about" }) {
  const linkBase = "transition-opacity hover:text-gold";
  const link = (active: boolean) => `${linkBase} ${active ? "text-gold" : "text-gold/80"}`;

  return (
    <nav aria-label="Site navigation" className="surface-imperial">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-4 sm:flex-row sm:justify-between">
        <Link to="/" className="whitespace-nowrap font-display text-xl text-gold">
          The Napoleon Library
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm sm:justify-end">
          <Link to="/" className={link(false)}>
            Home
          </Link>
          <Link to="/about" className={link(current === "about")}>
            About
          </Link>
          <Link to="/about" hash="case-study" className={link(false)}>
            Case Study
          </Link>
          <Link to="/" hash="contact" className={link(false)}>
            Contact
          </Link>
          <a
            href={RESUME_URL}
            download="Drew-Lorenz-Cortez-Resume.pdf"
            className="rounded-full border border-gold/50 px-4 py-2 text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
    </nav>
  );
}

/** Shared footer with the same core paths, so no page is a dead end. */
export function SiteFooter() {
  return (
    <footer className="surface-imperial mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 text-sm md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl text-gold">The Napoleon Library</p>
          <p className="mt-2 opacity-80">Created by Drew Lorenz Cortez · Grade 11 ASSH/IT – ARIES</p>
          <p className="mt-1 opacity-70">© 2026 The Napoleon Library. All rights reserved.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-gold/80">
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <Link to="/about" className="transition-colors hover:text-gold">
            About
          </Link>
          <Link to="/about" hash="case-study" className="transition-colors hover:text-gold">
            Case Study
          </Link>
          <Link to="/" hash="contact" className="transition-colors hover:text-gold">
            Contact
          </Link>
          <a href={RESUME_URL} download="Drew-Lorenz-Cortez-Resume.pdf" className="transition-colors hover:text-gold">
            Resume (PDF)
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
}

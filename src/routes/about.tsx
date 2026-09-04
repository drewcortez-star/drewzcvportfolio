import { createFileRoute, Link } from "@tanstack/react-router";
import drewPhoto from "@/assets/drew-cortez.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — The Napoleon Library" },
      {
        name: "description",
        content:
          "Meet Drew Lorenz Cortez, the Grade 11 IT student who designed and built The Napoleon Library.",
      },
      { property: "og:title", content: "About Me — The Napoleon Library" },
      {
        property: "og:description",
        content:
          "The story behind The Napoleon Library, created by Drew Lorenz Cortez as a Grade 11 ARIES project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="surface-imperial">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-xl text-gold">The Napoleon Library</span>
          <Link
            to="/"
            className="rounded-full border border-gold/40 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            ← Back to main page
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">
        <p className="text-eyebrow opacity-70">Behind the Library</p>
        <h1 className="mt-3 font-display heading-section">About Me</h1>

        <div className="mt-10 grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-frame sm:grid-cols-[220px_1fr]">
          <figure>
            <img
              src={drewPhoto.url}
              alt="Portrait of Drew Lorenz S. Cortez, developer of The Napoleon Library"
              width={220}
              height={293}
              className="w-full rounded-xl border border-gold/40 object-cover shadow-frame"
            />
            <figcaption className="mt-3 text-center text-xs opacity-70">
              Drew Lorenz Cortez · Grade 11 IT Student
            </figcaption>
          </figure>

          <div className="space-y-4 text-sm leading-relaxed opacity-90">
            <p>
              <span className="font-display text-lg text-gold">Drew Lorenz Cortez</span> is a
              Grade 11 IT student and the creator, designer, and developer of{" "}
              <em>The Napoleon Library</em>.
            </p>
            <p>
              This website was created as my Grade 11 ARIES project and developed into a full
              digital library dedicated to the life, campaigns, and legacy of Napoleon Bonaparte.
              Every section — from the biography and timeline to the marshals and the exclusive
              Greatest Wars room — was written, fact-checked, and hand-built by me.
            </p>
            <p>
              The project combines a passion for history with web development skills: responsive
              design, secure user accounts, reader feedback, and an interface styled like the
              gilded pages of an imperial-era book.
            </p>
            <p>
              Suggestions and bug reports are always welcome through the Contact section on the
              main page — every message goes directly to the developer.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Developer", value: "Drew Lorenz Cortez" },
            { label: "Grade & Section", value: "Grade 11 IT Student — ARIES" },
            { label: "Project", value: "The Napoleon Library" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <p className="text-eyebrow opacity-70">{item.label}</p>
              <p className="mt-2 font-display text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="surface-imperial mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm opacity-80">
          The Napoleon Library — built and maintained by Drew Lorenz S. Cortez.
        </div>
      </footer>
    </main>
  );
}

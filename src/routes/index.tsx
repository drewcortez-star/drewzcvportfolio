import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/napoleon-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Napoleon Bonaparte — Emperor, Strategist, Reformer" },
      {
        name: "description",
        content:
          "A portfolio of Napoleon Bonaparte: campaigns, reforms, and the legacy of the Napoleonic Code, from Corsica to Saint Helena.",
      },
      { property: "og:title", content: "Napoleon Bonaparte — Emperor, Strategist, Reformer" },
      {
        property: "og:description",
        content: "Campaigns, reforms and legacy of the Emperor of the French, 1769–1821.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const timeline = [
  { year: "1769", title: "Born in Ajaccio", text: "A Corsican boy in a newly French island." },
  { year: "1796", title: "Italian Campaign", text: "Outmarches Austria and becomes a legend at 26." },
  { year: "1804", title: "Emperor of the French", text: "Crowns himself at Notre-Dame de Paris." },
  { year: "1805", title: "Austerlitz", text: "His masterpiece: the Third Coalition shattered in a day." },
  { year: "1812", title: "Russia", text: "The Grande Armée marches to Moscow and back to ruin." },
  { year: "1815", title: "Waterloo", text: "The Hundred Days end; exile to Saint Helena follows." },
];

const works = [
  {
    title: "The Napoleonic Code",
    kind: "Law",
    text: "A single civil code replacing feudal patchwork — equality before the law, secular authority, property rights. Still the backbone of legal systems on four continents.",
  },
  {
    title: "The Lycée System",
    kind: "Education",
    text: "State secondary schools and the Université impériale, built to produce administrators on merit rather than birth.",
  },
  {
    title: "Banque de France",
    kind: "Finance",
    text: "Stabilised the franc, tamed inflation, and created a central bank that outlived every regime that followed.",
  },
  {
    title: "The Corps System",
    kind: "Warfare",
    text: "Self-sufficient army corps marching apart and fighting together — the template for modern manoeuvre warfare.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <header className="surface-imperial">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div>
            <p className="text-eyebrow text-gold">1769 — 1821</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
              Napoleon
              <span className="block italic text-gold">Bonaparte</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed opacity-85">
              General of the Republic, Emperor of the French, and author of a legal order that
              outlasted his empire by two centuries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                Selected works
              </a>
              <a
                href="#timeline"
                className="rounded-full border border-gold/50 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
              >
                Timeline
              </a>
            </div>
          </div>
          <figure className="relative">
            <img
              src={portrait}
              alt="Oil portrait of Napoleon Bonaparte in imperial regalia"
              width={1024}
              height={1280}
              className="w-full rounded-sm border border-gold/30 object-cover shadow-[var(--shadow-frame)]"
            />
          </figure>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-eyebrow">Profile</p>
        <p className="mt-5 font-display text-2xl leading-snug md:text-3xl">
          “I have fought sixty battles and I have learned nothing which I did not know at the
          beginning.”
        </p>
        <div className="mt-8 grid gap-6 text-muted-foreground md:grid-cols-3">
          <p>
            Born to minor Corsican nobility, he entered French military school at nine and
            commanded artillery at Toulon at twenty-four.
          </p>
          <p>
            Between 1796 and 1809 he defeated every coalition Europe assembled against him,
            redrawing the continent's borders and dissolving the Holy Roman Empire.
          </p>
          <p>
            Defeat in Russia and at Waterloo ended his rule, but his codes, schools and
            institutions survived the restoration of the monarchy.
          </p>
        </div>
      </section>

      <section id="work" className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-eyebrow">Selected works</p>
          <h2 className="mt-3 text-3xl md:text-4xl">What he built</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            {works.map((w) => (
              <article key={w.title} className="bg-card p-7">
                <p className="text-eyebrow">{w.kind}</p>
                <h3 className="mt-3 text-2xl">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-eyebrow">Timeline</p>
        <h2 className="mt-3 text-3xl md:text-4xl">A life in six dates</h2>
        <ol className="mt-10 border-l border-border">
          {timeline.map((t) => (
            <li key={t.year} className="relative pb-9 pl-7 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold" />
              <p className="font-display text-xl text-primary">{t.year}</p>
              <h3 className="text-lg">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="surface-imperial">
        <div className="mx-auto max-w-5xl px-6 py-12 text-sm opacity-80">
          <p className="font-display text-xl text-gold">Napoléon I</p>
          <p className="mt-2">Emperor of the French · Died Saint Helena, 5 May 1821</p>
        </div>
      </footer>
    </main>
  );
}

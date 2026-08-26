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
  { year: "1769", title: "Born in Ajaccio", text: "Napoleone Buonaparte is born in Corsica, only a year after the island is ceded to France. He grows up speaking Corsican and Italian before mastering French." },
  { year: "1779", title: "Military School", text: "Sent to mainland France at age nine, he attends the Royal Military School at Brienne-le-Château, where he excels in mathematics and history but is mocked for his Corsican accent." },
  { year: "1785", title: "Commissioned Officer", text: "Graduates from the École Militaire in Paris as a second lieutenant of artillery at just 16, commissioned after his father’s death forced him to finish quickly." },
  { year: "1793", title: "Siege of Toulon", text: "His artillery plan captures the royalist-held port of Toulon from the British, earning him promotion to brigadier general at age 24." },
  { year: "1795", title: "Whiff of Grapeshot", text: "Defends the Directory government in Paris by firing on royalist insurgents, a decisive act that wins him command of the Army of the Interior." },
  { year: "1796", title: "Italian Campaign", text: "Leads a ragged French army across the Alps and defeats Austria in a series of brilliant battles, becoming a national hero at 26." },
  { year: "1798", title: "Egyptian Expedition", text: "Invades Egypt to strike at British trade with India. The campaign is a military mixed success but produces the Rosetta Stone discovery." },
  { year: "1799", title: "Coup of 18 Brumaire", text: "Returns from Egypt, overthrows the Directory, and becomes First Consul of France — effectively ending the French Revolution’s political chaos." },
  { year: "1804", title: "Emperor of the French", text: "Crows himself Emperor at Notre-Dame de Paris with Pope Pius VII looking on, then places the laurel wreath on his own head." },
  { year: "1805", title: "Austerlitz", text: "His masterpiece: the Third Coalition shattered in a single day on the ice-covered Pratzen Heights." },
  { year: "1806", title: "Jena & Auerstedt", text: "Defeats Prussia in twin battles that break the myth of Prussian invincibility and redraw the map of Germany." },
  { year: "1807", title: "Treaty of Tilsit", text: "Meets Tsar Alexander I on a raft in the Niemen River; the two emperors divide Europe between them." },
  { year: "1812", title: "Russian Disaster", text: "The Grande Armée of 600,000 marches to Moscow and back; only an estimated 100,000 return. The turning point of his empire." },
  { year: "1814", title: "First Abdication", text: "Allied armies invade France and force his abdication. He is exiled to the island of Elba." },
  { year: "1815", title: "The Hundred Days", text: "Escapes Elba, returns to France, and briefly restores his empire before defeat at Waterloo." },
  { year: "1815", title: "Exile to Saint Helena", text: "Britain banishes him to the remote Atlantic island of Saint Helena, where he lives until his death in 1821." },
];

const works = [
  {
    title: "The Napoleonic Code",
    kind: "Law",
    text: "Officially the Civil Code of the French People, it replaced feudal privilege with equality before the law, freedom of religion, property rights, and merit-based advancement. Still the backbone of legal systems across Europe, Latin America, and beyond.",
  },
  {
    title: "The Lycée System",
    kind: "Education",
    text: "Created state secondary schools and the Université impériale to train administrators, engineers, and officers by ability rather than birth — a lasting model for public education.",
  },
  {
    title: "Banque de France",
    kind: "Finance",
    text: "Strengthened the central bank, stabilized the franc, balanced budgets, and restored French credit after the revolutionary inflation crisis.",
  },
  {
    title: "The Corps System",
    kind: "Warfare",
    text: "Reorganized armies into self-sufficient corps that could march separately and fight together, the template for modern combined-arms manoeuvre warfare.",
  },
  {
    title: "Concordat of 1801",
    kind: "Religion",
    text: "Ended the de-Christianization conflict by recognizing Catholicism as the religion of the majority of French citizens while keeping the state in control of Church appointments.",
  },
  {
    title: "Roads & Canals",
    kind: "Infrastructure",
    text: "Built roads, bridges, and canals — including the Canal d’Entreroches — that tied France’s regions together and moved armies and commerce faster.",
  },
];

const facts = [
  { label: "Height", value: "~5 ft 6 in", detail: "Average for a Frenchman of his era; British propaganda later mocked him as tiny." },
  { label: "Battles won", value: "60+", detail: "Fought more than 60 pitched battles and lost only seven." },
  { label: "Code articles", value: "2,281", detail: "The original Civil Code contained 2,281 articles governing French law." },
  { label: "Empire peak", value: "130M people", detail: "At its height in 1812, the French Empire and its satellites ruled roughly 130 million people." },
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
            Born Napoleone Buonaparte to minor Corsican nobility, he entered French military school
            at nine, mastered artillery mathematics, and commanded the guns at Toulon at
            twenty-four.
          </p>
          <p>
            Between 1796 and 1809 he defeated every coalition Europe assembled against him,
            redrawing the continent's borders, dissolving the Holy Roman Empire, and placing
            relatives on thrones from Spain to Naples.
          </p>
          <p>
            Defeat in Russia and at Waterloo ended his rule, but his codes, schools, roads, and
            institutions survived the restoration of the monarchy and shaped modern Europe.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-eyebrow">Rise to power</p>
          <h2 className="mt-3 text-3xl md:text-4xl">From Corsican cadet to Emperor</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <p className="leading-relaxed text-muted-foreground">
              Napoleon’s ascent was breathtakingly fast. In 1793 he was an obscure artillery captain;
              by 1799 he was First Consul of France; by 1804 he had crowned himself Emperor. His rise
              owed as much to political timing as to battlefield genius — the French Revolution had
              decapitated the old officer class, opening space for young men of talent.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              He understood the new mass politics of the era. He published bulletins, cultivated the
              press, and promised stability to a nation exhausted by a decade of revolution and
              war. To the French, he was not a usurper but a protector of the Revolution’s gains —
              meritocracy, property rights, and administrative reform — wrapped in the authority of a
              strong state.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-eyebrow">At a glance</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Key facts</h2>
        <dl className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="rounded-md border border-border bg-card p-6">
              <dt className="text-eyebrow">{f.label}</dt>
              <dd className="mt-2 font-display text-3xl text-primary">{f.value}</dd>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.detail}</dd>
            </div>
          ))}
        </dl>
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
        <h2 className="mt-3 text-3xl md:text-4xl">A life in dates</h2>
        <ol className="mt-10 border-l border-border">
          {timeline.map((t) => (
            <li key={t.year + t.title} className="relative pb-9 pl-7 last:pb-0">
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

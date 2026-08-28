import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/napoleon-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Historical Figures" },
      {
        name: "description",
        content:
          "A refined collection of historical content, rich Roman heritage, and interactive learning experiences.",
      },
      { property: "og:title", content: "Home — Historical Figures" },
      {
        property: "og:description",
        content: "Explore historical figures, campaigns, and interactive learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const timeline = [
  { year: "1769", title: "Born in Ajaccio", text: "Napoleone Buonaparte is born in Corsica, only a year after the island is ceded to France. He grows up speaking Corsican and Italian before mastering French." },
  { year: "1779", title: "Military School", text: "Sent to mainland France at age nine, he attends the Royal Military School at Brienne-le-Château, where he excels in mathematics and history." },
  { year: "1785", title: "Commissioned Officer", text: "Graduates from the École Militaire in Paris as a second lieutenant of artillery at just 16." },
  { year: "1793", title: "Siege of Toulon", text: "His artillery plan captures the royalist-held port of Toulon from the British, earning him promotion to brigadier general at age 24." },
  { year: "1795", title: "Whiff of Grapeshot", text: "Defends the Directory government in Paris, a decisive act that wins him command of the Army of the Interior." },
  { year: "1796", title: "Italian Campaign", text: "Leads a ragged French army across the Alps and defeats Austria in a series of brilliant battles, becoming a national hero at 26." },
  { year: "1798", title: "Egyptian Expedition", text: "Invades Egypt to strike at British trade with India. The campaign produces the Rosetta Stone discovery." },
  { year: "1799", title: "Coup of 18 Brumaire", text: "Overthrows the Directory and becomes First Consul of France — effectively ending the French Revolution’s political chaos." },
  { year: "1804", title: "Emperor of the French", text: "Crowns himself Emperor at Notre-Dame de Paris with Pope Pius VII looking on." },
  { year: "1805", title: "Austerlitz", text: "His masterpiece: the Third Coalition shattered in a single day on the ice-covered Pratzen Heights." },
  { year: "1806", title: "Jena & Auerstedt", text: "Defeats Prussia in twin battles that break the myth of Prussian invincibility." },
  { year: "1807", title: "Treaty of Tilsit", text: "Meets Tsar Alexander I on a raft in the Niemen River; the two emperors divide Europe." },
  { year: "1812", title: "Russian Disaster", text: "The Grande Armée of 600,000 marches to Moscow and back; only an estimated 100,000 return." },
  { year: "1814", title: "First Abdication", text: "Allied armies invade France and force his abdication. He is exiled to the island of Elba." },
  { year: "1815", title: "The Hundred Days", text: "Escapes Elba, returns to France, and briefly restores his empire before defeat at Waterloo." },
  { year: "1815", title: "Exile to Saint Helena", text: "Britain banishes him to the remote Atlantic island of Saint Helena, where he lives until his death in 1821." },
];

const works = [
  {
    title: "The Napoleonic Code",
    kind: "Law",
    text: "Officially the Civil Code of the French People, it replaced feudal privilege with equality before the law, freedom of religion, property rights, and merit-based advancement.",
  },
  {
    title: "The Lycée System",
    kind: "Education",
    text: "Created state secondary schools to train administrators, engineers, and officers by ability rather than birth.",
  },
  {
    title: "Banque de France",
    kind: "Finance",
    text: "Strengthened the central bank, stabilized the franc, balanced budgets, and restored French credit.",
  },
  {
    title: "The Corps System",
    kind: "Warfare",
    text: "Reorganized armies into self-sufficient corps that could march separately and fight together.",
  },
  {
    title: "Concordat of 1801",
    kind: "Religion",
    text: "Ended the de-Christianization conflict by recognizing Catholicism as the religion of the majority while keeping the state in control of Church appointments.",
  },
  {
    title: "Roads & Canals",
    kind: "Infrastructure",
    text: "Built roads, bridges, and canals that tied France’s regions together and moved armies and commerce faster.",
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
      <nav className="surface-imperial">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-xl text-gold">Historical Figures</span>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="text-gold transition-opacity hover:opacity-80">Home</a>
            <a href="#about" className="text-gold/80 transition-opacity hover:text-gold">About</a>
            <a href="#contact" className="text-gold/80 transition-opacity hover:text-gold">Contact</a>
          </div>
        </div>
      </nav>

      <header id="home" className="surface-imperial">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
          <p className="text-eyebrow text-gold">Grade 11 — ARIES Project</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
            Welcome To My First Website
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-85">
            Explore a refined collection of historical content, rich Roman heritage, and interactive
            learning experiences in a polished, modern layout.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#caesar"
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Learn About the Colosseum
            </a>
            <a
              href="#quiz"
              className="rounded-full border border-gold/50 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
            >
              Take the Quiz
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <article id="napoleon" className="mx-auto max-w-3xl rounded-md border border-border bg-card p-7 text-center">
          <p className="text-eyebrow">French Figure</p>
          <h2 className="mt-3 font-display text-2xl">Napoleon Bonaparte</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Napoleon Bonaparte earned the moniker "Nightmare of Europe" because his rapid
            conquests and military genius, seen in triumphs like Austerlitz, utterly upended the
            continent's balance of power. For over a decade, his sweeping changes terrified
            traditional monarchies, sparked the Napoleonic Wars, and redrew the map of Europe.
          </p>
        </article>

        <div className="mt-10 text-center">
          <a
            href="#quiz"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Open the Quiz
          </a>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-eyebrow">More about Napoleon</p>
          <h2 className="mt-3 text-3xl md:text-4xl">The Nightmare of Europe</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <figure>
              <img
                src={portrait}
                alt="Oil portrait of Napoleon Bonaparte in imperial regalia"
                width={1024}
                height={1280}
                className="w-full rounded-sm border border-gold/30 object-cover shadow-[var(--shadow-frame)]"
              />
              <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                Napoleon Bonaparte, Emperor of the French
              </figcaption>
            </figure>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Born Napoleone Buonaparte in Ajaccio, Corsica, in 1769, he rose from a minor
                noble family to become one of the most consequential figures in modern history. His
                Corsican origins gave him an outsider’s hunger; his education in French military
                schools gave him the tools to satisfy it.
              </p>
              <p className="leading-relaxed">
                Between 1796 and 1809 he defeated every coalition Europe assembled against him,
                redrawing the continent's borders, dissolving the Holy Roman Empire, and placing
                relatives on thrones from Spain to Naples. His victories at Austerlitz, Jena, and
                Friedland remain textbook examples of manoeuvre warfare.
              </p>
              <p className="leading-relaxed">
                Yet his legacy rests as much on paper as on battlefields. The Napoleonic Code,
                lycée system, Banque de France, and centralized administration outlasted his empire
                and shaped the modern European state. Defeat in Russia and at Waterloo ended his
                rule, but his institutions survived the restoration of the monarchy.
              </p>
            </div>
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

      <section id="quiz" className="surface-imperial">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <p className="text-eyebrow text-gold">Interactive</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Test Your Knowledge</h2>
          <p className="mx-auto mt-4 max-w-xl opacity-85">
            Take the quiz to see how much you remember about Roman and French history.
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-gold px-8 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            Open the Quiz
          </button>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-eyebrow">About</p>
        <h2 className="mt-3 text-3xl md:text-4xl">About this project</h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
          This website was created as a Grade 11 ARIES project to explore important historical
          figures and their impact on the modern world. It combines research, writing, and web
          design into a single polished experience.
        </p>
      </section>

      <section id="contact" className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Get in touch</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Have questions about the project or want to share feedback? Use your school email or
            classroom channel to reach out.
          </p>
        </div>
      </section>

      <footer className="surface-imperial">
        <div className="mx-auto max-w-5xl px-6 py-12 text-sm opacity-80">
          <p className="font-display text-xl text-gold">Historical Figures</p>
          <p className="mt-2">Grade 11 — ARIES Project</p>
          <p className="mt-1">© 2026 Historical Figures. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

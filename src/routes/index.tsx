import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import portrait from "@/assets/napoleon-portrait.jpg";

function AccountNavLink() {
  const [signedIn, setSignedIn] = useState(false);
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    let active = true;

    async function load(session: { user: { id: string; email?: string } } | null) {
      if (!active) return;
      setSignedIn(!!session);
      if (!session) {
        setDisplayName("");
        return;
      }
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", session.user.id)
        .maybeSingle();
      if (!active) return;
      setDisplayName(profile?.full_name?.trim() || session.user.email || "");
    }

    supabase.auth.getSession().then(({ data }) => load(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      load(session);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return (
    <Link
      to={signedIn ? "/account" : "/auth"}
      className="rounded-full border border-gold/50 px-4 py-2 text-gold transition-colors hover:bg-gold hover:text-ink"
    >
      {signedIn ? displayName || "My Profile" : "Sign in"}
    </Link>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center
        rounded-full border border-gold/40 bg-gold text-ink shadow-lg
        transition-all duration-300 ease-out
        hover:scale-110 hover:border-gold hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Napoleon Library — Grade 11 ARIES Project" },
      {
        name: "description",
        content:
          "A curated library of Napoleon Bonaparte's life, campaigns, reforms, and legacy.",
      },
      { property: "og:title", content: "The Napoleon Library" },
      {
        property: "og:description",
        content: "Explore the life, wars, laws, and lasting legacy of Napoleon Bonaparte.",
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
  { year: "1821", title: "Death on Saint Helena", text: "After six years in British captivity on the remote Atlantic island, he dies on 5 May 1821, most likely from stomach cancer." },
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

const quotes = [
  { text: "Impossible is a word to be found only in the dictionary of fools.", context: "Attributed to Napoleon, reflecting his belief in willpower and action." },
  { text: "A leader is a dealer in hope.", context: "Napoleon understood that morale, not just logistics, won campaigns." },
  { text: "History is the version of past events that people have decided to agree upon.", context: "His sharp awareness of how reputation is shaped after power fades." },
];

const innovations = [
  { title: "Self-sufficient corps", text: "Each corps contained infantry, cavalry, artillery, and engineers, allowing independent maneuver and rapid concentration." },
  { title: "Living off the land", text: "Armies foraged locally instead of relying solely on slow supply wagons, dramatically increasing marching speed." },
  { title: "Massed artillery", text: "He concentrated batteries to shatter enemy lines before infantry or cavalry assaults, a tactic still studied today." },
  { title: "Citizen armies", text: "He drew on France's levée en masse to field large, motivated forces led by officers promoted for merit." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="surface-imperial">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-xl text-gold">The Napoleon Library</span>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#home" className="text-gold transition-opacity hover:opacity-80">Home</a>
            <a href="#life" className="text-gold/80 transition-opacity hover:text-gold">Life</a>
            <a href="#works" className="text-gold/80 transition-opacity hover:text-gold">Works</a>
            <a href="#timeline" className="text-gold/80 transition-opacity hover:text-gold">Timeline</a>
            <a href="#about" className="text-gold/80 transition-opacity hover:text-gold">About</a>
            <AccountNavLink />
          </div>
        </div>
      </nav>


      <header id="home" className="surface-imperial">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
          <p className="text-eyebrow text-gold">Grade 11 — ARIES Project</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
            The Napoleon Library
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-85">
            A focused collection of Napoleon Bonaparte's life, campaigns, reforms, and legacy —
            built like a digital reference shelf for one of history's most influential figures.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#life"
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Explore His Life
            </a>
            <a
              href="#works"
              className="rounded-full border border-gold/50 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
            >
              See His Works
            </a>
          </div>
        </div>
      </header>

      <section id="life" className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-eyebrow">Profile</p>
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

      <section id="works" className="border-y border-border bg-card">
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

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-eyebrow">Rise to power</p>
        <h2 className="mt-3 text-3xl md:text-4xl">From Corsican cadet to Emperor</h2>
        <div className="mt-8 space-y-5 text-muted-foreground">
          <p className="leading-relaxed">
            Napoleon's ascent was astonishingly fast. In 1792 he was an obscure artillery captain
            writing political pamphlets in Corsica. By 1796 he commanded the Army of Italy and won
            victories at Lodi, Castiglione, Arcole, and Rivoli that forced Austria to sue for peace.
          </p>
          <p className="leading-relaxed">
            His Egyptian expedition of 1798 was a strategic failure against Britain, but it burnished
            his reputation as a romantic conqueror and returned him to France at the perfect moment:
            the Directory was bankrupt and unpopular. On 9 November 1799 he joined the coup that
            overthrew it, becoming First Consul — and then Consul for Life in 1802.
          </p>
          <p className="leading-relaxed">
            In 1804 he converted the consulate into an empire, crowning himself Emperor to avoid
            acknowledging any higher authority than the French people. For the next decade he would
            be the dominant figure in European affairs.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-eyebrow">Military innovations</p>
          <h2 className="mt-3 text-3xl md:text-4xl">How he changed warfare</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {innovations.map((i) => (
              <article key={i.title} className="rounded-md border border-border bg-background p-7">
                <h3 className="text-xl">{i.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
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

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-eyebrow">Legacy</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Downfall and lasting impact</h2>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              The invasion of Russia in 1812 destroyed the Grande Armée. After a fighting retreat
              across Germany, Napoleon abdicated in 1814 and was exiled to Elba. His escape in 1815
              and the brief Hundred Days ended at Waterloo, where a combined Anglo-Prussian army
              defeated him once and for all.
            </p>
            <p className="leading-relaxed">
              The Congress of Vienna redrew Europe to contain France, yet many of Napoleon's changes
              proved irreversible. Belgium, the Netherlands, parts of Italy and Germany, and the
              legal systems of dozens of countries still bear traces of his rule. The modern
              centralized state, meritocratic bureaucracy, and civil-law tradition all owe something
              to his ambition.
            </p>
            <p className="leading-relaxed">
              Controversial, brilliant, and ruthless, Napoleon remains one of the most studied
              individuals in history — a man who rose from obscurity to dominate an entire
              continent, then lost it all in little more than a decade.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-eyebrow">In his own words</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Notable quotes</h2>
        <div className="mt-10 space-y-6">
          {quotes.map((q, idx) => (
            <blockquote key={idx} className="rounded-md border-l-4 border-gold bg-card p-6">
              <p className="font-display text-xl italic">“{q.text}”</p>
              <footer className="mt-3 text-sm text-muted-foreground">— {q.context}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="about" className="surface-imperial">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-eyebrow text-gold">About</p>
          <h2 className="mt-3 text-3xl md:text-4xl">About this library</h2>
          <p className="mt-6 max-w-3xl leading-relaxed opacity-90">
            This website was created as a Grade 11 ARIES project. It is designed as a single-subject
            digital library dedicated entirely to Napoleon Bonaparte — his origins, his wars, his
            laws, and the world he left behind.
          </p>
        </div>
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
          <p className="font-display text-xl text-gold">The Napoleon Library</p>
          <p className="mt-2">Grade 11 — ARIES Project</p>
          <p className="mt-1">© 2026 The Napoleon Library. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

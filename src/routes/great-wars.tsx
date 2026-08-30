import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/great-wars")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Greatest Wars — The Napoleon Library" },
      {
        name: "description",
        content:
          "Exclusive member content: Napoleon Bonaparte's greatest campaigns and battles, from Austerlitz to Waterloo.",
      },
      { property: "og:title", content: "Greatest Wars — The Napoleon Library" },
      {
        property: "og:description",
        content: "Member-exclusive deep dives into Napoleon's greatest campaigns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GreatWarsPage,
});

const battles = [
  {
    year: "1805",
    title: "Battle of Austerlitz",
    subtitle: "The Battle of the Three Emperors",
    text: "Napoleon's masterpiece. He deliberately weakened his right flank to lure the Austro-Russian army onto the Pratzen Heights, then split their center with a massive thrust. The Third Coalition collapsed in a single day.",
    outcome: "Decisive French victory; Austria exited the war and signed Pressburg.",
  },
  {
    year: "1806",
    title: "Battle of Jena-Auerstedt",
    subtitle: "The shattering of Prussia",
    text: "On the same day, Napoleon routed the main Prussian army at Jena while Davout's single corps defeated the bulk of the Prussian forces at Auerstedt. The myth of Prussian invincibility was destroyed.",
    outcome: "Prussia collapsed; French forces entered Berlin within days.",
  },
  {
    year: "1807",
    title: "Battle of Friedland",
    subtitle: "The end of the Fourth Coalition",
    text: "On a narrow field near the Alle River, Napoleon trapped Bennigsen's Russian army and unleashed a massive artillery bombardment. Tsar Alexander I agreed to the Treaty of Tilsit soon after.",
    outcome: "Russia allied with France; Europe was divided between the two emperors.",
  },
  {
    year: "1809",
    title: "Battle of Wagram",
    subtitle: "The largest battle in European history to that point",
    text: "Fought across the Marchfeld plain near Vienna, Wagram involved more than 300,000 men. Napoleon used a grand battery of over 100 guns to pound the Austrian center before launching a massive infantry attack.",
    outcome: "Austria defeated again; the Treaty of Schönbrunn followed.",
  },
  {
    year: "1812",
    title: "The Russian Campaign",
    subtitle: "From the Niemen to Moscow and back",
    text: "The Grande Armée of 600,000 crossed into Russia. Victory at Borodino opened the road to Moscow, but the city's occupation produced no peace offer. The winter retreat destroyed the army.",
    outcome: "Catastrophic French losses; the empire began to unravel.",
  },
  {
    year: "1813",
    title: "Battle of Leipzig",
    subtitle: "The Battle of the Nations",
    text: "The largest battle in European history before World War I. Napoleon faced Austria, Prussia, Russia, and Sweden simultaneously. A premature French bridge demolition trapped thousands of his own troops.",
    outcome: "Decisive coalition victory; Napoleon retreated into France.",
  },
  {
    year: "1815",
    title: "Battle of Waterloo",
    subtitle: "The final defeat",
    text: "Napoleon attacked Wellington's Anglo-Allied army in Belgium, hoping to defeat it before Blücher's Prussians arrived. Delays, miscommunication among his marshals, and the Prussian intervention sealed his fate.",
    outcome: "Napoleon abdicated four days later; he was exiled to Saint Helena.",
  },
];

function GreatWarsPage() {
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSignedIn(!!data.session);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(!!session);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <nav className="surface-imperial">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-xl text-gold">The Napoleon Library</span>
          <Link
            to="/"
            className="rounded-full border border-gold/40 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            ← Back to main page
          </Link>
        </div>
      </nav>

      <header className="surface-imperial">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
          <p className="text-eyebrow text-gold">Member Exclusive</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
            Greatest Wars
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-85">
            A deeper look at the campaigns that defined an empire — from the sunlit victory at
            Austerlitz to the rain and mud of Waterloo.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {!loading && !signedIn && (
          <div className="mb-12 rounded-xl border border-gold/40 bg-gold/10 p-6 text-center">
            <p className="text-sm font-medium">
              This room is reserved for library members.{" "}
              <Link to="/auth" className="text-gold underline-offset-4 hover:underline">
                Sign in or create an account
              </Link>{" "}
              to unlock it.
            </p>
          </div>
        )}

        <ol className="space-y-12">
          {battles.map((b, idx) => (
            <li
              key={b.title}
              className="rounded-xl border border-border bg-card p-8 shadow-frame"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-2xl text-gold">{b.year}</span>
                <span className="text-eyebrow opacity-60">#{idx + 1}</span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl">{b.title}</h2>
              <p className="mt-1 text-lg italic opacity-80">{b.subtitle}</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">{b.text}</p>
              <p className="mt-4 rounded-md border border-gold/30 bg-gold/10 px-4 py-3 text-sm">
                <span className="font-medium">Outcome:</span> {b.outcome}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
          <h2 className="text-2xl md:text-3xl">Ready to explore the rest of the library?</h2>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            Return to the main page
          </Link>
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

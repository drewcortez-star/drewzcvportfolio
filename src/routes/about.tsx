import { createFileRoute, Link } from "@tanstack/react-router";
import drewPhoto from "@/assets/drew-cortez.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — The Napoleon Library" },
      {
        name: "description",
        content:
          "Meet Drew Lorenz Cortez — Grade 11 IT student and aspiring web developer. Skills, journey, interests, and the case study behind The Napoleon Library.",
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

const skills = [
  {
    title: "Front-end",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "Design",
    items: ["UI/UX layout", "Typography", "Color systems", "Responsive design", "Figma", "Canva"],
  },
  {
    title: "Research & writing",
    items: ["Historical research", "Fact-checking", "Source citation", "Content writing", "Editing"],
  },
  {
    title: "Workflow",
    items: ["Git & GitHub", "Vite", "Supabase", "Vercel deployment", "Accessibility basics"],
  },
];

const journey = [
  {
    when: "Early years",
    title: "Hooked on history",
    text:
      "Documentaries and library books about generals and empires came first. Napoleon stood out — a story with strategy, ambition, and consequences all at once.",
  },
  {
    when: "Junior high",
    title: "First lines of code",
    text:
      "Started with HTML and CSS, editing small pages to see what changed. Realised a webpage is just a layout problem — and I liked solving layout problems.",
  },
  {
    when: "Grade 11 — IT strand",
    title: "Choosing the IT track",
    text:
      "Enrolled in the Information Technology strand to take web development seriously: JavaScript, design fundamentals, and how real projects are planned and shipped.",
  },
  {
    when: "ARIES project",
    title: "Building The Napoleon Library",
    text:
      "Combined both interests into one website: researched and wrote every section, designed the imperial-era look, and built it with React, TypeScript, and Tailwind.",
  },
  {
    when: "Next",
    title: "Toward a career in web development",
    text:
      "Keep shipping projects, sharpen my React and design skills, and grow into a web and software developer who builds things people enjoy using.",
  },
];

const caseStudy = [
  {
    title: "The goal",
    text:
      "Create a digital library about Napoleon Bonaparte that reads like a museum exhibit — accurate, well-organised, and beautiful — while proving I can plan and ship a real, multi-page website.",
  },
  {
    title: "Research & content",
    text:
      "Collected key dates, campaigns, marshals, and quotes from reputable sources, then rewrote everything in my own words and fact-checked it before it went live. Sources are credited in the bibliography.",
  },
  {
    title: "Design decisions",
    text:
      "Chose a dark ink background with gold accents and a serif display face to echo gilded imperial-era books. Kept the palette small and the type hierarchy consistent so the content stays readable.",
  },
  {
    title: "Development",
    text:
      "Built with React and TypeScript using file-based routing, styled with Tailwind CSS, and added reader accounts and a feedback form powered by Supabase so the site works as a real product.",
  },
  {
    title: "Challenges",
    text:
      "Balancing a huge amount of text with a clean layout, keeping the design responsive on phones, and learning authentication for the members-only Greatest Wars room.",
  },
  {
    title: "Outcome & lessons",
    text:
      "A fully responsive, deployed library with secure accounts and working feedback. Biggest lesson: plan the content structure first — good navigation is a writing problem before it's a coding one.",
  },
];

const stack = [
  "React",
  "TypeScript",
  "TanStack Router",
  "Tailwind CSS",
  "Vite",
  "Supabase Auth",
  "Vercel",
  "Git & GitHub",
];

const interests = [
  {
    title: "History & documentaries",
    text:
      "Military history and biographies especially. Half of this website started as notes from documentaries I could not stop watching.",
  },
  {
    title: "Art, photography & video",
    text:
      "Composition, light, and colour — the same instincts that go into a good photo go into a good webpage layout.",
  },
  {
    title: "Reading & writing",
    text:
      "I enjoy turning research into clear, readable prose. Every section of the library was written and rewritten by hand.",
  },
  {
    title: "Music",
    text:
      "Always on while I code or write. It keeps long design sessions focused and makes debugging a little less painful.",
  },
];

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
              I&apos;m an aspiring web developer who cares about two things equally: getting the
              facts right and making them a pleasure to read. I work at the point where design
              meets code — turning research into structure, structure into layout, and layout into
              a fast, responsive website.
            </p>
            <p>
              Outside of code you&apos;ll find me watching history documentaries, taking photos,
              writing, or listening to music. My goal is a career in web and software development,
              building products that are as thoughtful as they are useful.
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

        {/* Skills & tools */}
        <section aria-labelledby="skills-heading" className="mt-20">
          <p className="text-eyebrow opacity-70">What I work with</p>
          <h2 id="skills-heading" className="mt-3 font-display heading-section">
            Skills &amp; tools
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-80">
            The skills I bring to a project — and the ones I used to build this one. I&apos;m
            strongest where design meets code: turning an idea into a layout, then a layout into
            a working, responsive site.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.title} className="rounded-xl border border-border bg-card p-6">
                <p className="text-eyebrow text-gold">{group.title}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-gold/30 px-3 py-1 text-xs opacity-90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Journey timeline */}
        <section aria-labelledby="journey-heading" className="mt-20">
          <p className="text-eyebrow opacity-70">My journey</p>
          <h2 id="journey-heading" className="mt-3 font-display heading-section">
            From curious reader to web developer
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-80">
            Napoleon has a timeline on the main page. This is mine — how a love of history turned
            into a love of building things for the web.
          </p>
          <ol className="mt-10 border-l border-border">
            {journey.map((step) => (
              <li key={step.title} className="relative pb-9 pl-7 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold" />
                <p className="font-display text-xl text-gold">{step.when}</p>
                <h3 className="mt-1 font-display text-lg">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed opacity-80">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Case study */}
        <section aria-labelledby="case-heading" className="mt-20">
          <p className="text-eyebrow opacity-70">Case study</p>
          <h2 id="case-heading" className="mt-3 font-display heading-section">
            How I built The Napoleon Library
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-80">
            A look behind the gilded pages: the goal, the process, the tools, and what I&apos;d do
            differently next time.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {caseStudy.map((block) => (
              <div key={block.title} className="rounded-xl border border-border bg-card p-6">
                <p className="text-eyebrow text-gold">{block.title}</p>
                <p className="mt-3 text-sm leading-relaxed opacity-90">{block.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-gold/40 bg-card p-6">
            <p className="text-eyebrow text-gold">Tech stack</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-gold/30 px-3 py-1 text-xs opacity-90"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/"
                className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                View the live project
              </Link>
              <Link
                to="/great-wars"
                className="rounded-full border border-gold/40 px-5 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                See the exclusive room
              </Link>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section aria-labelledby="interests-heading" className="mt-20">
          <p className="text-eyebrow opacity-70">Beyond the screen</p>
          <h2 id="interests-heading" className="mt-3 font-display heading-section">
            What I&apos;m into
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {interests.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg text-gold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-85">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-20 rounded-2xl border border-gold/40 bg-card p-8 text-center shadow-frame">
          <p className="text-eyebrow opacity-70">Get in touch</p>
          <h2 className="mt-3 font-display heading-section">Let&apos;s build something</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed opacity-80">
            Feedback on the library, a question about how it was built, or an idea for a future
            project — every message reaches me directly.
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-6 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            Go to Contact
          </Link>
        </section>
      </div>

      <footer className="surface-imperial mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm opacity-80">
          The Napoleon Library — built and maintained by Drew Lorenz S. Cortez.
        </div>
      </footer>
    </main>
  );
}

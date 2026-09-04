import { createFileRoute, Link } from "@tanstack/react-router";
import drewPhoto from "@/assets/drew-cortez.jpg";

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
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "Design",
    items: ["Page layout", "Typography hierarchy", "Color palette", "Responsive design"],
  },
  {
    title: "Research & writing",
    items: ["Historical research", "Fact-checking", "Source citation", "Content writing"],
  },
  {
    title: "Tools & workflow",
    items: ["Git & GitHub", "Vite", "Supabase Auth", "Vercel deployment"],
  },
];

const projectInfo = [
  { label: "Project", value: "The Napoleon Library" },
  { label: "My role", value: "Creator · Designer · Developer" },
  { label: "Purpose", value: "Educational historical digital library" },
  { label: "Type", value: "Grade 11 ARIES project" },
];

const contributions = [
  "Researched, wrote, and fact-checked every section — biography, campaigns, marshals, timeline, exile, and quotes.",
  "Designed the imperial-era look: dark ink background, gold accents, and a serif display face.",
  "Built the multi-page site with React, TypeScript, TanStack Router, and Tailwind CSS.",
  "Added reader accounts and the members-only Greatest Wars room using Supabase Auth.",
  "Set up the feedback form and deployed the site on Vercel.",
];

const lessons = [
  "Planning the content structure first makes navigation and layout much easier later.",
  "Keeping a small palette and a consistent type hierarchy keeps long text readable.",
  "Testing on a phone early catches responsive layout problems before they pile up.",
  "Authentication and protected pages take careful planning to get right.",
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
        <p className="text-eyebrow text-gold">About Me</p>
        <h1 className="mt-3 heading-section">Drew Lorenz Cortez</h1>
        <p className="mt-2 text-sm font-medium text-gold/80">
          Grade 11 ASSH/IT – ARIES · Creator of The Napoleon Library
        </p>

        <div className="mt-10 grid gap-8 rounded-md border border-border bg-card p-7 shadow-frame sm:grid-cols-[220px_1fr] md:p-8">
          <figure className="mx-auto w-full max-w-[220px] sm:mx-0">
            <img
              src={drewPhoto}
              alt="Portrait of Drew Lorenz S. Cortez, developer of The Napoleon Library"
              width={220}
              height={293}
              className="w-full rounded-md border border-gold/40 object-cover shadow-frame"
            />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">
              Drew Lorenz Cortez · Grade 11 ASSH/IT – ARIES
            </figcaption>
          </figure>

          <div className="space-y-4 text-sm leading-relaxed opacity-90">
            <p>
              <span className="font-display text-lg text-gold">Drew Lorenz Cortez</span> is a
              Grade 11 ASSH/IT student in section ARIES and the creator, designer, and developer
              of <em>The Napoleon Library</em>.
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
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/1Bz7FZ1QHe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <Link
                to="/"
                hash="contact"
                className="rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Name", value: "Drew Lorenz Cortez" },
            { label: "Grade & Section", value: "Grade 11 ASSH/IT – ARIES" },
            { label: "Featured project", value: "The Napoleon Library" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-md border border-border bg-card p-5 text-center"
            >
              <p className="text-eyebrow text-muted-foreground">{item.label}</p>
              <p className="mt-2 font-display text-lg text-balance">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Featured project */}
        <section aria-labelledby="project-heading" className="mt-20">
          <p className="text-eyebrow text-gold">Featured project</p>
          <h2 id="project-heading" className="mt-3 heading-section">
            The Napoleon Library
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            An educational digital library on the life, campaigns, and legacy of Napoleon
            Bonaparte — researched, designed, and built by me.
          </p>

          <div className="mt-8 rounded-md border border-gold/40 bg-card p-7 shadow-frame">
            <dl className="grid gap-5 sm:grid-cols-2">
              {projectInfo.map((row) => (
                <div key={row.label} className="border-l-2 border-gold/50 pl-4">
                  <dt className="text-eyebrow text-muted-foreground">{row.label}</dt>
                  <dd className="mt-1 font-display text-lg">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="heading-card">What I contributed</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                  {contributions.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="heading-card">What I learned</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                  {lessons.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                View the live project
              </Link>
              <Link
                to="/great-wars"
                className="rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                See the exclusive room
              </Link>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills-heading" className="mt-20">
          <p className="text-eyebrow text-gold">What I work with</p>
          <h2 id="skills-heading" className="mt-3 heading-section">
            My Skills
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Every skill listed here was used to build The Napoleon Library — from researching and
            writing the content to designing the layout and coding the site.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.title} className="rounded-md border border-border bg-card p-6">
                <h3 className="heading-card">{group.title}</h3>
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
          <p className="text-eyebrow text-gold">My journey</p>
          <h2 id="journey-heading" className="mt-3 heading-section">
            From curious reader to web developer
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Napoleon has a timeline on the main page. This is mine — how a love of history turned
            into a love of building things for the web.
          </p>
          <ol className="mt-10 border-l border-border">
            {journey.map((step) => (
              <li key={step.title} className="relative pb-9 pl-7 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold" />
                <p className="font-display text-xl text-gold">{step.when}</p>
                <h3 className="mt-1 heading-card">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Case study */}
        <section aria-labelledby="case-heading" className="mt-20">
          <p className="text-eyebrow text-gold">Case study</p>
          <h2 id="case-heading" className="mt-3 heading-section">
            How I built The Napoleon Library
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A look behind the gilded pages: the goal, the process, the tools, and what I&apos;d do
            differently next time.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {caseStudy.map((block) => (
              <div key={block.title} className="rounded-md border border-border bg-card p-6">
                <h3 className="heading-card">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-md border border-border bg-card p-6">
            <h3 className="heading-card">Tech stack</h3>
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
          </div>
        </section>

        {/* Interests */}
        <section aria-labelledby="interests-heading" className="mt-20">
          <p className="text-eyebrow text-gold">Beyond the screen</p>
          <h2 id="interests-heading" className="mt-3 heading-section">
            What I&apos;m into
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {interests.map((item) => (
              <div key={item.title} className="rounded-md border border-border bg-card p-6">
                <h3 className="heading-card">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-20 rounded-md border border-gold/40 bg-card p-7 text-center shadow-frame md:p-8">
          <p className="text-eyebrow text-gold">Get in touch</p>
          <h2 className="mt-3 heading-section">Let&apos;s build something</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Feedback on the library, a question about how it was built, or an idea for a future
            project — every message reaches me directly.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              hash="contact"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Go to Contact
            </Link>
            <a
              href="https://www.facebook.com/share/1Bz7FZ1QHe/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Message me on Facebook
            </a>
          </div>
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

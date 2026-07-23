import { createFileRoute } from "@tanstack/react-router";

import { ExperienceTimeline } from "@/components/experience-timeline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "João Noronha — Engineering Manager & AI Product Leader" },
      {
        name: "description",
        content:
          "Engineering Manager at Dialpad with 10+ years building SaaS, AI platforms and developer tooling. Based in Lisbon.",
      },
      { property: "og:title", content: "João Noronha — Engineering Manager & AI Product Leader" },
      {
        property: "og:description",
        content:
          "Engineering Manager at Dialpad with 10+ years building SaaS, AI platforms and developer tooling. Based in Lisbon.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const highlights = [
  { k: "10+", v: "Years shipping product" },
  { k: "70k+", v: "Customers reached" },
  { k: "50+", v: "Engineers onboarded" },
  { k: "6", v: "Direct reports" },
];


const skills = [
  "TypeScript", "JavaScript", "React", "Redux", "Vue 2/3", "Node.js",
  "Python", "Go", "ProseMirror", "Kubernetes", "Docker",
  "Google Cloud Datastore", "Dialtone Design System",
  "AI-assisted development", "Agentic AI",
];

const achievements = [
  "Two-time Dialpad Hackathon winner",
  "Three Outstanding Performance ratings",
  "Promoted from SWE → Senior → Engineering Manager in three years",
  "Internal talks on Web Components and Agentic frontend onboarding",
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-serif text-xl tracking-tight">
            João <span className="text-primary">N.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#experience" className="hover:text-foreground transition">Experience</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="mailto:jmdsnoronha@gmail.com"
            className="text-sm px-4 py-2 rounded-full bg-foreground text-background hover:bg-primary transition-colors"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="h-px w-10 bg-primary" />
              Lisbon, Portugal — Available for the right thing
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance">
              Engineering leader
              <br />
              building <em className="text-primary">AI-native</em>
              <br />
              products &amp; teams.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground text-pretty">
              I'm João Noronha — Engineering Manager at Dialpad. Ten years shipping
              SaaS, AI platforms and developer tooling. Hands-on with the architecture,
              patient with the people.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
              >
                See the work →
              </a>
              <a
                href="https://linkedin.com/in/joaonoronha36"
                target="_blank" rel="noreferrer"
                className="px-5 py-3 rounded-full border border-border text-sm font-medium hover:border-foreground transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <figure className="relative">
              <div className="absolute -inset-2 bg-primary/10 rounded-sm rotate-2" />
              <img
                src={`${import.meta.env.BASE_URL}joao-portrait.jpeg`}
                alt="Portrait of João Noronha"
                className="relative w-full h-[420px] md:h-[520px] object-cover grayscale rounded-sm shadow-2xl"
              />
              <figcaption className="mt-4 text-xs text-muted-foreground font-serif italic">
                — somewhere near the Atlantic.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Highlights strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-10">
          {highlights.map((h) => (
            <div key={h.v}>
              <div className="font-serif text-4xl md:text-5xl text-primary">{h.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{h.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About / Work philosophy */}
      <section id="work" className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">01 — About</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Product-minded, still writes the code.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground text-pretty">
            <p>
              I progressed from Software Engineer to Engineering Manager at Dialpad
              through consistent technical leadership, product delivery and
              cross-functional collaboration — while the org scaled from ~25 to 150+
              engineers.
            </p>
            <p>
              Today I lead engineering for our Agentic AI platform: designing the
              frontend architecture 50+ engineers now build on, shipping the Skill
              Builder and Skill Mining, and running the release cadence that keeps 70,000+
              customers unblocked.
            </p>
            <p>
              I care about specification-driven engineering, LLM-assisted delivery
              (Claude in the loop), and building small teams that ship real things.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">02 — Experience</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              A decade of shipping.
            </h2>
          </div>
        </div>

        <ExperienceTimeline />
      </section>

      {/* Skills + Achievements */}
      <section id="skills" className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">03 — Toolbox</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              What I reach for.
            </h2>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="px-3 py-1.5 rounded-full border border-border bg-background text-sm hover:border-primary hover:text-primary transition"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">04 — Recognition</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Things I'm proud of.
            </h2>
            <ul className="space-y-4">
              {achievements.map((a) => (
                <li key={a} className="flex gap-4 text-lg">
                  <span className="font-serif text-primary mt-1">✦</span>
                  <span className="text-pretty">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-36 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">05 — Say hello</div>
        <h2 className="font-serif text-5xl md:text-7xl leading-[1] text-balance">
          Let's build something
          <br />
          <em className="text-primary">worth shipping.</em>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto">
          Open to conversations about engineering leadership, agentic AI,
          and product-first teams.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:jmdsnoronha@gmail.com"
            className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition"
          >
            jmdsnoronha@gmail.com
          </a>
          <a
            href="tel:+351915861171"
            className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:border-foreground transition"
          >
            +351 915 861 171
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} João Noronha</span>
          <span className="font-serif italic">Lisbon → the world.</span>
        </div>
      </footer>
    </div>
  );
}

import {
  Lightbulb,
  MessageSquare,
  FileText,
  Terminal,
  Eye,
  CheckCircle2,
  Layers,
  Search,
  GitBranch,
  Wrench,
  SquareCheck,
  Sparkles,
} from "lucide-react";

const workflowSteps = [
  {
    icon: Lightbulb,
    num: "01",
    title: "Understand the Product",
    body: [
      "Every feature starts with understanding the problem.",
      "I work with Product and Design to narrow requirements and understand the customer problem we're trying to solve.",
      "Only once the requirements are clear do I begin thinking about implementation.",
    ],
  },
  {
    icon: MessageSquare,
    num: "02",
    title: "Challenge the Requirements",
    body: [
      "Once the requirements or PRD are available, I provide them to an LLM.",
      "The objective is not implementation.",
      "The objective is to challenge assumptions.",
      "I use AI to identify missing edge cases, question design decisions, expose ambiguities and ensure the problem is fully understood before any code is written.",
    ],
  },
  {
    icon: FileText,
    num: "03",
    title: "Build the Prompt",
    body: [
      "After refining the idea, I work with the LLM to create a detailed implementation prompt for my coding agent.",
      "The prompt contains everything required to implement the feature correctly, including:",
    ],
    bullets: [
      "product goals",
      "architecture",
      "technical constraints",
      "implementation details",
      "coding conventions",
      "rollout considerations",
    ],
    tail: "The better the prompt, the better the implementation.",
  },
  {
    icon: Terminal,
    num: "04",
    title: "Agentic Implementation",
    body: [
      "I use an agentic software development workflow (currently Superpowers) to execute the implementation.",
      "Rather than immediately generating code, the agent:",
    ],
    bullets: [
      "scans the repository",
      "understands the existing architecture",
      "analyses surrounding code",
      "asks clarifying questions",
      "identifies unknowns",
      "produces an implementation plan",
    ],
    tail:
      "Only after the plan is agreed does implementation begin. All development happens inside isolated Git worktrees, allowing multiple features or experiments to be developed in parallel without affecting one another.",
  },
  {
    icon: Eye,
    num: "05",
    title: "Review",
    body: ["Every implementation is reviewed manually. I verify:"],
    bullets: [
      "correctness",
      "maintainability",
      "readability",
      "architectural consistency",
      "performance",
      "product behaviour",
    ],
    tail:
      "Because the coding agent follows project-specific rules and conventions, the generated code usually requires relatively small refinements rather than extensive rewrites.",
  },
  {
    icon: CheckCircle2,
    num: "06",
    title: "Validation",
    body: ["Before opening a pull request I:"],
    bullets: [
      "run the feature locally",
      "manually test behaviour",
      "validate edge cases",
      "ensure the implementation matches the specification",
    ],
    tail: "Only then is the work handed over to QA for broader validation.",
  },
  {
    icon: Layers,
    num: "07",
    title: "Continuous Improvement",
    body: [
      "As I work, I constantly look for repeating patterns.",
      "Whenever I notice repeated implementation steps or recurring debugging workflows, I create new agentic skills or rules so those patterns become reusable.",
      "Over time this continuously improves the quality and speed of future implementations.",
    ],
  },
];

const debugSteps = [
  {
    icon: Search,
    num: "01",
    title: "Triage",
    body: [
      "Before touching any code, I identify the actual failure.",
      "This typically involves collecting logs, understanding user behaviour, reproducing the issue and narrowing the problem space.",
    ],
  },
  {
    icon: GitBranch,
    num: "02",
    title: "Root Cause Analysis",
    body: [
      "Once I understand the problem, I provide a concise synopsis to my coding agent.",
      "Rather than immediately proposing fixes, it follows a systematic debugging process to identify the underlying cause.",
    ],
  },
  {
    icon: Wrench,
    num: "03",
    title: "Implementation",
    body: [
      "The agent proposes and implements the fix while following existing project conventions.",
    ],
  },
  {
    icon: SquareCheck,
    num: "04",
    title: "Verification",
    body: [
      "Every fix is reviewed manually.",
      "I validate the implementation locally before sending it to QA.",
    ],
  },
];

const principles = [
  {
    title: "AI accelerates execution",
    body: "Implementation is no longer the bottleneck. Understanding the problem is.",
  },
  {
    title: "Better prompts come from better thinking",
    body:
      "The quality of generated code is directly related to the quality of the engineering specification behind it.",
  },
  {
    title: "Review is non-negotiable",
    body:
      "Every change is reviewed as though it came from another engineer. AI-generated code should earn trust—not assume it.",
  },
  {
    title: "Reusable workflows beat one-off prompts",
    body:
      "Whenever I identify repeated engineering work, I create reusable skills, rules or workflows so future implementations become faster and more consistent.",
  },
  {
    title: "Engineering judgment remains human",
    body:
      "Architecture, trade-offs, product decisions and software quality remain my responsibility. AI simply allows me to spend more time where engineers create the most value.",
  },
];

function WorkflowStep({
  step,
}: {
  step: (typeof workflowSteps)[0];
}) {
  const Icon = step.icon;
  return (
    <li className="relative pl-16 pb-16 last:pb-0">
      <span className="absolute left-[19px] top-4 bottom-0 w-px bg-border last:hidden" />
      <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-xs font-medium text-muted-foreground">
        {step.num}
      </span>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="h-5 w-5 text-primary" />
          <h3 className="font-serif text-2xl md:text-3xl">{step.title}</h3>
        </div>
        {step.body.map((p, i) => (
          <p key={i} className="mt-3 text-lg text-muted-foreground text-pretty">
            {p}
          </p>
        ))}
        {step.bullets && (
          <ul className="mt-4 space-y-2">
            {step.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-lg">
                <span className="text-primary mt-1">·</span>
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        )}
        {step.tail && (
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{step.tail}</p>
        )}
      </div>
    </li>
  );
}

export function HowIBuildWithAi({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="font-serif text-xl tracking-tight hover:opacity-80 transition"
          >
            João <span className="text-primary">N.</span>
          </button>
          <button
            onClick={onBack}
            className="text-sm px-4 py-2 rounded-full border border-border font-medium hover:border-foreground transition"
          >
            ← Back to résumé
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="h-px w-10 bg-primary" />
            Engineering Process
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance">
            How I Build Software
            <br />
            with <em className="text-primary">AI</em>
          </h1>
          <div className="mt-8 space-y-4 text-lg md:text-xl text-muted-foreground text-pretty">
            <p>
              Over the last few years I've gradually evolved from using AI as a coding
              assistant to making it part of my engineering workflow.
            </p>
            <p>
              Today I spend significantly less time writing boilerplate code and more time
              understanding problems, designing systems, writing specifications and
              reviewing implementations.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border max-w-2xl">
            <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
              AI accelerates execution.
              <br />
              <span className="text-muted-foreground">
                Engineering judgment remains entirely my responsibility.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                01 — Building Features
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                From problem to pull request.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-muted-foreground text-pretty">
                The workflow I follow when implementing a new feature. Each step is
                deliberate — the goal is to reduce implementation overhead while keeping
                engineering judgment front and centre.
              </p>
            </div>
          </div>
          <ol>
            {workflowSteps.map((step) => (
              <WorkflowStep key={step.num} step={step} />
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                02 — Debugging
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Finding the root cause.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-muted-foreground text-pretty">
                Debugging follows a different rhythm. The focus is on systematic
                investigation, not speed.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14 max-w-4xl">
            {debugSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-xs font-medium text-muted-foreground">
                      {step.num}
                    </span>
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="font-serif text-2xl">{step.title}</h3>
                  </div>
                  {step.body.map((p, i) => (
                    <p key={i} className="mt-3 text-lg text-muted-foreground text-pretty pl-[57px]">
                      {p}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                03 — Exploring Ideas
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                When there's no known answer.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground text-pretty">
              <p>
                Not every engineering task has a known solution. For spikes,
                proof-of-concepts and technical investigations, I use AI differently.
              </p>
              <p>
                Rather than asking for implementation, I describe the problem I'm trying
                to solve together with several possible approaches.
              </p>
              <p>
                The LLM helps compare the trade-offs between each option, exploring
                architecture, complexity, maintainability, scalability and user experience.
              </p>
              <p className="text-foreground font-medium">
                This allows me to make more informed engineering decisions before
                committing to an implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-16 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              04 — Principles
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              What I hold onto.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-md border border-border bg-card/60 p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <Sparkles className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="font-serif text-3xl md:text-4xl leading-snug text-foreground">
              AI hasn't changed what good engineering looks like.
            </p>
            <p className="mt-2 font-serif text-3xl md:text-4xl leading-snug text-foreground">
              It has changed <em className="text-primary">where engineers spend their time.</em>
            </p>
            <div className="mt-10 space-y-4 text-lg text-muted-foreground text-pretty">
              <p>
                The highest leverage engineers are no longer the ones who type the
                fastest, but the ones who understand problems deeply, communicate
                clearly, design systems thoughtfully and build repeatable workflows.
              </p>
              <p className="text-foreground font-medium">
                That's the direction I continue to invest in every day.
              </p>
            </div>
          </div>
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

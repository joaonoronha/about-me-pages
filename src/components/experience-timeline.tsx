import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { experience, type ExperienceItem, type TechStack } from "@/data/experience";

const STORAGE_KEY = "cv:expanded-experience";

const stackLabels: Record<keyof TechStack, string> = {
  frontend: "Frontend",
  backend: "Backend",
  infrastructure: "Infrastructure",
  ai: "AI / LLM",
  devx: "Developer Experience",
};

export function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setExpandedId(saved);
    } catch {}
  }, []);

  const toggle = (id: string) => {
    const next = expandedId === id ? null : id;
    setExpandedId(next);
    try {
      if (next) localStorage.setItem(STORAGE_KEY, next);
      else localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return (
    <ol className="relative border-l border-border ml-2">
      {experience.map((e) => (
        <TimelineItem
          key={e.id}
          item={e}
          expanded={expandedId === e.id}
          onToggle={() => toggle(e.id)}
        />
      ))}
    </ol>
  );
}

function TimelineItem({
  item,
  expanded,
  onToggle,
}: {
  item: ExperienceItem;
  expanded: boolean;
  onToggle: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    if (expanded) {
      const timer = setTimeout(() => {
        const heading = headingRef.current;
        if (!heading) return;
        const rect = heading.getBoundingClientRect();
        const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (!isFullyVisible) {
          heading.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  return (
    <li className="pl-8 pb-10 relative group">
      <span
        className={cn(
          "absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background transition",
          expanded ? "scale-125" : "group-hover:scale-125",
        )}
      />
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`exp-${item.id}`}
        className="w-full text-left cursor-pointer"
      >
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 ref={headingRef} className="font-serif text-2xl md:text-3xl">{item.role}</h3>
          <span className="text-primary font-medium">· {item.company}</span>
          <span className="text-sm text-muted-foreground sm:ml-auto">{item.period}</span>
        </div>
        <p className="mt-3 text-muted-foreground text-pretty max-w-3xl">{item.short}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary/90 hover:text-primary">
          {expanded ? "Show less" : "Read more"}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              expanded && "rotate-180",
            )}
          />
        </span>
      </button>

      <div
        id={`exp-${item.id}`}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          expanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ExpandedPanel item={item} />
        </div>
      </div>
    </li>
  );
}

function SectionRule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mt-8 mb-5">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function ExpandedPanel({ item }: { item: ExperienceItem }) {
  const stackEntries = item.stack
    ? (Object.entries(item.stack) as [keyof TechStack, string[] | undefined][]).filter(
        ([, v]) => v && v.length,
      )
    : [];

  return (
    <article className="rounded-md border border-border/70 bg-card/60 p-6 md:p-8 max-w-3xl">
      <SectionRule label="Overview" />
      <p className="text-lg leading-relaxed text-foreground/90 text-pretty">{item.overview}</p>

      {item.projects && item.projects.length > 0 && (
        <>
          <SectionRule label="Major Initiatives" />
          <div className="grid gap-4">
            {item.projects.map((p) => (
              <div
                key={p.name}
                className="rounded-md border border-border bg-background p-5"
              >
                <div className="flex items-baseline gap-2 flex-wrap">
                  {p.icon && <span aria-hidden>{p.icon}</span>}
                  <h4 className="font-serif text-xl">{p.name}</h4>
                </div>
                <p className="mt-2 text-muted-foreground text-pretty">{p.description}</p>

                {p.challenges && (
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                        The challenge
                      </div>
                      <p className="text-sm text-foreground/90 text-pretty">{p.challenges}</p>
                    </div>
                  )}

                  {p.solution && (
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                        My solution
                      </div>
                      <p className="text-sm text-foreground/90 text-pretty">{p.solution}</p>
                    </div>
                  )}

                  {p.responsibilities && p.responsibilities.length > 0 && (
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                        My role
                      </div>
                      <ul className="space-y-1 text-sm text-foreground/90">
                        {p.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span className="text-primary">·</span>
                            <span className="text-pretty">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {p.impact && (
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                        Impact
                      </div>
                      <p className="text-sm text-foreground/90 text-pretty">{p.impact}</p>
                    </div>
                  )}

                  {p.impactPoints && p.impactPoints.length > 0 && (
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                        Impact
                      </div>
                      <ul className="space-y-1 text-sm text-foreground/90">
                        {p.impactPoints.map((ip) => (
                          <li key={ip} className="flex gap-2">
                            <span className="text-primary">·</span>
                            <span className="text-pretty">{ip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {p.technologies && p.technologies.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <li
                        key={t}
                        className="px-2 py-0.5 rounded-full border border-border text-xs text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {item.leadership && Object.values(item.leadership).some(Boolean) && (
        <>
          <SectionRule label="Leadership" />
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {(
              [
                ["teamSize", "Team"],
                ["mentoring", "Mentoring"],
                ["performanceReviews", "Performance reviews"],
                ["hiring", "Hiring & promotions"],
                ["crossFunctional", "Cross-functional"],
                ["releaseOwnership", "Release ownership"],
                ["qa", "QA coordination"],
              ] as const
            ).map(([key, label]) => {
              const v = item.leadership?.[key];
              if (!v) return null;
              return (
                <div key={key}>
                  <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/90 text-pretty">{v}</dd>
                </div>
              );
            })}
          </dl>
        </>
      )}

      {stackEntries.length > 0 && (
        <>
          <SectionRule label="Tech Stack" />
          <div className="grid sm:grid-cols-2 gap-5">
            {stackEntries.map(([key, values]) => (
              <div key={key}>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  {stackLabels[key]}
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {values!.map((v) => (
                    <li
                      key={v}
                      className="px-2.5 py-1 rounded-full border border-border bg-background text-xs"
                    >
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}

      {item.achievements && item.achievements.length > 0 && (
        <>
          <SectionRule label="Achievements" />
          <ul className="space-y-2">
            {item.achievements.map((a) => (
              <li key={a} className="flex gap-3 text-sm text-foreground/90">
                <span className="text-primary mt-0.5">✦</span>
                <span className="text-pretty">{a}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}

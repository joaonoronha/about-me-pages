export type Project = {
  name: string;
  icon?: string;
  description: string;
  challenges?: string;
  solution?: string;
  responsibilities?: string[];
  technologies?: string[];
  impact?: string;
  impactPoints?: string[];
};

export type TechStack = {
  frontend?: string[];
  backend?: string[];
  infrastructure?: string[];
  ai?: string[];
  devx?: string[];
};

export type Leadership = {
  teamSize?: string;
  mentoring?: string;
  performanceReviews?: string;
  hiring?: string;
  crossFunctional?: string;
  releaseOwnership?: string;
  qa?: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  short: string;
  overview: string;
  projects?: Project[];
  leadership?: Leadership;
  stack?: TechStack;
  achievements?: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "dialpad-em",
    company: "Dialpad",
    role: "Engineering Manager",
    period: "Oct 2024 — Present",
    short:
      "Lead a team of six engineers delivering strategic Agentic AI initiatives while remaining hands-on in architecture and implementation.",
    overview:
      "Leading a team of six engineers building Dialpad's Agentic AI platform while remaining hands-on in architecture, implementation and technical strategy. DRI for QA ↔ Engineering and owner of the bi-weekly beta and production release cadence.",
    projects: [
      {
        name: "Agentic Skill Builder",
        icon: "🧠",
        description:
          "A no-code surface that lets non-technical users create AI agents through prompts, guardrails and MCP actions.",
        challenges:
          "Designing a safe authoring model where non-engineers can compose LLM behaviour, tool calls and guardrails without producing brittle or unsafe agents.",
        responsibilities: [
          "Owned end-to-end architecture and delivery",
          "Designed the ProseMirror-based editor and LLM-powered linter",
          "Partnered with Product and Design on the authoring model",
        ],
        technologies: ["Vue 3", "TypeScript", "ProseMirror", "MCP", "Claude"],
        impact:
          "Unlocked agent creation for non-technical teams across a customer base of 70,000+ organisations.",
      },
      {
        name: "Skill Mining",
        icon: "🔍",
        description:
          "Automated discovery of reusable skills from real customer conversations to seed the Skill Builder.",
        responsibilities: [
          "Shaped the technical approach with Product and ML",
          "Owned the frontend architecture and delivery",
        ],
        technologies: ["Vue 3", "TypeScript", "LLM pipelines"],
        impact:
          "Reduced the cold-start problem for new agent deployments by surfacing high-signal skills automatically.",
      },
      {
        name: "Frontend Platform",
        icon: "🚀",
        description:
          "The shared frontend architecture that 50+ engineers now build agentic products on.",
        responsibilities: [
          "Defined patterns, primitives and the Dialtone integration",
          "Onboarded engineers across squads",
        ],
        technologies: ["Vue 3", "TypeScript", "Dialtone", "Vite"],
        impact:
          "Standardised how agentic surfaces are built across the org, cutting time to first feature for new squads.",
      },
    ],
    leadership: {
      teamSize: "6 direct reports",
      mentoring: "1:1s, growth plans and career pathing",
      performanceReviews: "Full cycle reviews and salary calibration",
      hiring: "1 promotion delivered",
      crossFunctional: "Tight loop with Product, Design, QA and ML",
      releaseOwnership: "Owner of bi-weekly beta and production releases",
      qa: "DRI for QA ↔ Engineering coordination",
    },
    stack: {
      frontend: ["React", "TypeScript", "Vue", "ProseMirror", "Dialtone"],
      backend: ["Node.js", "Go", "Python"],
      infrastructure: ["Docker", "Kubernetes", "Google Cloud Datastore"],
      ai: ["Claude", "MCP", "LLM linting", "Agentic workflows"],
      devx: ["Vite", "Spec-driven engineering", "LLM-assisted delivery"],
    },
    achievements: [
      "Promoted to Engineering Manager",
      "Owner of the platform 50+ engineers build on",
      "Bi-weekly release cadence sustained across production and beta",
    ],
  },
  {
    id: "dialpad-senior",
    company: "Dialpad",
    role: "Senior Software Engineer",
    period: "May 2023 — Oct 2024",
    short:
      "Led technical initiatives integrating Kare's acquired AI products into the Dialpad ecosystem.",
    overview:
      "Led technical initiatives integrating Kare's acquired AI products into Dialpad, rebuilding customer-facing chat and knowledge tooling and modernising the codebase.",
    projects: [
      {
        name: "Customer Chat Rebuild",
        icon: "💬",
        description:
          "Rewrote the customer-facing chat product on top of the Dialpad platform.",
        responsibilities: [
          "Led the frontend architecture",
          "Partnered with Product and Design on the new UX",
        ],
        technologies: ["Vue 3", "React 17", "Redux", "TypeScript", "Node.js"],
        impact: "Delivered a scalable foundation for AI chat experiences.",
      },
      {
        name: "Knowledge Management",
        icon: "📚",
        description:
          "Rebuilt the knowledge management application powering AI answers.",
        technologies: ["Vue 3", "TypeScript"],
        impact: "Enabled faster iteration on knowledge-backed AI features.",
      },
      {
        name: "TypeScript Migration",
        icon: "🛠️",
        description:
          "Migrated legacy JavaScript surfaces to TypeScript across acquired products.",
        impact: "Improved reliability and developer velocity across the codebase.",
      },
    ],
    leadership: {
      mentoring: "Mentored engineers on frontend architecture",
      crossFunctional: "Close partnership with Product and Design",
    },
    stack: {
      frontend: ["Vue 2/3", "React 17", "Redux", "TypeScript", "JavaScript"],
      backend: ["Node.js"],
      infrastructure: ["Docker"],
    },
    achievements: [
      "Promoted to Engineering Manager after this role",
      "Outstanding Performance rating",
    ],
  },
  {
    id: "dialpad-swe",
    company: "Dialpad",
    role: "Software Engineer",
    period: "Jun 2021 — May 2023",
    short:
      "Joined through the Kare acquisition and rebuilt AI chat products within the Dialpad ecosystem.",
    overview:
      "Joined Dialpad through the Kare acquisition and contributed to rebuilding AI chat products used across a platform serving 70,000+ customers.",
    projects: [
      {
        name: "AI Chat Integration",
        icon: "🤖",
        description:
          "Contributed to the integration of Kare's AI chat into Dialpad's customer experience surfaces.",
        technologies: ["Vue", "TypeScript", "Node.js"],
        impact: "Shipped customer-facing AI chat to 70,000+ customers.",
      },
    ],
    stack: {
      frontend: ["Vue", "React 17", "Redux", "TypeScript", "JavaScript"],
      backend: ["Node.js"],
    },
    achievements: [
      "Two-time Dialpad Hackathon winner",
      "Outstanding Performance rating",
      "Promoted to Senior Software Engineer",
    ],
  },
  {
    id: "hugo-boss",
    company: "Hugo Boss — Lisbon Nearshore",
    role: "Frontend Developer",
    period: "2018 — 2021",
    short:
      "Led frontend development across enterprise applications and owned multiple products end-to-end.",
    overview:
      "Led frontend development across enterprise applications at Hugo Boss's Lisbon Nearshore hub, owning multiple products and building vendor integration platforms.",
    projects: [
      {
        name: "Profit Calculation Platform",
        icon: "📊",
        description:
          "A legacy ASP.NET application used by Hugo Boss to calculate the profitability of individual clothing items.",
        challenges:
          "The profit calculation platform was a legacy ASP.NET application used by Hugo Boss to calculate the profitability of individual clothing items. The application had become difficult to maintain and evolve.",
        solution:
          "Refactored the application, modernizing large parts of the codebase while preserving business-critical functionality. Improved maintainability and supported the continued evolution of the platform.",
        impactPoints: [
          "Improved maintainability of a business-critical application",
          "Reduced technical debt in a legacy codebase",
          "Enabled continued development without disrupting business operations",
        ],
        technologies: ["ASP.NET", "C#", "jQuery", "Kendo UI"],
      },
      {
        name: "Digital Showroom",
        icon: "👔",
        description:
          "Enabled internal teams and partners to browse and manage clothing collections digitally.",
        challenges:
          "Hugo Boss's Digital Showroom enabled internal teams and partners to browse and manage clothing collections digitally, requiring continuous feature development and maintenance.",
        solution:
          "Contributed to the ongoing development and maintenance of the platform, implementing new features, resolving issues, and collaborating with cross-functional teams to support evolving business requirements.",
        impactPoints: [
          "Delivered new functionality for a production enterprise application",
          "Maintained a reliable platform supporting business users",
          "Collaborated across engineering teams to ensure stable releases",
        ],
        technologies: ["Angular", "Node.js", "TypeScript"],
      },
    ],
    leadership: {
      crossFunctional: "Worked across enterprise teams and vendors",
    },
    stack: {
      frontend: ["Angular", "TypeScript", "jQuery", "Kendo UI"],
      backend: ["ASP.NET", "C#", "Node.js"],
    },
    achievements: ["Owned multiple enterprise products end-to-end"],
  },
  {
    id: "att",
    company: "AT&T",
    role: "Backup, Storage & Automation Specialist",
    period: "2017 — 2018",
    short:
      "Developed automation tooling and internal web applications while serving as EMEA automation SME.",
    overview:
      "Worked as the Automation Subject Matter Expert for the EMEA Backup & Storage organisation, building internal automation platforms, developer tooling, and operational systems that significantly reduced manual work across enterprise infrastructure.",
    projects: [
      {
        name: "Enterprise Backup Upgrade Automation",
        icon: "⚙️",
        description:
          "Automated backup software upgrades across a fleet of 10,000+ Linux servers.",
        challenges:
          "Upgrading enterprise backup software across more than 10,000 Linux servers was a repetitive, manual, and high-risk operational process that required significant engineering effort and coordination.",
        solution:
          "Designed and developed a Python-based automation platform that orchestrated backup software upgrades across the fleet. The system automated deployment logic, validation, execution, and reporting, transforming a manual infrastructure operation into a repeatable and reliable workflow.",
        impactPoints: [
          "Successfully automated upgrades across 10,000+ Linux servers",
          "Eliminated large amounts of manual operational work",
          "Reduced deployment risk through consistent automation",
          "Increased deployment reliability and repeatability",
          "Enabled the operations team to execute upgrades significantly faster",
        ],
      },
      {
        name: "Internal Automation Platform",
        icon: "🔧",
        description:
          "Developed automation scripts and internal tooling to streamline operational processes across the EMEA Backup & Storage organisation.",
        challenges:
          "The EMEA Backup & Storage team relied on repetitive manual operational tasks that were time-consuming, error-prone, and difficult to scale.",
        solution:
          "Developed Python and shell automation scripts to eliminate repetitive operational tasks, standardize common workflows, and improve the reliability of day-to-day infrastructure operations.",
        impactPoints: [
          "Reduced manual operational effort across the EMEA Backup & Storage organisation",
          "Improved consistency and reliability of operational workflows",
          "Increased team productivity by automating repetitive infrastructure tasks",
          "Created reusable automation scripts adopted across the team",
        ],
      },
    ],
    stack: {
      backend: ["Python", "Shell Scripting"],
      infrastructure: ["Linux", "Enterprise Backup Systems"],
      devx: ["Internal Tooling", "Process Automation", "Operational Platforms"],
    },
    achievements: [
      "Automation Subject Matter Expert for the EMEA Backup & Storage organisation",
      "Designed and delivered an automation platform used to upgrade 10,000+ Linux servers",
      "Built internal tooling that significantly reduced operational overhead",
    ],
  },
];

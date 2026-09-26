// ---------------------------------------------------------------------------
// All editable content for the site lives in this file. Change text, links,
// and numbers here rather than hunting through components.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Aryan Mishra",
  role: "Full Stack Developer",
  location: "Jaipur, India",
  tagline:
    "I build systems that hold up under load — a double-entry ledger that can't lose a rupee, a map that gets 300 acres of campus into your pocket, an event platform that didn't blink at 3,000 concurrent users.",
  summary:
    "B.Tech student at MNIT Jaipur (Metallurgical & Materials Engineering, CS minor) who spends most of his time shipping full-stack products — from financial infrastructure to campus tools — and the rest of it fixing other people's Docker healthchecks.",
  email: "aryanmishra010@gmail.com",
  phone: "+91-9026199282",
  github: "https://github.com/aryanm9026",
  githubHandle: "github.com/aryanm9026",
  linkedin: "https://linkedin.com/in/aryanmishra9026",
  linkedinHandle: "linkedin.com/in/aryanmishra9026",
  resumeHref: "/resume/Aryan_Mishra_Resume.pdf",
  // Replace with a real headshot (e.g. /public/images/avatar.jpg) whenever you have one.
  avatarPlaceholder: "/images/avatar.png",
};

export const education = {
  school: "Malaviya National Institute of Technology (MNIT), Jaipur",
  degree: "B.Tech, Metallurgical & Materials Engineering — Minor in Computer Science",
  detail: "CGPA 8.19 · Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks",
  period: "Aug 2024 – May 2028",
};

export type Skill = { label: string; group: string };

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "React Native"],
  },
  {
    title: "Data & Caching",
    items: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Upstash"],
  },
  {
    title: "Infra & Tools",
    items: ["Docker", "Git", "AWS", "CI/CD", "Vercel", "Postman"],
  },
];

export type FeaturedProject = {
  id: string;
  index: string;
  name: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
  links: { label: string; href: string }[];
  scene: "banking" | "maps" | "luxenra" | "blitzschlag";
  screenshotNote: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "banking",
    index: "01",
    name: "Secure Banking System",
    role: "Backend architecture, security",
    period: "Jan 2026 – Present",
    description:
      "A high-integrity banking engine built around a double-entry, append-only ledger — the same accounting principle real banks use so that money can never quietly go missing.",
    bullets: [
      "Double-entry ledger with MongoDB managed transactions, preventing double-spending under concurrent load.",
      "Idempotency keys stop network retries from processing the same transfer twice.",
      "Redis-backed rate limiting, JWT auth, and mitigations for XSS, CSRF, and SQL injection per OWASP guidelines.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Redis", "JWT", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/aryanm9026/nodeJS-based-banking-app-backend" },
      { label: "Live API", href: "https://nodejs-based-banking-app-backend.onrender.com" },
    ],
    scene: "banking",
    screenshotNote: "Add API spec / Postman collection screenshot at /public/images/banking-1.jpg",
  },
  {
    id: "mapsnit",
    index: "02",
    name: "mapsNIT",
    role: "Full stack + geospatial",
    period: "2025 – Present",
    description:
      "MNIT Jaipur's campus has 300+ acres and no signage that makes sense to a first-year. mapsNIT turns it into something you can search — any professor's office, any lab, the nearest water cooler.",
    bullets: [
      "Leaflet.js map with Dijkstra's algorithm for shortest-path routing across campus.",
      "Turf.js geospatial queries power building, lab, and amenity search.",
      "Live location, current-speed readout, and a focus-zoom mode for dense building clusters.",
    ],
    stack: ["JavaScript", "Node.js", "Leaflet.js", "Turf.js", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/aryanm9026/mapsNIT" },
      { label: "Live app", href: "https://mapsnit.onrender.com" },
    ],
    scene: "maps",
    screenshotNote: "Add campus map screenshot at /public/images/mapsnit-1.jpg",
  },
  {
    id: "luxenra",
    index: "03",
    name: "Luxenra",
    role: "Full stack e-commerce",
    period: "Oct 2025 – Jul 2026",
    description:
      "A fragrance e-commerce platform where the product photography needed to load as fast as it looks premium — so most of the engineering work happened where you can't see it.",
    bullets: [
      "Upstash caching cut API response times from ~7s to 200–400ms on high-payload product queries.",
      "Code splitting and lazy loading trimmed the initial bundle size by 90%.",
      "100/100 Lighthouse SEO score on launch.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Upstash", "AWS", "TanStack Query"],
    links: [
      { label: "GitHub", href: "https://github.com/aryanm9026/luxenra-frontend" },
      { label: "Live site", href: "https://www.luxenrafragrance.com" },
    ],
    scene: "luxenra",
    screenshotNote: "Add product/hero screenshot at /public/images/luxenra-1.jpg",
  },
  {
    id: "blitzschlag",
    index: "04",
    name: "Blitzschlag",
    role: "Lead developer, web + native",
    period: "Nov 2025 – Feb 2026",
    description:
      "The web and app platform behind MNIT Jaipur's annual cultural fest — built to hold up when several thousand students hit it at once during registrations.",
    bullets: [
      "Custom middleware for load balancing kept the platform stable at 3,000+ concurrent users.",
      "Cross-platform React Native app with shared state and offline sync, lifting engagement by 40%.",
      "Led the technical team end to end, from architecture to on-the-day incident response.",
    ],
    stack: ["React.js", "Node.js", "Firebase", "React Native"],
    links: [
      { label: "GitHub", href: "https://github.com/aryanm9026/blitz26-app" },
      { label: "Live site", href: "https://blitzschlag.co.in" },
    ],
    scene: "blitzschlag",
    screenshotNote: "Add event platform screenshot at /public/images/blitzschlag-1.jpg",
  },
];

export type OtherProject = {
  name: string;
  period: string;
  description: string;
  stack: string[];
  href?: string;
};

export const otherProjects: OtherProject[] = [
  {
    name: "Dhwani — Acoustic Classification System",
    period: "Dec 2025",
    description:
      "National-finalist project for Smart India Hackathon (DRDO problem statement): a scalable classifier spanning 10+ sound domains, cutting manual audio analysis by 70%, with the Gemini API layered on for contextual querying over live streaming audio.",
    stack: ["Python", "Gemini API", "Signal Processing"],
  },
  {
    name: "Metallurgical Property Prediction Pipeline",
    period: "Jan 2026 – Present",
    description:
      "An ML pipeline predicting yield strength, UTS, and elongation for magnesium alloys from composition and process parameters — tree-based models reaching R² scores up to 0.85 on literature datasets.",
    stack: ["Python", "Scikit-learn", "XGBoost", "Random Forest"],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  stack: string[];
  bullets: string[];
  placeholder?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Open Source Contributor",
    org: "GirlScript Summer of Code (GSSoC '26)",
    period: "May 2026 – Present",
    location: "Remote",
    stack: ["React.js", "Node.js", "Docker", "CI/CD"],
    bullets: [
      "Fixed database startup timing in CodeGraphContext (3.5k+ stars) using Docker healthchecks for FalkorDB and Neo4j.",
      "Improved UI accessibility, reducing interface bugs by 25% and improving component reusability codebase-wide.",
    ],
  },
  {
    role: "Technical Executive & Lead Developer",
    org: "Blitzschlag '26",
    period: "Nov 2025 – Feb 2026",
    location: "Jaipur, India",
    stack: ["React.js", "Node.js", "Firebase", "React Native"],
    bullets: [
      "Led full-stack development of an event platform serving 3,000+ concurrent users.",
      "Engineered a cross-platform React Native app with shared state and offline sync.",
    ],
  },
  {
    role: "National Finalist",
    org: "Smart India Hackathon (SIH 2025) — DRDO problem statement",
    period: "Dec 2025",
    location: "Remote",
    stack: ["Python", "Gemini API"],
    bullets: [
      "Built Dhwani, an acoustic classification system spanning 10+ sound domains.",
      "Integrated the Gemini API for contextual querying over real-time streaming audio.",
    ],
  },
  {
    role: "Add your role here",
    org: "Company / Organization",
    period: "Month Year – Month Year",
    location: "Location",
    stack: ["Stack", "Goes", "Here"],
    bullets: [
      "Placeholder bullet — replace with a real responsibility or win.",
      "Placeholder bullet — quantify the impact if you can (%, time saved, users).",
    ],
    placeholder: true,
  },
  {
    role: "Add another role here",
    org: "Company / Organization",
    period: "Month Year – Month Year",
    location: "Location",
    stack: ["Stack", "Goes", "Here"],
    bullets: [
      "Placeholder bullet — replace with a real responsibility or win.",
      "Placeholder bullet — quantify the impact if you can (%, time saved, users).",
    ],
    placeholder: true,
  },
];

export const achievements = [
  {
    title: "Global Rank 676 — GSSoC '26",
    detail: "Top percentile globally among thousands of open-source contributors.",
  },
  {
    title: "National Finalist — SIH 2025",
    detail: "Ranked 6th nationally for a real-time acoustic inference architecture.",
  },
  {
    title: "Winner — TechXcell Sphinx '25",
    detail: "1st out of 50+ teams, delivering a full-stack solution under strict constraints.",
  },
  {
    title: "Runner-Up — Google Hackrux",
    detail: "Built a production-grade automation platform within a 36-hour sprint.",
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

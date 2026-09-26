// ---------------------------------------------------------------------------
// All editable content for the site lives in this file. Change text, links,
// and numbers here rather than hunting through components.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Aryan Mishra",
  role: "Full Stack Developer",
  location: "Jaipur, India",
  tagline:
    "I like building the parts of a product nobody notices until they break — a ledger that can't quietly lose a rupee, a map that gets 300 acres of campus into your pocket, a fest platform that didn't blink when 3,000 people hit \"register\" at once.",
  summary:
    "Third-year B.Tech student at MNIT Jaipur, technically majoring in Metallurgical Engineering, unofficially majoring in whatever full-stack problem I've gotten stuck on that week. Most of what's below started as \"can I actually build this\" rather than a plan — I tend to learn a stack by shipping something real in it, not by finishing a course first.",
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
  detail: "CGPA 8.19 · picked up the CS minor because I kept building side projects anyway",
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
      "I wanted to know if I could build something a bank might actually trust with money — not a CRUD app with a balance field, but a real double-entry ledger, the same accounting principle banks have used for centuries. Turns out most of the hard part isn't the transfer itself, it's everything that can go wrong around it.",
    bullets: [
      "The scary case isn't one transfer, it's two hitting the same account at once. MongoDB's managed transactions make sure a transfer fully succeeds or fully fails — never something in between.",
      "Once money moves, that record shouldn't ever change, only get added to. I locked the ledger schema so updates and deletes are rejected outright, not just discouraged.",
      "My early tests kept \"double-charging\" a fake user, and it took a while to realize it was retries — a slow request getting resent and processed twice. Idempotency keys on every transfer fixed it for good.",
      "Redis rate limiting, JWT auth with an actual token blacklist for logout, and a slow afternoon going through the OWASP list until I stopped finding holes.",
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
      "I got lost on campus more times than I'd like to admit as a first-year — MNIT is 300+ acres and none of it is labeled the way you'd expect. So a couple of us built the app we actually needed: search a professor's name, a lab code, or \"nearest water cooler,\" and get routed straight there.",
    bullets: [
      "Wrote the routing myself with Dijkstra's algorithm over a Leaflet map — shortest-path on a real, messy campus layout is a lot fussier than the textbook version once buildings and one-way paths get involved.",
      "Turf.js handles the geospatial search, so \"nearest\" actually accounts for walking distance instead of a straight line through a building.",
      "The features that actually get used are the small ones: a live speed readout, a focus-zoom for the dense hostel blocks, and yes, the hard-to-find spots people genuinely search for.",
      "Still actively adding to it — leopard-sighting alerts and a canteen order integration are next on the list, half as a joke, half because people keep asking.",
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
      "This started as a favor — a friend launching a fragrance brand needed a storefront — and turned into the most performance-obsessed thing I've built. Nobody sticks around on a perfume site that loads like a spreadsheet, so most of the actual engineering happened in places a customer never sees.",
    bullets: [
      "Product queries were creeping toward 7 seconds under load before I put Upstash in front of the expensive ones — got that down to 200-400ms, which is the difference between someone waiting and someone leaving.",
      "Cut the initial bundle by 90% with code splitting and lazy loading, since the whole point of the site is showing photography beautifully and fast, not shipping JavaScript nobody asked for.",
      "Chased the Lighthouse SEO score up to 100/100 — a small, unglamorous thing, but it's the difference between the brand showing up in search and not existing at all.",
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
      "Blitzschlag is MNIT's biggest cultural fest, and I was the person responsible for the platform not falling over the moment a few thousand students all try to book passes in the same ten minutes. It's the closest I've come to a real production incident — more than once.",
    bullets: [
      "Our first load test made it painfully obvious the naive setup wouldn't survive registration morning, so I wrote custom middleware to spread traffic across instances instead of letting one server take the hit.",
      "Built the companion app in React Native with offline sync, because the fest grounds have patchy signal and nobody should lose their schedule because of it — engagement went up 40% once that shipped.",
      "Led the technical team end to end: architecture calls, code review, and being the person people messaged at 1am when something on the ground broke.",
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
      "For Smart India Hackathon we picked the DRDO problem statement most teams were avoiding, because the acoustic classification part looked genuinely hard. We built a classifier across 10+ sound domains that cut manual audio review by 70%, then layered the Gemini API on top so you could actually ask it questions about what it was hearing in real time. Finished 6th nationally, which given the field, still surprises me a little.",
    stack: ["Python", "Gemini API", "Signal Processing"],
  },
  {
    name: "Metallurgical Property Prediction Pipeline",
    period: "Jan 2026 – Present",
    description:
      "This is where my actual major shows up. I trained tree-based models to predict how a magnesium alloy behaves — yield strength, tensile strength, elongation — from its composition, instead of waiting on a physical mechanical test every time. R² up to 0.85 on literature data isn't perfect, but it's a genuinely useful first pass before anyone touches a lab.",
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
      "Picked up a bug where CodeGraphContext's containers raced on startup — FalkorDB or Neo4j just wouldn't be ready yet, so the service crashed. Docker healthchecks fixed the sequencing; small fix, but it stopped a lot of other contributors from hitting the same wall.",
      "Went through the UI fixing accessibility issues I kept noticing while actually using the project, which knocked out about a quarter of the interface bugs and made the components easier for the next contributor to reuse.",
    ],
  },
  {
    role: "Technical Executive & Lead Developer",
    org: "Blitzschlag '26",
    period: "Nov 2025 – Feb 2026",
    location: "Jaipur, India",
    stack: ["React.js", "Node.js", "Firebase", "React Native"],
    bullets: [
      "Ran the technical side of a fest platform that needed to hold up for 3,000+ concurrent users on registration day — my first time being the one on call if it actually broke.",
      "Shipped the cross-platform companion app myself, offline sync included, since a good chunk of the fest happens in spots with terrible signal.",
    ],
  },
  {
    role: "National Finalist",
    org: "Smart India Hackathon (SIH 2025) — DRDO problem statement",
    period: "Dec 2025",
    location: "Remote",
    stack: ["Python", "Gemini API"],
    bullets: [
      "Built Dhwani, an acoustic classification system spanning 10+ sound domains, in the kind of hackathon timeline that doesn't leave room for overthinking the architecture.",
      "Added the Gemini API on top so the system could answer plain-language questions about streaming audio instead of just spitting out labels.",
    ],
  },
  {
    role: "Add your role here",
    org: "Company / Organization",
    period: "Month Year – Month Year",
    location: "Location",
    stack: ["Stack", "Goes", "Here"],
    bullets: [
      "Placeholder — swap this for what you actually did day to day, in your own words.",
      "Placeholder — if there's a number that shows impact, use it here.",
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
      "Placeholder — swap this for what you actually did day to day, in your own words.",
      "Placeholder — if there's a number that shows impact, use it here.",
    ],
    placeholder: true,
  },
];

export const achievements = [
  {
    title: "Global Rank 676 — GSSoC '26",
    detail: "Out of thousands of contributors worldwide — GSSoC isn't a small event, so this one actually surprised me.",
  },
  {
    title: "National Finalist — SIH 2025",
    detail: "6th nationally for Dhwani, our acoustic classification system, against teams from across the country.",
  },
  {
    title: "Winner — TechXcell Sphinx '25",
    detail: "First out of 50+ teams, built under the kind of time pressure where you stop overthinking the code and just ship.",
  },
  {
    title: "Runner-Up — Google Hackrux",
    detail: "36 hours, one automation platform, and not nearly enough sleep.",
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

import type { NavItem } from "../../components/organisms/SiteHeader";
import type { HeroSectionProps } from "../../components/organisms/HeroSection";
import type { WorkSectionProps } from "../../components/organisms/WorkSection";
import type { CapabilitiesSectionProps } from "../../components/organisms/CapabilitiesSection";
import type { ExperienceSectionProps } from "../../components/organisms/ExperienceSection";
import type { ContactSectionProps } from "../../components/organisms/ContactSection";

// ---------------------------------------------------------------------------
// Assets
// ---------------------------------------------------------------------------
export const assets = {
  logoDark: "/images/nate-logo-dark_b3f43e9f.png",
  hero: "/images/portfolio-hero-image.jpg",
  quest: "/images/quest-orthodontics-user-supplied_96c0183e.png",
  multiLocation: "/images/myorthodontist-user-supplied_8775b137.png",
  kirkco: "/images/kirkco-site-screen_3b2f1656.webp",
  process: "/images/IMG_7464.jpg",
  resume: "/images/Nate_Martinez_Resume.pdf",
};

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------
export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const contactHref = "mailto:nrd.martinezz@gmail.com";

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export const hero: HeroSectionProps = {
  eyebrow: "Web designer · Full-stack developer",
  headlineMain: "Clear interfaces.",
  headlineHighlight: "Capable systems.",
  intro:
    "I design and build websites for teams with a lot to explain. I can take a project from rough ideas and wireframes through the frontend, backend, hosting, and launch.",
  primaryCta: { label: "View selected work", href: "#work" },
  secondaryCta: { label: "Résumé", href: assets.resume },
  artSrc: assets.hero,
  artAlt: "Abstract Bauhaus-inspired artwork derived from the Nate Martinez brand mark",
  artNoteLabel: "Design + code",
  artNoteValue: "One person, start to finish",
  footerLine1: "Independent / Contract",
  footerLine2: "Orthodontics · Chiropractic · Manufacturing",
};

// ---------------------------------------------------------------------------
// Work
// ---------------------------------------------------------------------------
export const work: WorkSectionProps = {
  tag: { index: "01", label: "Selected work / 2026 folio" },
  heading: "I design the site. Then I build it.",
  intro:
    "No two projects arrive in the same shape. Some need the content untangled; others need a visual system or a rebuild. I work out what belongs where, then design and code the site around it.",
  featured: [
    {
      number: "01",
      title: "Quest Orthodontics",
      category: "Healthcare · Practice website and patient path",
      description:
        "Quest was opening a new practice, so the site had to do more than show a logo and phone number. It needed to introduce the doctors, explain the technology, and make booking a consultation obvious.",
      outcome: "New-practice positioning · Consultation path",
      image: assets.quest,
      domain: "questorthodontics.com",
      url: "https://questorthodontics.com",
      imageAlt:
        "Quest Orthodontics homepage showing its team-focused hero and consultation-first experience",
      tone: "yellow",
    },
    {
      number: "02",
      title: "MyOrthodontist",
      category: "Healthcare · Multi-location practice website",
      description:
        "MyOrthodontist serves patients across North Carolina, so location had to be easy to sort out. I organized the site around finding an office first, then kept the practice information consistent from one location page to the next.",
      outcome: "Office finder · Consistent location pages",
      image: assets.multiLocation,
      domain: "myorthodontistnc.com",
      url: "https://myorthodontistnc.com",
      imageAlt:
        "MyOrthodontist homepage showing its statewide brand, clinic environment, and patient navigation",
      tone: "blue",
    },
    {
      number: "03",
      title: "Kirkco Corporation",
      category: "Industrial · Product information for technical buyers",
      description:
        "Kirkco's buyers already understand the equipment. The problem was getting them to the right product details faster, so I rebuilt the hierarchy around the way engineers and purchasing teams actually look for information.",
      outcome: "Product hierarchy · Engineer-focused content",
      image: assets.kirkco,
      domain: "kirkcocorp.com",
      url: "https://kirkcocorp.com",
      imageAlt:
        "Kirkco Corporation homepage showing precision metering equipment and its engineer-focused call to action",
      tone: "red",
    },
  ],
  additional: [
    {
      number: "04",
      title: "Smile Worthy Orthodontics",
      meta: "Approachable orthodontic practice site",
      url: "https://smileworthyortho.com",
    },
    {
      number: "05",
      title: "Ehrmantrout Orthodontics",
      meta: "A long-standing practice, updated online",
      url: "https://ehrmantroutorthodontics.com",
    },
    {
      number: "06",
      title: "Bright Life Chiropractic",
      meta: "Trust-first chiropractic website",
      url: "https://brightlifechiropractic.com",
    },
  ],
};

// ---------------------------------------------------------------------------
// Capabilities
// ---------------------------------------------------------------------------
export const capabilities: CapabilitiesSectionProps = {
  tag: { index: "02", label: "Capabilities / design and development" },
  artVariant: "process",
  artLabel: "Abstract layered artwork representing the stages of a web project",
  artCaption: "Same person / each stage",
  heading: "I stay involved from the first call through launch.",
  intro:
    "There isn't a handoff between \"design Nate\" and \"developer Nate.\" If a layout will be awkward to build—or the code starts drifting from the original idea—I can deal with it before it becomes someone else's problem.",
  items: [
    {
      number: "A",
      title: "Strategy & UX",
      body: "I map the pages, user flows, and responsive behavior before the build gets crowded. Wireframes give the client and the development work the same plan to follow.",
      tools: "Figma · Adobe XD · UX/UI principles",
    },
    {
      number: "B",
      title: "Interface Design",
      body: "I don't start with a template and swap in colors. The interface comes out of the brand, the content, and whatever a visitor needs to do next.",
      tools: "Photoshop · Illustrator · Responsive design",
    },
    {
      number: "C",
      title: "Full-stack Build",
      body: "Once the mockups are approved, I don't disappear. I handle the frontend, server-side work, integrations, hosting, testing, and launch, so the build doesn't lose the idea that sold the design.",
      tools: "React · Next.js · JavaScript · Node.js · REST APIs",
    },
  ],
};

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const experience: ExperienceSectionProps = {
  tag: { index: "03", label: "Experience / working practice" },
  register: "NM / Practice record",
  heading: "First, I figure out what the client is actually asking for.",
  intro:
    "Most clients don't arrive with a neat brief. They have goals, constraints, and a few things that have already gone sideways. We sort through it together, then I stay involved through design, development, launch, and the fixes that only show up after launch.",
  roles: [
    { company: "Primus Cable / Fiber Savvy", period: "2021-2022", title: "Marketing Associate" },
    { company: "New Patient Group", period: "2023-Present", title: "Web Designer & Wordpress Developer" },
    { company: "Independent / Contract", period: "2022-Present", title: "Freelance Web Designer & Full-stack Developer" },
  ],
  bodyText:
    "My day-to-day work includes talking directly with clients, coordinating with other contributors, improving site performance, managing hosting, and shipping projects for orthodontic, chiropractic, and industrial companies.",
  education: [
    {
      type: "Education",
      credential: "B.S. Web Design & Development coursework",
      detail: "Neumont University · Salt Lake City, UT · 2016–2019",
    },
    {
      type: "Professional certificate",
      credential: "Google User Experience (UX) Design",
      detail: "Completed through Coursera",
      variant: "credential",
    },
  ],
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
export const contact: ContactSectionProps = {
  kicker: "Got a website that is hard to explain—or harder to use?",
  heading: "Send me the messy version.",
  body: "You don't need to have the brief figured out. Tell me what you're trying to make, what's not working, and what a better result would look like.",
  email: "nrd.martinezz@gmail.com",
  links: [
    { href: "tel:+19493352555", icon: "phone", label: "Call", value: "(949) 335-2555" },
    {
      href: "https://www.linkedin.com/in/nathanael-delgado/",
      icon: "external",
      label: "LinkedIn",
      value: "Connect",
      external: true,
    },
    { href: assets.resume, icon: "download", label: "Résumé", value: "Download PDF", external: true },
  ],
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export const footer = {
  logoSrc: assets.logoDark,
  tagline: "Design, code, launch. Same person throughout.",
  copyrightName: "Nate Martinez",
};

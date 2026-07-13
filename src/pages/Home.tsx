/*
 * Design philosophy: Kinetic Bauhaus Blueprint.
 * This page uses asymmetric editorial composition, strict typographic hierarchy,
 * sparse signal colors, square geometry, and motion that feels direct and mechanical.
 */
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  ExternalLink,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

const assets = {
  logoDark: "/images/nate-logo-dark_b3f43e9f.png",
  hero: "/images/nate-hero-kinetic-architecture_cded2dfa.webp",
  quest: "/images/quest-orthodontics-user-supplied_96c0183e.png",
  multiLocation: "/images/myorthodontist-user-supplied_8775b137.png",
  kirkco: "/images/kirkco-site-screen_3b2f1656.webp",
  process: "/images/process-full-stack-spectrum_1d6a0276.png",
  resume: "/images/Nate_Martinez_Resume.pdf",
};

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const featuredProjects = [
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
    imageAlt: "Quest Orthodontics homepage showing its team-focused hero and consultation-first experience",
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
    imageAlt: "MyOrthodontist homepage showing its statewide brand, clinic environment, and patient navigation",
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
    imageAlt: "Kirkco Corporation homepage showing precision metering equipment and its engineer-focused call to action",
    tone: "red",
  },
];

const additionalProjects = [
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
];

const capabilities = [
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
];

function SignalStack({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <span className={horizontal ? "signal-stack signal-stack--horizontal" : "signal-stack"} aria-hidden="true">
      <i className="signal signal--yellow" />
      <i className="signal signal--red" />
      <i className="signal signal--blue" />
    </span>
  );
}

function Wordmark() {
  return (
    <a className="wordmark" href="#top" aria-label="Nate Martinez, back to top">
      <img src={assets.logoDark} alt="Nate Martinez monogram" />
      <span className="wordmark__type">
        <strong>NATE</strong>
        <strong>MARTINEZ</strong>
      </span>
    </a>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span className="section-label__rule" />
      <p>{children}</p>
    </div>
  );
}

function SiteScreenshot({ src, alt, domain }: { src: string; alt: string; domain: string }) {
  return (
    <div className="site-shot">
      <div className="site-shot__chrome" aria-hidden="true">
        <span className="site-shot__dots"><i /><i /><i /></span>
        <span className="site-shot__address">{domain}</span>
        <span className="site-shot__status">Live</span>
      </div>
      <div className="site-shot__viewport">
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <span className="site-shot__caption" aria-hidden="true">Homepage / live build</span>
    </div>
  );
}

function VisualArtwork({ variant, label }: { variant: string; label: string }) {
  return (
    <div className={`visual-art visual-art--${variant}`} role="img" aria-label={label}>
      <div className="visual-art__grid" aria-hidden="true" />
      <div className="visual-art__plane visual-art__plane--one" aria-hidden="true" />
      <div className="visual-art__plane visual-art__plane--two" aria-hidden="true" />
      <div className="visual-art__arc" aria-hidden="true" />
      <div className="visual-art__disc" aria-hidden="true" />
      <div className="visual-art__line" aria-hidden="true" />
      <SignalStack />
      <span className="visual-art__stamp" aria-hidden="true">NM / SYS</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.58, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
  };

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <Wordmark />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="mailto:nrd.martinezz@gmail.com">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-nav__label">
              <span>Studio index</span>
              <SignalStack horizontal />
            </div>
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
                <ArrowDownRight aria-hidden="true" />
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      <main>
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero__grid">
            <motion.div className="hero__copy" {...reveal}>
              <div className="eyebrow">
                <SignalStack horizontal />
                <span>Web designer · Full-stack developer</span>
              </div>
              <h1 id="hero-title">
                Clear interfaces.
                <br />
                <span>Capable systems.</span>
              </h1>
              <p className="hero__intro">
                I design and build websites for teams with a lot to explain. I can take a project from rough ideas and wireframes through the frontend, backend, hosting, and launch.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#work">
                  View selected work <ArrowDownRight size={18} aria-hidden="true" />
                </a>
                <a className="text-link" href={assets.resume} target="_blank" rel="noreferrer">
                  Résumé <Download size={17} aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero__art"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
            >
              <img src={assets.hero} alt="Abstract Bauhaus-inspired artwork derived from the Nate Martinez brand mark" />
              <div className="hero__art-note">
                <span>Design + code</span>
                <strong>One person, start to finish</strong>
              </div>
            </motion.div>
          </div>

          <div className="hero__footer">
            <p>Independent / Contract</p>
            <p>Orthodontics · Chiropractic · Manufacturing</p>
            <a href="#work">
              Scroll to work <ArrowDownRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="work" className="work-section section-pad" aria-labelledby="work-title">
          <SectionLabel index="01">Selected work / 2026 folio</SectionLabel>
          <motion.div className="section-intro" {...reveal}>
            <h2 id="work-title">I design the site. Then I build it.</h2>
            <p>
              No two projects arrive in the same shape. Some need the content untangled; others need a visual system or a rebuild. I work out what belongs where, then design and code the site around it.
            </p>
          </motion.div>

          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <motion.article
                className={`project project--${project.tone} ${index % 2 === 1 ? "project--reverse" : ""}`}
                key={project.title}
                {...reveal}
              >
                <a className="project__image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                  <SiteScreenshot src={project.image} alt={project.imageAlt} domain={project.domain} />
                  <span className="project__screen-index" aria-hidden="true">{project.number}</span>
                  <span className="project__visit">
                    Visit live site <ExternalLink size={17} aria-hidden="true" />
                  </span>
                </a>
                <div className="project__copy">
                  <div className="project__meta">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project__outcome">
                    <span>Focus</span>
                    <strong>{project.outcome}</strong>
                  </div>
                  <a className="project__link" href={project.url} target="_blank" rel="noreferrer">
                    Open project <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="project-index" aria-label="Additional projects">
            <div className="project-index__heading">
              <span>Also in the folio</span>
              <SignalStack horizontal />
            </div>
            {additionalProjects.map((project) => (
              <a key={project.title} href={project.url} target="_blank" rel="noreferrer">
                <span>{project.number}</span>
                <strong>{project.title}</strong>
                <small>{project.meta}</small>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section id="capabilities" className="capabilities-section section-pad" aria-labelledby="capabilities-title">
          <SectionLabel index="02">Capabilities / design and development</SectionLabel>
          <div className="capabilities-layout">
            <motion.div className="capabilities-art" {...reveal}>
              <VisualArtwork
                variant="process"
                label="Abstract layered artwork representing the stages of a web project"
              />
              <span>Same person / each stage</span>
            </motion.div>

            <div className="capabilities-copy">
              <motion.div className="section-intro section-intro--stacked" {...reveal}>
                <h2 id="capabilities-title">I stay involved from the first call through launch.</h2>
                <p>
                  There isn't a handoff between “design Nate” and “developer Nate.” If a layout will be awkward to build—or the code starts drifting from the original idea—I can deal with it before it becomes someone else's problem.
                </p>
              </motion.div>

              <div className="capability-list">
                {capabilities.map((capability) => (
                  <motion.article key={capability.number} {...reveal}>
                    <span>{capability.number}</span>
                    <div>
                      <h3>{capability.title}</h3>
                      <p>{capability.body}</p>
                      <small>{capability.tools}</small>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section section-pad" aria-labelledby="experience-title">
          <div className="experience-register" aria-hidden="true">
            <span>NM / Practice record</span>
            <SignalStack horizontal />
          </div>
          <SectionLabel index="03">Experience / working practice</SectionLabel>
          <div className="experience-layout">
            <motion.div className="experience-statement" {...reveal}>
              <h2 id="experience-title">First, I figure out what the client is actually asking for.</h2>
              <p>
                Most clients don't arrive with a neat brief. They have goals, constraints, and a few things that have already gone sideways. We sort through it together, then I stay involved through design, development, launch, and the fixes that only show up after launch.
              </p>
            </motion.div>

            <motion.div className="experience-record" {...reveal}>
              <div className="experience-record__top">
                <div>
                  <span>Independent / Contract</span>
                  <h3>Freelance Web Designer & Full-stack Developer</h3>
                </div>
                <strong>Present</strong>
              </div>
              <div className="experience-record__body">
                <p>
                  My day-to-day work includes talking directly with clients, coordinating with other contributors, improving site performance, managing hosting, and shipping projects for orthodontic, chiropractic, and industrial companies.
                </p>
                <div className="experience-record__education">
                  <div className="education-entry">
                    <span>Education</span>
                    <strong>B.S. Web Design & Development coursework</strong>
                    <small>Neumont University · Salt Lake City, UT · 2016–2019</small>
                  </div>
                  <div className="education-entry education-entry--credential">
                    <span>Professional certificate</span>
                    <strong>Google User Experience (UX) Design</strong>
                    <small>Completed through Coursera</small>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
          <div className="contact-rail" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <motion.div className="contact-content" {...reveal}>
            <p className="contact-kicker">Got a website that is hard to explain—or harder to use?</p>
            <h2 id="contact-title">Send me the messy version.</h2>
            <p>
              You don't need to have the brief figured out. Tell me what you're trying to make, what's not working, and what a better result would look like.
            </p>
            <a className="contact-email" href="mailto:nrd.martinezz@gmail.com">
              nrd.martinezz@gmail.com <ArrowUpRight aria-hidden="true" />
            </a>
          </motion.div>

          <div className="contact-links">
            <a href="tel:+19493352555">
              <Phone size={17} aria-hidden="true" />
              <span>Call</span>
              <strong>(949) 335-2555</strong>
            </a>
            <a href="https://www.linkedin.com/in/nathanael-delgado/" target="_blank" rel="noreferrer">
              <ExternalLink size={17} aria-hidden="true" />
              <span>LinkedIn</span>
              <strong>Connect</strong>
            </a>
            <a href={assets.resume} target="_blank" rel="noreferrer">
              <Download size={17} aria-hidden="true" />
              <span>Résumé</span>
              <strong>Download PDF</strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Wordmark />
        <p>Design, code, launch. Same person throughout.</p>
        <div>
          <SignalStack horizontal />
          <span>© {new Date().getFullYear()} Nate Martinez</span>
        </div>
      </footer>
    </div>
  );
}

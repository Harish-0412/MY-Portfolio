import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Pause,
  Play,
  Plus,
  X,
} from "lucide-react";
import ProjectArtwork from "./components/ProjectArtwork";
import InteractiveGrid from "./components/InteractiveGrid";
import motionReel from "../gxybd2yBLBRv3ATlrNF36QPi9k4.mp4";
import motionReelPoster from "./assets/reel-poster.jpg";
import {
  achievements,
  capabilities,
  credentials,
  experience,
  identity,
  projects,
  stats,
  type Credential,
  type Project,
} from "./data/portfolio";
import "./App.css";

const ease = [0.22, 1, 0.36, 1] as const;
const navigation = [
  { label: "/About me", href: "#about", number: "01" },
  { label: "/Work", href: "#work", number: "02" },
  { label: "/Expertise", href: "#expertise", number: "03" },
];

function RollingText({ children }: { children: ReactNode }) {
  return (
    <span className="rolling-text">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  children,
  number,
}: {
  children: string;
  number: string;
}) {
  const reduced = useReducedMotion();
  return (
    <div className="section-title">
      <span className="section-number">/{number}</span>
      <h2 aria-label={children}>
        {children.split(" ").map((word, index) => (
          <span className="title-word" key={index}>
            <motion.span
              aria-hidden="true"
              initial={reduced ? false : { y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: index * 0.07, ease }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  );
}

function LocalTime() {
  const format = () =>
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const interval = window.setInterval(() => setTime(format()), 30000);
    return () => window.clearInterval(interval);
  }, []);
  return (
    <span className="local-time">
      <span>/Local time</span>
      <time>{time}</time>
      <span>(IST)</span>
    </span>
  );
}

function MotionReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [manualPlayback, setManualPlayback] = useState<boolean | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const syncPlayback = () => {
      if (
        visible &&
        document.visibilityState === "visible" &&
        (manualPlayback ?? !reduced)
      ) {
        void video.play().catch(() => setPlaying(false));
      } else {
        video.pause();
      }
    };
    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [visible, reduced, manualPlayback]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setManualPlayback(true);
      void video.play().catch(() => setPlaying(false));
    } else {
      setManualPlayback(false);
      video.pause();
    }
  }

  return (
    <section className="reel-section" aria-label="Motion reel">
      <motion.div
        className="reel-frame"
        initial={reduced ? false : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 1.1, ease }}
      >
        <video
          ref={videoRef}
          src={motionReel}
          poster={motionReelPoster}
          width={1080}
          height={1350}
          autoPlay={!reduced}
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Looping black-and-white typography animation"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <button
          className="reel-control"
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pause motion reel" : "Play motion reel"}
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
          <span>{playing ? "Pause" : "Play"}</span>
        </button>
      </motion.div>
    </section>
  );
}

function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 35 });
  const springY = useSpring(y, { stiffness: 450, damping: 35 });
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setHovered(
        Boolean((event.target as Element).closest("a, button, summary")),
      );
    };
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);
  return (
    <motion.div
      aria-hidden="true"
      className={`cursor ${hovered ? "cursor-active" : ""}`}
      style={{ left: springX, top: springY }}
    />
  );
}

type ActiveDetail =
  | { kind: "project"; project: Project }
  | { kind: "certification"; credential: Credential };

function detailFromHash(): ActiveDetail | undefined {
  const project = projects.find(
    (item) => window.location.hash === `#project/${item.slug}`,
  );
  if (project) return { kind: "project", project };
  const credential = credentials.find(
    (item) => window.location.hash === `#certification/${item.id}`,
  );
  if (credential) return { kind: "certification", credential };
  return undefined;
}

function DetailDialog({
  detail,
  onClose,
}: {
  detail: ActiveDetail | undefined;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const dialog = ref.current;
    if (!detail || !dialog) return;
    dialog.showModal();
    dialog.scrollTop = 0;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [detail]);
  return (
    <dialog
      className={`project-dialog ${detail?.kind === "certification" ? "credential-dialog" : ""}`}
      ref={ref}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      aria-labelledby="detail-dialog-title"
    >
      {detail && (
        <div
          className={`project-detail ${detail.kind === "certification" ? "credential-detail" : ""}`}
        >
          <div className="detail-nav">
            <span>
              HARISH K /{" "}
              {detail.kind === "project" ? "SELECTED WORK" : "CREDENTIALS"}
            </span>
            <button onClick={onClose} className="close-detail">
              <RollingText>Back to portfolio</RollingText>
              <X size={20} />
            </button>
          </div>
          <motion.div
            key={
              detail.kind === "project"
                ? detail.project.slug
                : detail.credential.id
            }
            initial={reduced ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            {detail.kind === "project" ? (
              <ProjectContent project={detail.project} />
            ) : (
              <CredentialContent credential={detail.credential} />
            )}
          </motion.div>
        </div>
      )}
    </dialog>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      <div className="project-detail-meta">
        <p className="eyebrow">{project.category}</p>
        {project.status && (
          <span className="project-status">{project.status}</span>
        )}
      </div>
      <h2 id="detail-dialog-title">{project.title}</h2>
      <div className="detail-art">
        <ProjectArtwork slug={project.slug} />
      </div>
      <div className="detail-information">
        <div>
          <span className="eyebrow">/The project</span>
          <h3>{project.fullTitle}</h3>
          <p>{project.longDescription}</p>
          {(project.liveUrl || project.repositoryUrl) && (
            <div className="project-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-link"
                >
                  <RollingText>Explore live project</RollingText>
                  <ArrowUpRight size={18} />
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-link"
                >
                  <RollingText>View source on GitHub</RollingText>
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          )}
        </div>
        <div>
          <span className="eyebrow">/Core ideas</span>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="detail-ending">
        <span>Have something in mind?</span>
        <a href={`mailto:${identity.email}`}>
          <RollingText>Let's build it together</RollingText>
          <ArrowUpRight size={20} />
        </a>
      </div>
    </>
  );
}

function CredentialContent({ credential }: { credential: Credential }) {
  return (
    <>
      <p className="eyebrow">{credential.provider} / Certification</p>
      <h2 id="detail-dialog-title">{credential.title}</h2>
      <div className="credential-detail-grid">
        <div className="credential-proof">
          <figure className="certificate-preview">
            <img
              src={credential.previewUrl}
              alt={`${credential.title} certificate awarded to ${identity.name}`}
              decoding="async"
            />
            <figcaption>The certificate / {credential.provider}</figcaption>
          </figure>
          <div className="credential-document-actions">
            <a
              className="outline-link"
              href={credential.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RollingText>Open original certificate</RollingText>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <dl className="credential-facts">
            <div>
              <dt>Issued by</dt>
              <dd>{credential.provider}</dd>
            </div>
            {credential.issuedOn && (
              <div>
                <dt>Earned on</dt>
                <dd>{credential.issuedOn}</dd>
              </div>
            )}
            {credential.expiresOn && (
              <div>
                <dt>Valid until</dt>
                <dd>{credential.expiresOn}</dd>
              </div>
            )}
            {credential.credentialId && (
              <div className="credential-fact-id">
                <dt>Credential ID</dt>
                <dd>{credential.credentialId}</dd>
              </div>
            )}
          </dl>
        </div>
        <div className="credential-explanation">
          <span className="eyebrow">/The credential</span>
          <h3>What it demonstrates</h3>
          <p className="credential-description">{credential.description}</p>
          <div
            className="tags credential-skills"
            aria-label="Areas of knowledge"
          >
            {credential.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="credential-concepts-heading">
            <span className="eyebrow">/Knowledge into practice</span>
            <h3>Skills &amp; concepts</h3>
          </div>
          <ol className="credential-concepts">
            {credential.concepts.map((concept, index) => (
              <li key={concept.title}>
                <span className="concept-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{concept.title}</h4>
                  <p>{concept.description}</p>
                </div>
              </li>
            ))}
          </ol>
          {credential.sourceUrl && (
            <a
              className="credential-course-link"
              href={credential.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RollingText>Explore the official curriculum</RollingText>
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>
      <div className="detail-ending">
        <span>Always learning. Always building.</span>
        <a href="#work">
          <RollingText>See selected work</RollingText>
          <ArrowUpRight size={20} />
        </a>
      </div>
    </>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [activeDetail, setActiveDetail] = useState(detailFromHash);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const copyTimer = useRef<number | undefined>(undefined);
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
  });
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, reduced ? 0 : 75]);

  useEffect(() => {
    const sync = () =>
      setActiveDetail((current) => {
        const next = detailFromHash();
        if (
          current?.kind === "project" &&
          next?.kind === "project" &&
          current.project === next.project
        )
          return current;
        if (
          current?.kind === "certification" &&
          next?.kind === "certification" &&
          current.credential === next.credential
        )
          return current;
        return next;
      });
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
      window.clearTimeout(copyTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const links = Array.from(
      menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") || [],
    );
    const controls = [menuButtonRef.current, ...links].filter(
      (control): control is HTMLButtonElement | HTMLAnchorElement =>
        Boolean(control),
    );
    const focusFrame = window.requestAnimationFrame(() => links[0]?.focus());
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab") return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", keyboard);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", keyboard);
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 810px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function openProject(project: Project) {
    window.history.pushState(
      { portfolioProject: true },
      "",
      `#project/${project.slug}`,
    );
    setActiveDetail({ kind: "project", project });
  }

  function openCredential(credential: Credential) {
    window.history.pushState(
      { portfolioCertification: true },
      "",
      `#certification/${credential.id}`,
    );
    setActiveDetail({ kind: "certification", credential });
  }

  function closeDetail() {
    if (
      window.history.state?.portfolioProject ||
      window.history.state?.portfolioCertification
    )
      window.history.back();
    else {
      const section =
        activeDetail?.kind === "certification" ? "recognition" : "work";
      window.history.replaceState(null, "", `#${section}`);
      window.requestAnimationFrame(() =>
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" }),
      );
    }
    setActiveDetail(undefined);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setCopyFailed(false);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyFailed(true);
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Cursor />
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress }}
        aria-hidden="true"
      />
      <motion.header
        className="site-header"
        initial={reduced ? false : { y: -86 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease }}
      >
        <a
          className="wordmark"
          href="#home"
          aria-label="Harish K, back to home"
        >
          <RollingText>
            HARISH K<span className="brand-period">.</span>
          </RollingText>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.number}>
              <RollingText>{item.label}</RollingText>
              <sup>{item.number}</sup>
            </a>
          ))}
        </nav>
        <a className="outline-link header-contact" href="#contact">
          <RollingText>Let's talk</RollingText>
          <ArrowUpRight size={18} />
        </a>
        <button
          ref={menuButtonRef}
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          <span />
          <span />
        </button>
      </motion.header>
      <nav
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {[
          ...navigation,
          { label: "/Contact", href: "#contact", number: "04" },
        ].map((item) => (
          <a
            key={item.number}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            <sup>{item.number}</sup>
            {item.label}
            <ArrowUpRight />
          </a>
        ))}
        <a className="mobile-email" href={`mailto:${identity.email}`}>
          {identity.email}
        </a>
      </nav>
      <main id="main" inert={menuOpen}>
        <section
          className="hero"
          id="home"
          ref={heroRef}
          aria-labelledby="hero-name"
        >
          <div className="hero-grid" aria-hidden="true">
            <InteractiveGrid />
          </div>
          <motion.div style={{ y: heroY }} className="hero-composition">
            <div className="hero-topline">
              <span>SOFTWARE ENGINEER & AI DEVELOPER</span>
              <span>PERSONAL PORTFOLIO / 2026</span>
            </div>
            <div className="hero-first-row">
              <h1 id="hero-name" aria-label="Harish K">
                <span className="name-mask">
                  <motion.span
                    aria-hidden="true"
                    initial={reduced ? false : { y: "112%", rotate: 8 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 1.2, ease }}
                  >
                    HARISH
                  </motion.span>
                </span>
                <span className="visually-hidden"> K</span>
              </h1>
              <motion.div
                className="hero-specialties"
                initial={reduced ? false : { opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease }}
              >
                <ul>
                  <li>FULL-STACK ENGINEERING</li>
                  <li>ARTIFICIAL INTELLIGENCE</li>
                  <li>RESEARCH & INNOVATION</li>
                </ul>
                <LocalTime />
              </motion.div>
            </div>
            <div className="hero-second-row">
              <motion.div
                className="hero-introduction"
                initial={reduced ? false : { opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease }}
              >
                <p>
                  I turn complex ideas into{" "}
                  <strong>intelligent products.</strong> Bringing thoughtful
                  engineering and <strong>AI</strong> together to build things
                  that matter.
                </p>
                <a className="text-link" href="#work">
                  <RollingText>Explore selected work</RollingText>
                  <ArrowDown size={18} />
                </a>
              </motion.div>
              <div className="hero-last-name" aria-hidden="true">
                <span className="name-mask">
                  <motion.span
                    initial={reduced ? false : { y: "112%", rotate: -8 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease }}
                  >
                    K<span className="name-dot">.</span>
                  </motion.span>
                </span>
              </div>
            </div>
            <motion.div
              className="hero-bottomline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <span>/Curiosity. Code. Craft.</span>
              <a href="#work" aria-label="Scroll to selected work">
                <span>SCROLL TO DISCOVER</span>
                <ArrowDown size={17} />
              </a>
            </motion.div>
          </motion.div>
        </section>
        <MotionReel />
        <section
          id="work"
          className="work-section section-shell"
          aria-label="Selected work"
        >
          <SectionTitle number="01">SELECTED WORKS</SectionTitle>
          <nav className="work-index" aria-label="Project index">
            {projects.map((project, index) => (
              <a href={`#${project.slug}`} key={project.slug}>
                <span className="index-number">0{index + 1}</span>
                <RollingText>{project.title}</RollingText>
              </a>
            ))}
          </nav>
          <div className="projects">
            {projects.map((project, index) => (
              <article
                id={project.slug}
                className="project-row"
                key={project.slug}
              >
                <Reveal className="project-summary">
                  <span className="eyebrow">
                    /0{index + 1} — {project.category}
                    {project.status ? ` · ${project.status}` : ""}
                  </span>
                  <h3>{project.description}</h3>
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    className="text-link project-read"
                    onClick={() => openProject(project)}
                  >
                    <RollingText>Explore project</RollingText>
                    <ArrowUpRight size={19} />
                  </button>
                </Reveal>
                <Reveal className="project-preview" delay={0.1}>
                  <button
                    className="project-card"
                    onClick={() => openProject(project)}
                    aria-label={`View ${project.title} project`}
                  >
                    <ProjectArtwork slug={project.slug} />
                    <span className="project-hover">
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight size={22} />
                    </span>
                  </button>
                  <div className="project-caption">
                    <h3>{project.title.toUpperCase()}</h3>
                    <span>0{index + 1} / 05</span>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
          <Reveal className="work-end">
            <span>Always making. Always learning.</span>
            <a
              className="text-link"
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RollingText>More experiments on GitHub</RollingText>
              <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </section>
        <section
          id="expertise"
          className="expertise-section section-shell"
          aria-label="Technical expertise"
        >
          <SectionTitle number="02">MY EXPERTISE</SectionTitle>
          <div className="section-label">/What I do</div>
          <div className="capabilities">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.id}>
                <div
                  className={`capability-row ${activeCapability === capability.id ? "expanded" : ""}`}
                >
                  <span className="capability-number">0{index + 1}</span>
                  <div className="capability-content">
                    <h3 className="capability-heading">
                      <button
                        className="capability-toggle"
                        aria-expanded={activeCapability === capability.id}
                        aria-controls={`capability-${capability.id}`}
                        onClick={() =>
                          setActiveCapability(
                            activeCapability === capability.id
                              ? null
                              : capability.id,
                          )
                        }
                      >
                        <span>{capability.title}</span>
                        <Plus size={23} />
                      </button>
                    </h3>
                    <p>{capability.description}</p>
                    <div
                      id={`capability-${capability.id}`}
                      className="capability-skills"
                      inert={activeCapability !== capability.id}
                    >
                      <div className="tags">
                        {capability.skills.map((skill) => (
                          <span key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="about-section section-shell"
          aria-label="About Harish"
        >
          <SectionTitle number="03">ABOUT HARISH</SectionTitle>
          <div className="section-label">/How I think</div>
          <Reveal>
            <p className="about-statement">
              Thoughtful engineering.
              <br />
              <span>Research-driven ideas.</span>
              <br />
              Products built with purpose.
            </p>
          </Reveal>
          <div className="about-layout">
            <Reveal className="portrait-wrap">
              <div className="portrait-grid" aria-hidden="true" />
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Harish K"
                width="433"
                height="577"
                loading="lazy"
              />
              <div className="portrait-caption">
                <span>HARISH K</span>
                <span>ENGINEER / BUILDER</span>
              </div>
            </Reveal>
            <Reveal className="about-copy" delay={0.15}>
              <span className="eyebrow">/A little about me</span>
              <h3>
                At the intersection of software, intelligence, and possibility.
              </h3>
              <p>{identity.bio}</p>
              <p>{identity.focus}</p>
              <p className="about-philosophy">{identity.philosophy}</p>
              <a href="#contact" className="outline-link">
                <RollingText>Let's build something</RollingText>
                <ArrowUpRight size={18} />
              </a>
            </Reveal>
          </div>
          <Reveal className="stats-strip">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </section>
        <section
          id="experience"
          className="research-section section-shell"
          aria-label="Research experience"
        >
          <div className="section-label">/Research & experience</div>
          <Reveal className="research-layout">
            <div>
              <span className="eyebrow">{experience.duration}</span>
              <h2>{experience.role}</h2>
            </div>
            <div>
              <h3>{experience.organization}</h3>
              <p>{experience.description}</p>
              <div className="tags">
                {experience.areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
        <section
          id="recognition"
          className="recognition-section section-shell"
          aria-label="Achievements and certifications"
        >
          <SectionTitle number="04">BEYOND THE CODE</SectionTitle>
          <div className="recognition-layout">
            <div>
              <div className="section-label">/Achievements</div>
              {achievements.map((achievement, index) => (
                <Reveal
                  className="achievement-row"
                  key={achievement.title}
                  delay={index * 0.03}
                >
                  <span className="achievement-index">0{index + 1}</span>
                  <div>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                  <span className="achievement-rank">{achievement.rank}</span>
                </Reveal>
              ))}
            </div>
            <div className="credentials" id="certifications">
              <div className="section-label">/Always learning</div>
              {credentials.map((credential, index) => (
                <Reveal key={credential.id} delay={index * 0.03}>
                  <button
                    className="credential-row"
                    onClick={() => openCredential(credential)}
                    aria-label={`View ${credential.title} certificate`}
                  >
                    <span className="credential-index">0{index + 1}</span>
                    <span>
                      <small>{credential.provider}</small>
                      <h3>{credential.title}</h3>
                    </span>
                    <ArrowUpRight size={21} />
                  </button>
                </Reveal>
              ))}
              <p className="credential-note">
                A foundation in AI, backed by continuous learning.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer
        inert={menuOpen}
        id="contact"
        className="contact-section section-shell"
      >
        <div className="footer-socials">
          <a href={identity.github} target="_blank" rel="noopener noreferrer">
            <RollingText>GITHUB</RollingText>
            <ArrowUpRight size={16} />
          </a>
          <a href={identity.linkedin} target="_blank" rel="noopener noreferrer">
            <RollingText>LINKEDIN</RollingText>
            <ArrowUpRight size={16} />
          </a>
          <a href={`mailto:${identity.email}`}>
            <RollingText>EMAIL</RollingText>
            <ArrowUpRight size={16} />
          </a>
          <a className="back-to-top" href="#home">
            <RollingText>Back to top</RollingText>
            <ArrowUp size={16} />
          </a>
        </div>
        <Reveal className="contact-layout">
          <div>
            <span className="eyebrow">/Have a good problem?</span>
            <h2>
              LET'S BUILD
              <br />
              SOMETHING
              <span className="footer-star" aria-hidden="true">
                *
              </span>
            </h2>
          </div>
          <div className="contact-copy">
            <p>
              A project, a research idea, or a conversation about what's next.
              I'd love to hear what you're thinking.
            </p>
            <div className="email-line">
              <a href={`mailto:${identity.email}`}>
                <RollingText>{identity.email}</RollingText>
              </a>
              <button
                className="copy-button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            <span className="copy-status" role="status">
              {copied
                ? "Email copied to clipboard."
                : copyFailed
                  ? "Select the address to copy it, or click it to send an email."
                  : ""}
            </span>
          </div>
        </Reveal>
        <div className="footer-name" aria-hidden="true">
          HARISH K.
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Harish K. All rights reserved.
          </span>
          <span>BUILT WITH INTENT.</span>
          <LocalTime />
        </div>
      </footer>
      <DetailDialog detail={activeDetail} onClose={closeDetail} />
    </>
  );
}

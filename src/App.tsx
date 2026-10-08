import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowTopRightIcon,
  ArrowRightIcon,
  Cross2Icon,
  CopyIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import { studies, explorations } from "./content";
import type { CaseStudy } from "./content";
import "./App.css";

const resume = `${import.meta.env.BASE_URL}Kunal_Bajaj_Resume.pdf`;
const email = "kunalbajaj20220@gmail.com";
function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
      <ArrowTopRightIcon aria-hidden="true" />
    </a>
  );
}
function App() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (selected) {
      dialog.current?.showModal();
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [selected]);
  function closeStudy() {
    dialog.current?.close();
    setSelected(null);
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyFailed(false);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyFailed(true);
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <a className="wordmark" href="#">
            Kunal Bajaj<span> / Portfolio</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#experience">Experience</a>
            <a href="#work">Projects</a>
            <a href="#now">Learning</a>
            <ExternalLink href={resume} className="resume-link">
              Resume
            </ExternalLink>
          </nav>
        </div>
      </header>
      <main id="main" className="container">
        <section className="intro" aria-labelledby="intro-title">
          <div>
            <h1 id="intro-title">
              Applied AI &<br className="desktop-break" /> software engineering.
            </h1>
            <p>
              Production inference at Google. Agent systems at PointClickCare.
              <br className="desktop-break" /> Applied AI research at Sheridan.
            </p>
          </div>
          <div className="intro-links">
            <ExternalLink href="https://github.com/bajajku">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://ca.linkedin.com/in/kunal-bajaj1">
              LinkedIn
            </ExternalLink>
            <a href={`mailto:${email}`}>
              Email <ArrowTopRightIcon aria-hidden="true" />
            </a>
          </div>
        </section>
        <section
          id="experience"
          className="section experience-section"
          aria-labelledby="experience-title"
        >
          <div className="section-title">
            <h2 id="experience-title">Experience</h2>
            <span>2023 - 2026</span>
          </div>
          <article className="experience-row">
            <div className="role-meta">
              <h3>Google</h3>
              <p>
                Software Engineer Intern
                <br />
                AI Safety
              </p>
              <time>May - Aug 2026</time>
            </div>
            <div className="role-detail">
              <ul>
                <li>
                  Extended the platform’s <strong>C++ inference path</strong>{" "}
                  for Google Workspace AI workloads, supporting{" "}
                  <strong>8K+ combined QPS</strong> at peak.
                </li>
                <li>
                  Migrated <strong>three production safety classifiers</strong>{" "}
                  from a deprecated C++ service onto an existing multi-agent LLM
                  critic platform.
                </li>
                <li>
                  Benchmarked three Gemini model sizes and sampling
                  configurations, cutting <strong>TPU footprint by 30%</strong>{" "}
                  while maintaining <strong>82.5% precision</strong> and flat
                  cost and latency.
                </li>
                <li>
                  Designed an anomaly-detection architecture for{" "}
                  <strong>10M+ daily data slices</strong>; evaluated trade-offs
                  and backtested historical failures.
                </li>
              </ul>
              <p className="technologies">
                C++ · LLM inference · Model evaluation · System design
              </p>
            </div>
          </article>
          <article className="experience-row">
            <div className="role-meta">
              <h3>PointClickCare</h3>
              <p>
                Associate Applied Researcher Intern
                <br />
                (AI/ML)
              </p>
              <time>Jan - Apr 2026</time>
            </div>
            <div className="role-detail">
              <ul>
                <li>
                  Owned{" "}
                  <strong>AutoMed from design document to production</strong>:
                  an agent that proposes, tests and verifies medical NER
                  policies in parallel.
                </li>
                <li>
                  Improved recall <strong>0.72 → 0.94</strong> and precision{" "}
                  <strong>0.81 → 0.95</strong>, without fine-tuning. Built
                  medically grounded synthetic-document generation producing{" "}
                  <strong>50K+ samples</strong>.
                </li>
                <li>
                  Built human-versus-LLM evaluation and re-labeling workflows,
                  raising entity-extraction{" "}
                  <strong>F1 from 0.78 to 0.89</strong> and reducing annotation
                  inconsistencies by <strong>40%</strong>.
                </li>
              </ul>
              <div className="role-bottom">
                <p className="technologies">
                  Agents · Evaluation · Medical NER · Synthetic data
                </p>
                <button
                  className="inline-link"
                  onClick={() => setSelected(studies[1])}
                >
                  About AutoMed <ArrowRightIcon aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
          <article className="experience-row">
            <div className="role-meta">
              <h3>
                Sheridan Centre <br />
                for Applied AI
              </h3>
              <p>Applied research</p>
              <time>Oct 2023 - Dec 2025</time>
            </div>
            <div className="role-detail sheridan-roles">
              <div>
                <div className="subrole-heading">
                  <h4>Applied AI Engineer Intern</h4>
                  <span>May - Dec 2025</span>
                </div>
                <p>
                  Shipped a FastAPI/React RAG chatbot with hybrid retrieval.
                  Built an LLM jury that reduced manual review effort by{" "}
                  <strong>60%</strong>. Fine-tuned models with LoRA for VAC, and
                  hosted Qwen/Llama with vLLM across research projects.
                </p>
              </div>
              <div>
                <div className="subrole-heading">
                  <h4>AI and Process Optimization Analyst</h4>
                  <span>Sep 2024 - Apr 2025</span>
                </div>
                <p>
                  Delivered grid-searched XGBoost forecasts for{" "}
                  <strong>700+ NICU bed allocations</strong> through an internal
                  production API.
                </p>
              </div>
              <div>
                <div className="subrole-heading">
                  <h4>AI Research Assistant</h4>
                  <span>Oct 2023 - Sep 2024</span>
                </div>
                <p>
                  Built the Oakville Public Library assistant with LangChain,
                  Pinecone and FastAPI. Reached{" "}
                  <strong>82% service-inquiry accuracy</strong> in a three-month
                  pilot with <strong>25+ patrons</strong>.
                </p>
              </div>
            </div>
          </article>
          <div className="education">
            <span>Education</span>
            <p>
              Honours Bachelor of Computer Science, Mobile Computing
              <br />
              <span>Sheridan College · Expected graduation December 2026</span>
            </p>
          </div>
        </section>
        <section id="work" className="section" aria-labelledby="projects-title">
          <div className="section-title">
            <h2 id="projects-title">Selected projects</h2>
            <ExternalLink
              href="https://github.com/bajajku"
              className="inline-link"
            >
              All repositories
            </ExternalLink>
          </div>
          <article className="coda-project">
            <div className="project-text">
              <span className="project-kind">Independent project</span>
              <h3>Coda</h3>
              <p>
                Real-time 3D collaboration with an AI recap engine. React and
                LiveKit on the interface; Python agent orchestration, bounded
                queues and fallback summarizers behind it.
              </p>
              <p className="technologies">
                Python · React · Three.js · LiveKit · FastAPI
              </p>
              <div className="project-links">
                <button
                  className="inline-link"
                  onClick={() => setSelected(studies[0])}
                >
                  Engineering details <ArrowRightIcon aria-hidden="true" />
                </button>
                <ExternalLink
                  href="https://www.youtube.com/watch?v=3CKrapzaJ-k"
                  className="inline-link"
                >
                  Demo
                </ExternalLink>
                <ExternalLink
                  href="https://github.com/bajajku/Coda"
                  className="inline-link"
                >
                  Code
                </ExternalLink>
              </div>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}images/coda-meeting.webp`}
              width="1440"
              height="777"
              alt="Coda’s live meeting interface and shared 3D room"
              loading="lazy"
            />
          </article>
          <div className="project-list">
            <article>
              <div>
                <span className="project-kind">Sheridan applied research</span>
                <h3>VAC</h3>
                <p>
                  Hybrid retrieval, LoRA adaptation and LLM evaluation for a
                  trauma-informed veteran-support chatbot.
                </p>
              </div>
              <div className="project-links">
                <button
                  className="inline-link"
                  onClick={() => setSelected(studies[2])}
                >
                  Details <ArrowRightIcon aria-hidden="true" />
                </button>
                <ExternalLink
                  href="https://github.com/bajajku/VAC"
                  className="inline-link"
                >
                  Code
                </ExternalLink>
              </div>
            </article>
            <article>
              <div>
                <span className="project-kind">Mobile development</span>
                <h3>Groovify</h3>
                <p>
                  An iOS music discovery project built with Swift and SwiftUI,
                  integrating music and recommendation APIs.
                </p>
              </div>
              <ExternalLink
                href="https://github.com/bajajku/Groovify"
                className="inline-link"
              >
                Code
              </ExternalLink>
            </article>
          </div>
        </section>
        <section className="section open-source" aria-labelledby="oss-title">
          <h2 id="oss-title">Open source</h2>
          <div>
            <p>
              Four merged contributions across LangChain and Streamlit:
              configuration options, cache and error handling, and a widget.
            </p>
            <div className="project-links">
              <ExternalLink
                href="https://github.com/langchain-ai/langchain/pulls?q=author%3Abajajku+is%3Amerged"
                className="inline-link"
              >
                LangChain contributions
              </ExternalLink>
              <ExternalLink
                href="https://github.com/streamlit/streamlit/pulls?q=author%3Abajajku+is%3Amerged"
                className="inline-link"
              >
                Streamlit contributions
              </ExternalLink>
            </div>
          </div>
        </section>
        <section id="now" className="section" aria-labelledby="learning-title">
          <div className="section-title">
            <h2 id="learning-title">Currently learning</h2>
            <span>October 2026</span>
          </div>
          <div className="learning-grid">
            {explorations.map((item) => (
              <article key={item.number}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="section skills-section"
          aria-labelledby="skills-title"
        >
          <h2 id="skills-title">Tools & foundations</h2>
          <div>
            <p>
              <span>Languages</span>Python, C++, TypeScript, Swift, SQL, Java
            </p>
            <p>
              <span>AI & delivery</span>PyTorch, vLLM, LoRA, LangGraph, FastAPI,
              React, PostgreSQL, Docker
            </p>
            <p>
              <span>Core</span>Data structures & algorithms, system design,
              debugging, code review, Git
            </p>
          </div>
        </section>
        <section
          id="contact"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div>
            <h2 id="contact-title">Get in touch</h2>
            <p>
              Exploring early-career roles in applied AI and software
              engineering.
            </p>
          </div>
          <div className="email-row">
            <a href={`mailto:${email}`}>
              {email}
              <ArrowTopRightIcon aria-hidden="true" />
            </a>
            <button onClick={copyEmail} aria-label="Copy email address">
              {copied ? (
                <CheckIcon aria-hidden="true" />
              ) : (
                <CopyIcon aria-hidden="true" />
              )}
            </button>
          </div>
          <p className="copy-status" role="status">
            {copied
              ? "Email copied."
              : copyFailed
                ? "Copy unavailable. Select the email above to copy it."
                : ""}
          </p>
        </section>
      </main>
      <footer className="container">
        <span>© {new Date().getFullYear()} Kunal Bajaj</span>
        <a href="#">
          Back to top <ArrowRightIcon aria-hidden="true" />
        </a>
      </footer>
      <dialog
        ref={dialog}
        className="case-dialog"
        aria-labelledby="case-title"
        onCancel={closeStudy}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeStudy();
        }}
      >
        {selected && (
          <div className="case-content">
            <div className="case-top">
              <span>{selected.category}</span>
              <button onClick={closeStudy} aria-label="Close case study">
                <Cross2Icon aria-hidden="true" />
              </button>
            </div>
            <h2 id="case-title">{selected.title}</h2>
            <p className="case-context">{selected.context}</p>
            <div className="case-decisions">
              {selected.decisions.map((item) => (
                <section key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </section>
              ))}
            </div>
            <p className="case-boundary">{selected.boundary}</p>
            <div className="project-links">
              {selected.links.map((link) => (
                <ExternalLink
                  href={link.href}
                  key={link.href}
                  className="inline-link"
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
export default App;

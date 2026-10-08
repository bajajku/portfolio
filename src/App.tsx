import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowTopRightIcon,
  ArrowRightIcon,
  CopyIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import { experience, capabilities } from "./content";
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
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
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
            <a href="#capabilities">Capabilities</a>
            <a href="#work">Projects</a>
            <ExternalLink href={resume} className="resume-link">
              Resume
            </ExternalLink>
          </nav>
        </div>
      </header>
      <main id="main" className="container">
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-copy">
            <h1 id="intro-title">
              Software engineer
              <br className="desktop-break" /> focused on applied AI.
            </h1>
            <p>
              I build and improve AI applications, from the inference running
              underneath to the workflows and interfaces people use.
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
            <ExternalLink href={resume} className="inline-link">
              Full resume
            </ExternalLink>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <div className="role-meta">
                  <h3>{item.company}</h3>
                  <p>{item.context}</p>
                </div>
                <div className="role-detail">
                  <h4>{item.focus}</h4>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="experience-footnote">
            <p>
              Open-source contributions to{" "}
              <ExternalLink href="https://github.com/langchain-ai/langchain/pulls?q=author%3Abajajku+is%3Amerged">
                LangChain
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://github.com/streamlit/streamlit/pulls?q=author%3Abajajku+is%3Amerged">
                Streamlit
              </ExternalLink>
              .
            </p>
          </div>
        </section>
        <section
          id="capabilities"
          className="section"
          aria-labelledby="capabilities-title"
        >
          <div className="section-title">
            <h2 id="capabilities-title">What I bring</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="technologies">{item.tools}</p>
              </article>
            ))}
          </div>
          <p className="foundation">
            Grounded in data structures and algorithms, system design,
            debugging, code review and Git.
          </p>
        </section>
        <section id="work" className="section" aria-labelledby="projects-title">
          <div className="section-title">
            <h2 id="projects-title">A few things I’ve built</h2>
            <ExternalLink
              href="https://github.com/bajajku"
              className="inline-link"
            >
              GitHub
            </ExternalLink>
          </div>
          <article className="coda-project">
            <div className="project-text">
              <h3>Coda</h3>
              <p>
                A real-time collaboration space with AI-generated meeting
                recaps. Combines an interactive product interface with a Python
                pipeline for audio, vision and summaries.
              </p>
              <div className="project-links">
                <ExternalLink
                  href="https://www.youtube.com/watch?v=3CKrapzaJ-k"
                  className="inline-link"
                >
                  Watch demo
                </ExternalLink>
                <ExternalLink
                  href="https://github.com/bajajku/Coda"
                  className="inline-link"
                >
                  Source
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
              <h3>VAC</h3>
              <p>
                A veteran-support research chatbot combining document retrieval,
                model adaptation and response evaluation.
              </p>
              <ExternalLink
                href="https://github.com/bajajku/VAC"
                className="inline-link"
              >
                Source
              </ExternalLink>
            </article>
            <article>
              <h3>Groovify</h3>
              <p>
                An iOS music discovery app built with Swift and SwiftUI,
                connecting music and recommendation APIs.
              </p>
              <ExternalLink
                href="https://github.com/bajajku/Groovify"
                className="inline-link"
              >
                Source
              </ExternalLink>
            </article>
          </div>
        </section>
        <section
          id="now"
          className="section learning-section"
          aria-labelledby="learning-title"
        >
          <h2 id="learning-title">Currently exploring</h2>
          <div>
            <p>
              Building a GPT from scratch and experimenting with vLLM to
              understand models and inference more deeply.
            </p>
            <p>
              I’m also reading about agent reflection and coordination, AI
              safety and mechanistic interpretability.
            </p>
          </div>
        </section>
        <section
          id="contact"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div>
            <h2 id="contact-title">Let’s connect</h2>
            <p>
              Exploring early-career roles in applied AI and software
              engineering.
            </p>
            <p className="education">
              Honours BCS, Mobile Computing · Sheridan College
              <br />
              Expected graduation December 2026
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
    </>
  );
}
export default App;

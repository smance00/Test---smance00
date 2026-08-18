import { DemoRequestForm } from "@/components/DemoRequestForm";
import { EditorialFx } from "@/components/EditorialFx";
import { AskLevy } from "@/components/AskLevy";
import { HiringSlowsCards } from "@/components/HiringSlowsCards";
import { IntegrationsBand } from "@/components/IntegrationsBand";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";
import type { ReactNode } from "react";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#e8fb2e" />
      <path
        d="M6 10.2 8.6 12.8 14 7.4"
        stroke="#3b1858"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function WindowChrome({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="win">
      <div className="win-bar">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="win-url">{url}</span>
      </div>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="edh">
      <EditorialFx />
      <LoopChrome />
      <main>
        <section className="hero">
          <div className="container hero-split">
            <div className="hero-copy">
              <p className="eyebrow reveal">AI Hiring Advisor</p>
              <h1 className="reveal">
                Better hiring decisions.
                <span className="hero-line2">A person still makes the call.</span>
              </h1>
              <p className="hero-sub reveal">
                Olevy turns the ATS and HRIS you already run into clear insight, spots risk in the funnel, and guides managers in the moment.
              </p>
              <ul className="hero-points reveal">
                <li>
                  <CheckIcon />
                  Improve decision quality
                </li>
                <li>
                  <CheckIcon />
                  Find hidden funnel friction
                </li>
                <li>
                  <CheckIcon />
                  Strengthen team alignment
                </li>
              </ul>
            </div>
            <DemoRequestForm id="hero-request-demo" />
          </div>
        </section>

        <section className="hero-video" aria-label="Product walkthrough">
          <div className="container">
            <div className="hero-video-frame reveal">
              <iframe
                src="https://drive.google.com/file/d/1TwQzwMjdsJ8zWUOWZq10Gv9sRknfmTPi/preview"
                title="Olevy product walkthrough"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="sec" id="overview">
          <div className="container">
            <div className="erow-grid reveal">
              <div className="eg-copy">
                <a className="platform-pill" href="#overview">
                  Platform overview <ArrowIcon />
                </a>
                <h3>
                  Improve <span className="people-word">decision quality</span>
                </h3>
                <p>
                  Olevy reads the ATS and HRIS you already run — interview scorecards, hiring-manager feedback, performance reviews, candidate profiles, pipeline events — and maps those signals to what actually happened next.
                </p>
                <p>It does not hire for you. It does not override a manager. You make the call.</p>
                <a className="textlink" href="#detect" style={{ marginTop: 22 }}>
                  Learn more
                </a>
              </div>
              <WindowChrome url="olevy.app — Connections">
                <div className="cx">
                  <div className="cx-col">
                    <div className="src">
                      <div className="k">ATS</div>
                      <div className="sys">
                        <span className="chip">Greenhouse</span>
                        <span className="chip">Lever</span>
                      </div>
                    </div>
                    <div className="src">
                      <div className="k">HRIS</div>
                      <div className="sys">
                        <span className="chip">Workday</span>
                        <span className="chip">BambooHR</span>
                      </div>
                    </div>
                  </div>
                  <div className="cx-arrow">
                    <ArrowIcon />
                  </div>
                  <div className="hub">
                    <div className="hi">
                      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                        <path
                          d="M28 12 h16 a8 8 0 0 1 8 8 v16"
                          stroke="currentColor"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                        <rect x="12" y="20" width="32" height="32" rx="10" stroke="currentColor" strokeWidth="7" />
                      </svg>
                    </div>
                    <div className="hn">Olevy</div>
                    <div className="hs">Your AI Hiring Advisor</div>
                  </div>
                </div>
                <div className="flowchips">
                  <div className="mock-lb">Data it activates</div>
                  <div className="chips">
                    <span className="chip">
                      <i />
                      Interview scorecards
                    </span>
                    <span className="chip">
                      <i />
                      Hiring-manager feedback
                    </span>
                    <span className="chip">
                      <i />
                      Performance reviews
                    </span>
                    <span className="chip">
                      <i />
                      Candidate profiles
                    </span>
                    <span className="chip">
                      <i />
                      Pipeline events
                    </span>
                  </div>
                </div>
              </WindowChrome>
            </div>
          </div>
        </section>

        <section className="sec" id="detect" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="friction-copy reveal">
              <h3>Find hidden funnel friction.</h3>
              <p>
                Interview loops lengthen. Friday interviews reject. One manager scores a point and a half below the rest. Olevy flags that before a great candidate is gone. You act on it, or you don’t. Either way, you saw it.
              </p>
            </div>
          </div>
        </section>

        <section className="sec" id="advisor" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="friction-copy reveal">
              <h3>Strengthen team alignment.</h3>
              <p>
                Because Olevy runs on your existing ATS data, it cross-references your real hires and compares who actually succeeded against your future candidate profiles.
              </p>
              <p>
                Then it delivers real-time behavioral coaching: non-punitive, data-backed guidance, directly to hiring managers. The manager stays in control.
              </p>
            </div>
            <div className="advisor-band reveal" id="ask-levy">
              <a className="platform-pill" href="#ask-levy">
                AI Advisor <ArrowIcon />
              </a>
              <h2>
                Ask the advisor. Then you still <span className="people-word">decide</span>.
              </h2>
              <p>
                Levy answers from your real placements — traits that predicted success, questions worth asking — and waits. Judgment stays with the hiring manager.
              </p>
              <AskLevy />
            </div>
            <HiringSlowsCards />
          </div>
        </section>

        <section className="sec" id="integrations" style={{ paddingTop: 0 }}>
          <div className="container">
            <IntegrationsBand />
          </div>
        </section>

        <section className="sec" id="moment" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="insight reveal">
              <span className="il">
                <i />
                Data insight
              </span>
              <p className="ib">
                Over the last 24 months, candidates from non-traditional backgrounds on your team have shown <b>40% higher retention</b> with equal output. Consider advancing Candidate X for a technical screening loop.
              </p>
              <div className="conf">
                <div className="conf-t">
                  <div className="conf-b" style={{ ["--c" as string]: 0.91 }} />
                </div>
                <span className="conf-n">91%</span>
              </div>
              <div className="iact">
                <button type="button" className="pill-primary">
                  Advance candidate
                </button>
                <button type="button" className="pill-ghost">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="request-demo">
          <div className="container hero-split">
            <div className="hero-copy reveal">
              <p className="eyebrow">Request a demo</p>
              <h2>See it on a process like yours.</h2>
              <p className="hero-sub">
                Thirty minutes with a person. We walk a hiring process like yours and leave the decision with you.
              </p>
            </div>
            <DemoRequestForm id="close-request-demo" />
          </div>
        </section>
      </main>
      <LoopFooter />
    </div>
  );
}

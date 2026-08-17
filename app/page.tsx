import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { EditorialFx } from "@/components/EditorialFx";
import { EditorialThemeToggle } from "@/components/EditorialThemeToggle";
import { AskLevy } from "@/components/AskLevy";
import { HiringSlowsCards } from "@/components/HiringSlowsCards";
import { IntegrationsBand } from "@/components/IntegrationsBand";
import { SiteFooter } from "@/components/SiteFooter";
import { DEMO_MAIL } from "@/lib/utils";

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

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M6 10.2 8.6 12.8 14 7.4"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WindowChrome({ url, children }: { url: string; children: React.ReactNode }) {
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
    <div className="min-h-dvh bg-bg text-fg">
      <EditorialFx />
      <div className="edh">
        <a className="announce" href="#request-demo">
          <span className="announce-new">New</span>
          <span className="announce-copy">
            Introducing your AI Hiring Advisor
            <ArrowIcon />
          </span>
        </a>
        <header className="nav">
          <div className="container nav-in">
            <Link className="logo" aria-label="Olevy home" href="/">
              <BrandMark height={22} />
            </Link>
            <div className="nav-right">
              <a className="nav-demo" href={DEMO_MAIL}>
                Book a demo
              </a>
              <EditorialThemeToggle />
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero-split">
              <div className="hero-copy">
                <p className="eyebrow reveal">Your AI Hiring Advisor</p>
                <h1 className="reveal">
                  Make your <span className="people-word">next hire</span>, the{" "}
                  <span className="limeword" id="right-hire">
                    right hire
                  </span>
                  .
                </h1>
                <p className="hero-sub reveal">
                  Olevy connects to the systems you already run — your ATS and enterprise data — and maps every pre-hire signal to what actually happened next.
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
              <DemoRequestForm />
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

          <section className="sec" id="overview" style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
            <div className="container">
              <div className="erow-grid reveal">
                <div className="eg-copy">
                  <a className="platform-pill" href="#overview">
                    Platform Overview <ArrowIcon />
                  </a>
                  <h3>
                    Improve <span className="people-word">decision quality</span>
                  </h3>
                  <p>
                    Olevy connects hiring behavior, interview signals, and workforce outcomes to reveal what drives stronger hires. Give HR and hiring leaders the intelligence to improve decision quality, uncover hidden friction, and turn hiring into a measurable business lever.
                  </p>
                  <a className="textlink" href="#detect" style={{ marginTop: 22 }}>
                    Learn More
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
                        <svg viewBox="0 0 64 64" className="h-7 w-7" fill="none" aria-hidden="true">
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
                      <span className="chip"><i />Interview scorecards</span>
                      <span className="chip"><i />Hiring-manager feedback</span>
                      <span className="chip"><i />Performance reviews</span>
                      <span className="chip"><i />Candidate profiles</span>
                      <span className="chip"><i />Applications &amp; pipeline events</span>
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
                  Predictive feature-engineering models isolate hidden process bottlenecks and track manager scoring variation — built to streamline the recruitment lifecycle and spot interview fatigue before it costs you a great candidate.
                </p>
              </div>
            </div>
          </section>

          <section className="sec" id="advisor" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="friction-copy reveal">
                <h3>Strengthen team alignment.</h3>
                <p>
                  Because Olevy runs on your existing ATS data, it cross-references your real hires — the ones already sourced and screened through your ATS and enterprise systems — and compares who actually succeeded against your future candidate profiles.
                </p>
                <p>
                  Then it delivers real-time behavioral coaching widgets: non-punitive, data-backed guidance, directly to hiring managers.
                </p>
              </div>
              <div className="advisor-band reveal">
                <a className="platform-pill" href="#ask-levy">
                  AI Advisor <ArrowIcon />
                </a>
                <h2>
                  Learn from outcomes and <span className="people-word">reduce risk</span> with your personal{" "}
                  <span className="limeword swipe">AI Advisor</span>
                </h2>
                <p>
                  Surface patterns across interviews, manager behavior, and hiring outcomes to understand where risk is forming and what consistently leads to stronger hires. Use those insights to refine the process and improve the decisions that follow.
                </p>
                <a className="textlink advisor-cta" href="#ask-levy">
                  Meet the advisor <ArrowIcon />
                </a>
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

          <section className="sec" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="insight reveal" style={{ marginTop: 0 }}>
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

        </main>
      </div>
      <SiteFooter variant="home" />
    </div>
  );
}

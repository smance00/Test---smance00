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
      <circle cx="10" cy="10" r="10" fill="#2F8A3A" />
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
                    Improve manager effectiveness
                  </li>
                  <li>
                    <CheckIcon />
                    Simplify hiring processes
                  </li>
                  <li>
                    <CheckIcon />
                    Uncover hiring insights
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
                    Turn <span className="people-word">people decisions</span> into{" "}
                    <span className="limeword swipe" id="lime">business strategy</span>
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
              <div className="erow-grid reveal">
                <WindowChrome url="olevy.app — Signals">
                  <div className="win-body">
                    <div className="mock-lb">Manager scoring variance</div>
                    <div className="funnel">
                      <div className="fstage">
                        <span className="fl">Manager A</span>
                        <div className="fbar-t">
                          <div className="fbar" style={{ ["--w" as string]: 0.84 }} />
                        </div>
                        <span className="fnum"><b>8.4</b></span>
                      </div>
                      <div className="fstage">
                        <span className="fl">Manager B</span>
                        <div className="fbar-t">
                          <div className="fbar am" style={{ ["--w" as string]: 0.61 }} />
                        </div>
                        <span className="fnum"><b>6.1</b> · flagged</span>
                      </div>
                      <div className="fstage">
                        <span className="fl">Manager C</span>
                        <div className="fbar-t">
                          <div className="fbar" style={{ ["--w" as string]: 0.79 }} />
                        </div>
                        <span className="fnum"><b>7.9</b></span>
                      </div>
                    </div>
                    <p className="note">
                      Manager B scores 27% below team average — calibration variance detected.
                    </p>
                    <div className="mock-div">
                      <div className="mock-lb">Interview fatigue signal</div>
                      <div className="fat">
                        <div className="day">
                          <span className="bar" style={{ height: 26 }} />
                          <span className="d">M</span>
                        </div>
                        <div className="day">
                          <span className="bar" style={{ height: 34 }} />
                          <span className="d">T</span>
                        </div>
                        <div className="day">
                          <span className="bar" style={{ height: 40 }} />
                          <span className="d">W</span>
                        </div>
                        <div className="day">
                          <span className="bar" style={{ height: 52 }} />
                          <span className="d">T</span>
                        </div>
                        <div className="day">
                          <span className="bar hot" style={{ height: 70 }} />
                          <span className="d">F</span>
                        </div>
                      </div>
                      <div className="spark-wrap">
                        <span className="sl">
                          Late-week reject rate · <b>85%</b>
                        </span>
                        <svg className="spark" viewBox="0 0 180 40" preserveAspectRatio="none" aria-hidden="true">
                          <path className="line" d="M2 30 L34 27 L66 24 L98 20 L130 15 L160 8 L178 6" />
                        </svg>
                      </div>
                      <div className="flag">
                        <div className="ft">Fri 3 PM interviews → 85% reject</div>
                        <div className="fs">
                          Late-week fatigue pattern — flagged before it costs a great candidate.
                        </div>
                      </div>
                    </div>
                  </div>
                </WindowChrome>
                <div className="eg-copy">
                  <span className="idx">02 · Detect</span>
                  <h3>Find the friction you can&apos;t see.</h3>
                  <p>
                    Predictive feature-engineering models isolate hidden process bottlenecks and track manager scoring variation — built to streamline the recruitment lifecycle and spot interview fatigue before it costs you a great candidate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="sec" id="learn" style={{ paddingTop: 0 }}>
            <div className="container">
              <p className="sec-eyebrow reveal">03 · Learn &amp; coach</p>
              <h2 className="reveal">Cross-reference who actually worked out.</h2>
              <p className="sec-intro reveal">
                Because Olevy runs on your existing ATS data, it cross-references your real hires — the ones already sourced and screened through your ATS and enterprise systems — and compares who actually succeeded against your future candidate profiles.
              </p>
              <p className="sec-intro reveal">
                Then it delivers real-time behavioral coaching widgets: non-punitive, data-backed guidance, directly to hiring managers.
              </p>
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

          <section className="sec" style={{ paddingTop: 0 }}>
            <div className="container">
              <p className="sec-eyebrow reveal">The model</p>
              <h2 className="reveal">How the model learns.</h2>
              <div className="model-cards">
                <article className="model-card reveal">
                  <span className="enum">01</span>
                  <h3>Personalized learning layer</h3>
                  <p>
                    Olevy tracks each manager&apos;s multi-year scoring history and learns to read between the lines of human notes, surfacing high-potential candidates who might otherwise be unfairly rejected.
                  </p>
                </article>
                <article className="model-card reveal">
                  <span className="enum">02</span>
                  <h3>Continuous active learning</h3>
                  <p>
                    It tracks the correlation between interview transcripts and real team velocity. When a new skill starts driving output, it flags the shift and updates pre-hire screening criteria to match what your team is thriving on now — not what it needed three years ago.
                  </p>
                </article>
                <article className="model-card reveal">
                  <span className="enum">03</span>
                  <h3>Pre-hire to post-hire mapping</h3>
                  <p>
                    Olevy maps pre-hire signals to outcomes. When your HRIS registers, 18 months later, that a hire was fast-tracked for a promotion, that signal flows back to sharpen the model.
                  </p>
                </article>
              </div>
            </div>
          </section>

        </main>
      </div>
      <SiteFooter variant="home" />
    </div>
  );
}

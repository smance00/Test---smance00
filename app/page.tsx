import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { CyclingWord } from "@/components/CyclingWord";
import { EditorialFx } from "@/components/EditorialFx";
import { EditorialThemeToggle } from "@/components/EditorialThemeToggle";
import { SiteFooter } from "@/components/SiteFooter";
import { DEMO_MAIL } from "@/lib/utils";
import type { ReactNode } from "react";

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
    <div className="min-h-dvh bg-bg text-fg">
      <EditorialFx />
      <div className="edh">
        <header className="nav">
          <div className="container nav-in">
            <Link className="logo" aria-label="Olevy home" href="/">
              <BrandMark height={22} />
            </Link>
            <div className="nav-right">
              <nav className="nav-links" aria-label="Primary">
                <a href="/#connect">Product</a>
                <Link href="/blog">Blog</Link>
              </nav>
              <Link className="signin" href="/login">
                Sign in
              </Link>
              <a className="nav-demo" href={DEMO_MAIL}>
                Book a demo
              </a>
              <EditorialThemeToggle />
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <p className="eyebrow reveal">Operational Intelligence Layer</p>
              <h1 className="reveal">
                The intelligence layer for the hiring you{" "}
                <span className="limeword" id="lime">
                  already do
                </span>
                .
              </h1>
              <p className="hero-line2 reveal">
                for teams that hire <CyclingWord />
              </p>
              <p className="hero-sub prose reveal">
                Olevy connects to the systems you already run — your ATS and enterprise data — and maps every pre-hire signal to what actually happened next. See where hiring slows, learn which signals predict great hires, and coach every manager with data, not opinions.
              </p>
              <div className="hero-cta reveal">
                <a className="textlink" href={DEMO_MAIL}>
                  Book a demo <ArrowIcon />
                </a>
                <a className="textlink quiet" href="#detect">
                  See how it works
                </a>
              </div>
            </div>
          </section>

          <section className="sec" id="connect" style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
            <div className="container">
              <div className="erow-grid reveal">
                <div className="eg-copy">
                  <span className="idx">01 · Connect</span>
                  <h3>Start from the data you already have.</h3>
                  <p>
                    Olevy plugs into your existing ATS and enterprise systems and activates the data already sitting there — no migration, no cold start.
                  </p>
                  <div className="chips" style={{ marginTop: 18 }}>
                    <span className="chip">Interview scorecards</span>
                    <span className="chip">Hiring-manager feedback</span>
                    <span className="chip">Performance reviews</span>
                    <span className="chip">Candidate profiles</span>
                    <span className="chip">Applications &amp; pipeline events</span>
                  </div>
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
                      <div className="hs">Operational intelligence layer</div>
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
                        Applications &amp; pipeline events
                      </span>
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
                        <span className="fnum">
                          <b>8.4</b>
                        </span>
                      </div>
                      <div className="fstage">
                        <span className="fl">Manager B</span>
                        <div className="fbar-t">
                          <div className="fbar am" style={{ ["--w" as string]: 0.61 }} />
                        </div>
                        <span className="fnum">
                          <b>6.1</b> · flagged
                        </span>
                      </div>
                      <div className="fstage">
                        <span className="fl">Manager C</span>
                        <div className="fbar-t">
                          <div className="fbar" style={{ ["--w" as string]: 0.79 }} />
                        </div>
                        <span className="fnum">
                          <b>7.9</b>
                        </span>
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
                        <div className="fs">Late-week fatigue pattern — flagged before it costs a great candidate.</div>
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
            </div>
          </section>

          <section className="sec" style={{ paddingTop: 0 }}>
            <div className="container">
              <p className="sec-eyebrow reveal">In practice</p>
              <h2 className="reveal">Coaching, the moment it matters.</h2>
              <div style={{ marginTop: "clamp(28px,4vw,44px)" }}>
                <div className="pstep reveal">
                  <span className="pn">01</span>
                  <p>
                    A hiring manager routinely rates Ivy League or ex-FAANG candidates higher in first-round resume reviews — and scores state-school or non-traditional candidates lower.
                  </p>
                </div>
                <div className="pstep reveal">
                  <span className="pn">02</span>
                  <p>
                    Olevy looks at 3 years of your HRIS data and finds the state-school developers on this team actually stay 40% longer, with identical performance-review scores.
                  </p>
                </div>
                <div className="pstep reveal">
                  <span className="pn">03</span>
                  <p>The next time that manager opens a pipeline, Olevy surfaces a personalized insight widget.</p>
                </div>
              </div>
              <div className="insight reveal">
                <span className="il">
                  <i />
                  Data insight
                </span>
                <p className="ib">
                  Over the last 24 months, candidates from non-traditional backgrounds on your team have shown{" "}
                  <b>40% higher retention</b> with equal output. Consider advancing Candidate X for a technical screening loop.
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

          <section className="final">
            <div className="container">
              <h2 className="reveal">See your hiring, clearly.</h2>
              <p className="fsub reveal">
                Book a walkthrough and we&apos;ll show you the intelligence hiding in your existing ATS.
              </p>
              <a className="textlink fl reveal" href={DEMO_MAIL}>
                Book a demo <ArrowIcon />
              </a>
            </div>
          </section>
        </main>
      </div>
      <SiteFooter variant="home" />
    </div>
  );
}

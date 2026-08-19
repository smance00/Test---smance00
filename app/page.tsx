import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { EditorialFx } from "@/components/EditorialFx";
import { EditorialThemeToggle } from "@/components/EditorialThemeToggle";
import { IntelligenceExplorer } from "@/components/IntelligenceExplorer";
import { LoopFooter } from "@/components/LoopFooter";
import type { ReactNode } from "react";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#7c5cff" />
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

function DropSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="drop reveal" id={id} open>
      <summary>
        <span>{title}</span>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="drop-body">{children}</div>
    </details>
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
              <a className="nav-demo" href="#request-demo">
                Request a demo
              </a>
              <EditorialThemeToggle />
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero-split">
              <div className="hero-copy">
                <h1 className="reveal">
                  Make your next hire, the{" "}
                  <span className="limeword" id="lime">
                    right
                  </span>{" "}
                  hire.
                </h1>
                <p className="hero-sub prose reveal">
                  Olevy is an AI hiring advisor that helps employers make better hiring decisions by connecting hiring behavior, interview signals, and workforce outcomes.
                </p>
                <p className="hero-sub prose reveal">
                  Instead of adding another disconnected tool, Olevy connects to your ATS, HRIS, and related hiring data sources to uncover what leads to stronger hires, where risk is forming, and where the hiring process is slowing down.
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
              <DemoRequestForm id="request-demo" />
            </div>
          </section>

          <section className="sec drops">
            <div className="container">
              <DropSection id="quality" title="Improve decision quality">
                <div className="erow-grid">
                  <div className="eg-copy">
                    <p>
                      Olevy surfaces patterns across interviews, manager behavior, and hiring outcomes so leaders can refine the process and make better decisions moving forward.
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
              </DropSection>

              <DropSection id="friction" title="Find the funnel friction">
                <div className="erow-grid flip-mobile">
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
                    <p>
                      Predictive feature-engineering models isolate hidden process bottlenecks and track manager scoring variation — built to streamline the recruitment lifecycle and spot interview fatigue before it costs you a great candidate.
                    </p>
                  </div>
                </div>
              </DropSection>

              <DropSection id="alignment" title="Strengthen team alignment">
                <p className="sec-intro">
                  Olevy brings together signals from recruiters, interviewers, and hiring managers so everyone can see where decisions match and where they don&apos;t.
                </p>
                <p className="sec-intro">
                  By connecting feedback, scoring, and hiring patterns, Olevy helps teams make more consistent decisions together.
                </p>
                <IntelligenceExplorer />
              </DropSection>
            </div>
          </section>
        </main>
        <LoopFooter />
      </div>
    </div>
  );
}

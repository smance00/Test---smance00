import { DemoRequestForm } from "@/components/DemoRequestForm";
import { EditorialFx } from "@/components/EditorialFx";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";
import Link from "next/link";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" />
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

export default function HomePage() {
  return (
    <div className="olv">
      <EditorialFx />
      <LoopChrome />
      <main>
        <section className="olv-open">
          <div className="wrap olv-open-block">
            <div className="olv-open-copy">
              <p className="olv-kicker reveal">AI Hiring Advisor</p>
              <h1 className="olv-title reveal">
                <b>Better hiring decisions.</b>
                <i>A person still makes the call.</i>
              </h1>
              <p className="olv-lede reveal">
                Olevy is the intelligence layer for the hiring you already do. It reads the ATS and HRIS you run, spots risk in the funnel, and coaches managers in the moment.
              </p>
              <ul className="olv-points reveal">
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
            <DemoRequestForm id="hero-request-demo" className="olv-hero-form vis" />
          </div>
        </section>

        <section className="olv-section" id="connect">
          <div className="wrap olv-split">
            <div>
              <p className="olv-kicker reveal">01 · Connect</p>
              <h2 className="olv-body-h2 reveal">Start from the data you already have.</h2>
              <p className="olv-prose reveal" style={{ marginTop: 18 }}>
                Olevy plugs into Greenhouse, Lever, Workday, and BambooHR. Scorecards, manager feedback, reviews, pipeline events — no migration, no cold start.
              </p>
            </div>
            <aside className="olv-panel reveal">
              <p className="olv-panel-kicker">Already running</p>
              <div className="olv-connect">
                <div>
                  <span>ATS</span>
                  <b>Greenhouse</b>
                  <b>Lever</b>
                </div>
                <div>
                  <span>HRIS</span>
                  <b>Workday</b>
                  <b>BambooHR</b>
                </div>
              </div>
              <p className="olv-panel-note">Olevy reads the signal. A person makes the call.</p>
            </aside>
          </div>
        </section>

        <section className="olv-section tight" id="detect">
          <div className="wrap">
            <p className="olv-kicker reveal">02 · Detect</p>
            <h2 className="olv-body-h2 reveal">Find the friction you can&apos;t see.</h2>
            <p className="olv-prose reveal" style={{ marginTop: 18 }}>
              Where loops slow, where Friday interviews fail, where one manager’s scores drift. Olevy flags it before a great candidate is gone.
            </p>
            <div className="olv-pillars">
              <Link className="olv-pillar reveal" href="/signals#quality">
                <span>01</span>
                <h3>Decision quality</h3>
                <p>Which pre-hire signals predicted the people who stayed and grew — not the ones who looked good on paper.</p>
              </Link>
              <Link className="olv-pillar reveal" href="/signals#friction">
                <span>02</span>
                <h3>Funnel friction</h3>
                <p>Interview fatigue, process drift, and the bottlenecks that cost you people you wanted.</p>
              </Link>
              <Link className="olv-pillar reveal" href="/signals#alignment">
                <span>03</span>
                <h3>Team alignment</h3>
                <p>A nudge to the manager, in the moment, from the outcomes you already have.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="olv-section tight" id="coach">
          <div className="wrap olv-split">
            <div>
              <p className="olv-kicker reveal">03 · Coach</p>
              <h2 className="olv-body-h2 reveal">A recommendation. Then a person.</h2>
              <p className="olv-prose reveal" style={{ marginTop: 18 }}>
                The model can flag a candidate, a Friday pattern, or a manager’s drift. Advance, dismiss, or coach — the hiring manager stays in control.
              </p>
            </div>
            <div className="olv-signal reveal">
              <div className="il">Data insight</div>
              <p className="ib">
                Over the last 24 months, candidates from non-traditional backgrounds on your team have shown <b>40% higher retention</b> with equal output. Consider advancing Candidate X for a technical screening loop.
              </p>
              <div className="conf">
                <div className="conf-t">
                  <div className="conf-b" />
                </div>
                <span className="conf-n">91%</span>
              </div>
              <div className="olv-actions">
                <button type="button" className="olv-pop">
                  Advance candidate
                </button>
                <button type="button" className="olv-float">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="olv-section tight" id="walkthrough">
          <div className="wrap">
            <p className="olv-kicker reveal">Walkthrough</p>
            <h2 className="olv-body-h2 reveal">See it on a process like yours.</h2>
            <div className="hero-video-frame reveal" style={{ marginTop: 32 }}>
              <iframe
                src="https://drive.google.com/file/d/1TwQzwMjdsJ8zWUOWZq10Gv9sRknfmTPi/preview"
                title="Olevy product walkthrough"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <LoopFooter />
    </div>
  );
}

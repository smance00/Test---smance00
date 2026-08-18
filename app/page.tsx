import { DemoRequestForm } from "@/components/DemoRequestForm";
import { EditorialFx } from "@/components/EditorialFx";
import { AskLevy } from "@/components/AskLevy";
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
          <div className="wrap olv-open-grid">
            <div className="olv-open-copy">
              <p className="olv-kicker reveal">AI Hiring Advisor</p>
              <h1 className="olv-title reveal">
                <b>Better hiring decisions.</b>
                <i>A person still makes the call.</i>
              </h1>
              <p className="olv-lede reveal">
                Olevy turns the ATS and HRIS you already run into clear insight, spots risk in the funnel, and guides managers in the moment.
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
              <DemoRequestForm id="hero-request-demo" className="olv-hero-form vis" />
            </div>
            <figure className="olv-halo reveal">
              <img
                src="/brand/halo-leader.png"
                alt="A hiring leader — the person who still makes the call."
              />
            </figure>
          </div>
        </section>

        <section className="olv-section" id="rule">
          <div className="wrap">
            <p className="olv-kicker reveal">The rule</p>
            <h2 className="olv-rule reveal">
              Recommendations in. <em>Decisions stay with you.</em>
            </h2>
            <p className="olv-prose reveal" style={{ marginTop: 22 }}>
              The same idea as the opening: Olevy is an AI hiring advisor for teams that already run an ATS. It surfaces the call. It does not take it.
            </p>
          </div>
        </section>

        <section className="olv-section tight" id="product">
          <div className="wrap">
            <p className="olv-kicker reveal">Product</p>
            <h2 className="olv-body-h2 reveal">Intelligence on the hiring you already do.</h2>
            <p className="olv-prose reveal" style={{ marginTop: 18 }}>
              Olevy reads the ATS and HRIS you already run — interview scorecards, hiring-manager feedback, performance reviews, candidate profiles, pipeline events — and maps those signals to what actually happened next.
            </p>
            <p className="olv-prose reveal">
              It does not hire for you. It does not override a manager. <strong>You make the call.</strong>
            </p>
            <p className="olv-footnote reveal">
              Already on Greenhouse, Lever, Workday, or BambooHR. No migration. No cold start.
            </p>
          </div>
        </section>

        <section className="olv-section tight" id="signals">
          <div className="wrap">
            <p className="olv-kicker reveal">What it surfaces</p>
            <h2 className="olv-body-h2 reveal">The same three things from the opening.</h2>
            <ol className="olv-lines">
              <li className="reveal">
                <span>01</span>
                <div>
                  <h3>
                    <Link href="/signals#quality">Improve decision quality</Link>
                  </h3>
                  <p>Which pre-hire signals actually predicted the people who stayed and grew — not the ones who looked good on paper.</p>
                </div>
              </li>
              <li className="reveal">
                <span>02</span>
                <div>
                  <h3>
                    <Link href="/signals#friction">Find hidden funnel friction</Link>
                  </h3>
                  <p>Where the process slows, where Friday interviews fail, where one manager’s scores drift from the rest.</p>
                </div>
              </li>
              <li className="reveal">
                <span>03</span>
                <div>
                  <h3>
                    <Link href="/signals#alignment">Strengthen team alignment</Link>
                  </h3>
                  <p>Coaching that is not punitive. A nudge to the manager, in the moment, from the outcomes you already have.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <figure className="olv-plate reveal">
          <img
            src="/brand/halo-team.png"
            alt="A hiring team — the people who stay in the loop."
          />
          <figcaption>The people who stay in the loop.</figcaption>
        </figure>

        <section className="olv-section tight" id="walkthrough">
          <div className="wrap">
            <p className="olv-kicker reveal">Walkthrough</p>
            <h2 className="olv-body-h2 reveal">See the advisor in the product.</h2>
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

        <section className="olv-section tight" id="moment">
          <div className="wrap olv-split">
            <div>
              <p className="olv-kicker reveal">In the moment</p>
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

        <section className="olv-section tight" id="levy">
          <div className="wrap">
            <p className="olv-kicker reveal">Ask Levy</p>
            <h2 className="olv-body-h2 reveal">Ask the advisor. Then you still decide.</h2>
            <p className="olv-prose reveal" style={{ marginTop: 18 }}>
              Levy answers from your real placements — traits that predicted success, questions worth asking — and waits. Judgment stays with the hiring manager.
            </p>
            <div className="reveal">
              <AskLevy />
            </div>
          </div>
        </section>

        <section className="olv-section" id="request-demo">
          <div className="wrap olv-close">
            <p className="olv-kicker reveal">Request a demo</p>
            <h2 className="olv-body-h2 reveal">See it on a process like yours.</h2>
            <p className="olv-prose reveal" style={{ marginTop: 18 }}>
              Thirty minutes with a person. We walk a hiring process like yours and leave the decision with you — the same rule as the opening.
            </p>
            <div className="reveal">
              <DemoRequestForm id="close-request-demo" />
            </div>
          </div>
        </section>
      </main>
      <LoopFooter />
    </div>
  );
}

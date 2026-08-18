import { DemoRequestForm } from "@/components/DemoRequestForm";
import { EditorialFx } from "@/components/EditorialFx";
import { AskLevy } from "@/components/AskLevy";
import { LoopBubbles } from "@/components/LoopBubbles";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="olv">
      <EditorialFx />
      <LoopChrome />
      <main>
        <section className="olv-open">
          <div className="olv-open-art" aria-hidden="true">
            <span className="olv-orb a" />
            <span className="olv-orb b" />
            <span className="olv-orb c" />
            <span className="olv-finger" />
          </div>
          <div className="wrap">
            <p className="olv-kicker reveal">Olevy</p>
            <h1 className="olv-title reveal">
              <b>Human</b>
              <i>in the Loop</i>
            </h1>
            <p className="olv-lede reveal">
              AI can recommend the hire. Only a person should make it.
            </p>
            <span className="olv-scroll reveal">Scroll to enter the loop</span>
          </div>
        </section>

        <section className="olv-section" id="rule">
          <div className="wrap">
            <h2 className="olv-rule reveal">
              Every recommendation is a <em>bubble</em>.
            </h2>
            <p className="olv-prose reveal" style={{ marginTop: 28 }}>
              Fragile. Temporary. Yours. Pop it, and the decision becomes real. Let it float, and the model learns that too.
            </p>
          </div>
        </section>

        <section className="olv-section tight" id="what">
          <div className="wrap">
            <p className="olv-kicker reveal">What this is</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "16ch" }}>
              An AI Hiring Advisor that never closes the loop.
            </h2>
            <p className="olv-prose reveal" style={{ marginTop: 22 }}>
              Olevy reads the ATS and HRIS you already run and floats signals about who will actually work out — from interview scorecards, manager notes, and the people you already hired.
            </p>
            <p className="olv-prose reveal">
              It does not hire for you. It does not override a manager. It raises a bubble. <strong>You decide whether it pops.</strong>
            </p>
          </div>
        </section>

        <section className="olv-section tight" id="signals">
          <div className="wrap">
            <p className="olv-kicker reveal">The signals</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)" }}>
              Three kinds of bubble.
            </h2>
            <div className="olv-pillars">
              <Link className="olv-pillar reveal" href="/signals#quality">
                <span>01</span>
                <h3>Improve decision quality</h3>
                <p>Which pre-hire signals actually predicted the people who stayed and grew — not the ones who looked good on paper.</p>
              </Link>
              <Link className="olv-pillar reveal" href="/signals#friction">
                <span>02</span>
                <h3>Find hidden funnel friction</h3>
                <p>Where the loop slows, where Friday interviews fail, where one manager’s scores drift from the rest.</p>
              </Link>
              <Link className="olv-pillar reveal" href="/signals#alignment">
                <span>03</span>
                <h3>Strengthen team alignment</h3>
                <p>Coaching that is not punitive. A nudge to the manager, in the moment, from the outcomes you already have.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="olv-section olv-band" id="human-loop">
          <div className="wrap">
            <LoopBubbles />
          </div>
        </section>

        <section className="olv-section tight" id="moment">
          <div className="wrap">
            <p className="olv-kicker reveal">A live signal</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "14ch" }}>
              This is the moment of choice.
            </h2>
            <div className="olv-signal reveal" style={{ marginTop: 32 }}>
              <div className="il">A bubble just floated</div>
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
                  Pop — advance
                </button>
                <button type="button" className="olv-float">
                  Let it float
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="olv-section tight" id="levy">
          <div className="wrap">
            <p className="olv-kicker reveal">Levy</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "16ch" }}>
              Ask. Then you still decide.
            </h2>
            <p className="olv-prose reveal" style={{ marginTop: 18 }}>
              Levy is the advisor in the loop — not a replacement for judgment. It answers from your real placements, then waits.
            </p>
            <div className="reveal">
              <AskLevy />
            </div>
          </div>
        </section>

        <section className="olv-section tight" id="systems">
          <div className="wrap">
            <p className="olv-kicker reveal">Where bubbles come from</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "16ch" }}>
              Your systems. Already running.
            </h2>
            <p className="olv-prose reveal" style={{ marginTop: 18 }}>
              No migration. No cold start. Olevy activates interview scorecards, hiring-manager feedback, performance reviews, candidate profiles, and pipeline events.
            </p>
            <div className="olv-systems reveal">
              <span>Greenhouse</span>
              <span>Lever</span>
              <span>Workday</span>
              <span>BambooHR</span>
              <span>Slack</span>
              <span>Jira</span>
            </div>
          </div>
        </section>

        <section className="olv-section" id="request-demo">
          <div className="wrap">
            <p className="olv-kicker reveal">Stay in the loop</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "14ch" }}>
              See the bubble. Then you choose.
            </h2>
            <div className="reveal">
              <DemoRequestForm />
            </div>
          </div>
        </section>
      </main>
      <LoopFooter />
    </div>
  );
}

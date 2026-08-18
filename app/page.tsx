import { DemoRequestForm } from "@/components/DemoRequestForm";
import { EditorialFx } from "@/components/EditorialFx";
import { AskLevy } from "@/components/AskLevy";
import { HeroOrbs } from "@/components/HeroOrbs";
import { LoopBubbles } from "@/components/LoopBubbles";
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
              <p className="olv-kicker reveal">Olevy</p>
              <h1 className="olv-title reveal">
                <b>Human</b>
                <i>in the Loop</i>
              </h1>
              <p className="olv-lede reveal">
                Olevy helps hiring teams make better decisions by turning hiring data into clear insights, spotting risk, and guiding managers in the moment.
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
            <div className="olv-open-stage">
              <figure className="olv-open-human">
                <img
                  src="/brand/human-in-the-loop.png"
                  alt="A hiring leader considering a recommendation — the human who stays in the loop."
                />
              </figure>
              <HeroOrbs />
              <DemoRequestForm id="hero-request-demo" className="olv-hero-form vis" />
            </div>
          </div>
        </section>

        <section className="olv-section" id="rule">
          <div className="wrap">
            <h2 className="olv-rule reveal">
              The model recommends. <em>You</em> remain the decision.
            </h2>
            <p className="olv-prose reveal" style={{ marginTop: 28 }}>
              Olevy is an AI Hiring Advisor. It reads the ATS and HRIS you already run, then puts a recommendation in front of a person — never in place of one.
            </p>
          </div>
        </section>

        <section className="olv-section tight" id="what">
          <div className="wrap">
            <p className="olv-kicker reveal">The product</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "16ch" }}>
              Make your next hire the right hire.
            </h2>
            <p className="olv-prose reveal" style={{ marginTop: 22 }}>
              Olevy connects to the systems you already run — your ATS and enterprise data — and maps every pre-hire signal to what actually happened next. Interview scorecards, hiring-manager feedback, performance reviews, candidate profiles, pipeline events.
            </p>
            <p className="olv-prose reveal">
              It does not hire for you. It does not override a manager. It surfaces the call. <strong>You make it.</strong>
            </p>
          </div>
        </section>

        <section className="olv-section tight" id="signals">
          <div className="wrap">
            <p className="olv-kicker reveal">What it surfaces</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)" }}>
              Three things hiring leaders need.
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
                <p>Where the process slows, where Friday interviews fail, where one manager’s scores drift from the rest.</p>
              </Link>
              <Link className="olv-pillar reveal" href="/signals#alignment">
                <span>03</span>
                <h3>Strengthen team alignment</h3>
                <p>Coaching that is not punitive. A nudge to the manager, in the moment, from the outcomes you already have.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="olv-section tight" id="walkthrough">
          <div className="wrap">
            <p className="olv-kicker reveal">Walkthrough</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "14ch" }}>
              See it in the product.
            </h2>
            <div className="hero-video-frame reveal" style={{ marginTop: 32, maxWidth: 720 }}>
              <iframe
                src="https://drive.google.com/file/d/1TwQzwMjdsJ8zWUOWZq10Gv9sRknfmTPi/preview"
                title="Olevy product walkthrough"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="olv-section olv-band" id="practice">
          <div className="wrap">
            <LoopBubbles />
          </div>
        </section>

        <section className="olv-section tight" id="alignment">
          <div className="wrap">
            <p className="olv-kicker reveal">Strengthen team alignment</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "16ch" }}>
              Cross-reference who actually worked out.
            </h2>
            <p className="olv-prose reveal" style={{ marginTop: 22 }}>
              Because Olevy runs on your existing ATS data, it cross-references your real hires — the ones already sourced and screened through your ATS and enterprise systems — and compares who actually succeeded against your future candidate profiles.
            </p>
            <p className="olv-prose reveal">
              Then it delivers real-time behavioral coaching widgets: non-punitive, data-backed guidance, directly to hiring managers.
            </p>
          </div>
        </section>

        <section className="olv-section tight" id="moment">
          <div className="wrap">
            <p className="olv-kicker reveal">A live recommendation</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "14ch" }}>
              The person still decides.
            </h2>
            <div className="olv-signal reveal" style={{ marginTop: 32 }}>
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
            <p className="olv-kicker reveal">AI Advisor</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "16ch" }}>
              Ask Levy. Then you still decide.
            </h2>
            <p className="olv-prose reveal" style={{ marginTop: 18 }}>
              Levy answers from your real placements — traits that predicted success, questions worth asking — and waits. Judgment stays with the hiring manager.
            </p>
            <div className="reveal">
              <AskLevy />
            </div>
          </div>
        </section>

        <section className="olv-section tight" id="systems">
          <div className="wrap">
            <p className="olv-kicker reveal">Connections</p>
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
            <p className="olv-kicker reveal">Demo</p>
            <h2 className="reveal" style={{ marginTop: 12, fontSize: "clamp(32px, 4vw, 48px)", maxWidth: "16ch" }}>
              See it on a process like yours.
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

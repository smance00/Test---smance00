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
            </div>
            <DemoRequestForm id="hero-request-demo" className="olv-hero-form vis" />
          </div>
        </section>

        <section className="olv-section" id="product">
          <div className="wrap">
            <p className="olv-kicker reveal">Product</p>
            <h2 className="olv-body-h2 reveal">Intelligence on the hiring you already do.</h2>
            <p className="olv-prose reveal" style={{ marginTop: 18 }}>
              Olevy reads Greenhouse, Lever, Workday, and BambooHR — scorecards, manager feedback, reviews, pipeline events — and maps those signals to what actually happened next. It surfaces the call. It does not take it.
            </p>
            <ol className="olv-lines">
              <li className="reveal">
                <span>01</span>
                <div>
                  <h3>
                    <Link href="/signals#quality">Improve decision quality</Link>
                  </h3>
                  <p>Which pre-hire signals predicted the people who stayed and grew — not the ones who looked good on paper.</p>
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
                  <p>A nudge to the manager, in the moment, from the outcomes you already have. Coaching, not a scolding.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

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
      </main>
      <LoopFooter />
    </div>
  );
}

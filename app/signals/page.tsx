import type { Metadata } from "next";
import { EditorialFx } from "@/components/EditorialFx";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signals — Olevy",
  description: "The three bubbles Olevy floats: decision quality, hidden friction, team alignment.",
};

export default function SignalsPage() {
  return (
    <div className="olv">
      <EditorialFx />
      <LoopChrome />
      <main className="olv-page">
        <div className="wrap">
          <p className="olv-kicker reveal">Signals</p>
          <h1 className="reveal">What Olevy surfaces.</h1>
          <p className="olv-prose reveal">
            Olevy does not invent a new system of record. It reads the ATS and HRIS you already have, and shows HR and hiring leaders three things.
          </p>
          <div className="olv-chapters">
            <article id="quality" className="reveal">
              <p className="olv-kicker">01</p>
              <h2>Improve decision quality</h2>
              <p>
                The pedigree trap is a bubble that looks solid. Olevy maps pre-hire signals — a take-home score, a culture note, a school — to who was still on the team eighteen months later, and who was fast-tracked. The next shortlist is built on who worked out, not who photographed well.
              </p>
            </article>
            <article id="friction" className="reveal">
              <p className="olv-kicker">02</p>
              <h2>Find hidden funnel friction</h2>
              <p>
                Loops lengthen. Friday interviews reject. One manager scores a point and a half below the rest. These are not dashboards. They are bubbles that appear before a great candidate is gone. You pop the flag, or you let the week continue. Either way, you saw it.
              </p>
            </article>
            <article id="alignment" className="reveal">
              <p className="olv-kicker">03</p>
              <h2>Strengthen team alignment</h2>
              <p>
                Because Olevy runs on your existing ATS data, it cross-references your real hires — the ones already sourced and screened through your ATS and enterprise systems — and compares who actually succeeded against your future candidate profiles.
              </p>
              <p>
                Then it delivers real-time behavioral coaching widgets: non-punitive, data-backed guidance, directly to hiring managers. The manager stays in control. The model does not scold.
              </p>
            </article>
          </div>
          <p className="reveal" style={{ marginTop: 48 }}>
            <Link className="olv-nav-cta" href="/demo">
              Book a demo
            </Link>
          </p>
        </div>
      </main>
      <LoopFooter />
    </div>
  );
}

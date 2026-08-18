import type { Metadata } from "next";
import { EditorialFx } from "@/components/EditorialFx";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signals — Olevy",
  description: "What Olevy surfaces: decision quality, hidden funnel friction, and team alignment.",
};

export default function SignalsPage() {
  return (
    <div className="edh">
      <EditorialFx />
      <LoopChrome />
      <main className="edh-page">
        <div className="container">
          <p className="eyebrow reveal">Signals</p>
          <h1 className="reveal">What Olevy surfaces.</h1>
          <p className="prose reveal">
            Olevy does not invent a new system of record. It reads the ATS and HRIS you already have, and shows HR and hiring leaders three things.
          </p>
          <div className="edh-chapters">
            <article id="quality" className="reveal">
              <p className="eyebrow">01</p>
              <h2>Improve decision quality</h2>
              <p>
                Olevy maps pre-hire signals — a take-home score, a culture note, a school — to who was still on the team eighteen months later, and who was fast-tracked. The next shortlist is built on who worked out, not who photographed well.
              </p>
            </article>
            <article id="friction" className="reveal">
              <p className="eyebrow">02</p>
              <h2>Find hidden funnel friction</h2>
              <p>
                Interview loops lengthen. Friday interviews reject. One manager scores a point and a half below the rest. Olevy flags that before a great candidate is gone. You act on it, or you don’t. Either way, you saw it.
              </p>
            </article>
            <article id="alignment" className="reveal">
              <p className="eyebrow">03</p>
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
            <Link className="nav-demo" href="/#hero-request-demo">
              Request a demo
            </Link>
          </p>
        </div>
      </main>
      <LoopFooter />
    </div>
  );
}

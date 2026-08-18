import type { Metadata } from "next";
import { EditorialFx } from "@/components/EditorialFx";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concept — Olevy",
  description: "Human in the Loop: AI floats the hire. You decide if it pops.",
};

export default function ConceptPage() {
  return (
    <div className="olv">
      <EditorialFx />
      <LoopChrome />
      <main className="olv-page">
        <div className="wrap">
          <p className="olv-kicker reveal">Concept</p>
          <h1 className="reveal">
            Human
            <br />
            in the Loop
          </h1>
          <p className="olv-prose reveal">
            Most hiring software tries to finish the sentence for you. Rank the candidate. Advance the stage. Close the req. The loop snaps shut, and the person who has to live with the hire is no longer in it.
          </p>
          <p className="olv-prose reveal">
            Olevy is built the other way. The model is allowed to be certain. The human is required to be present.
          </p>
          <p className="olv-prose reveal">
            We picture every recommendation as a soap bubble — iridescent, brief, easy to break. A finger hovers. That millimeter is the product. Pop, and a decision enters the world. Leave it, and the air keeps the signal. Both outcomes teach the next bubble what your team actually values.
          </p>
          <p className="olv-prose reveal">
            That is why Olevy connects to the ATS and HRIS you already run, and why it will not replace a hiring manager. It cross-references the people who already worked out against the people you have not hired yet. Then it floats a coaching widget, a risk, a name. Non-punitive. Data-backed. Yours to pop.
          </p>
          <p className="olv-prose reveal">
            Human in the Loop is not a disclaimer. It is the brand. If the bubble pops without you, we have failed.
          </p>
          <p className="reveal" style={{ marginTop: 36 }}>
            <Link className="olv-nav-cta" href="/signals">
              See the signals
            </Link>
          </p>
        </div>
      </main>
      <LoopFooter />
    </div>
  );
}

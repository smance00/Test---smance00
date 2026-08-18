import type { Metadata } from "next";
import { EditorialFx } from "@/components/EditorialFx";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concept — Olevy",
  description: "This cycle’s idea: the model recommends, a person remains the decision.",
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
            Most hiring software tries to finish the sentence for you. Rank the candidate. Advance the stage. Close the req. The person who has to live with the hire is no longer in it.
          </p>
          <p className="olv-prose reveal">
            Olevy is built the other way. The model is allowed to be certain. The human is required to be present.
          </p>
          <p className="olv-prose reveal">
            This cycle we call that Human in the Loop — a campaign, not the product name. The product is an AI Hiring Advisor on the ATS and HRIS you already run. It surfaces decision quality, hidden funnel friction, and team alignment. A person still makes the call.
          </p>
          <p className="olv-prose reveal">
            Next year the language may change. The job will not: recommend, then wait. Never hire on someone&apos;s behalf.
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

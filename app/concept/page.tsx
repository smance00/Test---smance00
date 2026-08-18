import type { Metadata } from "next";
import Link from "next/link";
import { MarketingNav } from "@/components/MarketingNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Concept — Olevy",
  description: "This cycle’s idea: the model recommends, a person remains the decision.",
};

export default function ConceptPage() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <MarketingNav />
      <main className="container-marketing py-16 md:py-24">
        <p className="text-sm font-semibold text-muted">Concept</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Human
          <br />
          in the Loop
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg text-muted">
          <p>Most hiring software tries to finish the sentence for you. Rank the candidate. Advance the stage. Close the req. The person who has to live with the hire is no longer in it.</p>
          <p>Olevy is built the other way. The model is allowed to be certain. The human is required to be present.</p>
          <p>This cycle we call that Human in the Loop — a campaign, not the product name. The product is an AI Hiring Advisor on the ATS and HRIS you already run.</p>
        </div>
        <p className="mt-10">
          <Link className="btn-primary" href="/">
            Back to Olevy
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}

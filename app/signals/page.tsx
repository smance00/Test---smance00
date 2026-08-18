import type { Metadata } from "next";
import Link from "next/link";
import { MarketingNav } from "@/components/MarketingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { DEMO_MAIL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Signals — Olevy",
  description: "What Olevy surfaces: decision quality, hidden funnel friction, and team alignment.",
};

export default function SignalsPage() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <MarketingNav />
      <main className="container-marketing py-16 md:py-24">
        <p className="text-sm font-semibold text-muted">Signals</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          What Olevy surfaces.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Olevy does not invent a new system of record. It reads the ATS and HRIS you already have, and shows HR and hiring leaders three things.
        </p>
        <div className="mt-14 grid gap-12">
          <article id="quality">
            <p className="text-sm font-semibold text-muted">01</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em]">Improve decision quality</h2>
            <p className="mt-4 max-w-2xl text-muted">
              Olevy maps pre-hire signals — a take-home score, a culture note, a school — to who was still on the team eighteen months later, and who was fast-tracked. The next shortlist is built on who worked out, not who photographed well.
            </p>
          </article>
          <article id="friction">
            <p className="text-sm font-semibold text-muted">02</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em]">Find hidden funnel friction</h2>
            <p className="mt-4 max-w-2xl text-muted">
              Interview loops lengthen. Friday interviews reject. One manager scores a point and a half below the rest. Olevy flags that before a great candidate is gone. You act on it, or you don’t. Either way, you saw it.
            </p>
          </article>
          <article id="alignment">
            <p className="text-sm font-semibold text-muted">03</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em]">Strengthen team alignment</h2>
            <p className="mt-4 max-w-2xl text-muted">
              Because Olevy runs on your existing ATS data, it cross-references your real hires and compares who actually succeeded against your future candidate profiles. Then it delivers real-time behavioral coaching: non-punitive, data-backed guidance, directly to hiring managers.
            </p>
          </article>
        </div>
        <p className="mt-12">
          <a className="btn-primary" href={DEMO_MAIL}>
            Book a demo
          </a>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}

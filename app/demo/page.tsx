import type { Metadata } from "next";
import { MarketingNav } from "@/components/MarketingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { DEMO_MAIL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a demo — Olevy",
  description: "Book a walkthrough and we'll show you the intelligence hiding in your existing ATS.",
};

export default function DemoPage() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <MarketingNav />
      <main className="container-marketing py-16 md:py-24">
        <p className="text-sm font-semibold text-muted">Demo</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          See your hiring, clearly.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Book a walkthrough and we&apos;ll show you the intelligence hiding in your existing ATS.
        </p>
        <p className="mt-10">
          <a className="btn-primary" href={DEMO_MAIL}>
            Book a demo
          </a>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}

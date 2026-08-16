"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function DashboardPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(sessionStorage.getItem("olevy-session"));
  }, []);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="border-b border-border bg-surface/85 backdrop-blur-xl">
        <div className="container-app flex h-16 items-center justify-between">
          <Link href="/" aria-label="Olevy home">
            <BrandMark height={22} />
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted sm:inline">
              {email ?? "Signed in"}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container-app py-12 md:py-16">
        <p className="eyebrow">Workspace</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.03em]">
          Hiring intelligence
        </h1>
        <p className="mt-3 max-w-xl text-muted">
          You&apos;re in. This copy of Olevy shows the marketing site and a local sign-in flow. Connect your ATS to activate scorecards, pipeline events, and manager coaching.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { label: "Connections", value: "ATS + HRIS", note: "Greenhouse, Lever, Workday" },
            { label: "Signals", value: "6 live", note: "Calibration, fatigue, drift" },
            { label: "Coaching", value: "Ready", note: "Non-punitive manager widgets" },
          ].map((card) => (
            <div className="card p-6" key={card.label}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
                {card.label}
              </p>
              <p className="mt-3 font-display text-2xl font-bold tracking-[-0.02em]">{card.value}</p>
              <p className="mt-2 text-sm text-muted">{card.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-ghost">
            Back to site
          </Link>
          <Link href="/#learn" className="btn-primary">
            See intelligence
          </Link>
        </div>
      </main>
    </div>
  );
}

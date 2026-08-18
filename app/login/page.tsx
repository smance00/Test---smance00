import Link from "next/link";
import { ChartColumn, ClipboardCheck, Gauge, Search } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { LoginForm } from "@/components/LoginForm";
import { ThemeToggle } from "@/components/ThemeToggle";

const FEATURES = [
  { icon: Search, label: "Search across millions of profiles" },
  { icon: ChartColumn, label: "Track funnel performance" },
  { icon: ClipboardCheck, label: "Capture hiring feedback" },
  { icon: Gauge, label: "Identify bottlenecks before they slow growth" },
];

export default function LoginPage() {
  return (
    <div className="relative grid min-h-dvh lg:grid-cols-2">
      <div
        className="relative hidden flex-col justify-between overflow-hidden p-12 text-white lg:flex"
        style={{ background: "linear-gradient(150deg, #3A2BA8 0%, #5B4BE8 55%, #7C5CFF 100%)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <Link className="relative w-fit" href="/">
          <BrandMark height={26} variant="dark" />
        </Link>
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Human in the Loop
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.03] tracking-[-0.02em]">
            AI floats
            <br />
            the hire.
          </h1>
          <p className="mt-5 max-w-md leading-relaxed text-white/80">
            Olevy combines talent discovery, hiring operations, and decision intelligence into one hiring workspace.
          </p>
          <ul className="mt-8 space-y-3.5 text-sm">
            {FEATURES.map((feature) => (
              <li className="flex items-center gap-3" key={feature.label}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <feature.icon className="h-4 w-4" />
                </span>
                {feature.label}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative text-sm text-white/70">Olevy — embedded hiring operations.</p>
      </div>

      <div className="relative flex flex-col">
        <div className="flex items-center justify-between p-6">
          <Link className="lg:hidden" href="/">
            <BrandMark height={24} />
          </Link>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center px-6 pb-16">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

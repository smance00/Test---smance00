import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function LoopChrome() {
  return (
    <header className="olv-nav">
      <Link className="logo" aria-label="Olevy home" href="/">
        <BrandMark height={22} variant="light" />
      </Link>
      <nav>
        <Link href="/concept">Concept</Link>
        <Link href="/signals">Signals</Link>
        <Link href="/#levy">Advisor</Link>
        <Link className="olv-nav-cta" href="/demo">
          Book a demo
        </Link>
      </nav>
    </header>
  );
}

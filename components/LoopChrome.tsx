import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function LoopChrome() {
  return (
    <header className="olv-nav">
      <Link className="logo" aria-label="Olevy home" href="/">
        <BrandMark height={22} variant="light" />
      </Link>
      <nav>
        <Link className="olv-nav-cta" href="/#hero-request-demo">
          Request a demo
        </Link>
      </nav>
    </header>
  );
}

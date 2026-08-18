import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function LoopChrome() {
  return (
    <header className="nav">
      <div className="container nav-in">
        <Link className="logo" aria-label="Olevy home" href="/">
          <BrandMark height={22} variant="light" />
        </Link>
        <div className="nav-right">
          <Link className="nav-demo" href="/#hero-request-demo">
            Request a demo
          </Link>
        </div>
      </div>
    </header>
  );
}

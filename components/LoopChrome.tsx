import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { DEMO_MAIL } from "@/lib/utils";

export function LoopChrome() {
  return (
    <header className="nav">
      <div className="container nav-in">
        <Link className="logo" aria-label="Olevy home" href="/">
          <BrandMark height={22} />
        </Link>
        <div className="nav-right">
          <a className="nav-demo" href={DEMO_MAIL}>
            Book a demo
          </a>
        </div>
      </div>
    </header>
  );
}

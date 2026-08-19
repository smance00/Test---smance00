import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function LoopChrome() {
  return (
    <header className="nav">
      <div className="container nav-in">
        <Link className="logo" aria-label="Olevy home" href="/">
          <BrandMark height={22} />
        </Link>
        <div className="nav-right">
          <a className="nav-demo" href="/#request-demo">
            Request a demo
          </a>
        </div>
      </div>
    </header>
  );
}

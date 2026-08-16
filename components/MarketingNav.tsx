import Link from "next/link";
import { Calendar } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DEMO_MAIL } from "@/lib/utils";

export function MarketingNav() {
  return (
    <div className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur-xl">
      <header className="container-marketing flex items-center justify-between gap-4 py-3.5">
        <div className="flex items-center gap-8">
          <Link aria-label="Olevy home" className="flex items-center gap-2.5" href="/">
            <BrandMark height={22} />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
            <Link className="transition-colors hover:text-fg" href="/">
              Home
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a className="btn-primary" href={DEMO_MAIL}>
            <Calendar className="h-4 w-4" /> Book a Consultation
          </a>
        </div>
      </header>
    </div>
  );
}

import Link from "next/link";

export function LoopFooter() {
  return (
    <footer className="olv-foot">
      <p>Olevy — Human in the Loop.</p>
      <nav>
        <Link href="/#overview">Product</Link>
        <Link href="/signals">Signals</Link>
        <Link href="/concept">This cycle</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/blog">Notes</Link>
        <a href="mailto:info@joinolevy.com">info@joinolevy.com</a>
      </nav>
    </footer>
  );
}

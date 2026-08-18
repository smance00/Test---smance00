import Link from "next/link";

export function LoopFooter() {
  return (
    <footer className="olv-foot">
      <p>Olevy — Human in the Loop.</p>
      <nav>
        <Link href="/#hero-request-demo">Request a demo</Link>
        <Link href="/blog">Notes</Link>
        <a href="mailto:info@joinolevy.com">info@joinolevy.com</a>
      </nav>
    </footer>
  );
}

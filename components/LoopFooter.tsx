import Link from "next/link";

export function LoopFooter() {
  return (
    <footer className="foot">
      <p>Olevy — The operational intelligence layer for hiring.</p>
      <nav>
        <a href="/#request-demo">Request a demo</a>
        <Link href="/blog">Blog</Link>
        <a href="mailto:info@joinolevy.com">info@joinolevy.com</a>
      </nav>
    </footer>
  );
}

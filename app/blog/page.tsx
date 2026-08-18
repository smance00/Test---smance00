import type { Metadata } from "next";
import Link from "next/link";
import { EditorialFx } from "@/components/EditorialFx";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes — Olevy",
  description: "Notes on hiring, judgment, and staying in the loop.",
};

export default function BlogPage() {
  return (
    <div className="olv">
      <EditorialFx />
      <LoopChrome />
      <main className="olv-page">
        <div className="wrap">
          <p className="olv-kicker reveal">Notes</p>
          <h1 className="reveal">Signals we wrote down.</h1>
          <p className="olv-prose reveal">
            Hiring notes from the loop — not playbooks that close it for you.
          </p>
          <div className="olv-chapters">
            {posts.map((post) => (
              <article key={post.slug} className="reveal">
                <p className="olv-kicker">{post.category}</p>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <p style={{ marginTop: 10, fontSize: 13 }}>
                  {post.dateLabel} · {post.minutes} min
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <LoopFooter />
    </div>
  );
}

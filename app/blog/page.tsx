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
    <div className="edh">
      <EditorialFx />
      <LoopChrome />
      <main className="edh-page">
        <div className="container">
          <p className="eyebrow reveal">Notes</p>
          <h1 className="reveal">Signals we wrote down.</h1>
          <p className="prose reveal">
            Hiring notes from the loop — not playbooks that close it for you.
          </p>
          <div className="edh-chapters">
            {posts.map((post) => (
              <article key={post.slug} className="reveal">
                <p className="eyebrow">{post.category}</p>
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

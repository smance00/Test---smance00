import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialFx } from "@/components/EditorialFx";
import { LoopChrome } from "@/components/LoopChrome";
import { LoopFooter } from "@/components/LoopFooter";
import { getPost, getRelatedPosts, posts } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Notes — Olevy" };
  return {
    title: `${post.title} — Olevy`,
    description: post.excerpt,
  };
}

export default function BlogArticlePage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug);

  return (
    <div className="olv">
      <EditorialFx />
      <LoopChrome />
      <main className="olv-page">
        <div className="wrap">
          <Link href="/blog" className="olv-kicker">
            ← Notes
          </Link>
          <h1 className="reveal" style={{ marginTop: 16 }}>
            {post.title}
          </h1>
          <p className="olv-prose reveal">
            {post.dateLabel} · {post.minutes} min
          </p>
          {post.paragraphs.map((paragraph) => (
            <p className="olv-prose reveal" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="olv-chapters" style={{ marginTop: 64 }}>
            {related.map((item) => (
              <article key={item.slug} className="reveal">
                <p className="olv-kicker">Also</p>
                <h2>
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </h2>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <LoopFooter />
    </div>
  );
}

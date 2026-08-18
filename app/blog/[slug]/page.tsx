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
    <div className="edh">
      <EditorialFx />
      <LoopChrome />
      <main className="edh-page">
        <div className="container">
          <Link href="/blog" className="eyebrow">
            ← Notes
          </Link>
          <h1 className="reveal" style={{ marginTop: 16 }}>
            {post.title}
          </h1>
          <p className="prose reveal">
            {post.dateLabel} · {post.minutes} min
          </p>
          {post.paragraphs.map((paragraph) => (
            <p className="prose reveal" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="edh-chapters" style={{ marginTop: 64 }}>
            {related.map((item) => (
              <article key={item.slug} className="reveal">
                <p className="eyebrow">Also</p>
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

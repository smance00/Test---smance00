import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarketingNav } from "@/components/MarketingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getPost, getRelatedPosts, posts } from "@/lib/posts";
import { DEMO_MAIL } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Blog — Olevy" };
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
    <div className="min-h-dvh overflow-x-hidden bg-bg text-fg">
      <MarketingNav />
      <article className="container-marketing py-14 md:py-20">
        <Link href="/blog" className="text-sm font-medium text-muted transition-colors hover:text-fg">
          ← Back to blog
        </Link>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
          {post.category}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] md:text-[3.25rem]">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {post.dateLabel} · {post.minutes} min read · Olevy team
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-fg/90">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 max-w-2xl rounded-2xl border border-brand/30 bg-brand/5 p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
            Hiring for a role like this?
          </p>
          <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.02em]">
            Olevy sources, operates, and advises so you can hire faster — as an embedded extension of your team.
          </h3>
          <a className="btn-primary mt-5" href={DEMO_MAIL}>
            Book a Consultation
          </a>
        </div>
      </article>

      <section className="container-marketing pb-16">
        <p className="eyebrow">Keep reading</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {related.map((item) => (
            <Link className="card card-hover group flex flex-col p-6" href={`/blog/${item.slug}`} key={item.slug}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
                {item.category}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug tracking-[-0.01em] group-hover:text-brand">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.excerpt}</p>
              <p className="mt-4 text-xs font-semibold text-fg">Read →</p>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter variant="marketing" />
    </div>
  );
}

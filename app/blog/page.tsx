import type { Metadata } from "next";
import Link from "next/link";
import { MarketingNav } from "@/components/MarketingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Olevy",
  description:
    "Playbooks and lessons on hiring operations, data, and making better decisions — from the team behind Olevy.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg text-fg">
      <MarketingNav />
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dotgrid opacity-70" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
        />
        <div className="container-marketing relative py-14 md:py-20">
          <p className="eyebrow inline-flex items-center gap-2">
            Blog{" "}
            <svg viewBox="0 0 130 20" fill="none" aria-hidden="true" className="h-4 w-20 text-accent">
              <path
                d="M3 11C14 2 25 18 36 10C47 2 58 18 69 10C80 2 91 18 102 10C110 4 118 6 127 10"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] md:text-[3.25rem]">
            Insights on hiring &amp; building teams
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Playbooks and lessons on hiring operations, data, and making better decisions — from the team behind Olevy.
          </p>
        </div>
      </section>

      <section className="container-marketing py-14 md:py-20">
        <Link
          className="card card-hover group grid gap-6 overflow-hidden p-6 md:grid-cols-2 md:p-8"
          href={`/blog/${featured.slug}`}
        >
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
              {featured.category}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-normal leading-snug tracking-[-0.01em] group-hover:text-brand md:text-[2rem]">
              {featured.title}
            </h2>
            <p className="mt-3 text-muted">{featured.excerpt}</p>
            <p className="mt-5 text-xs text-muted">
              {featured.dateLabel} · {featured.minutes} min read
            </p>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand/10 to-accent/20 p-10">
            <span className="font-serif text-7xl font-normal text-brand/80">{featured.letter}</span>
          </div>
        </Link>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link className="card card-hover group flex flex-col p-6" href={`/blog/${post.slug}`} key={post.slug}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
                {post.category}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug tracking-[-0.01em] group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <p className="mt-4 text-xs text-muted">
                {post.dateLabel} · {post.minutes} min read
              </p>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter variant="marketing" />
    </div>
  );
}

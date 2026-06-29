import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/pages";
import { images } from "@/lib/images";
import { CtaBand } from "@/components/site/CtaBand";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Full-width hero */}
      <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden bg-teal-deep text-paper md:min-h-[58vh]">
        <Image
          src={images.treatmentRoom.src}
          alt={images.treatmentRoom.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-teal-deep via-teal-deep/75 to-teal-deep/35" />
        <div className="shell w-full pb-14 pt-28 md:pb-20 md:pt-32">
          <nav className="text-xs text-paper/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-paper">Home</Link>
            <span className="px-2 text-paper/40">/</span>
            <Link href="/blog" className="hover:text-paper">Blog</Link>
            <span className="px-2 text-paper/40">/</span>
            <span className="text-paper">{post.category}</span>
          </nav>
          <p className="eyebrow mt-6 text-clay-soft">{post.category} · {date}</p>
          <h1 className="mt-4 max-w-4xl text-balance text-[length:var(--text-display)] text-paper">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="bg-bone">
        <div className="shell">
          <div className="mx-auto max-w-3xl py-16 md:py-24">
            <div className="space-y-5 text-lg leading-relaxed text-ink/90">
              <p>
                A vasectomy is one of the simplest, safest and most effective forms
                of permanent contraception available — and at Vasectomy Australia,
                it&apos;s all we do.
              </p>
              <p>
                Every procedure is performed by Dr Geoff Cashion or Dr Matt Valentine
                using a no-scalpel, open-ended technique under local anaesthetic.
                Most men are in and out in about 15 minutes and back to normal within
                a week.
              </p>
              <p className="rounded-[2px] border-l-2 border-clay bg-paper py-1 pl-5 text-ink-soft">
                Full article content for this post will be managed in the CMS — this
                is a styled template showing how each article will read.
              </p>
              <p>
                If you have questions about whether a vasectomy is right for you, our
                team offers free phone consultations. We&apos;re always happy to talk
                it through, with no pressure either way.
              </p>
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline">
                <span className="text-clay">←</span> Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}

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
      <article className="bg-bone">
        <div className="shell pt-14 md:pt-20">
          <nav className="text-xs text-ink-soft" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span className="px-2 text-line">/</span>
            <Link href="/blog" className="hover:text-ink">Blog</Link>
            <span className="px-2 text-line">/</span>
            <span className="text-ink">{post.category}</span>
          </nav>

          <div className="mx-auto mt-8 max-w-3xl">
            <p className="eyebrow text-clay">{post.category} · {date}</p>
            <h1 className="mt-5 text-balance text-[length:var(--text-display)]">{post.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{post.excerpt}</p>
          </div>

          <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-[2px] bg-sand">
            <Image src={images.treatmentRoom.src} alt={images.treatmentRoom.alt} fill priority sizes="(max-width:1024px) 100vw, 56rem" className="object-cover" />
          </div>

          <div className="mx-auto max-w-3xl py-16 md:py-20">
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

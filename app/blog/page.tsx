import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/pages";
import { images, type SiteImage } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Blog — Vasectomy Advice & Information",
  description:
    "Clear, practical articles on no-scalpel vasectomy from the team at Vasectomy Australia — the procedure, recovery, fees and more.",
};

const postImages: SiteImage[] = [
  images.consult,
  images.procedure,
  images.recovery,
  images.treatmentRoom,
  images.anaesthetic,
  images.geoffProcedure,
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  const featuredImg = postImages[0];

  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="Blog"
        title="Advice, answers and the occasional myth-bust."
        lead="Clear, practical reading on no-scalpel vasectomy — from what to expect on the day to getting your Medicare rebate."
        image={images.consult}
      />

      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          {/* Featured */}
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group grid items-center gap-y-8 lg:grid-cols-12 lg:gap-x-14">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand lg:col-span-7">
                <Image src={featuredImg.src} alt={featuredImg.alt} fill priority sizes="(max-width:1024px) 100vw, 58vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="lg:col-span-5">
                <p className="eyebrow text-clay">{featured.category} · {formatDate(featured.date)}</p>
                <h2 className="mt-4 text-balance font-display text-3xl leading-tight md:text-[2.75rem]">
                  {featured.title}
                </h2>
                <p className="mt-5 leading-relaxed text-ink-soft">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal">
                  Read article <span className="text-clay transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </Reveal>

          {/* List */}
          <div className="mt-20 border-t border-ink/15">
            {rest.map((post, i) => (
              <Reveal as="div" key={post.slug} delay={Math.min(i * 60, 240)}>
                <Link href={`/blog/${post.slug}`} className="group grid items-center gap-x-8 gap-y-4 border-b border-line py-8 sm:grid-cols-[10rem_1fr_auto] sm:py-10">
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-sand sm:w-40">
                    <Image src={postImages[(i + 1) % postImages.length].src} alt="" fill sizes="160px" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div>
                    <p className="eyebrow text-clay">{post.category} · {formatDate(post.date)}</p>
                    <h3 className="mt-2 font-display text-2xl leading-snug">{post.title}</h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">{post.excerpt}</p>
                  </div>
                  <span className="hidden text-clay transition-transform group-hover:translate-x-1 sm:block">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

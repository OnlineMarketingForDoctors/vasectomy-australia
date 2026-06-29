import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteImage } from "@/lib/images";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: SiteImage;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bone">
      <div className="shell pt-14 md:pt-20">
        <Reveal>
          <nav className="text-xs text-ink-soft" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span className="px-2 text-line">/</span>
            <span className="text-ink">{crumb}</span>
          </nav>
          <p className="eyebrow mt-8 text-clay">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-[length:var(--text-display)]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {lead}
            </p>
          ) : null}
        </Reveal>

        {image ? (
          <Reveal delay={120}>
            <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-sand md:mt-14">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 border-b border-line" />
        )}
      </div>
    </section>
  );
}

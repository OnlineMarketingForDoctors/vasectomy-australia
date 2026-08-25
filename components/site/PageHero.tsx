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
  imagePosition = "object-center",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: SiteImage;
  crumb: string;
  /** Tailwind object-position class controlling how the image is cropped. */
  imagePosition?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden bg-teal-deep text-paper md:min-h-[60vh]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className={`-z-10 object-cover ${imagePosition}`}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-teal-deep via-teal-deep/75 to-teal-deep/35" />

      <div className="shell w-full pb-14 pt-28 md:pb-20 md:pt-32">
        <Reveal>
          <nav className="text-xs text-paper/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-paper">
              Home
            </Link>
            <span className="px-2 text-paper/40">/</span>
            <span className="text-paper">{crumb}</span>
          </nav>
          <p className="eyebrow mt-6 text-clay-soft">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-[length:var(--text-display)] text-paper">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

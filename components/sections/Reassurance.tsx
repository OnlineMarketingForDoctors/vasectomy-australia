import Image from "next/image";
import { reassurance } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function Reassurance() {
  return (
    <section className="bg-teal-deep text-paper">
      <div className="grid lg:grid-cols-12">
        {/* Image */}
        <div className="relative min-h-[60vw] lg:col-span-7 lg:min-h-[42rem]">
          <Image
            src={images.consult.src}
            alt={images.consult.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>

        {/* Copy */}
        <div className="flex items-center lg:col-span-5">
          <div className="px-6 py-16 md:px-12 lg:py-20 xl:px-16">
            <Reveal>
              <p className="eyebrow text-clay-soft">{reassurance.eyebrow}</p>
              <h2 className="mt-5 text-balance text-[length:var(--text-headline)] text-paper">
                {reassurance.title}
              </h2>
              <p className="mt-6 leading-relaxed text-paper/75">
                {reassurance.body}
              </p>
              <ul className="mt-9 space-y-4">
                {reassurance.points.map((p) => (
                  <li key={p} className="flex gap-3 border-t border-paper/15 pt-4">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-5 w-5 shrink-0 text-clay-soft"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="m5 10.5 3.2 3.2L15 7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-paper/90">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

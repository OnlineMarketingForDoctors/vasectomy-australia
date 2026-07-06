import Image from "next/image";
import { doctorsIntro as introContent } from "@/lib/content";
import { images, type SiteImage } from "@/lib/images";
import type { SiteDoctor } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";

function DoctorBlock({ doctor, flip }: { doctor: SiteDoctor; flip: boolean }) {
  return (
    <div className="grid items-center gap-y-8 lg:grid-cols-12 lg:gap-x-12">
      {/* Portrait */}
      <Reveal
        className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}
      >
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft">
            <Image
              src={doctor.image.src}
              alt={doctor.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top"
            />
          </div>
          <div
            className={`absolute bottom-4 max-w-[12rem] rounded-[3px] bg-paper p-5 shadow-soft ring-1 ring-line ${
              flip ? "left-4 lg:-bottom-6 lg:-left-6" : "right-4 lg:-bottom-6 lg:-right-6"
            }`}
          >
            <p className="figure text-4xl leading-none text-teal">{doctor.badge.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-soft">
              {doctor.badge.label}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Bio */}
      <div className={`lg:col-span-6 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
        <Reveal>
          <p className="eyebrow text-clay">{doctor.regions}</p>
          <h3 className="mt-4 text-[length:var(--text-headline)]">
            {doctor.name}
          </h3>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-ink-soft">
            {doctor.role}
          </p>
          <p className="mt-6 font-display text-2xl leading-snug text-teal">
            {doctor.lead}
          </p>
          <div className="mt-5 space-y-4 text-ink-soft">
            {doctor.bio.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <ul className="mt-7 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {doctor.credentials.map((c) => (
              <li
                key={c}
                className="flex gap-3 border-t border-line pt-3 text-sm text-ink"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

export function Doctors({
  intro = introContent,
  wideImage = images.doctorsDiscussion,
  list,
}: {
  intro?: typeof introContent;
  wideImage?: SiteImage;
  list: SiteDoctor[];
}) {
  return (
    <section id="doctors" className="scroll-mt-24 bg-bone">
      <div className="shell py-24 md:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-clay">{intro.eyebrow}</p>
            <h2 className="mt-5 text-[length:var(--text-display)]">
              {intro.title}
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-ink-soft">
              {intro.body}
            </p>
          </Reveal>
        </div>

        {/* Both doctors, wide */}
        <Reveal delay={120}>
          <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-sand shadow-soft md:mt-16">
            <Image
              src={wideImage.src}
              alt={wideImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-20 space-y-24 md:mt-24 md:space-y-32">
          {list.map((doctor, i) => (
            <DoctorBlock key={doctor.id} doctor={doctor} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

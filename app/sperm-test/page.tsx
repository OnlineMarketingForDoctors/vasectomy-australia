import type { Metadata } from "next";
import { spermTest } from "@/lib/pages";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { sanityFetch, withCms } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Post-Vasectomy Semen Testing",
  description:
    "How to confirm your vasectomy has worked — complete a Post-Vasectomy Semen Analysis (PVSA) at 3 months and 20 ejaculations, by mail-in kit or at a pathology lab.",
};

const QUERY = `*[_id == "spermTestPage"][0]{
  intro,
  important,
  options[]{ title, body, cta{ label, href } },
  note
}`;

export default async function SpermTestPage() {
  const c = withCms(spermTest, await sanityFetch<Partial<typeof spermTest>>(QUERY));

  return (
    <>
      <PageHero
        crumb="Semen Testing"
        eyebrow="Confirming success"
        title="Post-vasectomy semen testing."
        lead={c.intro}
        image={images.anaesthetic}
      />

      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <Reveal>
            <p className="max-w-3xl border-l-2 border-clay pl-5 font-display text-2xl leading-snug text-ink">
              {c.important}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {c.options.map((o, i) => (
              <Reveal as="div" key={o.title} delay={i * 100}>
                <div className="flex h-full flex-col border border-line bg-paper p-8">
                  <span className="figure text-3xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-4 font-display text-2xl">{o.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{o.body}</p>
                  <a
                    href={o.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
                  >
                    {o.cta.label}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-12 max-w-3xl leading-relaxed text-ink-soft">{c.note}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

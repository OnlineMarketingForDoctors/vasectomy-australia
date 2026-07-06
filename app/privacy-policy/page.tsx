import type { Metadata } from "next";
import { privacy } from "@/lib/pages";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { sanityFetch, withCms } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vasectomy Australia collects, uses and protects your personal and health information.",
};

const QUERY = `*[_id == "privacyPage"][0]{
  intro,
  sections[]{ title, body }
}`;

export default async function PrivacyPage() {
  const c = withCms(privacy, await sanityFetch<Partial<typeof privacy>>(QUERY));

  return (
    <>
      <PageHero
        crumb="Privacy Policy"
        eyebrow="Privacy"
        title="Your privacy matters."
        lead={c.intro}
        image={images.treatmentRoom}
      />

      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            {c.sections.map((s, i) => (
              <Reveal as="div" key={s.title} delay={Math.min(i * 50, 200)}>
                <div className="border-t border-line py-7 first:border-t-0 first:pt-0">
                  <h2 className="font-display text-2xl">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

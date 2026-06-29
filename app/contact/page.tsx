import Link from "next/link";
import type { Metadata } from "next";
import { contact } from "@/lib/pages";
import { site } from "@/lib/content";
import { images } from "@/lib/images";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { GoogleBadge } from "@/components/ui/GoogleBadge";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vasectomy Australia. Call 1800 SNIPME (1800 764 763), email info@vasectomyaustralia.com.au, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact us"
        title="We're glad to help."
        lead={contact.intro}
        image={images.reception}
      />

      <section className="bg-bone">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-14">
            {/* Details */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-[length:var(--text-headline)]">Contact information</h2>
                <dl className="mt-8 space-y-6">
                  <div className="border-t border-line pt-4">
                    <dt className="eyebrow text-ink-soft">Phone</dt>
                    <dd className="mt-2">
                      <a href={site.phoneHref} className="font-display text-2xl text-ink hover:text-teal">
                        {site.phoneLabel}
                      </a>
                      <span className="ml-2 text-ink-soft">({site.phoneSub})</span>
                    </dd>
                  </div>
                  <div className="border-t border-line pt-4">
                    <dt className="eyebrow text-ink-soft">Email</dt>
                    <dd className="mt-2">
                      <a href={`mailto:${site.email}`} className="font-display text-2xl text-ink hover:text-teal">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div className="border-t border-line pt-4">
                    <dt className="eyebrow text-ink-soft">Social</dt>
                    <dd className="mt-2">
                      <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-teal">
                        facebook.com/vasectomyaustralia
                      </a>
                    </dd>
                  </div>
                  <div className="border-t border-line pt-4">
                    <dt className="eyebrow text-ink-soft">Clinics</dt>
                    <dd className="mt-2">
                      <Link href="/locations" className="text-ink hover:text-teal">
                        See all locations across Australia →
                      </Link>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8">
                  <GoogleBadge />
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <h2 className="text-[length:var(--text-headline)]">Send a message</h2>
                <div className="mt-8">
                  <LeadForm
                    kind="contact"
                    submitLabel="Enquire now"
                    fields={[
                      { name: "name", label: "Name", required: true },
                      { name: "email", label: "Email", type: "email", required: true, half: true },
                      { name: "phone", label: "Phone", type: "tel", required: true, half: true },
                      { name: "message", label: "Message", type: "textarea" },
                    ]}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

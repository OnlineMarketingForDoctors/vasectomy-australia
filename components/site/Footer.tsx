import Link from "next/link";
import { site } from "@/lib/content";
import { locationStates } from "@/lib/locations";
import { GoogleBadge } from "@/components/ui/GoogleBadge";

export function Footer() {
  return (
    <footer className="bg-teal-deep text-paper/80">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/brand/logo-white.webp"
              alt="Vasectomy Australia"
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-sm text-pretty text-paper/70">
              Australia&apos;s most trusted no-scalpel vasectomists. Every
              procedure performed by Dr Geoff Cashion or Dr Matt Valentine.
            </p>
            <div className="mt-6">
              <GoogleBadge variant="dark" />
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="eyebrow text-paper/50">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow text-paper/50">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="text-paper transition-colors hover:text-clay-soft"
                >
                  {site.phoneLabel}{" "}
                  <span className="text-paper/55">({site.phoneSub})</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-paper/75 transition-colors hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-paper px-5 py-2.5 font-medium text-teal-deep transition-colors hover:bg-clay hover:text-paper"
                >
                  Book online
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs uppercase tracking-wider text-paper/45">
              Clinics across {locationStates.length} states &amp; territories
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/15 pt-8 text-xs text-paper/55 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>
              Powered by Online Marketing For Doctors · ©{" "}
              {new Date().getFullYear()} Vasectomy Australia
            </span>
            <Link href="/privacy-policy" className="text-paper/75 hover:text-paper">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-paper/75 hover:text-paper">
              FAQ
            </Link>
          </div>
          <p className="max-w-md text-pretty">
            This website is general information only and is not medical advice. A
            vasectomy should be considered a permanent form of contraception.
          </p>
        </div>
      </div>
    </footer>
  );
}

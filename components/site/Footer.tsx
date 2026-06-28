import { site, locations } from "@/lib/content";

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
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-teal-deep transition-colors hover:bg-clay hover:text-paper"
            >
              Book your vasectomy
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="eyebrow text-paper/50">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow text-paper/50">Across Australia</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {locations.states.map((s) => (
                <li key={s.state} className="text-paper/75">
                  {s.state}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/15 pt-8 text-xs text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Vasectomy Australia. All rights
            reserved.
          </p>
          <p className="max-w-xl text-pretty">
            This website is general information only and is not medical advice.
            A vasectomy should be considered a permanent form of contraception.
          </p>
        </div>
      </div>
    </footer>
  );
}

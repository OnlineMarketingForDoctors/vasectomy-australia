"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="inline-flex items-baseline gap-2">
      <span className="font-display text-[1.35rem] leading-none tracking-tight">
        Vasectomy
      </span>
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-teal">
        Australia
      </span>
    </Link>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" aria-hidden>
      <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden border-b border-teal-deep/20 bg-teal-deep text-paper/80 md:block">
        <div className="shell flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="font-medium text-paper hover:text-clay-soft">
              {site.phoneLabel} <span className="text-paper/55">({site.phoneSub})</span>
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-paper">
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-paper/55">Rated</span>
            <span className="font-semibold text-paper">5.0</span>
            <span className="text-[#FBBC05]">★★★★★</span>
            <span className="text-paper/55">· 361 Google reviews</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <header
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-bone/90 backdrop-blur-md"
            : "border-b border-line/60 bg-bone"
        }`}
      >
        <div className="shell flex h-[4.25rem] items-center justify-between">
          <Wordmark />

          <nav className="hidden items-center gap-6 xl:flex">
            {site.nav.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                    <Chevron className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="min-w-[19rem] overflow-hidden rounded-[2px] border border-line bg-paper py-2 shadow-xl shadow-ink/10">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-5 py-2.5 text-sm text-ink-soft transition-colors hover:bg-sand hover:text-ink"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep sm:inline-flex"
            >
              Book online
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink xl:hidden"
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 block h-[1.5px] w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto bg-bone transition-all duration-300 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="shell flex flex-col pb-12 pt-4">
          {site.nav.map((item) =>
            item.children ? (
              <div key={item.href} className="border-b border-line py-4">
                <Link
                  href={item.href}
                  onClick={close}
                  className="block font-display text-2xl tracking-tight"
                >
                  {item.label}
                </Link>
                <div className="mt-3 flex flex-col gap-1 border-l border-line pl-4">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={close}
                      className="py-1.5 text-base text-ink-soft"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="border-b border-line py-4 font-display text-2xl tracking-tight"
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-teal px-6 py-4 text-base font-medium text-paper"
          >
            Book online
          </a>
        </nav>
      </div>
    </div>
  );
}

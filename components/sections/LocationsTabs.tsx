"use client";

import { useState } from "react";
import { locationStates, type LocationState } from "@/lib/locations";
import { site } from "@/lib/content";

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path fill="#4285F4" d="M23.52 12.27c0-.86-.08-1.69-.22-2.49H12v4.71h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.84z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.94-2.91l-3.88-3c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.09A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.26A12 12 0 0 0 0 12c0 1.94.46 3.77 1.26 5.38l4.01-3.09z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.62l4.01 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

/**
 * State-tabbed clinic directory. Pass `initialCount` to collapse each tab to a
 * single row with a "See more" toggle (used on the homepage); omit it to show
 * every clinic (used on the /locations page).
 */
export function LocationsTabs({
  initialCount,
  states = locationStates,
}: {
  initialCount?: number;
  states?: LocationState[];
}) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const state = states[active];

  const limit = initialCount ?? state.clinics.length;
  const canCollapse = state.clinics.length > limit;
  const shown = expanded || !canCollapse ? state.clinics : state.clinics.slice(0, limit);

  return (
    <div>
      {/* State tabs */}
      <div className="flex flex-wrap gap-2 border-b border-line pb-5" role="tablist" aria-label="Clinic locations by state">
        {states.map((s, i) => (
          <button
            key={s.code}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => {
              setActive(i);
              setExpanded(false);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              i === active
                ? "bg-teal text-paper"
                : "border border-line text-ink-soft hover:border-ink/30 hover:text-ink"
            }`}
          >
            {s.state}
            <span className={i === active ? "text-paper/60" : "text-ink-soft/60"}> · {s.clinics.length}</span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm uppercase tracking-[0.18em] text-clay">
        {state.clinics.length} clinic{state.clinics.length > 1 ? "s" : ""} · {state.doctor}
      </p>

      {/* Location cards */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => {
          const q = encodeURIComponent(`${c.clinic}, ${c.address}`);
          const embedSrc = `https://www.google.com/maps?q=${q}&output=embed`;
          const gbpUrl = `https://www.google.com/maps/search/?api=1&query=${q}`;
          return (
            <div
              key={`${c.city}-${c.clinic}`}
              className="flex flex-col overflow-hidden rounded-[3px] border border-line bg-paper shadow-soft"
            >
              <div className="relative aspect-[16/10] w-full bg-sand">
                <iframe
                  title={`Map — ${c.clinic}`}
                  src={embedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="eyebrow text-clay">{c.city}</p>
                <h3 className="mt-2 font-display text-xl leading-snug">{c.clinic}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.address}</p>

                <a
                  href={gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-teal"
                >
                  <GoogleG className="h-4 w-4" />
                  View Google Business listing
                </a>

                <div className="mt-auto pt-5">
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep"
                  >
                    Learn more &amp; book
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* See more / less toggle */}
      {canCollapse && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/50"
          >
            {expanded
              ? "Show fewer locations"
              : `See all ${state.clinics.length} ${state.state} locations`}
            <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>↓</span>
          </button>
        </div>
      )}
    </div>
  );
}

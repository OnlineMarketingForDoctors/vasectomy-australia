import { google } from "@/lib/content";

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.86-.08-1.69-.22-2.49H12v4.71h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.84z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.94-2.91l-3.88-3c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.09A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.26A12 12 0 0 0 0 12c0 1.94.46 3.77 1.26 5.38l4.01-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.62l4.01 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-[#FBBC05] ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="M10 1.5l2.47 5.27 5.78.62-4.32 3.86 1.2 5.7L10 14.9l-5.13 2.95 1.2-5.7L1.75 7.4l5.78-.62z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Aggregate Google rating badge — shown in place of patient testimonials
 * (AHPRA prohibits testimonials for regulated health services in Australia).
 */
export function GoogleBadge({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <a
      href={google.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Rated ${google.rating} from ${google.count} Google reviews`}
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2.5 transition-colors ${
        dark
          ? "border-paper/20 bg-paper/5 hover:bg-paper/10"
          : "border-line bg-paper hover:border-ink/25"
      } ${className}`}
    >
      <GoogleG className="h-5 w-5" />
      <span className="flex items-center gap-2">
        <span
          className={`font-semibold ${dark ? "text-paper" : "text-ink"}`}
        >
          {google.rating}
        </span>
        <Stars />
      </span>
      <span
        className={`text-sm ${dark ? "text-paper/70" : "text-ink-soft"}`}
      >
        {google.count} Google reviews
      </span>
    </a>
  );
}

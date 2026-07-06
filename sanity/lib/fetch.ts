import { client } from "./client";

/**
 * Fetch from Sanity, returning null on any failure (e.g. no network at build
 * time, or the document hasn't been seeded yet). Callers pair this with
 * `withCms` so the site always renders — Sanity content when present, the
 * code-based defaults otherwise.
 */
export async function sanityFetch<T>(query: string): Promise<T | null> {
  try {
    return await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

/**
 * Overlay CMS values onto the code defaults. A CMS field only wins when it's
 * actually present — null/undefined, blank strings and empty arrays fall back
 * to the code value, so a half-filled document never blanks out the page.
 */
export function withCms<T extends Record<string, unknown>>(
  code: T,
  cms: Partial<T> | null | undefined
): T {
  if (!cms) return code;
  const out: T = { ...code };
  (Object.keys(code) as (keyof T)[]).forEach((k) => {
    const v = cms[k];
    if (v == null) return;
    if (typeof v === "string" && v.trim() === "") return;
    if (Array.isArray(v) && v.length === 0) return;
    out[k] = v as T[keyof T];
  });
  return out;
}

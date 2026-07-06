import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Read live (not the API CDN) so newly created/edited content — a fresh
  // Studio page, a just-published post — shows up on the next ISR revalidation
  // instead of lagging behind the CDN cache.
  useCdn: false,
  // Authenticate reads so a private dataset is readable server-side. Prefer a
  // dedicated read token; fall back to the write token (server-only — never
  // shipped to the browser). Published perspective keeps drafts off the site.
  token:
    process.env.SANITY_API_READ_TOKEN || process.env.SANITY_WRITE_TOKEN || undefined,
  perspective: "published",
});

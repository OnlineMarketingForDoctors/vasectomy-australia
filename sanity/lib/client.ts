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
});

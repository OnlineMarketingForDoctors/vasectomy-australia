"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

// Client-only wrapper so the Sanity Studio (and its `swr` dependency) never
// enters the server/RSC module graph.
export default function StudioClient() {
  return <NextStudio config={config} />;
}

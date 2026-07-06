import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Diagnostic: compare an anonymous read vs a token read. SEED_SECRET-guarded. */
export async function GET(request: Request) {
  const secret = new URL(request.url).searchParams.get("secret");
  if (!process.env.SEED_SECRET || secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const out: Record<string, unknown> = { projectId, dataset };
  const q = 'count(*[_type == "post"])';

  const anon = createClient({ projectId, dataset, apiVersion, useCdn: false });
  try {
    out.anonPosts = await anon.fetch(q);
  } catch (e) {
    out.anonError = e instanceof Error ? e.message : String(e);
  }

  const token = process.env.SANITY_WRITE_TOKEN;
  if (token) {
    const t = createClient({ projectId, dataset, apiVersion, useCdn: false, token, perspective: "published" });
    try {
      out.tokenPosts = await t.fetch(q);
      out.tokenReversal = await t.fetch('count(*[_type == "post" && slug.current == "is-a-vasectomy-reversible"])');
    } catch (e) {
      out.tokenError = e instanceof Error ? e.message : String(e);
    }
  } else {
    out.tokenNote = "SANITY_WRITE_TOKEN not set";
  }
  return NextResponse.json(out);
}

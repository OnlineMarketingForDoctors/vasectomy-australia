import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { richBlogPosts } from "@/lib/blog-content";
import { richPt } from "@/lib/pt";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Seed the code-authored blog articles into Sanity as `post` documents with
 * portable-text bodies, then upload + attach their cover images. Runs on Vercel
 * (open network + write token). createIfNotExists never overwrites an existing
 * post, and covers are only uploaded when a post has none — so it is safe to
 * re-run and won't clobber Studio edits.
 *   GET /api/seed-posts?secret=SEED_SECRET
 */
export async function GET(request: Request) {
  const secret = new URL(request.url).searchParams.get("secret");
  if (!process.env.SEED_SECRET || secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const token = process.env.SANITY_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json(
      { ok: false, error: "Missing SANITY_WRITE_TOKEN env var" },
      { status: 500 }
    );
  }

  const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });
  const created: string[] = [];
  const covered: string[] = [];
  const skipped: string[] = [];

  try {
    for (const p of richBlogPosts) {
      const id = `post.${p.slug}`;

      await client.createIfNotExists({
        _id: id,
        _type: "post",
        title: p.title,
        slug: { _type: "slug", current: p.slug },
        excerpt: p.excerpt,
        category: p.category,
        publishedAt: p.publishedAt,
        seoTitle: p.seoTitle,
        seoDescription: p.seoDescription,
        body: richPt(p.bodyMarkdown),
      });
      created.push(p.slug);

      const existing = (await client.getDocument(id)) as Record<string, unknown> | undefined;
      if (existing?.coverImage) {
        skipped.push(`${p.slug} cover (already set)`);
        continue;
      }
      const res = await fetch(p.coverUrl);
      if (!res.ok) {
        skipped.push(`${p.slug} cover (fetch ${res.status})`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      const asset = await client.assets.upload("image", buf, {
        filename: `${p.slug}-cover.png`,
        contentType: res.headers.get("content-type") || "image/png",
      });
      await client
        .patch(id)
        .set({ coverImage: { _type: "image", asset: { _type: "reference", _ref: asset._id } } })
        .commit();
      covered.push(p.slug);
    }
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "seed failed", created, covered },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, created, covered, skipped });
}

import { NextResponse } from "next/server";

/**
 * Lead capture endpoint (contact + Dr referral forms).
 *
 * Placeholder: validates and accepts the submission. Wire this to the
 * practice's email/CRM (e.g. Resend, a Sanity document, or the existing
 * inbox at info@vasectomyaustralia.com.au) before go-live.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    // TODO: forward to email/CRM. For now we accept and log server-side.
    console.log("[lead]", JSON.stringify(body).slice(0, 2000));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { sendTeamEmail } from "@/lib/email";
import { clientIp, isRateLimited } from "@/lib/rate-limit";
import { features } from "@/lib/site";
import { newsletterSchema } from "@/lib/validators";

const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(request: Request) {
  if (!features.newsletter) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  if (isRateLimited(`newsletter:${clientIp(request)}`, LIMIT, WINDOW_MS)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const body: unknown = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const result = await sendTeamEmail({
    subject: "New newsletter subscriber",
    text: `Add this address to the newsletter list: ${parsed.data.email}`,
  });

  if (result === "failed") {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

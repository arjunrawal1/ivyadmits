import { NextResponse } from "next/server";
import { getPostHogClient } from "@/lib/posthog-server";

const NYLAS_API_URI = process.env.NYLAS_API_URI ?? "https://api.us.nylas.com";
const NYLAS_API_KEY = process.env.NYLAS_API_KEY;
const NYLAS_GRANT_ID = process.env.NYLAS_GRANT_ID;
const NOTIFY_EMAIL = process.env.CONSULTATION_NOTIFY_EMAIL ?? "arawalarjun@gmail.com";

function normalizePhone(input: unknown): string | null {
  if (typeof input !== "string") return null;
  const trimmed = input.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return null;
  return trimmed;
}

export async function POST(request: Request) {
  if (!NYLAS_API_KEY || !NYLAS_GRANT_ID) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const phone = normalizePhone(body.phone);
  if (!phone) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
  if (!name) {
    return NextResponse.json(
      { error: "Please enter your name." },
      { status: 400 },
    );
  }
  const note = typeof body.note === "string" ? body.note.trim().slice(0, 1000) : "";

  const lines = [
    "New free consultation request from the IvyAdmits site.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    note ? `Note: ${note}` : null,
    `Submitted: ${new Date().toISOString()}`,
  ].filter(Boolean);

  try {
    const res = await fetch(
      `${NYLAS_API_URI}/v3/grants/${NYLAS_GRANT_ID}/messages/send`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NYLAS_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "New IvyAdmits consultation request",
          body: lines.join("\n"),
          to: [{ email: NOTIFY_EMAIL }],
        }),
      },
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("Nylas send failed:", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your request. Please try again." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Nylas send error:", error);
    return NextResponse.json(
      { error: "Could not send your request. Please try again." },
      { status: 502 },
    );
  }

  const distinctId = request.headers.get("x-posthog-distinct-id") ?? "anonymous";
  const sessionId = request.headers.get("x-posthog-session-id") ?? undefined;

  const posthog = getPostHogClient();
  posthog.capture({
    distinctId,
    event: "consultation_received",
    properties: {
      provided_name: true,
      provided_note: note.length > 0,
      $session_id: sessionId,
    },
  });

  return NextResponse.json({ ok: true });
}

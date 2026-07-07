"use client";

import { useState } from "react";
import posthog from "posthog-js";

type Status = "idle" | "submitting" | "success" | "error";

// Mirror the server's normalizePhone check (app/api/consultation/route.ts) so an
// empty or malformed number is caught instantly on the client, without a wasted
// round-trip that only comes back with a 400.
function isValidPhone(input: string): boolean {
  const digits = input.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export default function ConsultationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    if (!isValidPhone(phone)) {
      setStatus("error");
      setMessage("Please enter a valid phone number.");
      posthog.capture("consultation_submission_failed", {
        error_message: "invalid_phone_client",
      });
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const distinctId = posthog.get_distinct_id() ?? "anonymous";
      const sessionId = posthog.get_session_id() ?? undefined;

      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (distinctId) headers["x-posthog-distinct-id"] = distinctId;
      if (sessionId) headers["x-posthog-session-id"] = sessionId;

      const res = await fetch("/api/consultation", {
        method: "POST",
        headers,
        body: JSON.stringify({ name, phone }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        posthog.capture("consultation_submission_failed", {
          error_message: data.error ?? "unknown_error",
          http_status: res.status,
        });
        return;
      }

      setStatus("success");
      setMessage("Thanks! We'll call you shortly to set up your consultation.");
      posthog.capture("consultation_submitted", {
        provided_name: name.trim().length > 0,
      });
      setName("");
      setPhone("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      posthog.capture("consultation_submission_failed", {
        error_message: "network_error",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="consult-name"
            className="text-xs font-black uppercase tracking-[0.16em] text-[#0b5d4a]"
          >
            Name (optional)
          </label>
          <input
            id="consult-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={status === "submitting"}
            className="min-h-12 border border-[#18211f]/20 bg-white px-4 text-base text-[#18211f] outline-none transition focus:border-[#0b5d4a] focus:ring-2 focus:ring-[#0b5d4a]/25 disabled:opacity-60"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="consult-phone"
            className="text-xs font-black uppercase tracking-[0.16em] text-[#0b5d4a]"
          >
            Phone number
          </label>
          <input
            id="consult-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            disabled={status === "submitting"}
            className="min-h-12 border border-[#18211f]/20 bg-white px-4 text-base text-[#18211f] outline-none transition focus:border-[#0b5d4a] focus:ring-2 focus:ring-[#0b5d4a]/25 disabled:opacity-60"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[#0b5d4a] px-7 text-sm font-black text-white transition hover:bg-[#074838] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request my free consultation"}
      </button>

      {message ? (
        <p
          role="status"
          aria-live="polite"
          className={`mt-4 text-sm font-semibold ${
            status === "error" ? "text-[#b23b30]" : "text-[#0b5d4a]"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

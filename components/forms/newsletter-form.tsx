"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "done" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), website: form.get("website") }),
      });
      setStatus(response.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="mt-6 text-sm text-muted">
        Thanks, you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-sm">
      <label htmlFor="newsletter-email" className="text-sm font-medium">
        Get new insights by email
      </label>
      <div className="mt-1.5 flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="min-w-0 flex-1 rounded-md border border-line-strong bg-surface px-3 text-sm"
        />
        <Button type="submit" variant="secondary" disabled={status === "sending"}>
          Subscribe
        </Button>
      </div>
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] size-px"
      />
      {status === "error" ? (
        <p role="alert" className="mt-2 text-sm text-danger">
          That didn&apos;t work. Please try again.
        </p>
      ) : null}
    </form>
  );
}

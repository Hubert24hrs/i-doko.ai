import { Resend } from "resend";

type Outgoing = { subject: string; text: string; replyTo?: string };

export type SendResult = "sent" | "skipped" | "failed";

// Plain text only, so visitor input can't inject markup into the email.
export async function sendTeamEmail({ subject, text, replyTo }: Outgoing): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // Lets the form be tested locally. Production must report the failure.
    if (process.env.NODE_ENV !== "production") return "skipped";
    console.error("Email is not configured: set the RESEND and CONTACT variables.");
    return "failed";
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({ from, to, subject, text, replyTo });
    if (error) {
      console.error("Resend rejected the email:", error.name);
      return "failed";
    }
    return "sent";
  } catch {
    console.error("Resend request failed.");
    return "failed";
  }
}

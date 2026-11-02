import { z } from "zod";

export const serviceOptions = [
  "Custom SaaS",
  "AI agents",
  "AI automation",
  "Mobile app",
  "Website",
  "White-label or partnership",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $5,000",
  "$5,000 to $15,000",
  "$15,000 to $50,000",
  "$50,000 or more",
  "Not sure yet",
] as const;

// Single-line fields end up in email headers, so line breaks are rejected.
const singleLine = (label: string, max: number) =>
  z
    .string()
    .trim()
    .min(1, `Enter your ${label}`)
    .max(max, `Keep your ${label} under ${max} characters`)
    .regex(/^[^\r\n]*$/, `Enter your ${label} on one line`);

export const contactSchema = z.object({
  name: singleLine("name", 120),
  email: z.email("Enter a valid email address").max(254),
  company: singleLine("company", 160),
  service: z.enum(serviceOptions, { error: "Choose a service" }),
  budget: z.enum(budgetOptions, { error: "Choose a budget range" }),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more, at least 20 characters")
    .max(4000, "Keep your message under 4,000 characters"),
  // Honeypot. Hidden from people, so anything here came from a bot.
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.email("Enter a valid email address").max(254),
  website: z.string().max(200).optional(),
});

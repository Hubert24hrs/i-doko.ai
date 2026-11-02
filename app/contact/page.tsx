import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { PageHeader } from "@/components/ui/page-header";
import { getBookingUrl } from "@/lib/booking";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a consultation",
  description:
    "Tell us what you need built. We'll reply to arrange a consultation about your project.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "We read your request and reply by email.",
  "We arrange a consultation to understand the work.",
  "If it's a fit, we send a proposal with scope and price.",
];

export default function ContactPage() {
  const bookingUrl = getBookingUrl();
  const { email, phone, whatsapp, address, hours } = site.contact;
  const details = [
    email ? { label: "Email", value: email, href: `mailto:${email}` } : null,
    phone ? { label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` } : null,
    whatsapp
      ? {
          label: "WhatsApp",
          value: whatsapp,
          href: `https://wa.me/${whatsapp.replace(/\D/g, "")}`,
        }
      : null,
    address ? { label: "Address", value: address } : null,
    hours ? { label: "Hours", value: hours } : null,
  ].filter((detail) => detail !== null);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a consultation"
        lead="Tell us what you need built. A person on our team will read it and reply."
      />

      <div className="site-container grid gap-12 py-section lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ConsultationForm />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <h2 className="eyebrow font-sans font-normal">What happens next</h2>
          <ol className="mt-5 space-y-4">
            {nextSteps.map((step, index) => (
              <li key={step} className="grid grid-cols-[2rem_1fr]">
                <span className="pt-1 font-mono text-xs text-subtle">{index + 1}</span>
                <span className="text-muted">{step}</span>
              </li>
            ))}
          </ol>

          {details.length > 0 ? (
            <dl className="mt-8 space-y-3 border-t border-line pt-6">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="font-mono text-xs text-subtle">{detail.label}</dt>
                  <dd>
                    {detail.href ? (
                      <a href={detail.href} className="hover:text-accent-text">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <p className="mt-8 border-t border-line pt-6 text-sm text-muted">
            Based in {site.base}, serving clients globally.
          </p>
        </aside>
      </div>

      {bookingUrl ? (
        <section className="border-t border-line py-section">
          <div className="site-container">
            <h2 className="text-h2">Prefer to pick a time?</h2>
            <iframe
              src={bookingUrl}
              title="Book a consultation time"
              loading="lazy"
              className="mt-8 h-[700px] w-full rounded-lg border border-line bg-surface"
            />
          </div>
        </section>
      ) : null}
    </>
  );
}

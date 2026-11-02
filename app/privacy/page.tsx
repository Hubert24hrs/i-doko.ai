import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How i-doko.ai collects and uses personal data.",
  alternates: { canonical: "/privacy" },
};

// TODO: have a lawyer review this before launch, and add the legal name and contact email.
export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" lead="Last updated 2 November 2026." />
      <div className="site-container py-16">
        <article className="prose-legal max-w-prose">
          <h2>Who we are</h2>
          <p>
            {site.legalName ?? site.name} is a technology company based in {site.base}. We control
            the personal data described here. This policy is written with the Nigeria Data
            Protection Act 2023 and the EU and UK GDPR in mind.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              Details you send through our consultation form: name, email address, company, the
              service you&apos;re interested in, budget range and your message.
            </li>
            <li>Details you give when booking a consultation, if booking is available.</li>
            <li>Standard server logs, such as IP address, which also support rate limiting.</li>
          </ul>

          <h2>Why we use it</h2>
          <ul>
            <li>To reply to your enquiry and take steps before entering a contract with you.</li>
            <li>To keep the site secure and prevent abuse, which is our legitimate interest.</li>
          </ul>
          <p>We don&apos;t sell your data, and we don&apos;t use it for automated decisions.</p>

          <h2>Who we share it with</h2>
          <p>
            We use service providers to run this site: Vercel for hosting, Resend for delivering
            form emails, and Cal.com for booking where it&apos;s enabled. They process data for us
            and only on our instructions. We may also disclose data where the law requires it.
          </p>

          <h2>International transfers</h2>
          <p>
            Our providers may process data outside your country, including in the United States.
            Where the law requires it, we rely on appropriate safeguards for those transfers.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep enquiries for up to 24 months after our last contact unless they lead to a
            project. Project records are kept for as long as our contract and the law require.
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on where you live, you can ask to access, correct, delete or move your data,
            and object to or restrict how we use it. You can also complain to the Nigeria Data
            Protection Commission or your local data protection authority.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This site doesn&apos;t use advertising or tracking cookies. Your theme choice is stored
            in your own browser. If we enable analytics, we use Plausible, which doesn&apos;t use
            cookies or collect personal data. A booking embed may set its own cookies.
          </p>

          <h2>Security</h2>
          <p>
            We protect data with access controls and encrypted connections. No system is perfectly
            secure, so we can&apos;t guarantee absolute security.
          </p>

          <h2>Changes and contact</h2>
          <p>
            We&apos;ll update this page when this policy changes. To ask about your data or use your
            rights, contact us through{" "}
            {site.contact.email ? (
              <a href={`mailto:${site.contact.email}`} className="text-accent-text underline">
                {site.contact.email}
              </a>
            ) : (
              <a href="/contact" className="text-accent-text underline">
                our contact page
              </a>
            )}
            .
          </p>
        </article>
      </div>
    </>
  );
}

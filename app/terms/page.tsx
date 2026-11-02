import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using the i-doko.ai website.",
  alternates: { canonical: "/terms" },
};

// TODO: have a lawyer review this before launch, and add the legal name.
export default function TermsPage() {
  const owner = site.legalName ?? site.name;

  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" lead="Last updated 2 November 2026." />
      <div className="site-container py-16">
        <article className="prose-legal max-w-prose">
          <h2>About these terms</h2>
          <p>
            These terms cover your use of this website, which is run by {owner}. By using the site,
            you accept them.
          </p>

          <h2>Project work</h2>
          <p>
            These terms don&apos;t cover paid work. Each project is governed by its own written
            agreement, which sets out scope, price, ownership and delivery. Nothing on this site is
            an offer or a binding commitment.
          </p>

          <h2>Using this site</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Break the law or infringe anyone&apos;s rights through the site.</li>
            <li>Try to disrupt the site or gain unauthorised access to it.</li>
            <li>Send spam or automated submissions through our forms.</li>
          </ul>

          <h2>Sample content</h2>
          <p>
            The agent console on our home page is a scripted sample. Its names and figures are
            fictional, and it doesn&apos;t show a real client system.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The site&apos;s content and design belong to {owner} or its licensors. You may view and
            share pages for ordinary purposes, but you may not copy them for commercial use without
            our permission.
          </p>

          <h2>Availability and accuracy</h2>
          <p>
            We work to keep the site accurate and available, but it&apos;s provided as is, without
            warranties, to the extent the law allows.
          </p>

          <h2>Liability</h2>
          <p>
            To the extent the law allows, {owner} isn&apos;t liable for indirect or consequential
            loss arising from your use of this site. Nothing here limits liability that can&apos;t
            be limited by law.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>

          <h2>Changes</h2>
          <p>We may update these terms. The date at the top shows the latest version.</p>
        </article>
      </div>
    </>
  );
}

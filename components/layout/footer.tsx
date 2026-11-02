import Link from "next/link";
import { services } from "@/content/services";
import { features, site } from "@/lib/site";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Wordmark } from "./wordmark";

const company = [
  { label: "Solutions", href: "/solutions" },
  ...(features.work ? [{ label: "Work", href: "/work" }] : []),
  { label: "About", href: "/about" },
  ...(features.insights ? [{ label: "Insights", href: "/insights" }] : []),
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="eyebrow font-sans font-normal text-subtle">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const owner = site.legalName ?? site.name;

  return (
    <footer className="border-t border-line">
      <div className="site-container grid grid-cols-2 gap-10 py-14 md:grid-cols-12">
        <div className="col-span-2 md:col-span-5">
          <Link href="/" aria-label="i-doko.ai home" className="inline-block text-ink">
            <Wordmark className="h-6" />
          </Link>
          <p className="mt-4 font-display text-lg font-semibold">{owner}</p>
          <p className="mt-1 max-w-xs text-sm text-muted">{site.tagline}</p>
          {features.newsletter ? <NewsletterForm /> : null}
        </div>
        <div className="md:col-span-3">
          <FooterColumn
            title="Services"
            links={services.map((service) => ({
              label: service.name,
              href: `/services/${service.slug}`,
            }))}
          />
        </div>
        <div className="md:col-span-2">
          <FooterColumn title="Company" links={company} />
        </div>
        <div className="md:col-span-2">
          <FooterColumn title="Legal" links={legal} />
          {site.socials.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {site.socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    rel="noreferrer"
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="site-container flex flex-col gap-1 py-6 text-sm text-subtle sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {owner}
            {site.registrationNumber ? ` · RC ${site.registrationNumber}` : ""}
          </p>
          <p>Based in {site.base}, serving clients globally</p>
        </div>
      </div>
    </footer>
  );
}

export type SocialLink = { label: string; href: string };

type SiteConfig = {
  name: string;
  legalName: string | null;
  registrationNumber: string | null;
  tagline: string;
  description: string;
  url: string;
  base: string;
  contact: {
    email: string | null;
    phone: string | null;
    whatsapp: string | null;
    address: string | null;
    hours: string | null;
  };
  socials: SocialLink[];
};

export const site: SiteConfig = {
  name: "i-doko.ai",
  // TODO: set both when confirmed. The site shows neither while they're empty.
  legalName: null,
  registrationNumber: null,
  tagline: "AI that does real work. Software you own.",
  description:
    "i-doko.ai designs and builds custom SaaS, AI agents and automation for corporations and organisations, then hands over the code and documentation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://i-doko.ai",
  base: "Nigeria",
  // TODO: add official contact details. Empty fields stay hidden across the site.
  contact: {
    email: null,
    phone: null,
    whatsapp: null,
    address: null,
    hours: null,
  },
  // TODO: add social profiles, e.g. { label: "LinkedIn", href: "https://..." }.
  socials: [],
};

// Switch these on when real content exists. While off, the routes return 404
// and stay out of the navigation and sitemap.
export const features = {
  work: false,
  insights: false,
  newsletter: false,
};

export const primaryCta = { label: "Book a consultation", href: "/contact" };

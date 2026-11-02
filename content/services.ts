export type ServiceSlug =
  "custom-saas" | "ai-agents" | "ai-automation" | "mobile-apps" | "websites";

export type Service = {
  slug: ServiceSlug;
  name: string;
  navBlurb: string;
  headline: string;
  summary: string;
  builds: { title: string; detail: string }[];
  approach: { title: string; detail: string }[];
  receive: string[];
};

export const services: Service[] = [
  {
    slug: "custom-saas",
    name: "Custom SaaS",
    navBlurb: "Web software for your organisation or your customers.",
    headline: "Software built around how you work",
    summary:
      "We design and build web software for your organisation or your customers, then hand over the code.",
    builds: [
      {
        title: "Customer-facing products",
        detail: "SaaS with accounts, roles, billing and the admin tools to run it.",
      },
      {
        title: "Internal platforms",
        detail: "Systems that replace spreadsheets and disconnected tools for operations teams.",
      },
      {
        title: "Client and partner portals",
        detail: "Secure places for the people you work with to see status, files and reports.",
      },
      {
        title: "Reporting and admin tools",
        detail: "Dashboards built on your data, showing the numbers your team makes decisions on.",
      },
    ],
    approach: [
      {
        title: "Scope before code",
        detail: "We agree what the first release does, and what it leaves out, before building.",
      },
      {
        title: "Working software early",
        detail: "You see real screens on real infrastructure as the work progresses.",
      },
      {
        title: "Built to be taken over",
        detail: "Your team, or another vendor, can read the code and carry on without us.",
      },
    ],
    receive: [
      "Source code in a repository you control",
      "A production deployment on your accounts",
      "Technical documentation",
      "A handover session with your team",
    ],
  },
  {
    slug: "ai-agents",
    name: "AI agents",
    navBlurb: "Software that takes on a defined job, with people approving what matters.",
    headline: "Agents that do a defined job",
    summary:
      "We build software that handles a specific job using your data and tools, with a person approving what matters.",
    builds: [
      {
        title: "Support triage",
        detail: "Sorts incoming requests, drafts the first response and hands off to a person.",
      },
      {
        title: "Sales enquiry routing",
        detail: "Qualifies new enquiries and sends each one to the right owner with context.",
      },
      {
        title: "Internal knowledge assistants",
        detail: "Answers staff questions from company documents, with sources shown.",
      },
      {
        title: "Document and invoice checks",
        detail: "Extracts the data, compares it against your records and flags what doesn't match.",
      },
    ],
    approach: [
      {
        title: "One job at a time",
        detail: "Each agent has a defined task, a limited set of tools and a clear finish line.",
      },
      {
        title: "People stay in control",
        detail: "You decide which actions need approval. The agent stops and waits for those.",
      },
      {
        title: "Every step is logged",
        detail: "You can see what the agent read, what it decided and what it did.",
      },
    ],
    receive: [
      "A working agent connected to your tools",
      "Approval rules agreed with your team",
      "Logs of every run",
      "Documentation of how the agent behaves and how to change it",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI automation",
    navBlurb: "Connect your systems and remove repeated manual steps.",
    headline: "Remove the steps nobody should repeat",
    summary:
      "We connect your systems and remove repeated manual steps, using AI only where a fixed rule can't do the job.",
    builds: [
      {
        title: "System integrations",
        detail: "Data moves between your existing tools without anyone copying it across.",
      },
      {
        title: "Approval workflows",
        detail: "Requests reach the right person with the context needed to decide.",
      },
      {
        title: "Document processing",
        detail: "Forms, emails and PDFs become structured records in your systems.",
      },
      {
        title: "Scheduled reporting",
        detail: "Reports are collected, written and sent without someone assembling them by hand.",
      },
    ],
    approach: [
      {
        title: "Map the process first",
        detail: "We document how the work happens today, including the exceptions.",
      },
      {
        title: "Rules first, AI where needed",
        detail: "Fixed logic is cheaper and easier to trust, so we use it wherever it works.",
      },
      {
        title: "Failures are visible",
        detail: "When a step fails, the right person is told. Nothing fails silently.",
      },
    ],
    receive: [
      "Working automations on your accounts",
      "A process map of what was automated",
      "Alerts for failed runs",
      "Documentation your team can maintain",
    ],
  },
  {
    slug: "mobile-apps",
    name: "Mobile apps",
    navBlurb: "iOS and Android apps for your customers or your team.",
    headline: "Mobile apps built for daily use",
    summary:
      "We design and build iOS and Android apps for your customers or your team, then hand over the code.",
    builds: [
      {
        title: "Customer apps",
        detail: "Accounts, orders, payments and the everyday tasks your customers need.",
      },
      {
        title: "Staff and field apps",
        detail: "Tools for teams away from a desk, built to cope with poor connections.",
      },
      {
        title: "Companion apps",
        detail: "A mobile version of your existing SaaS or internal system, on the same data.",
      },
      {
        title: "AI features in the app",
        detail: "Agents and assistants inside the app, with people approving what matters.",
      },
    ],
    approach: [
      {
        title: "Both platforms from the start",
        detail: "We plan for iOS and Android together, so features stay consistent.",
      },
      {
        title: "Tested on real devices",
        detail: "We check the app on the kinds of phones your users actually have.",
      },
      {
        title: "Release is part of the job",
        detail: "We prepare the store listings and take the app through review.",
      },
    ],
    receive: [
      "Source code in a repository you control",
      "Apps published under your own store accounts",
      "Technical documentation",
      "A handover session with your team",
    ],
  },
  {
    slug: "websites",
    name: "Websites",
    navBlurb: "Fast marketing and company sites.",
    headline: "Company sites built like products",
    summary:
      "We design and build marketing and company sites that load quickly and are simple to update.",
    builds: [
      {
        title: "Company sites",
        detail: "Clear pages on what you do, who it's for and how to reach you.",
      },
      {
        title: "Marketing sites",
        detail: "Pages built to turn visitors into enquiries, with forms wired to your inbox.",
      },
      {
        title: "Product sites",
        detail: "Launch pages and documentation for software products.",
      },
    ],
    approach: [
      {
        title: "Message before design",
        detail: "We work out what the site needs to say before deciding how it looks.",
      },
      {
        title: "Fast by default",
        detail: "Performance and accessibility are checked before launch, not after.",
      },
    ],
    receive: [
      "A live site on your domain",
      "Source code you own",
      "Search metadata and structured data",
      "Guidance on updating content",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

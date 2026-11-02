import type { ServiceSlug } from "./services";

export const capabilities = [
  "Web applications",
  "Mobile apps",
  "Agent design",
  "Workflow automation",
  "System integration",
  "Human approval flows",
  "Technical documentation",
];

// TODO: list only the technologies the team actually uses. The strip stays hidden while empty.
export const stack: string[] = [];

export type Audience = {
  name: string;
  summary: string;
  pains: string[];
  offer: string;
  services: ServiceSlug[];
};

export const audiences: Audience[] = [
  {
    name: "Corporations",
    summary: "Large companies with work their internal teams can't get to.",
    pains: [
      "Internal engineering teams are stretched",
      "Vendors hold the code and the knowledge",
      "AI pilots never reach production",
      "Procurement needs clear scope and terms",
    ],
    offer:
      "Custom SaaS, AI agents, automation and mobile apps on fixed-price or retainer terms, with a full handover.",
    services: ["custom-saas", "ai-agents", "ai-automation", "mobile-apps"],
  },
  {
    name: "Organisations",
    summary: "SMEs, NGOs, schools and associations running on manual processes.",
    pains: [
      "Staff repeat the same manual work",
      "Tools don't talk to each other",
      "There's no in-house engineering team",
    ],
    offer: "Automation and internal systems, with ongoing support when you need it.",
    services: ["ai-automation", "custom-saas"],
  },
  {
    name: "Brands",
    summary: "Growing consumer and service businesses.",
    pains: ["The site doesn't turn visitors into enquiries", "Customers wait too long for a reply"],
    offer: "Websites, mobile apps and customer-facing AI agents.",
    services: ["websites", "mobile-apps", "ai-agents"],
  },
  {
    name: "Individuals",
    summary: "Founders and professionals with an idea to build.",
    pains: ["The idea is clear, but there's no technical team"],
    offer: "SaaS builds, mobile apps and websites, with code you own from the start.",
    services: ["custom-saas", "mobile-apps", "websites"],
  },
];

export const processSteps = [
  {
    name: "Discover",
    detail: "We learn the problem, the users and the constraints.",
    output: "Agreed scope",
  },
  {
    name: "Design",
    detail: "We design the screens, the system and the approval points.",
    output: "Reviewed design",
  },
  {
    name: "Build",
    detail: "We build in small steps, and you see working software as we go.",
    output: "Working software",
  },
  {
    name: "Launch",
    detail: "We test, deploy to production and hand over to your team.",
    output: "Live system, code and docs",
  },
  {
    name: "Support",
    detail: "We stay on through a retainer, or step back. You choose.",
    output: "Ongoing maintenance",
  },
];

export const principles = [
  {
    name: "Security",
    detail: "Secrets stay out of code, access is limited to what's needed, and inputs are checked.",
  },
  {
    name: "Performance",
    detail: "We measure speed before launch and fix what slows people down.",
  },
  {
    name: "Accessibility",
    detail: "Keyboard navigation, readable contrast and clear structure are part of the build.",
  },
  {
    name: "Documentation",
    detail: "We write down how it works, so you never depend on our memory.",
  },
  {
    name: "Transparent communication",
    detail: "You hear about problems from us early, along with what we plan to do.",
  },
];

export const values = [
  {
    name: "Engineering rigour",
    detail: "We sweat the details, in the code and in everything a user touches.",
  },
  {
    name: "Honest communication",
    detail: "We say what's true, including when it's unwelcome.",
  },
  {
    name: "Ownership",
    detail: "We finish what we start, and we treat your problem as ours.",
  },
  {
    name: "Long-term partnership",
    detail: "We measure the work by your outcome, not by what we delivered.",
  },
];

export const agentUseCases = [
  "Customer support triage and first response, with handoff to a person",
  "Sales enquiry qualification and routing",
  "Internal knowledge assistant over company documents",
  "Document and invoice extraction and checking",
  "Workflow automation across your existing business tools",
];

export const agentFlow = [
  { name: "Trigger", detail: "A ticket, form, email or schedule starts the run." },
  { name: "Reasoning", detail: "The agent works out what the job needs." },
  { name: "Tools", detail: "It reads and queries your systems, within set limits." },
  { name: "Action", detail: "It prepares the next step." },
  { name: "Human handoff", detail: "A person approves anything you've marked as sensitive." },
];

export const faqs = [
  {
    question: "What does i-doko.ai build?",
    answer:
      "Custom SaaS, AI agents, AI automation, mobile apps and websites, for corporations, organisations, brands and individuals.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. We hand over the source code and the documentation, so your team or another vendor can carry on without us.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing is on request because every project has a different scope. Book a consultation and we'll give you a proposal after we understand the work.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope, which we agree in the consultation. Our largest typical project is a SaaS build of about three months. Bigger work is split into phases.",
  },
  {
    question: "Do your AI agents act without human review?",
    answer:
      "Only where you've decided they can. You choose which actions need approval, the agent stops and waits for those, and every run is logged.",
  },
  {
    question: "How do engagements work?",
    answer:
      "Most work is a fixed-price project, a monthly retainer, or a project followed by a retainer for support and further development.",
  },
  {
    question: "Do you take equity partnerships or white-label work?",
    answer:
      "Yes, in the right circumstances. Tell us about it through the contact form and we'll say honestly whether it fits.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Yes. We connect to the tools you already use wherever they allow it, and we'll tell you early if a system can't support what you need.",
  },
  {
    question: "Where are you based?",
    answer:
      "We're based in Nigeria and work with clients globally. Consultations and project communication happen online.",
  },
  {
    question: "Do you support the work after launch?",
    answer:
      "Yes. A retainer covers maintenance, monitoring and further development. If you'd rather run it yourself, the documentation is there for that.",
  },
];

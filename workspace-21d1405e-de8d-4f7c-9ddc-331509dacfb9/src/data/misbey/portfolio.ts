export interface PortfolioProject {
  id: string;
  clientType: string;
  title: string;
  whatWasBuilt: string;
  result: string;
  resultMetric: string;
  resultLabel: string;
  tags: string[];
  accentColor: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "digital-presence",
    clientType: "B2B SaaS Company",
    title: "Digital Presence Overhaul",
    whatWasBuilt:
      "Full website redesign built on Next.js with a content architecture optimized for both traditional SEO and Answer Engine Optimization. We restructured their entire content library to be cited by AI search tools, implemented technical SEO fixes across 200+ pages, and rebuilt the design system from scratch.",
    result:
      "Within 90 days, the client saw a 3× increase in organic discovery and a 180% jump in AI search citations — appearing in ChatGPT, Perplexity, and Google AI Overviews for their primary use cases.",
    resultMetric: "3×",
    resultLabel: "Organic discovery increase",
    tags: ["Web Design", "AEO", "Technical SEO"],
    accentColor: "#00f0ff",
  },
  {
    id: "ai-automation-pipeline",
    clientType: "E-commerce Brand",
    title: "AI Automation Pipeline",
    whatWasBuilt:
      "An end-to-end n8n automation pipeline connecting Shopify, their CRM, email marketing platform, and Slack. The system automatically handles order follow-ups, customer segmentation, abandoned cart recovery, and team notifications — all without a single manual touchpoint.",
    result:
      "The brand saved 22 hours per week of manual operations work and eliminated manual order follow-ups entirely. Their team redirected that time to product strategy and growth initiatives.",
    resultMetric: "22 hrs",
    resultLabel: "Saved weekly",
    tags: ["n8n Automation", "CRM", "E-commerce"],
    accentColor: "#3b82f6",
  },
  {
    id: "ai-support-agent",
    clientType: "SaaS Startup",
    title: "AI Support Agent",
    whatWasBuilt:
      "A custom GPT trained on the client's entire documentation library, help center, and historical ticket data. Deployed simultaneously on their website and inside Slack, with escalation logic that hands complex issues to humans while logging every interaction for continuous improvement.",
    result:
      "Tier-1 support tickets dropped by 74% in the first month. The support team now focuses exclusively on complex, high-value conversations instead of password resets and basic how-tos.",
    resultMetric: "74%",
    resultLabel: "Reduction in tier-1 tickets",
    tags: ["Custom GPT", "AI Agents", "Support"],
    accentColor: "#10b981",
  },
  {
    id: "lead-generation-system",
    clientType: "Professional Services Firm",
    title: "Lead Generation System",
    whatWasBuilt:
      "A complete lead generation stack — high-converting landing pages, an AI lead qualifier that scores and routes every inquiry, CRM automation with triggered email sequences, and calendar integration for instant booking. Every lead is nurtured, scored, and routed within seconds.",
    result:
      "The firm went from 18 qualified calls per month to 43 — a 2.4× increase. The AI qualifier ensures every call that reaches their partners is genuinely worth their time.",
    resultMetric: "2.4×",
    resultLabel: "More qualified calls booked",
    tags: ["Lead Gen", "AI Qualification", "CRM Automation"],
    accentColor: "#f59e0b",
  },
];

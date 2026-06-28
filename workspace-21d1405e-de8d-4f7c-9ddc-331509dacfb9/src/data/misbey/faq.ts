export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "what-is-aeo",
    question: "What exactly is Answer Engine Optimization (AEO)?",
    answer:
      "AEO is the practice of optimizing your content so that AI tools like ChatGPT, Perplexity, and Google's AI Overviews reference and cite your business when users ask relevant questions. It's the next frontier of search — and most businesses haven't started yet. Traditional SEO gets you into the blue links. AEO gets you into the answer. As AI search usage explodes, businesses that aren't optimized for citation will become invisible to a growing share of high-intent queries.",
  },
  {
    id: "project-timeline",
    question: "How long does a typical project take?",
    answer:
      "Web projects typically take 3–6 weeks depending on scope. Automation builds range from 1–3 weeks depending on complexity and the number of integrations. Full AI infrastructure rollouts — combining web, automation, and AI agents — are scoped during discovery and usually run 6–10 weeks. We always give you a clear timeline upfront, with weekly milestones so you can track progress in real time.",
  },
  {
    id: "technical-required",
    question: "Do I need to be technical to work with you?",
    answer:
      "Not at all. We handle all the technical complexity so you can focus on running your business. You describe what you want to stop doing manually or what result you want — we build the system that gets you there. Every deliverable comes with plain-English documentation, and we train your team on how to use what we built. No jargon, no black boxes.",
  },
  {
    id: "tools-used",
    question: "What tools and platforms do you use?",
    answer:
      "We primarily use n8n for automation (open-source, self-hostable, no vendor lock-in), React and Next.js for web development, OpenAI and Anthropic APIs for AI agents, and Docker for infrastructure. We select tools based on your specific needs — not based on what's trendy. Every tool we recommend has been battle-tested in production environments.",
  },
  {
    id: "ownership",
    question: "Will I own everything you build?",
    answer:
      "Yes. 100%. All code, all workflows, all documentation is handed over to you completely. We don't hold anything hostage or require ongoing subscriptions to our proprietary tools. If you want to take everything in-house after launch, you can — and we'll help with the transition. Our business model is built on delivering value, not trapping clients.",
  },
  {
    id: "existing-stack",
    question: "Can you work with our existing website or tech stack?",
    answer:
      "Usually yes. We audit your existing setup during discovery and advise on what to keep, improve, or replace. We don't rebuild for the sake of it — if your current platform works and can be optimized, we'll work with it. If it's genuinely holding you back, we'll tell you honestly and recommend a path forward. No unnecessary rebuilds.",
  },
  {
    id: "free-audit",
    question: "What does the free audit include?",
    answer:
      "A 45–60 minute strategy session covering your website's performance, automation opportunities, AI readiness, and SEO/AEO gaps — plus a written report with prioritized recommendations. You'll leave the call with a clear understanding of where you stand and what to fix first, whether or not you decide to work with us. There's no pitch — just analysis and actionable advice.",
  },
  {
    id: "ongoing-support",
    question: "How do you handle ongoing support?",
    answer:
      "We offer monthly retainers for ongoing optimization, monitoring, and iteration. Retainer details are discussed after project delivery — there's no pressure to commit upfront. Some clients want us deeply embedded long-term; others want us to build, hand off, and step away. Both models work, and we'll structure the relationship around what makes sense for your business.",
  },
  {
    id: "budget-range",
    question: "What's your typical client budget range?",
    answer:
      "Projects start from $2,500 for standalone automations and scale to $15,000+ for full-stack website + AI infrastructure builds. We work with businesses serious about investing in their digital future — not those looking for the cheapest option. Every quote is transparent and itemized, so you know exactly what you're paying for and why.",
  },
  {
    id: "differentiator",
    question: "What makes you different from a regular web or marketing agency?",
    answer:
      "Most agencies build websites. We build operating systems for businesses — combining web, SEO, AEO, AI agents, and automation into a unified system that runs and grows independently. A traditional agency hands you a website and walks away. We hand you infrastructure that keeps working, keeps optimizing, and keeps compounding value long after the project ends.",
  },
];

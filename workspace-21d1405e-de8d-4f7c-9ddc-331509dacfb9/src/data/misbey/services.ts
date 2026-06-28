import {
  Globe,
  Search,
  TrendingUp,
  Zap,
  Bot,
  Settings,
  Users,
  Plug,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design & Development",
    description:
      "High-performance, conversion-optimized websites built on modern stacks. Fast, accessible, and designed to establish instant authority. Every page is engineered for both search engines and human attention — speed, structure, and clarity working in unison.",
    icon: Globe,
    featured: true,
  },
  {
    id: "aeo",
    title: "Answer Engine Optimization",
    description:
      "Optimize your content for AI search engines — ChatGPT, Perplexity, Gemini, and Google AI Overviews. Be the answer, not just a result.",
    icon: Search,
  },
  {
    id: "seo",
    title: "SEO Strategy",
    description:
      "Technical SEO, content architecture, and authority building that compounds month over month. We fix the fundamentals and stack wins.",
    icon: TrendingUp,
  },
  {
    id: "ai-automations",
    title: "AI Automations",
    description:
      "Eliminate repetitive manual tasks with intelligent n8n and API-driven automation workflows that run 24/7 — no human in the loop.",
    icon: Zap,
  },
  {
    id: "custom-gpt",
    title: "Custom GPT & AI Agents",
    description:
      "Purpose-built AI assistants trained on your business data — for customer support, lead qualification, and internal operations.",
    icon: Bot,
  },
  {
    id: "bpa",
    title: "Business Process Automation",
    description:
      "Map, analyze, and automate your most time-consuming workflows. Reclaim 20+ hours weekly and redirect that energy toward growth.",
    icon: Settings,
  },
  {
    id: "crm",
    title: "CRM Automation",
    description:
      "Automated lead capture, nurturing, follow-ups, and pipeline management — so no lead falls through the cracks again.",
    icon: Users,
  },
  {
    id: "api-integrations",
    title: "API & System Integrations",
    description:
      "Connect your tools, platforms, and data sources into a unified, automated business operating system that runs itself.",
    icon: Plug,
  },
  {
    id: "ai-consulting",
    title: "AI Consulting & Strategy",
    description:
      "A dedicated AI audit and roadmap for your business — identify where AI can save time, cut costs, and grow revenue.",
    icon: Lightbulb,
  },
];

"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Search,
  Unlock,
  Box,
  TrendingUp,
  Zap,
  ShieldCheck,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/misbey/SectionHeading";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Enterprise-Grade Architecture",
    description:
      "Systems built to handle scale from day one — no rebuilding when you grow. Our infrastructure decisions are made for 10× traffic, not just current load.",
    icon: Building2,
  },
  {
    title: "SEO + AEO Together",
    description:
      "The only agency optimizing for both traditional search and AI search engines simultaneously. Be findable everywhere your customers ask questions.",
    icon: Search,
  },
  {
    title: "No Vendor Lock-In",
    description:
      "Everything we build, you own. Open-source tools. Documented systems. Full handoff. Walk away anytime — we bet you won't want to.",
    icon: Unlock,
  },
  {
    title: "Docker Infrastructure",
    description:
      "Containerized deployments that are portable, reliable, and easy to maintain. Move between clouds, scale horizontally, recover from anything.",
    icon: Box,
  },
  {
    title: "Scalable AI Systems",
    description:
      "AI agents and automations designed to grow with your business — not break under pressure. Built for production load from the first commit.",
    icon: TrendingUp,
  },
  {
    title: "Lightning-Fast Websites",
    description:
      "95+ Lighthouse scores. Sub-2s load times. Core Web Vitals optimized out of the box. Speed isn't a feature — it's the baseline.",
    icon: Zap,
  },
  {
    title: "Future-Proof Technology",
    description:
      "We choose tools with longevity — not the hype stack of the week. Your investment should still be paying off in five years, not three months.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Process",
    description:
      "Weekly updates. Shared dashboards. No black boxes. You always know what's being built, why it's being built, and what's coming next.",
    icon: Eye,
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built Different"
          heading="We're not a web agency that added 'AI' to their menu."
          subheading="We're infrastructure engineers for the AI era. Here's what that actually means for your business."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 4) * 0.08,
                }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00f0ff]/30 hover:bg-[#00f0ff]/[0.02]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f0ff]/20 bg-[#00f0ff]/[0.1]">
                  <Icon size={18} className="text-[#00f0ff]" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

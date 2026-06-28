"use client";

import { motion } from "framer-motion";
import { X, AlertTriangle, Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/misbey/SectionHeading";

const stages = [
  {
    label: "Traditional Business",
    points: [
      "Manual processes everywhere",
      "High labor costs that compound",
      "Slow, gut-driven decision making",
      "Limited scale — capped by headcount",
    ],
    status: "falling",
    statusLabel: "Falling behind",
    icon: X,
    iconColor: "text-red-400",
    borderColor: "border-red-500/20",
    bgColor: "bg-red-500/[0.03]",
  },
  {
    label: "Digital Business",
    points: [
      "Website plus a few basic tools",
      "Some automation, mostly manual",
      "Data exists but goes unused",
      "Moderate efficiency gains",
    ],
    status: "treading",
    statusLabel: "Treading water",
    icon: AlertTriangle,
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/[0.03]",
  },
  {
    label: "AI Business",
    points: [
      "AI-powered systems across the board",
      "24/7 autonomous operations",
      "Real-time intelligence on every flow",
      "Unlimited scale potential",
    ],
    status: "winning",
    statusLabel: "Compounding growth",
    icon: Check,
    iconColor: "text-[#00f0ff]",
    borderColor: "border-[#00f0ff]/30",
    bgColor: "bg-[#00f0ff]/[0.04]",
  },
];

export function WhyAI() {
  return (
    <section
      id="why-ai"
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f0ff]/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Shift"
          heading="The AI Shift Is Happening Now"
          subheading="Businesses that don't adapt won't compete. Here's exactly why — and what to do about it."
        />

        {/* Stages */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative rounded-2xl border ${stage.borderColor} ${stage.bgColor} p-6 md:p-8`}
              >
                {/* Step indicator */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#71717a]">
                    Stage {i + 1}
                  </span>
                  <Icon size={20} className={stage.iconColor} />
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  {stage.label}
                </h3>

                <ul className="mt-6 space-y-3">
                  {stage.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-[#a1a1aa]"
                    >
                      <span
                        className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${
                          stage.status === "winning"
                            ? "bg-[#00f0ff]"
                            : stage.status === "treading"
                            ? "bg-amber-400"
                            : "bg-red-400"
                        }`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
                    stage.status === "winning"
                      ? "border-[#00f0ff]/30 bg-[#00f0ff]/[0.06] text-[#00f0ff]"
                      : stage.status === "treading"
                      ? "border-amber-500/30 bg-amber-500/[0.06] text-amber-400"
                      : "border-red-500/30 bg-red-500/[0.06] text-red-400"
                  }`}
                >
                  {stage.statusLabel}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative overflow-hidden rounded-2xl border border-[#00f0ff]/20 bg-gradient-to-br from-[#00f0ff]/[0.04] to-[#3b82f6]/[0.02] p-8 md:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#00f0ff]/10 blur-3xl"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <div className="flex-1">
              <p className="font-display text-xl font-medium leading-relaxed text-white md:text-2xl">
                &ldquo;By 2026, companies using AI automation report{" "}
                <span className="text-gradient-static font-semibold">
                  3× faster growth
                </span>{" "}
                and{" "}
                <span className="text-gradient-static font-semibold">
                  40% lower operational costs
                </span>{" "}
                than their competitors. The window to gain early-mover advantage
                is closing.&rdquo;
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex flex-shrink-0 items-center gap-2 self-start rounded-xl border border-[#00f0ff]/30 bg-[#00f0ff]/[0.06] px-6 py-3 text-sm font-semibold text-[#00f0ff] transition-all hover:bg-[#00f0ff]/[0.12] hover:shadow-[0_0_24px_rgba(0,240,255,0.2)]"
            >
              Get your AI audit
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}

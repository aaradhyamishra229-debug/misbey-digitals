"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/misbey/AnimatedCounter";
import { SectionHeading } from "@/components/misbey/SectionHeading";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
    description: "Shipped across SaaS, e-commerce, services, and logistics.",
  },
  {
    value: 20,
    suffix: "+",
    label: "Hours Saved Per Client Weekly",
    description: "Average time reclaimed through automation and AI systems.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction Rate",
    description: "Measured across every project, every quarter.",
  },
  {
    value: 24,
    suffix: "/7",
    label: "AI Systems Running",
    description: "Always-on infrastructure that never sleeps.",
    raw: true,
  },
];

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="By The Numbers"
          heading="Measurable impact, every engagement."
          subheading="We don't deal in vanity metrics. Every number below is tied to a real business outcome."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] p-6 transition-all duration-300 hover:border-[#00f0ff]/30 hover:bg-[#00f0ff]/[0.02]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00f0ff]/[0.06] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {stat.raw ? (
                    <span>24{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  )}
                </div>
                <div className="mt-3 text-sm font-semibold text-white">
                  {stat.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#71717a]">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

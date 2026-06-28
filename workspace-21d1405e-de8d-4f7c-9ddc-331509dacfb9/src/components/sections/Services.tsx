"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/misbey/SectionHeading";
import { services } from "@/data/misbey/services";

export function Services() {
  const handleNavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="relative bg-[#090909] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          heading="End-to-end digital systems engineered for the AI era."
          subheading="From high-performance websites to autonomous AI agents — everything you need to operate faster, smarter, and at scale."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const featured = service.featured;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 4) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative rounded-2xl border border-white/[0.08] bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00f0ff]/30 hover:bg-[#00f0ff]/[0.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] ${
                  featured ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="flex h-full flex-col">
                  {/* Icon */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#00f0ff]/20 bg-[#00f0ff]/[0.1]">
                    <Icon size={20} className="text-[#00f0ff]" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-5 font-display font-semibold text-white ${
                      featured ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-3 text-sm leading-relaxed text-[#a1a1aa] ${
                      featured ? "md:text-base" : ""
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Footer link */}
                  <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#00f0ff] transition-all hover:gap-2.5"
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </a>
                </div>

                {/* Featured glow accent */}
                {featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00f0ff]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

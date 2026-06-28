"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/misbey/Button";
import { GlowOrb } from "@/components/misbey/GlowOrb";
import { GridOverlay } from "@/components/misbey/GridOverlay";

export function CTASection() {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#090909] py-24 sm:py-32">
      <GridOverlay />
      <GlowOrb
        color="#00f0ff"
        size={600}
        opacity={0.12}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <GlowOrb
        color="#3b82f6"
        size={500}
        opacity={0.1}
        className="right-0 top-1/4"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/20 bg-[#00f0ff]/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#00f0ff]"
        >
          <span className="h-1 w-1 rounded-full bg-[#00f0ff]" />
          Ready To Scale?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Stop Doing Work
          <br />
          a Machine Can Do.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#a1a1aa] sm:text-lg"
        >
          Book a free 45-minute strategy session. We&apos;ll show you exactly
          where AI can save you time, cut costs, and accelerate growth — no
          fluff, no pitch decks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <Button
            size="xl"
            href="#contact"
            onClick={scrollTo("#contact")}
            className="group"
          >
            Book Your Free Strategy Session
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#71717a]"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#00f0ff]" />
            No commitment required
          </span>
          <span className="text-white/10">•</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#00f0ff]" />
            Response within 24 hours
          </span>
          <span className="text-white/10">•</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#00f0ff]" />
            100% free
          </span>
        </motion.div>
      </div>
    </section>
  );
}

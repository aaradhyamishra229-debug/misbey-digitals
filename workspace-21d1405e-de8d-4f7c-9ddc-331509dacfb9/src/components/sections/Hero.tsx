"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/misbey/Button";
import { GradientText } from "@/components/misbey/GradientText";
import { GlowOrb } from "@/components/misbey/GlowOrb";
import { GridOverlay } from "@/components/misbey/GridOverlay";

const trustBadges = [
  "AI Ready",
  "SEO + AEO Optimized",
  "Automation Experts",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-24 pb-16"
    >
      {/* Background layers */}
      <GridOverlay />
      <GlowOrb
        color="#00f0ff"
        size={500}
        opacity={0.15}
        className="-top-20 -left-20"
      />
      <GlowOrb
        color="#3b82f6"
        size={500}
        opacity={0.12}
        className="-bottom-20 -right-20"
        style={{ animationDelay: "2s" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/[0.06] px-4 py-1.5 text-sm text-[#00f0ff]">
            <Sparkles size={14} />
            <span>Building the Future of Digital Infrastructure</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
        >
          Scale Your Business with
          <br />
          <GradientText>Intelligent</GradientText>{" "}
          <GradientText>AI Systems</GradientText>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#a1a1aa] sm:text-lg md:text-xl"
        >
          Misbey Digitals helps ambitious businesses step into the AI era —
          building high-performance websites, Answer Engine Optimized content,
          intelligent automations, and AI systems that eliminate repetitive
          work and accelerate revenue growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            href="#services"
            onClick={scrollTo("#services")}
            className="group"
          >
            Explore Solutions
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            href="#portfolio"
            onClick={scrollTo("#portfolio")}
          >
            View Case Studies
            <ArrowRight size={18} />
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="inline-flex items-center gap-2 text-sm text-[#71717a]"
            >
              <Check size={14} className="text-[#00f0ff]" />
              <span>{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-[#00f0ff]"
          />
        </div>
      </motion.div>
    </section>
  );
}

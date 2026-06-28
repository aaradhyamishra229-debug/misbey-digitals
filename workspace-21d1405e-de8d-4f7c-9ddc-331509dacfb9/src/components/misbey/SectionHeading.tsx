"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/20 bg-[#00f0ff]/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#00f0ff]"
        >
          <span className="h-1 w-1 rounded-full bg-[#00f0ff]" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "text-base text-[#a1a1aa] sm:text-lg",
            centered && "max-w-2xl"
          )}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}

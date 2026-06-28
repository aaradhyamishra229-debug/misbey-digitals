"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/misbey/SectionHeading";
import { testimonials } from "@/data/misbey/testimonials";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#00f0ff]/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Clients Say"
          heading="Real businesses. Real outcomes. Real words."
          subheading="Don't take our word for it — take theirs."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#111111] p-6 transition-all duration-300 hover:border-[#00f0ff]/20 md:p-8"
            >
              <Quote
                size={32}
                className="text-[#00f0ff]/30"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="mt-4 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#a1a1aa] md:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-6">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} font-display text-sm font-bold text-black`}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[#71717a]">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/misbey/SectionHeading";
import { processSteps } from "@/data/misbey/process";

export function Process() {
  return (
    <section
      id="process"
      className="relative bg-[#090909] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          heading="A proven 6-step system from discovery to deployed AI infrastructure."
          subheading="No black boxes. No mystery. You see every step of the build, from first audit to final handoff."
        />

        <div className="mt-20">
          {/* Desktop horizontal stepper */}
          <div className="relative hidden md:block">
            {/* Connecting dotted line */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-[27px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 right-0 top-[27px] h-px origin-left bg-gradient-to-r from-[#00f0ff] via-[#3b82f6] to-[#00f0ff]"
            />

            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-start"
                >
                  {/* Numbered badge */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#00f0ff]/30 bg-[#090909] font-display text-lg font-bold text-[#00f0ff]">
                    {step.number}
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile vertical stepper */}
          <div className="space-y-6 md:hidden">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative rounded-2xl border border-white/[0.08] bg-[#111111] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#00f0ff]/30 bg-[#090909] font-display text-base font-bold text-[#00f0ff]">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

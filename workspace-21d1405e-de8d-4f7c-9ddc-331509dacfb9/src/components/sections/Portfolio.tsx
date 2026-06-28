"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/misbey/SectionHeading";
import { portfolioProjects } from "@/data/misbey/portfolio";

// A mock UI visualizer card for each project — abstract "wireframe" overlay, not gray rectangles
function ProjectVisual({
  accentColor,
  index,
}: {
  accentColor: string;
  index: number;
}) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]"
      style={{
        background: `radial-gradient(circle at 30% 20%, ${accentColor}15, transparent 60%), radial-gradient(circle at 80% 80%, ${accentColor}10, transparent 50%), #0a0a0a`,
      }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Wireframe elements — different per project to feel unique */}
      {index === 0 && (
        // Website / browser mockup
        <div className="absolute inset-6 flex flex-col gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-white/20" />
            <div className="h-2 w-2 rounded-full bg-white/20" />
            <div className="h-2 w-2 rounded-full bg-white/20" />
            <div className="ml-3 h-2 w-32 rounded-full bg-white/10" />
          </div>
          <div className="mt-2 h-12 rounded-lg" style={{ background: `linear-gradient(90deg, ${accentColor}30, transparent)` }} />
          <div className="grid grid-cols-3 gap-2 mt-1">
            <div className="h-8 rounded-md bg-white/[0.06]" />
            <div className="h-8 rounded-md bg-white/[0.06]" />
            <div className="h-8 rounded-md bg-white/[0.06]" />
          </div>
          <div className="mt-1 h-2 w-full rounded-full bg-white/[0.06]" />
          <div className="h-2 w-3/4 rounded-full bg-white/[0.06]" />
          <div className="h-2 w-2/3 rounded-full bg-white/[0.06]" />
          <div className="mt-auto h-6 w-24 rounded-md" style={{ background: accentColor, opacity: 0.4 }} />
        </div>
      )}

      {index === 1 && (
        // Workflow / automation diagram
        <div className="absolute inset-6 flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ background: `${accentColor}30`, border: `1px solid ${accentColor}50` }}>
              <div className="h-2 w-2 rounded-full" style={{ background: accentColor }} />
            </div>
            <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
            <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}40` }}>
              <div className="h-2 w-2 rounded-full bg-white/40" />
            </div>
            <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${accentColor})` }} />
            <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ background: `${accentColor}30`, border: `1px solid ${accentColor}50` }}>
              <div className="h-2 w-2 rounded-full" style={{ background: accentColor }} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}40` }}>
              <div className="h-2 w-2 rounded-full bg-white/40" />
            </div>
            <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
            <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ background: `${accentColor}30`, border: `1px solid ${accentColor}50` }}>
              <div className="h-2 w-2 rounded-full" style={{ background: accentColor }} />
            </div>
            <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${accentColor})` }} />
            <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}40` }}>
              <div className="h-2 w-2 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="mt-2 flex justify-around">
            <div className="h-1.5 w-12 rounded-full bg-white/10" />
            <div className="h-1.5 w-12 rounded-full bg-white/10" />
            <div className="h-1.5 w-12 rounded-full bg-white/10" />
          </div>
        </div>
      )}

      {index === 2 && (
        // Chat interface mockup
        <div className="absolute inset-6 flex flex-col gap-2">
          <div className="flex justify-end">
            <div className="max-w-[70%] rounded-lg rounded-tr-sm px-3 py-2 text-xs" style={{ background: `${accentColor}25`, border: `1px solid ${accentColor}40` }}>
              <div className="h-1.5 w-20 rounded-full bg-white/40" />
              <div className="mt-1 h-1.5 w-16 rounded-full bg-white/30" />
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg rounded-tl-sm bg-white/[0.06] px-3 py-2">
              <div className="h-1.5 w-24 rounded-full bg-white/30" />
              <div className="mt-1 h-1.5 w-20 rounded-full bg-white/20" />
              <div className="mt-1 h-1.5 w-16 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[60%] rounded-lg rounded-tr-sm px-3 py-2" style={{ background: `${accentColor}25`, border: `1px solid ${accentColor}40` }}>
              <div className="h-1.5 w-16 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="mt-auto flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
            <div className="h-1.5 flex-1 rounded-full bg-white/10" />
            <div className="h-5 w-5 rounded-md" style={{ background: accentColor, opacity: 0.6 }} />
          </div>
        </div>
      )}

      {index === 3 && (
        // CRM / funnel dashboard mockup
        <div className="absolute inset-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="h-2 w-24 rounded-full bg-white/20" />
            <div className="h-5 w-12 rounded-md" style={{ background: accentColor, opacity: 0.4 }} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-md border border-white/[0.06] bg-white/[0.03] p-2">
              <div className="h-1.5 w-10 rounded-full bg-white/20" />
              <div className="mt-1.5 h-3 w-8 rounded-full" style={{ background: accentColor, opacity: 0.6 }} />
            </div>
            <div className="rounded-md border border-white/[0.06] bg-white/[0.03] p-2">
              <div className="h-1.5 w-10 rounded-full bg-white/20" />
              <div className="mt-1.5 h-3 w-6 rounded-full" style={{ background: accentColor, opacity: 0.5 }} />
            </div>
            <div className="rounded-md border border-white/[0.06] bg-white/[0.03] p-2">
              <div className="h-1.5 w-10 rounded-full bg-white/20" />
              <div className="mt-1.5 h-3 w-10 rounded-full" style={{ background: accentColor, opacity: 0.7 }} />
            </div>
          </div>
          {/* Bar chart */}
          <div className="mt-1 flex items-end justify-around gap-1.5 h-16">
            {[40, 55, 35, 70, 85, 60, 95].map((h, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(180deg, ${accentColor}, ${accentColor}30)`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: accentColor, opacity: 0.15 }}
      />
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recent Work"
          heading="Systems built for real businesses. Real results."
          subheading="A selection of recent engagements. Every project shipped, measured, and validated against real business outcomes."
        />

        <div className="mt-16 space-y-20 md:space-y-28">
          {portfolioProjects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                {/* Visual */}
                <div className={reversed ? "md:order-2" : ""}>
                  <ProjectVisual
                    accentColor={project.accentColor}
                    index={i}
                  />
                </div>

                {/* Content */}
                <div className={reversed ? "md:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-[#a1a1aa]">
                    {project.clientType}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md border border-[#00f0ff]/20 bg-[#00f0ff]/[0.04] px-2.5 py-1 text-xs text-[#00f0ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#a1a1aa] md:text-base">
                    {project.whatWasBuilt}
                  </p>

                  <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-5">
                    <div className="flex items-end gap-3">
                      <span
                        className="font-display text-3xl font-bold sm:text-4xl"
                        style={{ color: project.accentColor }}
                      >
                        {project.resultMetric}
                      </span>
                      <span className="mb-1 text-xs uppercase tracking-wider text-[#71717a]">
                        {project.resultLabel}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]">
                      {project.result}
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
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#00f0ff] transition-all hover:gap-2.5"
                  >
                    Build something like this
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

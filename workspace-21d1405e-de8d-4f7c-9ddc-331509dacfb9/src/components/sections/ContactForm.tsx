"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/misbey/SectionHeading";
import { Button } from "@/components/misbey/Button";
import { GlowOrb } from "@/components/misbey/GlowOrb";

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
] as const;

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)."),
  businessEmail: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid business email address."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number."),
  businessName: z
    .string()
    .min(2, "Please enter your business name."),
  website: z
    .string()
    .min(1, "Please enter your website or 'none'.")
    .refine((val) => val.toLowerCase() === "none" || /^https?:\/\/.+/i.test(val), {
      message: "Enter a valid URL (https://...) or 'none'.",
    }),
  bottleneck: z
    .string()
    .min(20, "Please tell us a bit more (at least 20 characters)."),
  budget: z.enum(budgetOptions, {
    errorMap: () => ({ message: "Please select a budget range." }),
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      businessEmail: "",
      phone: "",
      businessName: "",
      website: "",
      bottleneck: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // ──────────────────────────────────────────────────────────────
    // FORMSPREE INTEGRATION
    // 1. Go to https://formspree.io → sign up free → New Form
    // 2. Copy your form ID (looks like "xayznvqw")
    // 3. Replace "YOUR_FORMSPREE_ID" below with your real ID
    // 4. Submissions will be emailed to the address you registered with
    // ──────────────────────────────────────────────────────────────
    const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

    if (FORMSPREE_ID === "YOUR_FORMSPREE_ID") {
      // Dev mode — no Formspree ID set yet, just simulate success
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("[DEV] Contact form submission (Formspree not configured):", data);
      setSubmitted(true);
      reset();
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `New inquiry from ${data.fullName} — ${data.businessName}`,
        }),
      });
      if (!res.ok) throw new Error("Formspree submission failed");
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Something went wrong sending your message. Please email us directly.");
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-white/[0.08] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-[#71717a] transition-all duration-200 focus:border-[#00f0ff]/40 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20";

  const errorBorderClass = "border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      <GlowOrb
        color="#00f0ff"
        size={500}
        opacity={0.08}
        className="-left-20 top-1/4"
      />
      <GlowOrb
        color="#3b82f6"
        size={500}
        opacity={0.06}
        className="-right-20 bottom-1/4"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Start The Conversation"
          heading="Tell us about your business."
          subheading="We'll come back with a plan. No sales calls. No generic templates. Just a real response to what you actually need."
        />

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-[#00f0ff]/20 bg-[#00f0ff]/[0.03] p-8 md:p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00f0ff]/10"
                >
                  <CheckCircle2 size={32} className="text-[#00f0ff]" />
                </motion.div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  Message received.
                </h3>
                <p className="mt-3 text-sm text-[#a1a1aa] md:text-base">
                  We&apos;ll be in touch within 24 hours. Check your email for a
                  confirmation — we&apos;re already reviewing your submission.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-[#00f0ff] transition-colors hover:text-white"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-2xl border border-white/[0.08] bg-[#111111] p-6 md:p-8"
                noValidate
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-xs font-medium text-white"
                    >
                      Full Name <span className="text-[#00f0ff]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your name"
                      aria-invalid={!!errors.fullName}
                      className={`${fieldClass} ${errors.fullName ? errorBorderClass : ""}`}
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label
                      htmlFor="businessEmail"
                      className="mb-2 block text-xs font-medium text-white"
                    >
                      Business Email <span className="text-[#00f0ff]">*</span>
                    </label>
                    <input
                      id="businessEmail"
                      type="email"
                      placeholder="you@company.com"
                      aria-invalid={!!errors.businessEmail}
                      className={`${fieldClass} ${errors.businessEmail ? errorBorderClass : ""}`}
                      {...register("businessEmail")}
                    />
                    {errors.businessEmail && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.businessEmail.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-medium text-white"
                    >
                      Phone Number <span className="text-[#00f0ff]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                      aria-invalid={!!errors.phone}
                      className={`${fieldClass} ${errors.phone ? errorBorderClass : ""}`}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label
                      htmlFor="businessName"
                      className="mb-2 block text-xs font-medium text-white"
                    >
                      Business Name <span className="text-[#00f0ff]">*</span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      placeholder="Your company"
                      aria-invalid={!!errors.businessName}
                      className={`${fieldClass} ${errors.businessName ? errorBorderClass : ""}`}
                      {...register("businessName")}
                    />
                    {errors.businessName && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.businessName.message}
                      </p>
                    )}
                  </div>

                  {/* Website */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="website"
                      className="mb-2 block text-xs font-medium text-white"
                    >
                      Current Website <span className="text-[#00f0ff]">*</span>
                    </label>
                    <input
                      id="website"
                      type="text"
                      placeholder="https://yoursite.com (or 'none')"
                      aria-invalid={!!errors.website}
                      className={`${fieldClass} ${errors.website ? errorBorderClass : ""}`}
                      {...register("website")}
                    />
                    {errors.website && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.website.message}
                      </p>
                    )}
                  </div>

                  {/* Bottleneck */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="bottleneck"
                      className="mb-2 block text-xs font-medium text-white"
                    >
                      Biggest Bottleneck <span className="text-[#00f0ff]">*</span>
                    </label>
                    <textarea
                      id="bottleneck"
                      rows={4}
                      placeholder="What's slowing your business down? Be as specific as you'd like — the more we know, the better we can help."
                      aria-invalid={!!errors.bottleneck}
                      className={`${fieldClass} resize-none ${errors.bottleneck ? errorBorderClass : ""}`}
                      {...register("bottleneck")}
                    />
                    {errors.bottleneck && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.bottleneck.message}
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-xs font-medium text-white"
                    >
                      Monthly Budget <span className="text-[#00f0ff]">*</span>
                    </label>
                    <select
                      id="budget"
                      aria-invalid={!!errors.budget}
                      defaultValue=""
                      className={`${fieldClass} ${errors.budget ? errorBorderClass : ""}`}
                      {...register("budget")}
                    >
                      <option value="" disabled>
                        Select your budget range
                      </option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option} className="bg-[#111111]">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.budget.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Book My Free Audit"
                    )}
                  </Button>
                  <p className="mt-4 text-center text-xs text-[#71717a]">
                    By submitting, you agree to be contacted about your inquiry.
                    We never share your information.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

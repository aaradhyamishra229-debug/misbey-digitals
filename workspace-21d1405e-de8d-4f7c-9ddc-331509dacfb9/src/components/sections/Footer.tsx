"use client";

import { Linkedin, Instagram, Github, Mail, ArrowUpRight } from "lucide-react";

const footerServices = [
  "Web Design",
  "SEO & AEO",
  "AI Automations",
  "Custom AI Agents",
  "API Integrations",
];

const footerCompany = [
  { label: "About", href: "#why-ai" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

// ╔══════════════════════════════════════════════════════════════╗
// ║  CONFIGURED — your real contact info                          ║
// ╚══════════════════════════════════════════════════════════════╝
const CONTACT_EMAIL = "misbeydigital@gmail.com";
const CONTACT_PHONE = "+91 81097 63407";
// ════════════════════════════════════════════════════════════════

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
];

export function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") && href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="relative mt-auto border-t border-white/[0.06] bg-[#090909]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00f0ff]" />
              </span>
              <span>
                MISBEY <span className="text-[#a1a1aa] font-normal">DIGITALS</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#71717a]">
              Building Intelligent Digital Infrastructure. Websites, AI systems,
              and automation that run your business while you sleep.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="text-sm text-[#a1a1aa] transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-[#a1a1aa] transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#a1a1aa] transition-all duration-200 hover:border-[#00f0ff]/30 hover:text-[#00f0ff] hover:shadow-[0_0_16px_rgba(0,240,255,0.2)]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-1 text-sm text-[#a1a1aa] transition-colors hover:text-[#00f0ff]"
            >
              {CONTACT_EMAIL}
              <ArrowUpRight size={14} />
            </a>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center gap-1 text-sm text-[#a1a1aa] transition-colors hover:text-[#00f0ff]"
            >
              {CONTACT_PHONE}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-[#71717a]">
            © 2026 Misbey Digitals. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-xs text-[#71717a] transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-xs text-[#71717a] transition-colors hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

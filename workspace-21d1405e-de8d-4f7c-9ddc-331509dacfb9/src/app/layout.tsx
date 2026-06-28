import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// ╔══════════════════════════════════════════════════════════════╗
// ║  CONFIGURED — your real GitHub username + repo name            ║
// ╚══════════════════════════════════════════════════════════════╝
const GITHUB_USERNAME = "aaradhyamishra229-debug";
const REPO_NAME = "misbey-digitals";
const IS_GITHUB_PAGES_BUILD = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const SITE_URL = IS_GITHUB_PAGES_BUILD
  ? `https://${GITHUB_USERNAME}.github.io/${REPO_NAME}`
  : "https://misbeydigitals.com";

export const metadata: Metadata = {
  title: "Misbey Digitals — AI Automation & Web Design Agency",
  description:
    "Misbey Digitals builds intelligent web systems, AI automations, and Answer Engine Optimized content that help businesses eliminate manual work and grow faster.",
  keywords: [
    "AI automation",
    "web design",
    "SEO",
    "AEO",
    "Answer Engine Optimization",
    "custom AI agents",
    "business process automation",
    "digital transformation",
    "Misbey Digitals",
  ],
  authors: [{ name: "Misbey Digitals" }],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Misbey Digitals — Building Intelligent Digital Infrastructure",
    description:
      "High-performance websites, AI automations, SEO + AEO, and custom AI agents for businesses ready to scale.",
    url: SITE_URL,
    siteName: "Misbey Digitals",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Misbey Digitals — Building Intelligent Digital Infrastructure",
    description:
      "High-performance websites, AI automations, SEO + AEO, and custom AI agents for businesses ready to scale.",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

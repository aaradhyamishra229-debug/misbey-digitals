# MISBEY DIGITALS — Production Website

A premium dark-mode agency website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

![Tech Stack](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8) ![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717)

---

## ✨ Features

- **13 fully-built sections** — Hero, Services (bento grid), Why AI, Process, Portfolio, Statistics (animated counters), Why Choose Us, Testimonials, FAQ (accordion), CTA, Contact Form, Footer
- **Premium animations** — Framer Motion entry/hover/scroll animations, gradient orbs, animated counters, gradient-shimmer text
- **Working contact form** — React Hook Form + Zod validation, Formspree integration (or dev mode if not configured)
- **Mobile-first responsive** — Hamburger overlay nav, responsive grids at every breakpoint
- **Accessibility** — Semantic HTML, ARIA labels, keyboard focus rings, `prefers-reduced-motion` support
- **SEO-optimized** — Open Graph, Twitter cards, canonical URL, structured metadata, semantic HTML

---

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Open in browser
open http://localhost:3000
```

---

## 📝 CUSTOMIZATION CHECKLIST

Before deploying, you MUST edit these placeholders with your real info:

### 1. Contact Info (Footer + clickable phone/email)

**File:** `src/components/sections/Footer.tsx` (lines 23–24)

```ts
const CONTACT_EMAIL = "hello@misbeydigitals.com"; // ← your real email
const CONTACT_PHONE = "+91 00000 00000";          // ← your real phone
```

### 2. Formspree Form ID (so contact form actually sends emails)

**File:** `src/components/sections/ContactForm.tsx` (line 78)

```ts
const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // ← replace with your real Formspree ID
```

**How to get a Formspree ID (5 minutes, free):**

1. Go to https://formspree.io → Sign up (free, 50 submissions/month)
2. Click **"New Form"** → name it "Misbey Contact Form"
3. Copy the form ID (looks like `xayznvqw`)
4. Paste it into the code above, replacing `"YOUR_FORMSPREE_ID"`
5. All form submissions will now be emailed to the address you signed up with

### 3. GitHub Username (for deployment URLs)

**File:** `src/app/layout.tsx` (line 21)

```ts
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME"; // ← replace
```

**File:** `next.config.ts` (line 11)

```ts
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME"; // ← replace
```

### 4. Social Media Links (footer icons)

**File:** `src/components/sections/Footer.tsx` (lines 27–30)

```ts
const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },     // ← replace # with your LinkedIn URL
  { icon: Instagram, href: "#", label: "Instagram" },   // ← replace # with your Instagram URL
  { icon: Github, href: "#", label: "GitHub" },         // ← replace # with your GitHub URL
  ...
];
```

### 5. (Optional) Testimonials and Portfolio

The testimonials and portfolio sections use realistic placeholder content. To swap with real ones:

- **Testimonials:** Edit `src/data/misbey/testimonials.ts`
- **Portfolio:** Edit `src/data/misbey/portfolio.ts`

---

## 🌐 DEPLOY TO GITHUB PAGES — STEP BY STEP

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. **Repository name:** `misbey-digitals` (must match the name in `next.config.ts`)
3. Set to **Public** (GitHub Pages free tier only works on public repos)
4. **Don't** initialize with README (we already have one)
5. Click **Create repository**

### Step 2: Push Your Code to GitHub

From your project folder, run:

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit — Misbey Digitals website"

# Set your main branch
git branch -M main

# Add your GitHub repo as remote (replace YOUR_GITHUB_USERNAME)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/misbey-digitals.git

# Push
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** tab
2. Left sidebar → **Pages**
3. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"** (not "Deploy from a branch")
4. Save — that's it. The workflow file at `.github/workflows/deploy.yml` handles the rest.

### Step 4: Trigger the First Build

Pushing to `main` automatically triggers a build. You can also trigger manually:

1. Go to your repo → **Actions** tab
2. Click **"Deploy to GitHub Pages"** workflow (left sidebar)
3. Click **"Run workflow"** button (top right) → **Run workflow**

### Step 5: Wait ~2 minutes, then visit your site

After the build completes:

- Go to **Settings → Pages** again
- You'll see: **"Your site is live at https://YOUR_GITHUB_USERNAME.github.io/misbey-digitals/"**
- Click the link — your site is live! 🎉

---

## 🔧 Troubleshooting GitHub Pages

### Issue: Site shows 404
- Confirm repo is **public** (GitHub Pages free tier requires public repos)
- Confirm GitHub Actions has permissions: Settings → Actions → General → Workflow permissions → "Read and write permissions"
- Confirm Pages source is set to "GitHub Actions" (not "Deploy from a branch")

### Issue: Images/icons broken, CSS missing
- Check that you replaced `YOUR_GITHUB_USERNAME` in `next.config.ts` AND `src/app/layout.tsx`
- Check that the repo name is `misbey-digitals` (matches `REPO_NAME` in `next.config.ts`)
- If you renamed the repo, update `REPO_NAME` in `next.config.ts` and `src/app/layout.tsx`

### Issue: Build fails on GitHub
- Go to **Actions** tab → click the failed run → read the log
- Most common cause: a TypeScript error. The build has `typescript.ignoreBuildErrors: true` so this is rare, but check anyway
- If it's a missing dependency: ensure `bun.lock` is committed (it is, by default)

### Issue: Contact form gives success but no email arrives
- You haven't replaced `YOUR_FORMSPREE_ID` in `src/components/sections/ContactForm.tsx`
- Or your Formspree account email is unverified — check your inbox for a verification email

### Issue: Want to use a custom domain (e.g. misbeydigitals.com)
1. Buy a domain from Namecheap / GoDaddy / etc.
2. In your repo: **Settings → Pages → Custom domain → enter `misbeydigitals.com`**
3. At your domain registrar, add these DNS records:
   - `A` record: `@` → `185.199.108.153`
   - `A` record: `@` → `185.199.109.153`
   - `A` record: `@` → `185.199.110.153`
   - `A` record: `@` → `185.199.111.153`
   - `CNAME` record: `www` → `YOUR_GITHUB_USERNAME.github.io`
4. Wait 24–48 hours for DNS to propagate
5. Edit `next.config.ts`: set `USE_GITHUB_PAGES_PROJECT_SITE = false`
6. Edit `src/app/layout.tsx`: change `SITE_URL` to `https://misbeydigitals.com`
7. Commit + push — done

---

## 🛠 Local Development Commands

```bash
bun install         # Install dependencies
bun run dev         # Start dev server at http://localhost:3000
bun run lint        # Run ESLint
bun run build:static # Build static export to ./out/ folder
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Home page — composes all sections
│   └── globals.css         # Design tokens + utilities
├── components/
│   ├── misbey/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── GradientText.tsx
│   │   ├── GlowOrb.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Badge.tsx
│   │   └── GridOverlay.tsx
│   └── sections/           # Page sections
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── WhyAI.tsx
│       ├── Process.tsx
│       ├── Portfolio.tsx
│       ├── Statistics.tsx
│       ├── WhyChooseUs.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── CTASection.tsx
│       └── ContactForm.tsx
└── data/misbey/            # Content data (easy to edit)
    ├── services.ts
    ├── process.ts
    ├── portfolio.ts
    ├── testimonials.ts
    └── faq.ts

.github/workflows/deploy.yml  # Auto-deploy to GitHub Pages
next.config.ts                # Static export config
public/.nojekyll              # Bypasses Jekyll on GitHub Pages
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#000000` |
| Card BG | `#111111` |
| Primary accent | `#00F0FF` (Electric Blue) |
| Secondary accent | `#3B82F6` (Blue) |
| Text primary | `#FFFFFF` |
| Text secondary | `#A1A1AA` |
| Border | `rgba(255,255,255,0.08)` |
| Display font | Space Grotesk |
| Body font | Inter |

---

## 📜 License

Proprietary — Misbey Digitals. All rights reserved.

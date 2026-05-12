# 🎓 Tovernax Academy — Website

> **A premier educational institution website — subunit of Tovernax Legion**
> Built with Next.js 14, Tailwind CSS, TypeScript. Optimized for Cloudflare Pages deployment.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Pages & Routes](#pages--routes)
- [Deployment (Cloudflare Pages)](#deployment--cloudflare-pages)
- [Customization Guide](#customization-guide)
- [Future Expansion (Tovernax Legion)](#future-expansion)
- [Environment Variables](#environment-variables)

---

## 🏛️ Overview

Tovernax Academy is a full-featured, production-ready educational website featuring:

- ✅ **14 complete pages** — Home, About, Courses, Admissions, Contact, LMS + all service pages
- ✅ **Premium UI design** — Playfair Display + DM Sans typography, navy/gold brand palette
- ✅ **Fully responsive** — Mobile-first, tested from 320px to 1920px
- ✅ **SEO ready** — OpenGraph, Twitter Cards, sitemap-ready metadata on every page
- ✅ **Static export** — Fully compatible with Cloudflare Pages (no server required)
- ✅ **Modular architecture** — Easy to extend, add pages, and integrate CMS
- ✅ **Tovernax Legion ecosystem** — Placeholder structure for 5 future sub-units

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.x | React framework, routing, SSG |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility-first styling |
| PostCSS | 8.x | CSS processing |
| clsx + tailwind-merge | latest | Conditional class utilities |

---

## 📁 Project Structure

```
tovernax-academy/
├── src/
│   ├── app/                          # Next.js 14 App Router pages
│   │   ├── layout.tsx                # Root layout (Navbar + Footer)
│   │   ├── page.tsx                  # Homepage
│   │   ├── not-found.tsx             # Custom 404 page
│   │   ├── about/page.tsx
│   │   ├── courses/
│   │   │   ├── page.tsx              # Course listing
│   │   │   └── [slug]/page.tsx       # Individual course detail
│   │   ├── academic-coaching/page.tsx
│   │   ├── competitive-exam-prep/page.tsx
│   │   ├── online-classes/page.tsx
│   │   ├── offline-classes/page.tsx
│   │   ├── hybrid-learning/page.tsx
│   │   ├── parent-counseling/page.tsx
│   │   ├── student-counseling/page.tsx
│   │   ├── teacher-training/page.tsx
│   │   ├── admissions/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── lms/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Fixed top navbar with mega-dropdown
│   │   │   └── Footer.tsx            # Multi-column footer with social links
│   │   ├── sections/                 # Homepage section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── VisionMissionSection.tsx
│   │   │   ├── WhyChooseUsSection.tsx
│   │   │   ├── AcademicModelSection.tsx
│   │   │   ├── FeaturedProgramsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── LegionEcosystemSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/
│   │       ├── PageHero.tsx          # Reusable inner page hero
│   │       └── ScrollReveal.tsx      # Intersection Observer scroll animations
│   │
│   ├── lib/
│   │   ├── constants.ts              # All site data, nav links, courses, etc.
│   │   └── utils.ts                  # Utility functions (cn, slugify, etc.)
│   │
│   └── styles/
│       └── globals.css               # Global CSS, Tailwind directives, design tokens
│
├── public/                           # Static assets
│   ├── favicon.ico
│   └── og-image.png                  # OpenGraph image (add your own)
│
├── next.config.js                    # Next.js config (static export)
├── tailwind.config.ts                # Tailwind theme + custom tokens
├── tsconfig.json                     # TypeScript config
├── postcss.config.js                 # PostCSS config
├── wrangler.toml                     # Cloudflare Pages config
├── .env.example                      # Environment variable template
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for production

```bash
npm run build
```

This creates the `/out` directory with the fully static site.

---

## 📄 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, Vision, Why Us, Programs, Testimonials |
| `/about` | About Us | Story, Timeline, Leadership team |
| `/courses` | Course Listing | All programs with filters |
| `/courses/[slug]` | Course Detail | Individual course page |
| `/academic-coaching` | Academic Coaching | Class 6–12 coaching info |
| `/competitive-exam-prep` | Competitive Prep | JEE/NEET/UPSC/Banking |
| `/online-classes` | Online Classes | Platform features, schedules |
| `/offline-classes` | Offline Classes | Campus facilities, branches |
| `/hybrid-learning` | Hybrid Learning | Model comparison, benefits |
| `/parent-counseling` | Parent Counseling | Parent services, FAQ |
| `/student-counseling` | Student Counseling | Counseling areas, process |
| `/teacher-training` | Teacher Training | Programs for educators |
| `/admissions` | Admissions | Process, fees, application form |
| `/contact` | Contact | Form, branches, map |
| `/lms` | LMS Portal | Platform features, dashboard preview |
| `/privacy` | Privacy Policy | Legal |
| `/terms` | Terms of Use | Legal |

---

## ☁️ Deployment — Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. Push this project to a GitHub/GitLab repository
2. Log in to [Cloudflare Pages](https://pages.cloudflare.com)
3. Click **Create a project** → **Connect to Git**
4. Select your repository
5. Configure build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** `18`
6. Add environment variables from `.env.example`
7. Click **Save and Deploy**

### Method 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name=tovernax-academy
```

### Custom Domain Setup
1. In Cloudflare Pages → your project → **Custom domains**
2. Add `academy.tovernax.com`
3. Update DNS: Add a CNAME record pointing to your Pages URL

---

## 🎨 Customization Guide

### Updating Brand Content

All site-wide content lives in `src/lib/constants.ts`:

```typescript
// Update contact details
export const SITE = {
  name: "Tovernax Academy",
  phone: "+91 98765 43210",
  email: "academy@tovernax.com",
  // ...
};

// Update navigation
export const NAV_LINKS = [...];

// Update courses
export const FEATURED_COURSES = [...];

// Update testimonials
export const TESTIMONIALS = [...];
```

### Changing Colors

Edit `tailwind.config.ts` to update the brand palette:

```typescript
colors: {
  navy: {
    700: "#1a27e1",  // Primary brand color
    950: "#0e1154",  // Dark brand
  },
  gold: {
    500: "#f5b800",  // Accent color
  },
}
```

### Adding a New Page

1. Create `src/app/new-page/page.tsx`
2. Add metadata export
3. Add to `NAV_LINKS` or `FOOTER_LINKS` in `constants.ts`
4. Use `<PageHero>` component for consistent header styling

### Integrating a CMS (Sanity/Contentful)

1. Install your CMS client: `npm install @sanity/client`
2. Add API keys to `.env.local`
3. Replace static data in `constants.ts` with CMS fetch calls
4. Add `revalidate` for ISR (if moving away from static export)

---

## 🏗️ Future Expansion (Tovernax Legion)

The project is architected to support the full Tovernax Legion ecosystem:

```
tovernax.com (Legion HQ)
├── academy.tovernax.com     ← This project ✅
├── skills.tovernax.com      ← Tovernax Skills (Soon)
├── roots.tovernax.com       ← Tovernax Roots (Soon)
├── media.tovernax.com       ← Tovernax Media (Soon)
├── expeditions.tovernax.com ← Tovernax Expeditions (Soon)
└── estates.tovernax.com     ← Tovernax Estates (Soon)
```

Each sub-unit can be built as a separate Next.js project using the same design system defined in this project's `tailwind.config.ts` and `globals.css`.

**Recommended approach for multi-site Legion:**
- Extract design tokens into a shared npm package (e.g. `@tovernax/design-system`)
- Share `constants.ts` patterns for navigation/branding
- Use Cloudflare Pages for each sub-site with shared Cloudflare Access policies

---

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | Production URL for metadata |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 measurement ID |
| `RESEND_API_KEY` | No | For contact form email delivery |
| `CONTACT_EMAIL` | No | Email to receive contact form submissions |
| `SANITY_PROJECT_ID` | No | For future CMS integration |
| `LMS_API_URL` | No | For future LMS backend integration |

---

## 📞 Support

For questions about this codebase:
- Email: tech@tovernax.com
- WhatsApp: +91 98765 43210

---

*© 2025 Tovernax Academy — A unit of Tovernax Legion. All rights reserved.*

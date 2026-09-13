"use client";

import React from "react";

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  priceNote: string;
  timeline: string;
  targetAudience: string;
  description: string;
  features: string[];
  budgetCode: string;
  projectTypeCode: string;
  ctaText: string;
}

const tiers: PricingTier[] = [
  {
    id: "landing",
    name: "Sprint Landing Page",
    price: "$1,500 – $3,000",
    priceNote: "Fixed-price milestone engagement",
    timeline: "2–3 Weeks Turnaround",
    targetAudience: "SaaS Launches • B2B Funnels • Product Repositioning",
    description:
      "Ultra-fast, high-converting digital storefront engineered to maximize paid acquisition and venture investor presentation.",
    features: [
      "Persuasive visual storytelling & conversion layout",
      "Sub-second Core Web Vitals (99+ Lighthouse score)",
      "Interactive component prototype in Figma",
      "Conversion funnel instrumentation & telemetry",
      "100% full GitHub repository & design asset transfer",
      "Complimentary 30-day post-launch bug warranty",
    ],
    budgetCode: "1500-3000",
    projectTypeCode: "landing-page",
    ctaText: "Select Landing Page Sprint",
  },
  {
    id: "custom-app",
    name: "Custom Web App / MVP",
    badge: "Most Popular for Startups",
    isPopular: true,
    price: "$3,000 – $6,000",
    priceNote: "Milestone-governed sprint delivery",
    timeline: "4–6 Weeks Turnaround",
    targetAudience: "Multi-Branch Ops • Custom SaaS MVP • Internal Tools",
    description:
      "Production-ready web application eliminating operational friction with automated payment webhooks and relational integrity.",
    features: [
      "Includes everything in Sprint Landing Page",
      "Next.js 15 App Router & Strict TypeScript architecture",
      "Supabase / PostgreSQL relational schema & Prisma ORM",
      "Role-Based Access Control (RBAC) & enterprise auth",
      "Automated webhook settlements & Midtrans integration",
      "Live staging deployment URLs with weekly Loom demos",
      "Complimentary 30-day post-launch bug warranty",
    ],
    budgetCode: "3000-6000",
    projectTypeCode: "custom-app",
    ctaText: "Select Web App Sprint",
  },
  {
    id: "enterprise",
    name: "Enterprise Architecture",
    badge: "Scale & High Concurrency",
    price: "$6,000+",
    priceNote: "Custom architectural milestone scope",
    timeline: "6–10 Weeks Turnaround",
    targetAudience: "High-Concurrency • Multi-Tenant Systems • Complex Workflows",
    description:
      "Comprehensive system engineering for multi-location platforms requiring custom state machines and microservices synchronization.",
    features: [
      "Includes everything in Custom Web App",
      "Multi-tenant architectures & complex state machines",
      "High-concurrency database indexing & caching strategies",
      "Custom third-party API & distributed webhook orchestration",
      "Dedicated senior builder focus (limited concurrent client load)",
      "Extended 60-day engineering warranty & prioritized SLA",
    ],
    budgetCode: "6000+",
    projectTypeCode: "fullstack-mvp",
    ctaText: "Discuss Enterprise Sprint",
  },
];

export default function PricingTiers() {
  const handleSelectTier = (budgetCode: string, projectTypeCode: string) => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("select-pricing-tier", {
        detail: { budget: budgetCode, projectType: projectTypeCode },
      });
      window.dispatchEvent(event);

      const target = document.getElementById("quick-brief");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className="w-full py-section-gap-md lg:py-section-gap-lg relative"
      id="pricing-section"
    >
      <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-section-gap-sm">
          <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            TRANSPARENT SPRINT INVESTMENT
          </div>
          <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
            Predictable Milestones. Zero Agency Overhead.
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-2">
            Every engagement operates on transparent milestone payments (50% kickoff, 25% staging preview, 25% final sign-off &amp; IP transfer) with fixed timelines and clear deliverables.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-element-gap-lg items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`cyber-card relative rounded-2xl flex flex-col justify-between p-element-gap-xl transition-all duration-300 ${
                tier.isPopular
                  ? "bg-surface-container/90 border-2 border-primary-container/70 shadow-[0_0_35px_rgba(0,242,254,0.18)] lg:-translate-y-2"
                  : "bg-surface-container-low/75 border border-outline-variant/40 shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-3 py-1 rounded-full font-label-code text-[11px] uppercase tracking-wider font-semibold shadow-md ${
                      tier.isPopular
                        ? "bg-gradient-to-r from-primary-container to-primary-fixed text-on-primary-container border border-primary-container"
                        : "bg-surface-container-highest text-secondary border border-secondary/40"
                    }`}
                  >
                    ✦ {tier.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between gap-2 mb-element-gap-xs pt-1">
                  <h3 className="font-headline-md text-xl font-bold text-primary">
                    {tier.name}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant/30 text-[11px] font-label-code text-on-surface-variant mb-element-gap-md">
                  <span className="material-symbols-outlined text-[14px] text-primary-container">
                    schedule
                  </span>
                  <span>{tier.timeline}</span>
                </div>

                {/* Pricing Number */}
                <div className="mb-element-gap-md pb-element-gap-sm border-b border-outline-variant/20">
                  <div className="font-display-xl text-3xl sm:text-4xl text-primary font-black tracking-tight">
                    {tier.price}
                  </div>
                  <div className="font-label-code text-xs text-outline mt-0.5">
                    {tier.priceNote}
                  </div>
                </div>

                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-element-gap-md leading-relaxed">
                  {tier.description}
                </p>

                <div className="mb-element-gap-sm">
                  <span className="font-label-code text-[11px] uppercase tracking-wider text-outline font-medium">
                    Deliverables &amp; Inclusions:
                  </span>
                </div>

                {/* Feature List */}
                <ul className="space-y-2.5 mb-element-gap-xl">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-body-sm text-on-surface"
                    >
                      <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5 flex-shrink-0">
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() =>
                  handleSelectTier(tier.budgetCode, tier.projectTypeCode)
                }
                className={`w-full py-3 px-element-gap-md rounded-xl font-headline-md text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  tier.isPopular
                    ? "btn-shimmer bg-gradient-to-r from-primary-container to-primary-fixed text-on-primary-container shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] hover:scale-[1.02] active:scale-[0.98]"
                    : "bg-surface-container-high border border-outline-variant/50 text-primary hover:border-primary-container/50 hover:bg-surface-container-highest hover:text-primary-container hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                <span>{tier.ctaText}</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Milestone Guarantee Banner */}
        <div className="mt-element-gap-xl p-4 rounded-xl bg-surface-container-low/90 border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[22px] flex-shrink-0">
              verified_user
            </span>
            <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
              <strong className="text-primary font-semibold">Payment Protection Guarantee:</strong> 50% deposit to initiate sprint architecture &bull; 25% upon functional staging preview &bull; 25% only upon final production sign-off and 100% GitHub IP transfer.
            </span>
          </div>
          <a
            href="#faq-section"
            className="font-label-code text-xs text-primary-container font-semibold hover:underline whitespace-nowrap flex items-center gap-1 flex-shrink-0"
          >
            <span>Learn More in FAQ</span>
            <span className="material-symbols-outlined text-[14px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

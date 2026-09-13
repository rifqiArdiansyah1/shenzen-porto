"use client";

import React from "react";

const commitments = [
  {
    icon: "verified_user",
    title: "100% Code & IP Ownership",
    description:
      "Full GitHub repository handover upon completion. Strict NDA protection with zero vendor or proprietary lock-in.",
  },
  {
    icon: "terminal",
    title: "Direct Senior Engineer Access",
    description:
      "Work directly with the builder. No account managers or communication latency—regular Loom video walkthroughs and clean PRs.",
  },
  {
    icon: "bolt",
    title: "Production Next.js & TypeScript",
    description:
      "Modern React Server Components, rigorous type safety, modular schemas, and sub-second Core Web Vitals guaranteed.",
  },
  {
    icon: "public",
    title: "Global Asynchronous Cadence",
    description:
      "Engineered for international founders. Overlapping working hours across US, Europe, and APAC with reliable weekly sprint dispatches.",
  },
];

const techStack = [
  { name: "Next.js 15+", tag: "App Router" },
  { name: "TypeScript", tag: "Strict Mode" },
  { name: "React 19", tag: "Server Components" },
  { name: "Tailwind CSS v4", tag: "Design Engine" },
  { name: "Supabase", tag: "Postgres Backend" },
  { name: "Prisma ORM", tag: "Relational Schema" },
  { name: "PostgreSQL", tag: "Enterprise DB" },
  { name: "Vercel Cloud", tag: "Production CI/CD" },
  { name: "Midtrans Gateway", tag: "Payment Settlement" },
  { name: "Three.js / WebGL", tag: "3D Graphics" },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-surface-container-lowest/90 border-y border-outline-variant/30 py-element-gap-lg relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-72 h-72 bg-primary-container/10 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-72 h-72 bg-secondary-container/15 blur-[100px] rounded-full" />

      <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop relative z-10">
        {/* Header Tag */}
        <div className="text-center mb-element-gap-md">
          <p className="font-label-code text-xs uppercase tracking-widest text-primary-container flex items-center justify-center gap-2">
            <span className="h-1 w-6 bg-primary-container/60 inline-block rounded-full" />
            <span>TRANSPARENT ENGINEERING GUARANTEES &bull; ZERO AGENCY FLUFF</span>
            <span className="h-1 w-6 bg-primary-container/60 inline-block rounded-full" />
          </p>
        </div>

        {/* 4 Honest Engineering Commitments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-element-gap-md mb-element-gap-lg">
          {commitments.map((item, idx) => (
            <div
              key={idx}
              className="p-element-gap-md rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md hover:border-primary-container/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary-container mb-3 group-hover:scale-105 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
                  <span className="material-symbols-outlined text-[20px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-sm md:text-base font-bold text-primary mb-1 group-hover:text-primary-container transition-colors">
                  {item.title}
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Production Tech Stack Marquee Ticker */}
        <div className="pt-2 border-t border-outline-variant/20">
          <div className="text-center mb-3">
            <span className="font-label-code text-[11px] uppercase tracking-wider text-outline">
              PRODUCTION-TESTED MODERN TECH STACK
            </span>
          </div>

          <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-ticker items-center gap-element-gap-lg whitespace-nowrap px-4 flex">
              {/* Set 1 */}
              {techStack.map((tech, i) => (
                <div
                  key={`tech-1-${i}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 text-xs font-label-code text-on-surface hover:border-primary-container/40 hover:text-primary transition-all cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span className="font-semibold text-primary">{tech.name}</span>
                  <span className="text-[10px] text-outline px-1 rounded bg-surface-container-lowest border border-outline-variant/20">
                    {tech.tag}
                  </span>
                </div>
              ))}

              {/* Set 2 (Duplicate for Seamless Infinite Marquee Loop) */}
              {techStack.map((tech, i) => (
                <div
                  key={`tech-2-${i}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 text-xs font-label-code text-on-surface hover:border-primary-container/40 hover:text-primary transition-all cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span className="font-semibold text-primary">{tech.name}</span>
                  <span className="text-[10px] text-outline px-1 rounded bg-surface-container-lowest border border-outline-variant/20">
                    {tech.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

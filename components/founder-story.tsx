"use client";

import React from "react";
import Image from "next/image";

export default function FounderStory() {
  return (
    <section
      className="w-full py-section-gap-md lg:py-section-gap-lg relative overflow-hidden"
      id="about"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary-container/10 blur-[150px] rounded-full" />

      <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-section-gap-sm">
          <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            THE BOUTIQUE ADVANTAGE
          </div>
          <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
            Boutique Engineering. Direct Senior Access.
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-2">
            Why venture-backed founders and ambitious businesses choose a dedicated senior builder over bloated, multi-layered agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-element-gap-xl items-center">
          {/* Left: 4 Pillars of the Boutique Model */}
          <div className="lg:col-span-7 flex flex-col gap-element-gap-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-element-gap-md">
              {/* Pillar 1 */}
              <div className="p-element-gap-lg rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-md flex flex-col justify-between hover:border-primary-container/40 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary-container mb-element-gap-sm">
                    <span className="material-symbols-outlined text-[22px]">
                      terminal
                    </span>
                  </div>
                  <h3 className="font-headline-md text-base md:text-lg font-bold text-primary mb-1">
                    Direct Builder Access
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Zero account manager latency. Discuss technical trade-offs, schemas, and architecture directly with the engineer writing your production code.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-outline-variant/20 font-label-code text-[11px] text-primary-container">
                  Direct Slack / Loom Demos
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-element-gap-lg rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-md flex flex-col justify-between hover:border-primary-container/40 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-secondary mb-element-gap-sm">
                    <span className="material-symbols-outlined text-[22px]">
                      verified
                    </span>
                  </div>
                  <h3 className="font-headline-md text-base md:text-lg font-bold text-primary mb-1">
                    Zero Junior Outsourcing
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Your platform is never handed down to entry-level interns or subcontractors. Every schema, migration, and component is personally crafted and verified.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-outline-variant/20 font-label-code text-[11px] text-secondary">
                  Senior-Grade Craft
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-element-gap-lg rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-md flex flex-col justify-between hover:border-primary-container/40 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-primary-container mb-element-gap-sm">
                    <span className="material-symbols-outlined text-[22px]">
                      speed
                    </span>
                  </div>
                  <h3 className="font-headline-md text-base md:text-lg font-bold text-primary mb-1">
                    1–2 Clients per Sprint
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    We intentionally cap concurrent projects to maintain deep domain focus, high development velocity, and rapid sub-12h communication turnarounds.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-outline-variant/20 font-label-code text-[11px] text-primary-container">
                  Dedicated Sprint Cadence
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-element-gap-lg rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-md flex flex-col justify-between hover:border-primary-container/40 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-secondary mb-element-gap-sm">
                    <span className="material-symbols-outlined text-[22px]">
                      lock_open
                    </span>
                  </div>
                  <h3 className="font-headline-md text-base md:text-lg font-bold text-primary mb-1">
                    100% Code Sovereignty
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Zero proprietary lock-in. Clean GitHub repositories, documentation guides, and environment setups transferred with signed NDA protection.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-outline-variant/20 font-label-code text-[11px] text-secondary">
                  Complete IP Handover
                </div>
              </div>
            </div>
          </div>

          {/* Right: Studio & Lead Engineer Credential Card */}
          <div className="lg:col-span-5">
            <div className="cyber-card rounded-2xl bg-surface-container-high/90 border border-outline-variant/40 backdrop-blur-xl p-element-gap-xl shadow-2xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary-container/15 rounded-full blur-2xl" />

              <div className="flex items-center gap-4 mb-element-gap-md">
                <div className="h-16 w-16 rounded-2xl bg-surface-container-lowest border border-primary-container/40 p-2 flex items-center justify-center shadow-inner flex-shrink-0">
                  <Image
                    src="/logo-monogram.svg"
                    alt="Shenzhen Studio Emblem"
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-container/15 text-primary-container text-[11px] font-label-code uppercase tracking-wider mb-1 border border-primary-container/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                    Lead Software Engineer
                  </div>
                  <h3 className="font-headline-md text-xl font-bold text-primary">
                    Shenzhen Studio
                  </h3>
                  <span className="font-label-code text-xs text-on-surface-variant">
                    Independent Engineering Practice
                  </span>
                </div>
              </div>

              <blockquote className="font-body-md text-sm text-on-surface-variant leading-relaxed italic border-l-2 border-primary-container pl-3.5 mb-element-gap-lg">
                &ldquo;Modern web applications should be mathematically fast, architecturally clean, and completely owned by the client. We eliminate bureaucratic agency overhead so every dollar spent goes directly into high-leverage production engineering.&rdquo;
              </blockquote>

              <div className="space-y-element-gap-xs mb-element-gap-lg">
                <div className="font-label-code text-xs uppercase tracking-wider text-outline mb-1">
                  Core Engineering Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container border border-outline-variant/40 font-label-code text-xs text-primary">
                    Next.js 15+ App Router
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container border border-outline-variant/40 font-label-code text-xs text-primary">
                    Strict TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container border border-outline-variant/40 font-label-code text-xs text-primary">
                    Supabase &amp; Prisma ORM
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container border border-outline-variant/40 font-label-code text-xs text-primary">
                    Midtrans &amp; Webhooks
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container border border-outline-variant/40 font-label-code text-xs text-primary">
                    Tailwind CSS v4
                  </span>
                </div>
              </div>

              <div className="pt-element-gap-md border-t border-outline-variant/30 flex items-center justify-between flex-wrap gap-3">
                <a
                  href="https://github.com/rifqiArdiansyah1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-label-code text-on-surface hover:text-primary-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    code
                  </span>
                  <span>Inspect GitHub Profile</span>
                </a>

                <a
                  href="https://cal.com/shenzenstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-label-code text-primary-container font-semibold hover:underline"
                >
                  <span>Schedule 15-Min Intro</span>
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

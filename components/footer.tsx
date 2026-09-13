"use client";

import React, { useState } from "react";
import Image from "next/image";
import LegalModals, { LegalModalType } from "./legal-modals";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 6000);
  };

  return (
    <footer className="relative z-10 w-full bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop pt-section-gap-sm pb-element-gap-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-element-gap-xl mb-section-gap-sm">
          {/* Column 1: Brand & Timezones */}
          <div className="lg:col-span-4 flex flex-col gap-element-gap-md">
            <div className="flex items-center gap-2.5 group">
              <div className="h-8 w-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-monogram.svg"
                  alt="Shenzhen Studio Monogram"
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="font-headline-md text-lg text-primary tracking-tight uppercase font-bold">
                SHENZHEN
                <span className="text-primary-container font-light ml-1">
                  STUDIO
                </span>
              </span>
            </div>

            <p className="text-on-surface-variant font-body-md text-sm max-w-sm leading-relaxed">
              Engineering high-converting web platforms and scalable bespoke
              applications with zero-compromise architectural craft.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center gap-1.5 hover:border-primary-container/40 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-container animate-pulse" />
                <span className="font-label-code text-xs text-on-surface-variant">
                  Singapore (SGT):{" "}
                  <strong className="text-on-surface font-semibold">
                    UTC+8
                  </strong>
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center gap-1.5 hover:border-secondary/40 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary-fixed-dim animate-pulse" />
                <span className="font-label-code text-xs text-on-surface-variant">
                  US East (EST):{" "}
                  <strong className="text-on-surface font-semibold">
                    UTC-5
                  </strong>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="lg:col-span-2 flex flex-col gap-element-gap-sm">
            <span className="font-label-code text-xs text-primary uppercase tracking-wider font-semibold">
              Core Services
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#services"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  High-Conversion Landing Pages
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Custom Enterprise Web Apps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  SaaS Systems Architecture
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Design Systems &amp; 3D WebGL
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Core Web Vitals Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Showcase & Stack */}
          <div className="lg:col-span-2 flex flex-col gap-element-gap-sm">
            <span className="font-label-code text-xs text-primary uppercase tracking-wider font-semibold">
              Architecture &amp; Stack
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#featured-works"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Next.js 15+ App Router
                </a>
              </li>
              <li>
                <a
                  href="#featured-works"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  TypeScript Enterprise
                </a>
              </li>
              <li>
                <a
                  href="#featured-works"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Supabase &amp; Prisma ORM
                </a>
              </li>
              <li>
                <a
                  href="#featured-works"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Three.js 3D WebGL
                </a>
              </li>
              <li>
                <a
                  href="#featured-works"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Tailwind CSS v4
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Dispatch */}
          <div className="lg:col-span-4 flex flex-col gap-element-gap-md">
            <span className="font-label-code text-xs text-primary uppercase tracking-wider font-semibold">
              Engineering Dispatch
            </span>
            <p className="text-on-surface-variant font-body-sm text-xs leading-relaxed">
              Get notified when we publish new production case studies,
              architectural breakdowns, and performance benchmarks.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="engineer@company.com"
                className="w-full px-4 py-2 rounded-full bg-surface-container border border-outline-variant/40 font-label-code text-xs text-on-surface placeholder:text-outline/70 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container shadow-inner transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/40 text-primary font-body-sm text-xs font-semibold hover:bg-primary-container hover:text-on-primary-container hover:border-primary-container transition-all whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <p className="font-label-code text-xs text-primary-container animate-fadeIn">
                ✓ Thank you for subscribing to Shenzhen Studio Dispatch!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-element-gap-lg border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-element-gap-md">
          <span className="font-label-code text-xs text-outline">
            &copy; {new Date().getFullYear()} Shenzhen Studio. All rights
            reserved. Built for international reliability.
          </span>
          <div className="flex items-center gap-element-gap-lg">
            <button
              type="button"
              onClick={() => setLegalModal("security")}
              className="font-label-code text-xs text-on-surface-variant hover:text-primary-container cursor-pointer transition-colors bg-transparent border-none p-0"
            >
              Security Standards
            </button>
            <button
              type="button"
              onClick={() => setLegalModal("terms")}
              className="font-label-code text-xs text-on-surface-variant hover:text-primary-container cursor-pointer transition-colors bg-transparent border-none p-0"
            >
              NDA &amp; Privacy Terms
            </button>
            <span className="font-label-code text-xs text-on-surface-variant">
              Independent Web Engineering Studio
            </span>
          </div>
        </div>
      </div>

      {/* Accessible Legal & Security Standards Modal */}
      <LegalModals
        activeModal={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </footer>
  );
}

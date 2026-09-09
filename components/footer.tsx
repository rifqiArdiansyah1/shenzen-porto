"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

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
                <span className="text-primary-container font-light ml-1">STUDIO</span>
              </span>
            </div>

            <p className="text-on-surface-variant font-body-md text-sm max-w-sm leading-relaxed">
              Engineering Tomorrow&apos;s High-Performing Web Interfaces &amp; Custom Apps with zero-compromise architectural craft.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center gap-1.5 hover:border-primary-container/40 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-container animate-pulse" />
                <span className="font-label-code text-xs text-on-surface-variant">
                  Shenzhen (CST): <strong className="text-on-surface font-semibold">UTC+8</strong>
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center gap-1.5 hover:border-secondary/40 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary-fixed-dim animate-pulse" />
                <span className="font-label-code text-xs text-on-surface-variant">
                  Jakarta (WIB): <strong className="text-on-surface font-semibold">UTC+7</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Layanan */}
          <div className="lg:col-span-2 flex flex-col gap-element-gap-sm">
            <span className="font-label-code text-xs text-primary uppercase tracking-wider font-semibold">
              Layanan
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#services"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  High-Conversion Landing Page
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Enterprise Custom Web Apps
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
                  Design Systems &amp; UX Matrix
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Performance &amp; Core Web Vitals
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Stack & Portofolio */}
          <div className="lg:col-span-2 flex flex-col gap-element-gap-sm">
            <span className="font-label-code text-xs text-primary uppercase tracking-wider font-semibold">
              Portofolio &amp; Stack
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#featured-works"
                  className="text-on-surface-variant font-body-sm text-xs hover:text-primary-container transition-colors"
                >
                  Next.js 16 &amp; RSC
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
                  Tailwind CSS Cybernetic
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
                  PostgreSQL Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Dispatch */}
          <div className="lg:col-span-4 flex flex-col gap-element-gap-md">
            <span className="font-label-code text-xs text-primary uppercase tracking-wider font-semibold">
              Tech Insights Dispatch
            </span>
            <p className="text-on-surface-variant font-body-sm text-xs leading-relaxed">
              Dapatkan briefing bulanan tentang architectural trends, conversion telemetry, dan performance engineering.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
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
                ✓ Terima kasih telah berlangganan Dispatch Shenzhen Studio!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-element-gap-lg border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-element-gap-md">
          <span className="font-label-code text-xs text-outline">
            © {new Date().getFullYear()} Shenzhen Studio. All rights reserved. Precision Built for Global Scale.
          </span>
          <div className="flex items-center gap-element-gap-lg">
            <span className="font-label-code text-xs text-on-surface-variant hover:text-primary-container cursor-pointer transition-colors">
              Security Protocol
            </span>
            <span className="font-label-code text-xs text-on-surface-variant hover:text-primary-container cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="font-label-code text-xs text-on-surface-variant hover:text-primary-container cursor-pointer transition-colors flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-container animate-pulse" />
              System Status: Optimal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

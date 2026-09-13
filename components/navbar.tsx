"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-dim/80 backdrop-blur-2xl border-b border-outline-variant/30 transition-all">
      <div className="h-20 max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop flex items-center justify-between gap-element-gap-md">
        {/* Brand Logo & Status Beacon */}
        <div className="flex items-center gap-element-gap-lg">
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="h-9 w-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo-monogram.svg"
                alt="Shenzhen Studio Monogram"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
            <span className="font-headline-md text-lg tracking-tight text-primary uppercase whitespace-nowrap font-bold">
              SHENZHEN
              <span className="text-primary-container font-light ml-1">STUDIO</span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high/80 border border-outline-variant/40 whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
            </span>
            <span className="font-label-code text-[11px] text-primary tracking-wider uppercase">
              Accepting New Projects
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-container-lowest/70 backdrop-blur-md border border-outline-variant/40">
          <a
            href="#services"
            className="px-3.5 py-1.5 rounded-full font-body-sm text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            Services
          </a>
          <a
            href="#pricing-section"
            className="px-3.5 py-1.5 rounded-full font-body-sm text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            Pricing
          </a>
          <a
            href="#featured-works"
            className="px-3.5 py-1.5 rounded-full font-body-sm text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            Work
          </a>
          <a
            href="#about"
            className="px-3.5 py-1.5 rounded-full font-body-sm text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            About
          </a>
          <a
            href="#process-section"
            className="px-3.5 py-1.5 rounded-full font-body-sm text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            Process
          </a>
          <a
            href="#testimonials-section"
            className="px-3.5 py-1.5 rounded-full font-body-sm text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            Impact
          </a>
          <a
            href="#faq-section"
            className="px-3.5 py-1.5 rounded-full font-body-sm text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            FAQ
          </a>
          <a
            href="#quick-brief"
            className="px-3.5 py-1.5 rounded-full font-body-sm text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-element-gap-md">
          <a
            href="#quick-brief"
            className="btn-shimmer hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container font-headline-md text-xs font-bold tracking-tight shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_28px_rgba(0,242,254,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Start a Project
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-surface-container-high border border-outline-variant/40 text-primary hover:border-primary-container/40 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-dim/95 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-5 flex flex-col gap-3 animate-fadeIn">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            Services
          </a>
          <a
            href="#pricing-section"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            Pricing Tiers
          </a>
          <a
            href="#featured-works"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            Work / Showcase
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            About / Boutique Model
          </a>
          <a
            href="#process-section"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            Tech Stack &amp; Process
          </a>
          <a
            href="#testimonials-section"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            Impact &amp; Case Studies
          </a>
          <a
            href="#faq-section"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            FAQ
          </a>
          <a
            href="#quick-brief"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"
          >
            Contact
          </a>
          <a
            href="#quick-brief"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 rounded-xl bg-primary-container text-on-primary-container font-headline-md text-center text-sm font-bold shadow-[0_0_20px_rgba(0,242,254,0.35)]"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
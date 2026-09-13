"use client";

import React from "react";

export default function HeroMetrics() {
  const handleOpenDriveFlow = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-case-study", { detail: { id: "driveflow" } })
      );
    }
  };

  const handleScrollToTech = () => {
    if (typeof window !== "undefined") {
      const el = document.getElementById("services");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-stagger-5 pt-element-gap-md mt-element-gap-sm grid grid-cols-1 sm:grid-cols-3 gap-element-gap-md">
      {/* Metric 1: 0 Schedule Overlaps */}
      <button
        type="button"
        onClick={handleOpenDriveFlow}
        className="cyber-card p-element-gap-md rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left group hover:border-primary-container/60 hover:shadow-[0_0_20px_rgba(0,242,254,0.18)] transition-all cursor-pointer"
      >
        <div className="font-label-code text-xs text-primary-container uppercase flex items-center justify-between">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              event_available
            </span>
            Schedule Lock
          </span>
          <span className="h-2 w-2 rounded-full bg-primary-container animate-pulse" />
        </div>
        <div className="font-metric-counter text-3xl md:text-4xl text-primary font-extrabold mt-1 group-hover:text-primary-container transition-colors">
          0 Overlaps
        </div>
        <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
          Verified Multi-Branch Fleet Lock
        </p>
        <div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center gap-1 text-[11px] font-label-code text-primary-container opacity-80 group-hover:opacity-100">
          <span>Inspect Case Study</span>
          <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform">
            arrow_forward
          </span>
        </div>
      </button>

      {/* Metric 2: < 60s Checkout */}
      <button
        type="button"
        onClick={handleOpenDriveFlow}
        className="cyber-card p-element-gap-md rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left group hover:border-primary-container/60 hover:shadow-[0_0_20px_rgba(0,242,254,0.18)] transition-all cursor-pointer"
      >
        <div className="font-label-code text-xs text-primary-container uppercase flex items-center justify-between">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              electric_bolt
            </span>
            Booking Speed
          </span>
          <span className="h-2 w-2 rounded-full bg-secondary-fixed animate-pulse" />
        </div>
        <div className="font-metric-counter text-3xl md:text-4xl text-primary font-extrabold mt-1 group-hover:text-primary-container transition-colors">
          &lt; 60s
        </div>
        <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
          Automated Checkout &amp; Settlement
        </p>
        <div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center gap-1 text-[11px] font-label-code text-primary-container opacity-80 group-hover:opacity-100">
          <span>Inspect Case Study</span>
          <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform">
            arrow_forward
          </span>
        </div>
      </button>

      {/* Metric 3: 99+ Core Web Vitals */}
      <button
        type="button"
        onClick={handleScrollToTech}
        className="cyber-card p-element-gap-md rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left group hover:border-primary-container/60 hover:shadow-[0_0_20px_rgba(0,242,254,0.18)] transition-all cursor-pointer"
      >
        <div className="font-label-code text-xs text-primary-container uppercase flex items-center justify-between">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">speed</span>
            Web Vitals
          </span>
          <span className="h-2 w-2 rounded-full bg-primary-container animate-pulse" />
        </div>
        <div className="font-metric-counter text-3xl md:text-4xl text-primary font-extrabold mt-1 group-hover:text-primary-container transition-colors">
          99+ Score
        </div>
        <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
          Sub-Second Load Guaranteed
        </p>
        <div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center gap-1 text-[11px] font-label-code text-primary-container opacity-80 group-hover:opacity-100">
          <span>Technical Architecture</span>
          <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform">
            arrow_forward
          </span>
        </div>
      </button>
    </div>
  );
}

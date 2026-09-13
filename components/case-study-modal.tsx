"use client";

import React, { useEffect } from "react";

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  timeline: string;
  role: string;
  isVerifiedClient: boolean;
  challenge: string;
  solution: string;
  techTags: string[];
  resultsTable: {
    metric: string;
    before: string;
    after: string;
  }[];
  architectureFlow?: {
    step: string;
    title: string;
    description: string;
    icon: string;
  }[];
  deploymentVerification?: {
    headline: string;
    description: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CaseStudyData | null;
}

export default function CaseStudyModal({
  isOpen,
  onClose,
  data,
}: CaseStudyModalProps) {
  // Close on Escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-surface-dim/80 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-3xl my-8 rounded-2xl bg-surface-container-low border border-outline-variant/50 shadow-2xl overflow-hidden z-10 animate-modalScale text-on-surface">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 bg-surface-container/60">
          <div className="flex items-center gap-2">
            {data.isVerifiedClient ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/20 text-primary-container border border-primary-container/40 text-[11px] font-label-code font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                Verified Client Case Study
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest border border-amber-500/40 text-amber-300 text-[11px] font-label-code font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[13px] text-amber-400">
                  science
                </span>
                Internal R&amp;D Concept
              </span>
            )}
            <span className="text-xs font-label-code text-outline hidden sm:inline-block">
              &bull; {data.industry}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface-container-high border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary-container/40 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto space-y-6">
          {/* Header & Meta */}
          <div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-primary font-bold tracking-tight">
              {data.title}
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-1">
              {data.subtitle}
            </p>

            {/* Project Meta Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-outline-variant/20">
              <div className="p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant/20">
                <span className="block font-label-code text-[10px] text-outline uppercase tracking-wider">
                  Client
                </span>
                <span className="font-body-sm text-xs font-semibold text-primary">
                  {data.client}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant/20">
                <span className="block font-label-code text-[10px] text-outline uppercase tracking-wider">
                  Timeline
                </span>
                <span className="font-body-sm text-xs font-semibold text-primary">
                  {data.timeline}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant/20 sm:col-span-2">
                <span className="block font-label-code text-[10px] text-outline uppercase tracking-wider">
                  Engineering Role
                </span>
                <span className="font-body-sm text-xs font-semibold text-primary">
                  {data.role}
                </span>
              </div>
            </div>
          </div>

          {/* Section: The Challenge */}
          <div className="space-y-2">
            <h3 className="font-headline-md text-sm font-bold uppercase tracking-wider text-primary-container flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                warning_amber
              </span>
              The Challenge
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed p-4 rounded-xl bg-surface-container/50 border border-outline-variant/20">
              {data.challenge}
            </p>
          </div>

          {/* Section: The Solution */}
          <div className="space-y-2">
            <h3 className="font-headline-md text-sm font-bold uppercase tracking-wider text-primary-container flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                architecture
              </span>
              The Solution &amp; Architectural Approach
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed p-4 rounded-xl bg-surface-container/50 border border-outline-variant/20">
              {data.solution}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <span className="block font-label-code text-xs uppercase tracking-wider text-outline mb-2">
              Technology Stack Used
            </span>
            <div className="flex flex-wrap gap-2">
              {data.techTags.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-surface-container-high border border-outline-variant/40 text-xs font-label-code text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Operational Architecture & Transactional Pipeline */}
          {data.architectureFlow && data.architectureFlow.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-headline-md text-sm font-bold uppercase tracking-wider text-primary-container flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  account_tree
                </span>
                Verified System &amp; Operational Flow
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.architectureFlow.map((flowStep, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-container/60 border border-outline-variant/30 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="material-symbols-outlined text-primary-container text-[20px]">
                          {flowStep.icon}
                        </span>
                        <span className="font-label-code text-[11px] font-bold text-outline">
                          STEP {flowStep.step}
                        </span>
                      </div>
                      <h4 className="font-headline-sm text-xs font-bold text-primary mb-1">
                        {flowStep.title}
                      </h4>
                      <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                        {flowStep.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Key Results (Before vs After Table) */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-sm font-bold uppercase tracking-wider text-primary-container flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                query_stats
              </span>
              Key Operational Results (Before vs. After)
            </h3>

            <div className="overflow-x-auto rounded-xl border border-outline-variant/30 shadow-inner">
              <table className="w-full text-left text-xs sm:text-sm font-body-sm">
                <thead>
                  <tr className="bg-surface-container-high/90 border-b border-outline-variant/30 text-primary font-label-code uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Workflow / Metric</th>
                    <th className="py-3 px-4 text-on-surface-variant">
                      Before System
                    </th>
                    <th className="py-3 px-4 text-primary-container">
                      After Deployment
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20 bg-surface-container-low">
                  {data.resultsTable.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-surface-container/60 transition-colors"
                    >
                      <td className="py-3 px-4 font-medium text-primary">
                        {row.metric}
                      </td>
                      <td className="py-3 px-4 text-on-surface-variant">
                        <span className="inline-flex items-center gap-1.5 line-through decoration-outline/60 text-outline">
                          {row.before}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-primary-container">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                          {row.after}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verified Operational Deployment Status */}
          {data.deploymentVerification && (
            <div className="p-5 rounded-xl bg-surface-container-high/60 border border-primary-container/30 relative">
              <div className="flex items-center gap-2 text-primary-container font-label-code text-xs uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>
                <span className="font-bold">{data.deploymentVerification.headline}</span>
              </div>
              <p className="font-body-md text-sm text-on-surface leading-relaxed">
                {data.deploymentVerification.description}
              </p>
            </div>
          )}

          {/* Client Testimonial (if available and authorized) */}
          {data.testimonial && (
            <div className="p-5 rounded-xl bg-surface-container-high/60 border border-primary-container/20 relative">
              <span className="material-symbols-outlined text-primary-container/40 text-[32px] absolute top-3 right-4">
                format_quote
              </span>
              <p className="font-body-md text-sm text-on-surface italic leading-relaxed pr-8">
                &ldquo;{data.testimonial.quote}&rdquo;
              </p>
              <div className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center gap-2">
                <span className="font-headline-md text-xs font-bold text-primary">
                  {data.testimonial.author}
                </span>
                <span className="text-outline text-xs">&bull;</span>
                <span className="font-body-sm text-xs text-on-surface-variant">
                  {data.testimonial.title}
                </span>
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-surface-container-high border border-outline-variant/40 text-xs font-semibold text-on-surface hover:text-primary transition-all cursor-pointer"
            >
              Close Window
            </button>

            <a
              href="#quick-brief"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary-container font-headline-md text-xs font-bold shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Discuss a Similar Custom Platform</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

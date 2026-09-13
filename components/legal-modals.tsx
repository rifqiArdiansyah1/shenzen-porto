"use client";

import React, { useEffect } from "react";

export type LegalModalType = "security" | "terms" | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export default function LegalModals({
  activeModal,
  onClose,
}: LegalModalsProps) {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-surface-dim/80 backdrop-blur-md animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-surface-container-high border border-outline-variant/50 p-element-gap-lg sm:p-element-gap-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-element-gap-md border-b border-outline-variant/30 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-[24px]">
              {activeModal === "security" ? "shield" : "verified_user"}
            </span>
            <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary">
              {activeModal === "security"
                ? "Security Standards & Technical Practices"
                : "NDA, IP Assignment & Engagement Terms"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary-container/40 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto py-element-gap-md space-y-element-gap-lg font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          {activeModal === "security" ? (
            <>
              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  1. Server-Side Secret &amp; Credential Isolation
                </h4>
                <p>
                  All sensitive configuration keys, third-party webhook secrets, payment gateway credentials, and database URLs are strictly segregated into server-only runtime environments. Client-side JavaScript bundles never contain or expose sensitive authorization secrets.
                </p>
              </div>

              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  2. Transport Encryption (TLS 1.3 / HTTPS)
                </h4>
                <p>
                  Every production deployment enforces modern TLS 1.3 encryption across all API routes, static assets, and database connections. HTTP requests are automatically redirected to secure HTTPS protocols at the edge layer.
                </p>
              </div>

              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  3. Role-Based Access Control (RBAC) &amp; Relational Authorization
                </h4>
                <p>
                  Application state mutations and administrative endpoints are protected with strict authorization checks, session token validation, and database-level security policies (including Row-Level Security where applicable) to prevent unauthorized tenant access.
                </p>
              </div>

              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  4. Dependency Hygiene &amp; Package Audits
                </h4>
                <p>
                  We conduct regular dependency audits using automated vulnerability tooling (`npm audit`) prior to production builds, promptly addressing high-risk advisories and pinning dependency versions to ensure reproducible, secure builds.
                </p>
              </div>

              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  5. Mutual Non-Disclosure &amp; Key Revocation
                </h4>
                <p>
                  Prior to exchanging private API keys, cloud credentials, or proprietary schemas, a mutual Non-Disclosure Agreement (NDA) is executed. Upon final deployment, all client credentials are handed over and locally purged from developer environments.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  1. 100% Intellectual Property &amp; Code Sovereignty
                </h4>
                <p>
                  Upon final milestone payment completion, 100% of all intellectual property, copyright, clean Git repository histories, database migration files, and Figma design assets are irrevocably assigned to the client. You own every line of code with zero ongoing vendor licensing fees.
                </p>
              </div>

              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  2. Mutual Confidentiality (NDA)
                </h4>
                <p>
                  We treat all client business models, customer databases, operational bottlenecks, and financial transactions with absolute confidentiality. We sign bilateral standard NDAs prior to any technical blueprint discussions.
                </p>
              </div>

              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  3. Sanitized Showcase Rights
                </h4>
                <p>
                  We will never publish proprietary customer data, internal financials, or client brand names without prior written authorization. Portfolio case studies feature solely sanitized technical architectures or approved operational metrics.
                </p>
              </div>

              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  4. Transparent Milestone Schedule (50 / 25 / 25)
                </h4>
                <p>
                  Engagements are governed by a 3-part milestone framework: 50% upfront deposit to secure sprint booking and initiate discovery/blueprint; 25% upon functional staging preview and interactive walkthrough; and the final 25% upon production deployment, domain cutover, and repository IP transfer.
                </p>
              </div>

              <div>
                <h4 className="font-headline-sm font-semibold text-primary mb-1">
                  5. Complimentary 30-Day Post-Launch Warranty
                </h4>
                <p>
                  Every production build includes 30 calendar days of post-launch engineering support covering bug remediation, configuration tuning, and performance stability at no additional charge.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-element-gap-md border-t border-outline-variant/30 flex items-center justify-between flex-shrink-0">
          <span className="font-label-code text-[11px] text-outline">
            Shenzhen Studio Standard Terms
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-primary-container text-on-primary-container font-headline-md text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}

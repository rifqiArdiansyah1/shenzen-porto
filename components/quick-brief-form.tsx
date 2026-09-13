"use client";

import React, { useState } from "react";

export default function QuickBriefForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "landing-page",
    budget: "3000-6000",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate rapid brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        projectType: "landing-page",
        budget: "3000-6000",
        notes: "",
      });
      setTimeout(() => {
        setIsSuccess(false);
      }, 8000);
    }, 900);
  };

  return (
    <section
      className="w-full pb-section-gap-lg pt-element-gap-md relative"
      id="quick-brief"
    >
      <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop">
        <div className="relative rounded-3xl bg-surface-container-low/95 border border-outline-variant/40 p-element-gap-xl lg:p-section-gap-sm overflow-hidden shadow-2xl">
          {/* Intense Ambient Glow Backlights */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-primary-container/20 blur-[120px] rounded-full" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-container/25 blur-[130px] rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-element-gap-xl items-center">
            {/* Left: Headline & Direct Contact */}
            <div className="lg:col-span-6 flex flex-col gap-element-gap-md">
              <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                START YOUR PROJECT
              </div>

              <h2 className="font-display-xl text-3xl md:text-4xl lg:text-5xl text-primary font-black tracking-tight leading-tight">
                Ready to Build High-Performance Software?
              </h2>

              <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
                Tell us about your upcoming project. You will receive a
                complimentary technical architecture review, recommended stack
                breakdown, and a transparent milestone estimate within 12 hours.
              </p>

              <div className="flex flex-wrap items-center gap-element-gap-md pt-element-gap-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">
                    schedule
                  </span>
                  <span className="font-label-code text-xs text-on-surface">
                    &lt; 12h Rapid Response
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">
                    lock
                  </span>
                  <span className="font-label-code text-xs text-on-surface">
                    Strict NDA Protected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">
                    terminal
                  </span>
                  <span className="font-label-code text-xs text-on-surface">
                    Direct Senior Engineer
                  </span>
                </div>
              </div>

              {/* Direct Alternative Channels */}
              <div className="pt-element-gap-sm flex flex-wrap gap-3">
                <a
                  href="https://wa.me/62895395392047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high border border-outline-variant/40 text-sm font-semibold text-primary hover:border-primary-container/40 hover:text-primary-container transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] text-green-400">
                    chat
                  </span>
                  <span>WhatsApp Lead Engineer</span>
                </a>
                <a
                  href="mailto:shenzen.studio@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high border border-outline-variant/40 text-sm font-semibold text-primary hover:border-primary-container/40 hover:text-primary-container transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary-container">
                    mail
                  </span>
                  <span>shenzen.studio@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right: Rapid Brief Form */}
            <div className="lg:col-span-6 rounded-2xl bg-surface-container-high/90 border border-outline-variant/40 backdrop-blur-xl p-element-gap-lg shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-element-gap-md">
                <div>
                  <label
                    htmlFor="client-name"
                    className="block font-label-code text-xs uppercase tracking-wider text-on-surface-variant mb-1"
                  >
                    Your Name / Company
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Sarah Miller / Acme Corp"
                    className="w-full px-element-gap-md py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-primary placeholder:text-outline/70 font-body-sm text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/30 transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label
                    htmlFor="client-email"
                    className="block font-label-code text-xs uppercase tracking-wider text-on-surface-variant mb-1"
                  >
                    Work Email Address
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="sarah@acme.com"
                    className="w-full px-element-gap-md py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-primary placeholder:text-outline/70 font-body-sm text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/30 transition-all shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-element-gap-md">
                  <div>
                    <label
                      htmlFor="project-type"
                      className="block font-label-code text-xs uppercase tracking-wider text-on-surface-variant mb-1"
                    >
                      Project Scope
                    </label>
                    <select
                      id="project-type"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full px-element-gap-md py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-primary font-body-sm text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/30 transition-all shadow-inner"
                    >
                      <option value="landing-page">
                        High-Converting Landing Page
                      </option>
                      <option value="custom-app">
                        Custom Web Application / Portal
                      </option>
                      <option value="fullstack-mvp">
                        Bespoke SaaS / MVP Sprint
                      </option>
                      <option value="architecture-audit">
                        Architecture &amp; Speed Audit
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="project-budget"
                      className="block font-label-code text-xs uppercase tracking-wider text-on-surface-variant mb-1"
                    >
                      Estimated Budget (USD)
                    </label>
                    <select
                      id="project-budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-element-gap-md py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-primary font-body-sm text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/30 transition-all shadow-inner"
                    >
                      <option value="1500-3000">
                        $1,500 – $3,000 (Landing Page)
                      </option>
                      <option value="3000-6000">
                        $3,000 – $6,000 (Custom Web App)
                      </option>
                      <option value="6000+">
                        $6,000+ (Multi-Branch Platform)
                      </option>
                      <option value="undecided">
                        To be determined / Advisory
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-notes"
                    className="block font-label-code text-xs uppercase tracking-wider text-on-surface-variant mb-1"
                  >
                    Project Objectives / Technical Requirements
                  </label>
                  <textarea
                    id="project-notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Briefly describe what you're looking to build, your current bottlenecks, target deadlines, or any existing repository/Figma links..."
                    className="w-full px-element-gap-md py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-primary placeholder:text-outline/70 font-body-sm text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/30 transition-all shadow-inner resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-shimmer w-full py-3.5 px-element-gap-lg rounded-xl bg-gradient-to-r from-primary-container via-primary-fixed to-secondary text-on-primary-container font-headline-md font-bold text-sm shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-on-primary-container border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>

                {isSuccess && (
                  <div className="p-3 rounded-xl bg-primary-container/20 border border-primary-container/40 text-primary text-xs font-body-sm flex items-center gap-2 animate-fadeIn">
                    <span className="material-symbols-outlined text-[18px] text-primary-container">
                      check_circle
                    </span>
                    <span>
                      Brief received successfully. We will review your
                      specifications and follow up within 12 hours.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

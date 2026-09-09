"use client";

import React, { useState } from "react";

export default function QuickBriefForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "landing-page",
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
        notes: "",
      });
      setTimeout(() => {
        setIsSuccess(false);
      }, 8000);
    }, 900);
  };

  return (
    <section className="w-full pb-section-gap-lg pt-element-gap-md relative" id="quick-brief">
      <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop">
        <div className="relative rounded-3xl bg-surface-container-low/95 border border-outline-variant/40 p-element-gap-xl lg:p-section-gap-sm overflow-hidden shadow-2xl">
          {/* Intense Ambient Glow Backlights */}
          <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-primary-container/20 blur-[120px] rounded-full" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-container/25 blur-[130px] rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-element-gap-xl items-center">
            {/* Left: Headline & Trust Info */}
            <div className="lg:col-span-6 flex flex-col gap-element-gap-md">
              <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                MULAI REKAYASA DIGITAL ANDA
              </div>

              <h2 className="font-display-xl text-3xl md:text-4xl lg:text-5xl text-primary font-black tracking-tight leading-tight">
                Siap Membangun Produk Web Kelas Dunia Bersama Kami?
              </h2>

              <p className="font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
                Diskusikan visi bisnis Anda hari ini. Kami akan berikan audit arsitektur teknis dan estimasi roadmap komprehensif secara gratis.
              </p>

              <div className="flex flex-wrap items-center gap-element-gap-md pt-element-gap-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">
                    schedule
                  </span>
                  <span className="font-label-code text-xs text-on-surface">
                    Respon Cepat &lt; 12 Jam
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">
                    lock
                  </span>
                  <span className="font-label-code text-xs text-on-surface">
                    NDA Dilindungi
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
                  <span>WhatsApp Principal Engineer</span>
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
                    Nama Anda / Perusahaan
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Alexander / Acio Inc."
                    className="w-full px-element-gap-md py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-primary placeholder:text-outline/70 font-body-sm text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/30 transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label
                    htmlFor="client-email"
                    className="block font-label-code text-xs uppercase tracking-wider text-on-surface-variant mb-1"
                  >
                    Email Kerja
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-element-gap-md py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-primary placeholder:text-outline/70 font-body-sm text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/30 transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="block font-label-code text-xs uppercase tracking-wider text-on-surface-variant mb-1"
                  >
                    Jenis Kebutuhan Proyek
                  </label>
                  <select
                    id="project-type"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-element-gap-md py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-primary font-body-sm text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/30 transition-all shadow-inner"
                  >
                    <option value="landing-page" className="bg-[#0d0e11] text-[#e0fdff]">High-Converting Landing Page</option>
                    <option value="custom-app" className="bg-[#0d0e11] text-[#e0fdff]">Custom Enterprise Web Application</option>
                    <option value="both" className="bg-[#0d0e11] text-[#e0fdff]">Kombinasi (Landing Page + Web App)</option>
                    <option value="consultation" className="bg-[#0d0e11] text-[#e0fdff]">Audit Performa &amp; Arsitektur Sistem</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="project-note"
                    className="block font-label-code text-xs uppercase tracking-wider text-on-surface-variant mb-1"
                  >
                    Ringkasan Kebutuhan Singkat
                  </label>
                  <textarea
                    id="project-note"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Target peluncuran, tantangan operasional, atau fitur utama yang ingin dibangun..."
                    className="w-full px-element-gap-md py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-primary placeholder:text-outline/70 font-body-sm text-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/30 transition-all shadow-inner resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-primary-fixed text-on-primary-container font-headline-md text-sm md:text-base font-bold tracking-tight shadow-[0_0_24px_rgba(0,242,254,0.4)] hover:shadow-[0_0_36px_rgba(0,242,254,0.6)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-element-gap-xs cursor-pointer disabled:opacity-70"
                >
                  <span>
                    {isSubmitting ? "Memproses..." : "Kirim Brief Singkat"}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${
                      isSubmitting ? "animate-spin" : "group-hover:translate-x-1"
                    }`}
                  >
                    {isSubmitting ? "progress_activity" : "send"}
                  </span>
                </button>

                {isSuccess && (
                  <div className="text-center font-label-code text-xs text-primary-container pt-1 bg-primary-container/10 p-3 rounded-lg border border-primary-container/30 transition-all animate-fadeIn">
                    ✓ Brief Anda berhasil terkirim. Tim principal engineer kami akan menghubungi dalam 12 jam.
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

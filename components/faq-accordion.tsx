"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Berapa lama estimasi durasi pengerjaan proyek?",
    answer:
      "Untuk High-Converting Landing Page, pengerjaan biasanya berkisar antara 2 hingga 3 minggu penuh dari riset hingga go-live. Untuk Custom Enterprise Web Applications (seperti dashboard internal, ERP kustom, portal multi-user), estimasi berkisar 4 hingga 8 minggu tergantung kompleksitas integrasi sistem.",
  },
  {
    question: "Apakah kode sumber (source code) dan aset 100% menjadi milik klien?",
    answer:
      "Tentu. Setelah pembayaran lunas, seluruh hak kekayaan intelektual (IP), repositori Git (GitHub/GitLab), aset desain Figma, dan konfigurasi arsitektur cloud diserahkan 100% kepada pihak klien tanpa ikatan lisensi tersembunyi.",
  },
  {
    question: "Bagaimana standar keamanan data dan jaminan pasca-peluncuran?",
    answer:
      "Setiap aplikasi dibangun dengan enkripsi data rest & transit, proteksi CSRF/XSS, dan prinsip least privilege. Kami juga memberikan garansi pemeliharaan & bug-fixing gratis selama 30-60 hari setelah peluncuran untuk memastikan stabilitas sistem Anda.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-section-gap-md lg:py-section-gap-lg" id="faq-section">
      <div className="max-w-[880px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet">
        <div className="text-center mb-element-gap-xl">
          <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            PERTANYAAN UMUM
          </div>
          <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
            Transparansi Penuh Sebelum Kita Memulai
          </h2>
        </div>

        <div className="space-y-element-gap-sm">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden shadow-sm transition-all duration-300 hover:border-primary-container/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-element-gap-md text-left flex items-center justify-between gap-element-gap-sm text-primary font-headline-md text-base md:text-lg font-semibold hover:text-primary-container transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-[22px] text-primary-container transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-element-gap-md pb-element-gap-md font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

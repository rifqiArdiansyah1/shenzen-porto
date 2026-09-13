"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the typical turnaround timeline for a project?",
    answer:
      "Delivery timelines strictly align with architectural scope across three structured sprint tiers: (1) Sprint Landing Pages typically ship in 2 to 3 weeks from discovery to production deployment; (2) Custom Web Applications & MVPs span 4 to 6 weeks with automated payment webhooks and RBAC; and (3) Enterprise Architecture & Multi-Tenant Systems run across 6 to 10 weeks of iterative milestone sprints.",
  },
  {
    question: "What is your milestone and payment schedule?",
    answer:
      "We operate with a transparent 3-part milestone framework: 50% upfront deposit to secure sprint booking and initiate architectural discovery; 25% upon functional staging preview and interactive walkthrough; and the final 25% upon production deployment, domain cutover, and 100% GitHub IP handover.",
  },
  {
    question:
      "Do we receive 100% ownership of the source code and intellectual property?",
    answer:
      "Yes, absolutely. Upon final project completion, all intellectual property (IP), clean GitHub/GitLab repositories, Figma design assets, and cloud deployment pipelines are transferred entirely to your organization with zero vendor lock-in. A mutual Non-Disclosure Agreement (NDA) is executed prior to sharing any project credentials.",
  },
  {
    question: "How do you handle scope changes or feature requests mid-sprint?",
    answer:
      "We use an agile, modular change-order framework. If you identify new requirements mid-flight, we assess the architectural impact and provide an itemized mini-milestone addendum with clear cost and timeline estimates. This protects your core production go-live date while allowing seamless iterative expansion.",
  },
  {
    question:
      "How do you handle cross-timezone communication and sprint cadence?",
    answer:
      "We operate with an asynchronous-first communication cadence tailored for founders in North America (EST/PST), Europe (GMT/CET), and APAC. You receive regular Loom video demos, clear GitHub PR progress, and direct access via Slack or WhatsApp with overlapping working hours scheduled for milestone checkpoints.",
  },
  {
    question: "What post-launch warranty and technical support are included?",
    answer:
      "Every production build includes a complimentary 30-day post-launch warranty covering any bug fixes, performance regressions, and infrastructure fine-tuning. We also supply clear architectural documentation and a personalized walkthrough video to ensure complete autonomy for your engineering team.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full py-section-gap-md lg:py-section-gap-lg"
      id="faq-section"
    >
      <div className="max-w-[880px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet">
        <div className="text-center mb-element-gap-xl">
          <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
            Transparent Collaboration Terms
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-2 max-w-xl mx-auto">
            Clear answers to common questions about engineering standards, IP
            handover, and international remote workflow.
          </p>
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

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CaseStudyModal, { CaseStudyData } from "./case-study-modal";

type Category = "all" | "app" | "landing";

export interface ShowcaseProject extends CaseStudyData {
  category: "app" | "landing";
  categoryLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  impactIcon: string;
  impactTitle: string;
  impactText: string;
}

const projects: ShowcaseProject[] = [
  // 1. PRIMARY VERIFIED CLIENT CASE STUDY
  {
    id: "driveflow",
    title: "DriveFlow — Multi-Branch Car Rental & Fleet Operations Platform",
    subtitle:
      "Centralized booking engine with multi-branch availability locking, custom RBAC, and automated payment gateway webhooks.",
    client: "CV Rental Mobil (Regional Fleet Operator)",
    industry: "Automotive Rental & Logistics",
    timeline: "6-Week Delivery",
    role: "Solo Full-Stack Engineer (Architecture, DB, Midtrans & UI)",
    isVerifiedClient: true,
    category: "app",
    categoryLabel: "Verified Client Project • Custom Web App",
    description:
      "Multi-branch digital reservation platform replacing phone logbooks and manual bank transfers with centralized real-time availability and automated payment settlement.",
    image: "/projects/nexussupply.jpg",
    imageAlt: "DriveFlow Multi-Branch Car Rental Dashboard Interface",
    impactIcon: "verified",
    impactTitle: "Verified Operational Result",
    impactText:
      "0 scheduling overlaps across all branches; reservation turnaround reduced from ~20 minutes to under 60 seconds.",
    techTags: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Prisma",
      "Midtrans",
      "Tailwind CSS",
    ],
    challenge:
      "The client operated car rental fleets across multiple regional branches using fragmented manual logbooks and phone coordination. This caused frequent vehicle double-bookings, delayed handovers, and tedious manual verification of bank transfer receipts.",
    solution:
      "Architected a unified digital platform with granular Role-Based Access Control (RBAC). Implemented an atomic availability lock that validates unit schedules across all branches before confirming slots. Connected Midtrans payment webhooks for instantaneous automated reconciliation.",
    resultsTable: [
      {
        metric: "Booking Process",
        before: "Manual phone/branch logbooks (15–30 min)",
        after: "Centralized self-service checkout (< 60s)",
      },
      {
        metric: "Unit Schedule Conflicts",
        before: "Recurring manual double-bookings",
        after: "0 scheduling overlaps across all branches",
      },
      {
        metric: "Payment Settlement",
        before: "Manual transfer slips & delayed reconciliation",
        after: "100% automated confirmation via webhooks",
      },
      {
        metric: "Fleet Visibility",
        before: "Disconnected branch spreadsheets",
        after: "Unified real-time fleet availability dashboard",
      },
    ],
    deploymentVerification: {
      headline: "Active Live Production Deployment",
      description:
        "DriveFlow is actively deployed and operational for multi-branch fleet management. The platform runs with atomic reservation locks to prevent schedule concurrency collisions, automated Midtrans payment webhook settlements, and sub-second relational queries.",
    },
    architectureFlow: [
      {
        step: "01",
        title: "Self-Service Catalog & Checkout",
        description:
          "Customer selects branch location, dates, and vehicle unit with real-time pricing (< 60s checkout).",
        icon: "directions_car",
      },
      {
        step: "02",
        title: "Schedule Validation & Lock",
        description:
          "Database queries active reservations across branches and locks vehicle schedule to prevent concurrent double-bookings.",
        icon: "lock_clock",
      },
      {
        step: "03",
        title: "Automated Payment Webhook",
        description:
          "Customer completes payment; Midtrans gateway sends instant webhook to confirm settlement on the server.",
        icon: "webhook",
      },
      {
        step: "04",
        title: "Live Operations Sync",
        description:
          "Reservation is verified in Supabase/PostgreSQL; unit handover schedule updates on branch dispatch terminals.",
        icon: "sync_alt",
      },
    ],
  },

  // 2. CONCEPT PROTOTYPE: FinPulse
  // PLACEHOLDER - replace with real client case study once available
  {
    id: "finpulse",
    title: "FinPulse — B2B Treasury & Automated Invoicing Architecture",
    subtitle:
      "Interactive 3D fee calculator, tiered onboarding flow, and reactive financial dashboard prototype.",
    client: "Internal R&D Concept",
    industry: "FinTech & Corporate Treasury",
    timeline: "Prototype Sprint",
    role: "Full-Stack Design & Architecture",
    isVerifiedClient: false,
    category: "landing",
    categoryLabel: "Concept Prototype • FinTech UI/UX",
    description:
      "High-conversion prototype demonstrating WebGL micro-interactions, dynamic fee tier simulation, and accessible multi-step corporate onboarding flows.",
    image: "/projects/finpulse.jpg",
    imageAlt: "FinPulse FinTech High-Converting 3D Prototype",
    impactIcon: "code",
    impactTitle: "Technical Specification",
    impactText:
      "Engineered with client-side reactive calculations, Three.js hardware acceleration, and sub-second page delivery.",
    techTags: ["Next.js", "Three.js", "Tailwind CSS", "TypeScript"],
    challenge:
      "Complex B2B pricing models often cause high bounce rates when presented as static text tables without dynamic customer input modeling.",
    solution:
      "Engineered an interactive 3D slider and real-time computation model allowing corporate buyers to simulate fee savings based on transaction volume before signup.",
    resultsTable: [
      {
        metric: "Interactive Simulation",
        before: "Static PDF price lists",
        after: "Real-time client-side interactive calculator",
      },
      {
        metric: "Core Web Vitals",
        before: "Heavy third-party widget overhead",
        after: "Native WebGL shader with 99+ Lighthouse performance",
      },
      {
        metric: "Type Safety",
        before: "Loose form validation",
        after: "Strict Zod schema validation across all inputs",
      },
    ],
  },

  // 3. CONCEPT PROTOTYPE: NexusSupply
  // PLACEHOLDER - replace with real client case study once available
  {
    id: "nexussupply-proto",
    title: "NexusSupply — Multi-Warehouse Logistics Command Center",
    subtitle:
      "Distributed inventory telemetry, optimistic UI state machine, and real-time dispatch interface.",
    client: "Internal R&D Concept",
    industry: "Logistics & Supply Chain",
    timeline: "Architecture Exploration",
    role: "System Design & Frontend Architecture",
    isVerifiedClient: false,
    category: "app",
    categoryLabel: "Concept Prototype • Enterprise Logistics",
    description:
      "Enterprise management prototype showcasing optimistic state updates, complex data grid sorting, and real-time vehicle dispatch telemetry.",
    image: "/projects/klinikq.jpg",
    imageAlt: "NexusSupply Enterprise Logistics Command Center Interface",
    impactIcon: "memory",
    impactTitle: "Technical Specification",
    impactText:
      "Resilient optimistic mutations, normalized cache layer, and sub-50ms query responses on dense enterprise data sets.",
    techTags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    challenge:
      "High-density data tables in logistics platforms frequently stutter or freeze when rendering hundreds of concurrent status mutations.",
    solution:
      "Architected with virtualized lists and optimistic UI updates, ensuring warehouse operators experience zero input lag during high-frequency dispatch tasks.",
    resultsTable: [
      {
        metric: "State Updates",
        before: "Blocking full-page network refreshes",
        after: "Optimistic background sync with instant UI response",
      },
      {
        metric: "Render Efficiency",
        before: "Unvirtualized heavy DOM nodes",
        after: "Virtualized rendering handling 1,000+ items smoothly",
      },
      {
        metric: "Data Consistency",
        before: "Prone to stale cache states",
        after: "Strict relational integrity with Prisma transactions",
      },
    ],
  },

  // 4. CONCEPT PROTOTYPE: Aura Home
  // PLACEHOLDER - replace with real client case study once available
  {
    id: "aurahome",
    title: "Aura Home — Luxury Smart Living 360° Hardware Showcase",
    subtitle:
      "Immersive 3D product visualizer with ambient lighting controls and frictionless checkout flow.",
    client: "Internal R&D Concept",
    industry: "IoT & Consumer Hardware",
    timeline: "Design Lab Prototype",
    role: "3D Interaction & WebGL Engineering",
    isVerifiedClient: false,
    category: "landing",
    categoryLabel: "Concept Prototype • 3D Hardware Showcase",
    description:
      "Product showcase concept with real-time 3D orbit controls, dynamic material shaders, and localized checkout states.",
    image: "/projects/aurahome.jpg",
    imageAlt: "Aura Home Luxury Smart Living IoT Product Landing Page",
    impactIcon: "view_in_ar",
    impactTitle: "Technical Specification",
    impactText:
      "Zero-dependency Three.js WebGL canvas running at stable 60 FPS across both desktop and mobile devices.",
    techTags: ["Next.js", "Three.js", "Tailwind CSS", "WebGL"],
    challenge:
      "Standard e-commerce product photos fail to communicate physical industrial design depth, leading to hesitation for high-ticket hardware.",
    solution:
      "Implemented a lightweight 3D orbit viewer with custom PBR lighting that lets customers inspect materials and dimensions from any angle directly in the browser.",
    resultsTable: [
      {
        metric: "Hardware Inspection",
        before: "Static 2D catalog photos",
        after: "60 FPS interactive 360° WebGL inspection",
      },
      {
        metric: "Mobile Performance",
        before: "Battery-draining heavy 3D scenes",
        after: "Adaptive pixel ratio & lazy WebGL context loading",
      },
    ],
  },
];

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<ShowcaseProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Allow external triggers (e.g. hero stat cards) to open specific case studies
  useEffect(() => {
    const handleOpenCaseStudy = (e: Event) => {
      const customEvent = e as CustomEvent<{ id?: string }>;
      const targetId = customEvent.detail?.id || "driveflow";
      const match = projects.find((p) => p.id === targetId) || projects[0];
      setSelectedCaseStudy(match);
      setIsModalOpen(true);
    };

    window.addEventListener(
      "open-case-study",
      handleOpenCaseStudy as EventListener
    );
    return () => {
      window.removeEventListener(
        "open-case-study",
        handleOpenCaseStudy as EventListener
      );
    };
  }, []);

  const openProjectModal = (project: ShowcaseProject) => {
    setSelectedCaseStudy(project);
    setIsModalOpen(true);
  };

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  return (
    <>
      <section
        className="w-full py-section-gap-md lg:py-section-gap-lg bg-surface-container-lowest/60 border-y border-outline-variant/20"
        id="featured-works"
      >
        <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop">
          {/* Section Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-element-gap-md mb-element-gap-xl">
            <div>
              <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                VERIFIED WORK &amp; TECHNICAL PROTOTYPES
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
                Real Engineering. Proven Operational Impact.
              </h2>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-1 max-w-2xl">
                Explore our production work and technical prototypes. Click any
                project to inspect full architecture details and verifiable
                before-and-after benchmarks.
              </p>
            </div>

            {/* Filter Tab Buttons */}
            <div className="inline-flex p-1 rounded-xl bg-surface-container-high/90 border border-outline-variant/50 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-element-gap-md py-2 rounded-lg font-body-sm text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-primary-container text-on-primary-container shadow-[0_0_14px_rgba(0,242,254,0.35)]"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                All Projects
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("app")}
                className={`px-element-gap-md py-2 rounded-lg font-body-sm text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === "app"
                    ? "bg-primary-container text-on-primary-container shadow-[0_0_14px_rgba(0,242,254,0.35)]"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Custom Web Apps
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("landing")}
                className={`px-element-gap-md py-2 rounded-lg font-body-sm text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === "landing"
                    ? "bg-primary-container text-on-primary-container shadow-[0_0_14px_rgba(0,242,254,0.35)]"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Landing Pages
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-element-gap-xl">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                className="cyber-card group rounded-2xl bg-surface-container-low border border-outline-variant/40 overflow-hidden shadow-lg hover:border-primary-container/60 hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Project Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-surface-container-high border-b border-outline-variant/30">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                    {project.isVerifiedClient ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-code text-[11px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.4)] whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-surface animate-pulse" />
                        Verified Client Production
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest/95 backdrop-blur-md border border-amber-500/50 text-amber-300 font-label-code text-[11px] font-semibold uppercase tracking-wider shadow-lg whitespace-nowrap">
                        <span className="material-symbols-outlined text-[14px] text-amber-400">
                          science
                        </span>
                        Internal R&amp;D Concept
                      </span>
                    )}
                  </div>

                  {/* Inspection Cue */}
                  <div className="absolute bottom-3 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-dim/90 backdrop-blur-md border border-primary-container/40 text-primary-container font-label-code text-xs">
                    <span>Inspect Case Study</span>
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-element-gap-lg flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-lg text-xl sm:text-2xl text-primary font-bold mb-2 group-hover:text-primary-container transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-element-gap-md">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Impact / Spec Strip */}
                    <div
                      className={`p-3 rounded-xl border flex items-start gap-3 mb-element-gap-md ${
                        project.isVerifiedClient
                          ? "bg-primary-container/10 border-primary-container/30"
                          : "bg-surface-container-high/60 border-outline-variant/30"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] mt-0.5 ${
                          project.isVerifiedClient
                            ? "text-primary-container"
                            : "text-secondary"
                        }`}
                      >
                        {project.impactIcon}
                      </span>
                      <div>
                        <div className="font-label-code text-[11px] uppercase tracking-wider text-primary font-bold">
                          {project.impactTitle}
                        </div>
                        <div className="font-body-sm text-xs text-on-surface-variant mt-0.5 leading-normal">
                          {project.impactText}
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Chips & Action Link */}
                    <div className="pt-element-gap-sm border-t border-outline-variant/20 flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techTags.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-[11px] font-label-code text-outline"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-label-code text-primary-container font-semibold flex items-center gap-1 group-hover:underline">
                        <span>Read Case Study</span>
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_forward
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedCaseStudy}
      />
    </>
  );
}

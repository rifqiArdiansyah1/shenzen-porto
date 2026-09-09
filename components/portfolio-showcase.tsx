"use client";

import React, { useState } from "react";
import Image from "next/image";

type Category = "all" | "app" | "landing";

interface Project {
  id: string;
  title: string;
  category: "app" | "landing";
  categoryLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  impactIcon: string;
  impactTitle: string;
  impactText: string;
  techTags: string[];
}

const projects: Project[] = [
  {
    id: "nexussupply",
    title: "NexusSupply — Smart Logistics & Warehouse System",
    category: "app",
    categoryLabel: "Custom Web App / Enterprise SaaS",
    description:
      "Aplikasi web manajemen rantai pasok multi-gudang real-time dengan live tracking armada, otomasi stok cerdas, dan laporan analitik eksekutif.",
    image: "/projects/nexussupply.jpg",
    imageAlt: "Dashboard NexusSupply Enterprise Logistics Command Center",
    impactIcon: "verified",
    impactTitle: "Dampak Terukur",
    impactText:
      "Memangkas waktu proses order manual hingga 68% dan menghemat 120 jam operasional/bulan.",
    techTags: ["Next.js", "PostgreSQL", "Redis", "TailwindCSS"],
  },
  {
    id: "finpulse",
    title: "FinPulse — Next-Gen B2B Treasury & Automated Invoicing",
    category: "landing",
    categoryLabel: "Landing Page / FinTech",
    description:
      "Landing page dengan visual 3D interaktif, kalkulator penghematan biaya interaktif, dan onboarding checkout bertingkat untuk konversi korporat.",
    image: "/projects/finpulse.jpg",
    imageAlt: "FinPulse FinTech High-Converting 3D Landing Page",
    impactIcon: "trending_up",
    impactTitle: "Dampak Terukur",
    impactText:
      "Meningkatkan rasio konversi demo request dari 2.1% menjadi 6.8% (+223% qualified leads).",
    techTags: ["Next.js", "Three.js", "TailwindCSS", "Edge Functions"],
  },
  {
    id: "klinikq",
    title: "KlinikQ — Telemedisin & Electronic Health Records Portal",
    category: "app",
    categoryLabel: "Web App / Healthcare",
    description:
      "Portal pasien dan dokter terintegrasi dengan jadwal konsultasi instan, rekam medis terenkripsi HIPAA-ready, dan modul penagihan otomatis.",
    image: "/projects/klinikq.jpg",
    imageAlt: "KlinikQ Telemedicine & EHR Portal Dashboard",
    impactIcon: "shield",
    impactTitle: "Dampak Terukur",
    impactText:
      "Menangani 40.000+ janji temu pasien per bulan dengan konsistensi uptime 99.98%.",
    techTags: ["React", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    id: "aurahome",
    title: "Aura Home — Luxury Smart Living IoT Product Showcase",
    category: "landing",
    categoryLabel: "Landing Page / IoT Hardware",
    description:
      "Halaman peluncuran produk imersif dengan 360-degree interactive product viewer dan integrasi preorder otomatis multi-mata uang.",
    image: "/projects/aurahome.jpg",
    imageAlt: "Aura Home Luxury Smart Living IoT Product Landing Page",
    impactIcon: "workspace_premium",
    impactTitle: "Dampak Terukur",
    impactText:
      "Target preorder tercapai 300% dalam 14 hari pertama peluncuran global.",
    techTags: ["Next.js", "WebGL 360", "TailwindCSS", "Stripe Multi-Currency"],
  },
];

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  return (
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
              PROVEN TRACK RECORD
            </div>
            <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
              Proyek Nyata. Hasil Bisnis Terukur.
            </h2>
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
              Semua Proyek (4)
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
              Web Applications (2)
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
              Landing Pages (2)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-element-gap-xl">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cyber-card rounded-2xl bg-surface-container-low border border-outline-variant/40 p-element-gap-lg flex flex-col gap-element-gap-md shadow-lg group transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden bg-surface-container-high">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent pointer-events-none" />
                <div
                  className={`absolute top-3 left-3 px-2.5 py-1 rounded-full backdrop-blur-md font-label-code text-[11px] uppercase tracking-wider border ${
                    project.category === "app"
                      ? "bg-surface-container-lowest/90 text-secondary border-secondary/30"
                      : "bg-surface-container-lowest/90 text-primary-container border-primary-container/30"
                  }`}
                >
                  {project.categoryLabel}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-element-gap-xs">
                <h3 className="font-headline-md text-lg md:text-xl text-primary font-bold group-hover:text-primary-container transition-colors">
                  {project.title}
                </h3>
                <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Measurable Impact Box */}
              <div className="p-element-gap-md rounded-xl bg-surface-container-highest/80 border border-outline-variant/30 flex items-center gap-element-gap-sm mt-auto group-hover:border-primary-container/40 transition-colors">
                <span
                  className={`material-symbols-outlined text-[24px] flex-shrink-0 ${
                    project.category === "app"
                      ? "text-secondary"
                      : "text-primary-container"
                  }`}
                >
                  {project.impactIcon}
                </span>
                <div>
                  <div
                    className={`font-label-code text-[11px] font-semibold uppercase tracking-wider ${
                      project.category === "app"
                        ? "text-secondary"
                        : "text-primary-container"
                    }`}
                  >
                    {project.impactTitle}
                  </div>
                  <div className="font-body-sm text-xs md:text-sm text-primary font-medium mt-0.5">
                    {project.impactText}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

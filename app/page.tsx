import ThreeMonolith from "@/components/three-monolith";
import PortfolioShowcase from "@/components/portfolio-showcase";
import FAQAccordion from "@/components/faq-accordion";
import QuickBriefForm from "@/components/quick-brief-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-on-surface relative">
      {/* Background Ambient Glowing Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="animate-ambient-orb absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-primary-container/10 blur-[130px]" />
        <div className="animate-ambient-orb-delayed absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-secondary-container/15 blur-[140px]" />
        <div className="animate-ambient-orb absolute bottom-10 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-fixed-dim/10 blur-[160px]" />
      </div>

      <main className="relative z-10 w-full pt-20">
        {/* ===================================================================
            1. HERO SECTION
        =================================================================== */}
        <section className="relative w-full overflow-hidden pb-section-gap-md lg:pb-section-gap-lg">
          {/* Subtle localized hero glows */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary-container/15 blur-[160px] rounded-full" />
          <div className="pointer-events-none absolute top-48 right-0 w-[500px] h-[500px] bg-secondary-container/20 blur-[180px] rounded-full" />

          <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop pt-element-gap-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-element-gap-xl items-center">
              {/* Left Column: Value Prop, Headline, CTAs, Metrics */}
              <div className="lg:col-span-7 flex flex-col gap-element-gap-md z-10">
                {/* Futuristic Badge Pill */}
                <div className="hero-stagger-1 inline-flex items-center gap-2 w-max px-4 py-1.5 rounded-full bg-surface-container-high/90 border border-primary-container/30 shadow-[0_0_25px_rgba(0,242,254,0.18)] hover:border-primary-container/60 transition-colors">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
                  </span>
                  <span className="font-label-code text-[11px] md:text-xs text-primary tracking-widest uppercase font-medium">
                    ✦ NEXT-GEN WEB ENGINEERING &amp; BESPOKE APPS — ACCEPTING NEW CLIENTS
                  </span>
                </div>

                {/* Megastructure Headline */}
                <h1 className="hero-stagger-2 font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-primary font-extrabold tracking-tight leading-[1.12]">
                  We Architect High-Converting Landing Pages &amp; Scalable Custom Web Apps.{" "}
                  <span className="block bg-gradient-to-r from-primary-container via-primary-fixed to-secondary text-transparent bg-clip-text mt-1">
                    Built to Accelerate Business Growth.
                  </span>
                </h1>

                {/* Body Copy */}
                <p className="hero-stagger-3 font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Shenzhen Studio membantu founder, startup skala berkembang, dan perusahaan enterprises merekayasa antarmuka web performa tinggi dengan konversi maksimal serta aplikasi web kustom yang menyederhanakan operasional bisnis.
                </p>

                {/* Dual Cybernetic CTA Buttons */}
                <div className="hero-stagger-4 flex flex-wrap items-center gap-element-gap-md pt-element-gap-xs">
                  <a
                    href="#featured-works"
                    className="btn-shimmer group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-primary-fixed text-on-primary-container font-headline-md text-sm md:text-base font-bold shadow-[0_0_30px_rgba(0,242,254,0.45)] hover:shadow-[0_0_42px_rgba(0,242,254,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    <span>Eksplorasi Proyek Kami</span>
                    <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>

                  <a
                    href="#quick-brief"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-high/80 border border-outline-variant/50 text-primary font-headline-md text-sm md:text-base font-semibold hover:border-primary-container/40 hover:bg-surface-container-highest hover:text-primary-container hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-[20px] text-primary-container">
                      calendar_month
                    </span>
                    <span>Konsultasi Teknis Gratis (15 Menit)</span>
                  </a>
                </div>

                {/* Quick Metrics Ribbon */}
                <div className="hero-stagger-5 pt-element-gap-md mt-element-gap-sm grid grid-cols-1 sm:grid-cols-3 gap-element-gap-md">
                  <div className="cyber-card p-element-gap-md rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md">
                    <div className="font-label-code text-xs text-primary-container uppercase flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">bolt</span>
                        Lighthouse Speed
                      </span>
                      <span className="h-2 w-2 rounded-full bg-primary-container animate-pulse" />
                    </div>
                    <div className="font-metric-counter text-3xl md:text-4xl text-primary font-extrabold mt-1">
                      99.8%
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                      Core Web Vitals A+ Guaranteed
                    </p>
                  </div>

                  <div className="cyber-card p-element-gap-md rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md">
                    <div className="font-label-code text-xs text-primary-container uppercase flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span>
                        Conv. Lift
                      </span>
                      <span className="h-2 w-2 rounded-full bg-secondary-fixed animate-pulse" />
                    </div>
                    <div className="font-metric-counter text-3xl md:text-4xl text-primary font-extrabold mt-1">
                      +142%
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                      Rata-rata Kenaikan Lead
                    </p>
                  </div>

                  <div className="cyber-card p-element-gap-md rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md">
                    <div className="font-label-code text-xs text-primary-container uppercase flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                        Delivery Track
                      </span>
                      <span className="h-2 w-2 rounded-full bg-primary-container animate-pulse" />
                    </div>
                    <div className="font-metric-counter text-3xl md:text-4xl text-primary font-extrabold mt-1">
                      45+
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
                      Web Apps &amp; LP Shipped
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive 3D Monolith WebGL Scene */}
              <div className="lg:col-span-5">
                <ThreeMonolith />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            2. CLIENT & TRUST TICKER
        =================================================================== */}
        <section className="w-full bg-surface-container-lowest/90 border-y border-outline-variant/30 py-element-gap-xl overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop mb-element-gap-md text-center">
            <p className="font-label-code text-xs uppercase tracking-widest text-on-surface-variant flex items-center justify-center gap-2">
              <span className="h-1 w-6 bg-primary-container/50 inline-block rounded-full" />
              DIPERCAYA OLEH PERUSAHAAN INOVATIF &amp; STARTUP DI ASIA TENGGARA HINGGA GLOBAL
              <span className="h-1 w-6 bg-primary-container/50 inline-block rounded-full" />
            </p>
          </div>

          <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-ticker items-center gap-element-gap-xl whitespace-nowrap px-element-gap-md">
              {/* Client Logos Set 1 */}
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-primary-container text-[24px] group-hover:scale-110 transition-transform">
                  local_shipping
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-primary-container transition-colors">
                  Aether Logistics
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-secondary-fixed text-[24px] group-hover:scale-110 transition-transform">
                  health_and_safety
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-secondary-fixed transition-colors">
                  Veritas Health
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-primary-container text-[24px] group-hover:scale-110 transition-transform">
                  monitoring
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-primary-container transition-colors">
                  FinPulse Cloud
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-secondary text-[24px] group-hover:scale-110 transition-transform">
                  shopping_bag
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-secondary transition-colors">
                  OmniCommerce
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-primary-fixed-dim text-[24px] group-hover:scale-110 transition-transform">
                  precision_manufacturing
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-primary-fixed-dim transition-colors">
                  Nexus Robotics
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-primary-container text-[24px] group-hover:scale-110 transition-transform">
                  psychology
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-primary-container transition-colors">
                  Kinetix AI
                </span>
              </div>

              {/* Client Logos Set 2 (Duplicate for Seamless Infinite Marquee Loop) */}
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-primary-container text-[24px] group-hover:scale-110 transition-transform">
                  local_shipping
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-primary-container transition-colors">
                  Aether Logistics
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-secondary-fixed text-[24px] group-hover:scale-110 transition-transform">
                  health_and_safety
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-secondary-fixed transition-colors">
                  Veritas Health
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-primary-container text-[24px] group-hover:scale-110 transition-transform">
                  monitoring
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-primary-container transition-colors">
                  FinPulse Cloud
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-secondary text-[24px] group-hover:scale-110 transition-transform">
                  shopping_bag
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-secondary transition-colors">
                  OmniCommerce
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-primary-fixed-dim text-[24px] group-hover:scale-110 transition-transform">
                  precision_manufacturing
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-primary-fixed-dim transition-colors">
                  Nexus Robotics
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group px-4">
                <span className="material-symbols-outlined text-primary-container text-[24px] group-hover:scale-110 transition-transform">
                  psychology
                </span>
                <span className="font-headline-md text-base md:text-lg font-bold tracking-tight uppercase group-hover:text-primary-container transition-colors">
                  Kinetix AI
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. CORE SERVICES (DUA PILAR DIGITAL CRAFT)
        =================================================================== */}
        <section className="w-full py-section-gap-md lg:py-section-gap-lg relative" id="services">
          <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop">
            <div className="flex flex-col gap-element-gap-sm mb-section-gap-sm max-w-3xl">
              <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                KEAHLIAN SPESIFIK KAMI
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
                Dua Pilar Solusi Rekayasa Digital yang Mendorong Skalabilitas Bisnis Anda
              </h2>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                Kami menolak template seragam. Kami merancang arsitektur khusus untuk conversion rate tinggi dan efisiensi operasional skala enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-element-gap-xl">
              {/* PILAR 1: High-Converting Landing Pages */}
              <div className="cyber-card group relative rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-xl p-element-gap-xl shadow-xl flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/25 transition-all duration-500" />
                <div>
                  <div className="flex items-center justify-between gap-element-gap-sm mb-element-gap-md">
                    <span className="px-3 py-1 rounded-full bg-primary-container/15 text-primary-container font-label-code text-[11px] uppercase border border-primary-container/30">
                      Best for: Product Launch • SaaS Acquisition • B2B Lead Gen
                    </span>
                    <span className="font-label-code text-xs text-on-surface-variant">PILAR 01</span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary-container mb-element-gap-md shadow-inner group-hover:scale-110 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
                    <span className="material-symbols-outlined text-[28px]">web</span>
                  </div>

                  <h3 className="font-headline-lg text-xl md:text-2xl text-primary font-bold mb-element-gap-sm group-hover:text-primary-container transition-colors">
                    High-Converting Web Landing Pages
                  </h3>

                  <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-element-gap-lg leading-relaxed">
                    Landing page berkecepatan kilat dengan arsitektur copywriting persuasif, micro-interactions elegan, integrasi analytics &amp; CRM, dioptimasi untuk paid ads (Google Ads / Meta) dan branding premium.
                  </p>

                  <div className="space-y-element-gap-sm mb-element-gap-lg">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Storytelling Visual Imersif &amp; Typographic Hierarchy
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Sub-second Page Load (Core Web Vitals A+ Score 98+)
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        A/B Testing Ready &amp; Multivariate Telemetry
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Integrasi Webhook, HubSpot, Salesforce &amp; WhatsApp CRM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-element-gap-md bg-surface-container-lowest/60 -mx-element-gap-xl -mb-element-gap-xl p-element-gap-lg rounded-b-2xl border-t border-outline-variant/30">
                  <div className="font-label-code text-xs text-on-surface-variant mb-2 uppercase">
                    Teknologi Inti
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Next.js 16
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      TailwindCSS v4
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Three.js / WebGL
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Vercel Edge
                    </span>
                  </div>
                </div>
              </div>

              {/* PILAR 2: Custom Enterprise Web Applications */}
              <div className="cyber-card group relative rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-xl p-element-gap-xl shadow-xl flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl group-hover:bg-secondary-container/35 transition-all duration-500" />
                <div>
                  <div className="flex items-center justify-between gap-element-gap-sm mb-element-gap-md">
                    <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-code text-[11px] uppercase border border-secondary/30">
                      Best for: ERP/CRM Kustom • FinTech • SaaS Platforms
                    </span>
                    <span className="font-label-code text-xs text-on-surface-variant">PILAR 02</span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary mb-element-gap-md shadow-inner group-hover:scale-110 group-hover:bg-secondary-container group-hover:text-secondary-fixed transition-all duration-300">
                    <span className="material-symbols-outlined text-[28px]">space_dashboard</span>
                  </div>

                  <h3 className="font-headline-lg text-xl md:text-2xl text-primary font-bold mb-element-gap-sm group-hover:text-secondary transition-colors">
                    Custom Enterprise Web Applications
                  </h3>

                  <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-element-gap-lg leading-relaxed">
                    Aplikasi web internal maupun customer-facing yang dirancang khusus memotong inefisiensi manual, dashboard manajemen data analitik real-time, portal klien aman, dan otomasi workflow bisnis.
                  </p>

                  <div className="space-y-element-gap-sm mb-element-gap-lg">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Role-based Authentication (RBAC) &amp; Enterprise Security
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Real-time Data Streaming, Reporting &amp; Custom Exports
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Seamless API Integration (ERP, Payment Gateway, Logistics)
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Scalable Multi-Tenant Database Architecture &amp; Cloud Infra
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-element-gap-md bg-surface-container-lowest/60 -mx-element-gap-xl -mb-element-gap-xl p-element-gap-lg rounded-b-2xl border-t border-outline-variant/30">
                  <div className="font-label-code text-xs text-on-surface-variant mb-2 uppercase">
                    Teknologi Inti
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      React 19 / Next.js
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Node.js / FastAPI
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      PostgreSQL / Redis
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      AWS / GCP Cloud
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. FEATURED WORK & CASE STUDIES SHOWCASE
        =================================================================== */}
        <PortfolioShowcase />

        {/* ===================================================================
            5. OUR WORK PROCESS (TRANSPARENT SPRINTS)
        =================================================================== */}
        <section className="w-full py-section-gap-md lg:py-section-gap-lg relative" id="process-section">
          <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop">
            <div className="text-center max-w-2xl mx-auto mb-section-gap-sm">
              <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                ARSITEKTUR KERJA
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
                4 Langkah Metodologi Terstruktur Tanpa Kompromi
              </h2>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-2">
                Kami mengeliminasi friksi komunikasi dengan sprint mingguan transparan, pelaporan asynchronous, dan demo staging berkala.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-element-gap-md relative">
              {/* Step 1 */}
              <div className="cyber-card p-element-gap-lg rounded-2xl bg-surface-container-low/70 border border-outline-variant/40 backdrop-blur-md flex flex-col justify-between shadow-lg relative group overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-container to-primary group-hover:w-full transition-all duration-500" />
                <div>
                  <span className="font-label-code text-3xl font-black text-outline-variant group-hover:text-primary-container group-hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] transition-all duration-300">
                    01
                  </span>
                  <h3 className="font-headline-md text-lg text-primary font-bold mt-element-gap-sm mb-element-gap-xs group-hover:text-primary-container transition-colors">
                    Discovery &amp; Blueprint
                  </h3>
                  <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Pemetaan bottleneck bisnis, riset user persona, requirement matrix, serta penentuan arsitektur data &amp; teknologi terinci.
                  </p>
                </div>
                <div className="mt-element-gap-lg pt-element-gap-sm text-primary-container font-label-code text-xs flex items-center gap-1.5 border-t border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  Minggu 1 • SRS &amp; User Flow
                </div>
              </div>

              {/* Step 2 */}
              <div className="cyber-card p-element-gap-lg rounded-2xl bg-surface-container-low/70 border border-outline-variant/40 backdrop-blur-md flex flex-col justify-between shadow-lg relative group overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-container to-primary group-hover:w-full transition-all duration-500" />
                <div>
                  <span className="font-label-code text-3xl font-black text-outline-variant group-hover:text-primary-container group-hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] transition-all duration-300">
                    02
                  </span>
                  <h3 className="font-headline-md text-lg text-primary font-bold mt-element-gap-sm mb-element-gap-xs group-hover:text-primary-container transition-colors">
                    UX &amp; 3D Prototype
                  </h3>
                  <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Perancangan user flow interaktif, wireframe, micro-interactions, dan estetika visual tingkat tinggi sebelum masuk baris kode.
                  </p>
                </div>
                <div className="mt-element-gap-lg pt-element-gap-sm text-primary-container font-label-code text-xs flex items-center gap-1.5 border-t border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  Minggu 2 • Figma Interactive Flow
                </div>
              </div>

              {/* Step 3 */}
              <div className="cyber-card p-element-gap-lg rounded-2xl bg-surface-container-low/70 border border-outline-variant/40 backdrop-blur-md flex flex-col justify-between shadow-lg relative group overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-container to-primary group-hover:w-full transition-all duration-500" />
                <div>
                  <span className="font-label-code text-3xl font-black text-outline-variant group-hover:text-primary-container group-hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] transition-all duration-300">
                    03
                  </span>
                  <h3 className="font-headline-md text-lg text-primary font-bold mt-element-gap-sm mb-element-gap-xs group-hover:text-primary-container transition-colors">
                    Agile Full-Stack Dev
                  </h3>
                  <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Clean code TypeScript, arsitektur komponen modular, integrasi API pihak ketiga, dan unit testing ketat di staging environment.
                  </p>
                </div>
                <div className="mt-element-gap-lg pt-element-gap-sm text-primary-container font-label-code text-xs flex items-center gap-1.5 border-t border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  Minggu 3-5 • Staging Live URL
                </div>
              </div>

              {/* Step 4 */}
              <div className="cyber-card p-element-gap-lg rounded-2xl bg-surface-container-low/70 border border-outline-variant/40 backdrop-blur-md flex flex-col justify-between shadow-lg relative group overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-container to-primary group-hover:w-full transition-all duration-500" />
                <div>
                  <span className="font-label-code text-3xl font-black text-outline-variant group-hover:text-primary-container group-hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] transition-all duration-300">
                    04
                  </span>
                  <h3 className="font-headline-md text-lg text-primary font-bold mt-element-gap-sm mb-element-gap-xs group-hover:text-primary-container transition-colors">
                    Deploy &amp; Handover
                  </h3>
                  <p className="font-body-sm text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Optimasi performa Core Web Vitals, setup analytics &amp; tracking, panduan tim internal, transfer IP 100%, dan garansi bug-free.
                  </p>
                </div>
                <div className="mt-element-gap-lg pt-element-gap-sm text-primary-container font-label-code text-xs flex items-center gap-1.5 border-t border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  Minggu Akhir • Production Go-Live
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. CLIENT TESTIMONIALS & QUANTIFIABLE IMPACT
        =================================================================== */}
        <section className="w-full py-section-gap-md bg-surface-container-lowest/70 border-t border-outline-variant/20" id="testimonials-section">
          <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop">
            <div className="max-w-2xl mb-element-gap-xl">
              <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                KATA FOUNDER &amp; CTO
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
                Kolaborasi Berbasis Angka &amp; Kualitas Kode
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-element-gap-xl">
              {/* Testimonial 1 */}
              <div className="cyber-card p-element-gap-xl rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between shadow-md relative group">
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-container transition-colors text-[44px] mb-element-gap-sm">
                  format_quote
                </span>
                <p className="font-body-lg text-base md:text-lg text-on-surface italic mb-element-gap-lg leading-relaxed">
                  “Shenzhen Studio tidak hanya membuatkan kami web app yang indah, tapi benar-benar merombak cara operasional tim kami bekerja. Efisiensi melonjak drastis dan tidak ada satupun downtime tak terduga.”
                </p>
                <div className="flex items-center gap-element-gap-sm pt-element-gap-md bg-surface-container-high/40 -mx-element-gap-xl -mb-element-gap-xl p-element-gap-lg rounded-b-2xl border-t border-outline-variant/30">
                  <div className="w-12 h-12 rounded-full bg-primary-container/20 border border-primary-container/40 flex items-center justify-center text-primary-container font-headline-md font-bold group-hover:scale-110 transition-transform">
                    HW
                  </div>
                  <div>
                    <div className="font-headline-md text-sm md:text-base font-bold text-primary group-hover:text-primary-container transition-colors">
                      Hendra Wijaya
                    </div>
                    <div className="font-body-sm text-xs text-on-surface-variant">
                      VP Technology, NexusSupply
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="cyber-card p-element-gap-xl rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between shadow-md relative group">
                <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors text-[44px] mb-element-gap-sm">
                  format_quote
                </span>
                <p className="font-body-lg text-base md:text-lg text-on-surface italic mb-element-gap-lg leading-relaxed">
                  “Landing page yang mereka racik langsung mencatatkan rekor konversi terbaik kami sepanjang sejarah peluncuran produk. Metrik leads qualified kami melonjak 223% di bulan pertama peluncuran.”
                </p>
                <div className="flex items-center gap-element-gap-sm pt-element-gap-md bg-surface-container-high/40 -mx-element-gap-xl -mb-element-gap-xl p-element-gap-lg rounded-b-2xl border-t border-outline-variant/30">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary font-headline-md font-bold group-hover:scale-110 transition-transform">
                    ST
                  </div>
                  <div>
                    <div className="font-headline-md text-sm md:text-base font-bold text-primary group-hover:text-secondary transition-colors">
                      Sarah Tan
                    </div>
                    <div className="font-body-sm text-xs text-on-surface-variant">
                      Head of Growth, FinPulse
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. FAQ ACCORDION SECTION
        =================================================================== */}
        <FAQAccordion />

        {/* ===================================================================
            8. RAPID BRIEF FORM & FINAL CTA
        =================================================================== */}
        <QuickBriefForm />
      </main>

      <Footer />
    </div>
  );
}

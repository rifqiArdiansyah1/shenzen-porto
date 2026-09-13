import ThreeMonolith from "@/components/three-monolith";
import TrustBar from "@/components/trust-bar";
import HeroMetrics from "@/components/hero-metrics";
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
                    ✦ HIGH-PERFORMANCE WEB ENGINEERING &bull; ACCEPTING NEW CLIENTS
                  </span>
                </div>

                {/* Megastructure Headline */}
                <h1 className="hero-stagger-2 font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-primary font-extrabold tracking-tight leading-[1.12]">
                  We Architect High-Converting Landing Pages &amp; Scalable Custom Web Apps.{" "}
                  <span className="block bg-gradient-to-r from-primary-container via-primary-fixed to-secondary text-transparent bg-clip-text mt-1">
                    Built to Accelerate Business Growth.
                  </span>
                </h1>

                {/* Body Copy */}
                <p className="hero-stagger-3 font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Shenzhen Studio partners with venture-backed founders, growing startups, and forward-thinking enterprises worldwide to engineer sub-second web platforms and automated business operating systems with zero agency fluff.
                </p>

                {/* Dual Cybernetic CTA Buttons */}
                <div className="hero-stagger-4 flex flex-wrap items-center gap-element-gap-md pt-element-gap-xs">
                  <a
                    href="#featured-works"
                    className="btn-shimmer group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-primary-fixed text-on-primary-container font-headline-md text-sm md:text-base font-bold shadow-[0_0_30px_rgba(0,242,254,0.45)] hover:shadow-[0_0_42px_rgba(0,242,254,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    <span>Explore Case Studies</span>
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
                    <span>Free Technical Consultation (15 Mins)</span>
                  </a>
                </div>

                {/* Interactive Verifiable Metric Cards */}
                <HeroMetrics />
              </div>

              {/* Right Column: Interactive 3D Monolith WebGL Scene */}
              <div className="lg:col-span-5">
                <ThreeMonolith />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            2. HONEST TRUST RIBBON & PRODUCTION TECH STACK
        =================================================================== */}
        <TrustBar />

        {/* ===================================================================
            3. CORE SERVICES (TWO DIGITAL CRAFT PILLARS)
        =================================================================== */}
        <section className="w-full py-section-gap-md lg:py-section-gap-lg relative" id="services">
          <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop">
            <div className="flex flex-col gap-element-gap-sm mb-section-gap-sm max-w-3xl">
              <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                CORE ENGINEERING CAPABILITIES
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
                Two Digital Engineering Pillars Designed for Business Scale
              </h2>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                We reject generic, bloated templates. We design custom architecture tailored for high conversion rates and enterprise operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-element-gap-xl">
              {/* PILLAR 1: High-Converting Landing Pages */}
              <div className="cyber-card group relative rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-xl p-element-gap-xl shadow-xl flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/25 transition-all duration-500" />
                <div>
                  <div className="flex items-center justify-between gap-element-gap-sm mb-element-gap-md min-h-[32px]">
                    <span className="px-3 py-1 rounded-full bg-primary-container/15 text-primary-container font-label-code text-[11px] uppercase border border-primary-container/30 truncate">
                      Best for: SaaS Launch • B2B Lead Gen • Growth Funnels
                    </span>
                    <span className="font-label-code text-xs text-on-surface-variant flex-shrink-0">PILLAR 01</span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary-container mb-element-gap-md shadow-inner group-hover:scale-110 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
                    <span className="material-symbols-outlined text-[28px]">web</span>
                  </div>

                  <h3 className="font-headline-lg text-xl md:text-2xl text-primary font-bold mb-element-gap-sm group-hover:text-primary-container transition-colors">
                    High-Converting Web Landing Pages
                  </h3>

                  <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-element-gap-lg leading-relaxed">
                    Ultra-fast landing pages engineered with persuasive copywriting hierarchy, lightweight micro-interactions, conversion telemetry, and optimized for paid acquisition and premium brand positioning.
                  </p>

                  <div className="space-y-element-gap-sm mb-element-gap-lg">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Persuasive Visual Storytelling &amp; Typographic Hierarchy
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Sub-Second Page Load (Core Web Vitals A+ Score 99+)
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Conversion Funnel Instrumentation &amp; Behavioral Telemetry
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Payment Gateway Integrations (Midtrans &amp; Stripe-compatible architecture)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-element-gap-md bg-surface-container-lowest/60 -mx-element-gap-xl -mb-element-gap-xl p-element-gap-lg rounded-b-2xl border-t border-outline-variant/30">
                  <div className="font-label-code text-xs text-on-surface-variant mb-2 uppercase">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Next.js 15+
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Tailwind CSS v4
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Three.js / WebGL
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Vercel Cloud
                    </span>
                  </div>
                </div>
              </div>

              {/* PILLAR 2: Custom Enterprise Web Applications */}
              <div className="cyber-card group relative rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-xl p-element-gap-xl shadow-xl flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl group-hover:bg-secondary-container/35 transition-all duration-500" />
                <div>
                  <div className="flex items-center justify-between gap-element-gap-sm mb-element-gap-md min-h-[32px]">
                    <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-code text-[11px] uppercase border border-secondary/30 truncate">
                      Best for: Multi-Branch • Custom ERP • Internal Ops
                    </span>
                    <span className="font-label-code text-xs text-on-surface-variant flex-shrink-0">PILLAR 02</span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary mb-element-gap-md shadow-inner group-hover:scale-110 group-hover:bg-secondary-container group-hover:text-secondary-fixed transition-all duration-300">
                    <span className="material-symbols-outlined text-[28px]">space_dashboard</span>
                  </div>

                  <h3 className="font-headline-lg text-xl md:text-2xl text-primary font-bold mb-element-gap-sm group-hover:text-secondary transition-colors">
                    Custom Enterprise Web Applications
                  </h3>

                  <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-element-gap-lg leading-relaxed">
                    Internal and customer-facing web applications built to eliminate manual friction: real-time multi-branch dispatch, role-based access control, automated payment webhooks, and scalable relational schemas.
                  </p>

                  <div className="space-y-element-gap-sm mb-element-gap-lg">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Role-Based Access Control (RBAC) &amp; Enterprise Auth
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Real-Time State Synchronization, Inventory Locks &amp; Telemetry
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Automated Webhooks &amp; Multi-Branch Payment Settlements
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-sm text-on-surface">
                        Relational Integrity with PostgreSQL &amp; Prisma ORM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-element-gap-md bg-surface-container-lowest/60 -mx-element-gap-xl -mb-element-gap-xl p-element-gap-lg rounded-b-2xl border-t border-outline-variant/30">
                  <div className="font-label-code text-xs text-on-surface-variant mb-2 uppercase">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      React 19 / Next.js
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      TypeScript Strict
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Supabase / PostgreSQL
                    </span>
                    <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/30 text-primary font-label-code text-xs">
                      Prisma ORM
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
                SPRINT ARCHITECTURE
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
                A 4-Step Methodology Built for Speed &amp; Transparency
              </h2>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-2">
                We eliminate communication latency through transparent weekly sprints, asynchronous video demos, and regular staging deployment URLs.
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
                    Business bottleneck mapping, user personas, requirement matrix, and detailed relational database architecture specifications.
                  </p>
                </div>
                <div className="mt-element-gap-lg pt-element-gap-sm text-primary-container font-label-code text-xs flex items-center gap-1.5 border-t border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  Week 1 • Specs &amp; Schema
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
                    Interactive user flows, Figma component system, micro-interactions, and visual polish validated before writing production code.
                  </p>
                </div>
                <div className="mt-element-gap-lg pt-element-gap-sm text-primary-container font-label-code text-xs flex items-center gap-1.5 border-t border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  Week 2 • Figma Prototype
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
                    Strict TypeScript implementation, modular components, webhook integrations, and automated staging deployments with Loom video updates.
                  </p>
                </div>
                <div className="mt-element-gap-lg pt-element-gap-sm text-primary-container font-label-code text-xs flex items-center gap-1.5 border-t border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  Weeks 3–5 • Live Staging URL
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
                    Core Web Vitals performance tuning, analytics telemetry, full GitHub IP repository transfer, and complimentary 30-day bug warranty.
                  </p>
                </div>
                <div className="mt-element-gap-lg pt-element-gap-sm text-primary-container font-label-code text-xs flex items-center gap-1.5 border-t border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  Final Week • Go-Live &amp; IP Transfer
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. VERIFIED OUTCOMES & COLLABORATION STANDARDS
        =================================================================== */}
        <section className="w-full py-section-gap-md bg-surface-container-lowest/70 border-t border-outline-variant/20" id="testimonials-section">
          <div className="max-w-[1280px] mx-auto px-grid-gutter-mobile md:px-grid-gutter-tablet lg:px-grid-gutter-desktop">
            <div className="max-w-2xl mb-element-gap-xl">
              <div className="inline-flex items-center gap-2 text-primary-container font-label-code text-xs tracking-widest uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                PROVEN RESULTS &amp; PRINCIPLES
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl lg:text-4xl text-primary font-bold">
                Software Evaluated by Measurable Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-element-gap-xl">
              {/* Authentic Client Case Study Outcome: CV Rental Mobil */}
              <div className="cyber-card p-element-gap-xl rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between shadow-md relative group">
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary-container transition-colors text-[44px] mb-element-gap-sm">
                  format_quote
                </span>
                <p className="font-body-lg text-base md:text-lg text-on-surface italic mb-element-gap-lg leading-relaxed">
                  &ldquo;DriveFlow completely eliminated our vehicle double-booking headaches across branches. Our staff no longer spends hours manually checking transfer slips, and clients can lock in their rental in under a minute.&rdquo;
                </p>
                <div className="flex items-center justify-between gap-element-gap-sm pt-element-gap-md bg-surface-container-high/40 -mx-element-gap-xl -mb-element-gap-xl p-element-gap-lg rounded-b-2xl border-t border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary-container/20 border border-primary-container/40 flex items-center justify-center text-primary-container font-headline-md font-bold group-hover:scale-110 transition-transform">
                      RM
                    </div>
                    <div>
                      <div className="font-headline-md text-sm md:text-base font-bold text-primary group-hover:text-primary-container transition-colors">
                        Operations Lead
                      </div>
                      <div className="font-body-sm text-xs text-on-surface-variant">
                        CV Rental Mobil (DriveFlow Platform)
                      </div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded bg-primary-container/10 border border-primary-container/30 text-[11px] font-label-code text-primary-container">
                    Verified Production
                  </span>
                </div>
              </div>

              {/* Direct Engineering Commitment */}
              <div className="cyber-card p-element-gap-xl rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between shadow-md relative group">
                <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors text-[44px] mb-element-gap-sm">
                  verified
                </span>
                <p className="font-body-lg text-base md:text-lg text-on-surface italic mb-element-gap-lg leading-relaxed">
                  &ldquo;Working directly with a dedicated senior full-stack engineer—without account managers or agency overhead—means immediate feedback loops, zero miscommunication, and high-velocity shipping on a modern, maintainable codebase.&rdquo;
                </p>
                <div className="flex items-center justify-between gap-element-gap-sm pt-element-gap-md bg-surface-container-high/40 -mx-element-gap-xl -mb-element-gap-xl p-element-gap-lg rounded-b-2xl border-t border-outline-variant/30">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary font-headline-md font-bold group-hover:scale-110 transition-transform">
                      SZ
                    </div>
                    <div>
                      <div className="font-headline-md text-sm md:text-base font-bold text-primary group-hover:text-secondary transition-colors">
                        Engineering Guarantee
                      </div>
                      <div className="font-body-sm text-xs text-on-surface-variant">
                        Shenzhen Studio Core Standard
                      </div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded bg-secondary/10 border border-secondary/30 text-[11px] font-label-code text-secondary">
                    Direct Access
                  </span>
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

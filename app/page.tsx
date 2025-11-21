import Head from 'next/head'
import Image from 'next/image'

const projectsPlaceholder = [
  {
    id: 1,
    title: 'Client Site — Company A',
    imageUrl: "/TechNova-image.png",
    description: 'Company profile with responsive layout, CMS integration, and contact form.',
    url: 'https://technova-company.vercel.app',
    imageAlt: 'Screenshot Company A',
  },
  {
    id: 2,
    title: 'E‑Commerce — Shop B',
    imageUrl: "/simple-store.png",
    description: 'Simple store with product pages, shopping cart, and payment integration.',
    url: 'https://github.com/rifqiArdiansyah1/simple-store',
    imageAlt: 'Screenshot Shop B',
  },
  // {
  //   id: 3,
  //   title: 'Landing Page — Product C',
  //   imageUrl: "/simple-store.png",
  //   description: 'High-converting landing page with smooth scroll and analytics setup.',
  //   url: 'https://example-client-a.com',
  //   imageAlt: 'Screenshot Product C',
  // },
]

export default function Home() {

  const projects = projectsPlaceholder


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">We design & build fast, modern websites</h2>
            <p className="mt-4 text-gray-400">I’m Adi — founder of Shenzen. I help small businesses and startups launch beautiful, responsive websites that convert visitors into customers.</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#contact" className="inline-block bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-md font-medium">Get a Quote</a>
              <a href="#projects" className="inline-block border border-gray-700 px-5 py-3 rounded-md text-sm">See Projects</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <strong>Services:</strong> Website Design • Next.js Development • E‑Commerce • Landing Pages • SEO Basics
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-gray-800 p-6 bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="relative h-56 w-full rounded-lg overflow-hidden bg-gradient-to-tr from-indigo-800 to-purple-800">
                <Image src="/hero-visual.png" alt="Screenshot TechNova" fill className="object-cover w-full h-full" />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                <div>Trusted by clients worldwide</div>
                <div>Made with ♡ in Indonesia</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-20">
          <h3 className="text-2xl font-semibold">Services</h3>
          <p className="mt-2 text-gray-400">What I offer as a full‑stack web developer.</p>


          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              {
                id: 1,
                title: "Company Website",
                desc: "Modern, responsive, SEO‑ready business websites.",
                delay: 0,
                dir: "left",
              },
              {
                id: 2,
                title: "Web Apps",
                desc: "Dynamic apps built with Next.js + Tailwind.",
                delay: 100,
                dir: "up",
              },
              {
                id: 3,
                title: "Landing Pages",
                desc: "High‑converting landing pages optimized for speed.",
                delay: 200,
                dir: "right",
              },
              {
                id: 4,
                title: "E‑Commerce",
                desc: "Shopify/Headless setups, product pages, checkout flow.",
                delay: 300,
                dir: "left",
              },
              {
                id: 5,
                title: "Website Design",
                desc: "Modern UI/UX, responsive layout, and brand-aligned visuals.",
                delay: 400,
                dir: "up",
              },
              {
                id: 6,
                title: "Basic SEO",
                desc: "On-page SEO, performance tweaks, and sitemap setup.",
                delay: 500,
                dir: "right",
              },
            ].map((s) => (
              <div
                key={s.id}
                className={`p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] opacity-0 translate-y-6 animate-fadeIn`}
                style={{
                  animationDelay: `${s.delay}ms`,
                }}
              >
                <h4 className="text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects / Portfolio */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <p className="mt-2 text-gray-400">A curated selection of websites I built. Hover to preview full image.</p>


          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-lg border border-gray-800 overflow-hidden hover:shadow-lg transition"
              >
                {/* Thumbnail */}
                <Image
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  width={800}
                  height={400}
                  className="h-36 w-full rounded-md bg-linear-to-br from-indigo-900 to-purple-900 object-cover transition duration-300 group-hover:opacity-0"
                />


                {/* Full-size image on hover */}
                <Image
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  width={1200}
                  height={600}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-105 group-hover:scale-100"
                />


                <div className="relative z-10 p-4 group-hover:opacity-0 transition duration-300">
                  <h4 className="mt-4 font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-400">{p.description}</p>
                  <div className="mt-3 text-xs text-indigo-300">View site →</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <div className="mt-4 md:flex gap-6 items-center">
            <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-indigo-700 to-indigo-900 flex items-center justify-center font-bold text-white">Adi</div>
            <div>
              <p className="text-gray-400">I’m Adi, a web developer & designer behind Shenzen. I specialize in building fast and maintainable websites using Next.js and modern web technologies. I enjoy working with small businesses to turn ideas into real online products.</p>
              <ul className="mt-3 text-sm text-gray-400 list-disc pl-5 space-y-1">
                <li>3+ years building websites (personal & client projects)</li>
                <li>Technologies: Next.js, React, Tailwind CSS, Prisma (optional)</li>
                <li>English communication & remote collaboration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 mb-24">
          <h3 className="text-2xl font-semibold">Contact & Hire</h3>
          <p className="mt-2 text-gray-400">Ready to start? Tell me about your project — I usually respond within 24 hours.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/62895395392047" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 px-5 py-3 rounded-md font-medium">Chat on WhatsApp</a>
            <a href="mailto:shenzen.studio@gmail.com" className="inline-block border border-gray-700 px-5 py-3 rounded-md font-medium">Email me</a>
            {/* <a href="/resume.pdf" className="inline-block border border-gray-700 px-5 py-3 rounded-md font-medium">Download CV</a> */}
          </div>

          <div className="mt-6 text-sm text-gray-500">Prefer a proposal? Send me a short brief: project scope, target launch date, and budget.</div>
        </section>
      </main>
      <footer className="border-t border-gray-800 py-6 mt-10">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Shenzen Studio — Adi</div>
          <div>Built with Next.js • Deployed on Vercel</div>
        </div>
      </footer>
    </div>
  )
}

type ServiceCardProps = {
  title: string
  desc: string
}

function ServiceCard({ title, desc }: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-gray-800 p-5 bg-gradient-to-br from-gray-900 to-gray-800">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-400">{desc}</p>
    </div>
  )
}

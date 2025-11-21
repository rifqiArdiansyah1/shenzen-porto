import Head from 'next/head'
import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-gray-900 text-gray-100 antialiased">
            <Head>
                <title>Shenzen Studio — Web Design & Development</title>
                <meta name="description" content="Shenzen builds modern, responsive websites for small businesses and startups." />
            </Head>

            {/* Page Container */}
            <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Logo circle */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">SZ</div>
                    <div>
                        <h1 className="text-xl font-semibold">Shenzen Studio</h1>
                        <p className="text-sm text-gray-400">Modern websites for small businesses • Adi — Founder</p>
                    </div>
                </div>

                <nav className="hidden md:flex gap-6 text-sm">
                    <a href="#services" className="hover:text-white">Services</a>
                    <a href="#projects" className="hover:text-white">Projects</a>
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#contact" className="bg-indigo-600 px-3 py-1 rounded text-sm font-medium hover:opacity-90">Contact</a>
                </nav>

                {/* Mobile menu button (simple) */}
                <div className="md:hidden">
                    <a href="#contact" className="bg-indigo-600 px-3 py-1 rounded text-sm font-medium">Contact</a>
                </div>
            </header>
        </div>
    )
}

export default Navbar
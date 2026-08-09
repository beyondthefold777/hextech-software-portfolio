"use client"
import Link from 'next/link'
import Image from 'next/image'
import { getCalApi } from "@calcom/embed-react"
import { useEffect, useState } from "react"

const LOGO_SRC = "/rune_4k_gradient.png"
const LOGO_ALT = "Hextech Software"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"})
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#3B82F6", "cal-brand-emphasis": "#2563EB" },
          dark: {
            "cal-brand": "#3B82F6",
            "cal-brand-emphasis": "#2563EB",
            "cal-bg": "#0F172A",
            "cal-bg-emphasis": "#1E293B",
            "cal-border-emphasis": "#334155",
            "cal-text": "#FFFFFF",
            "cal-text-emphasis": "#E2E8F0",
            "cal-text-subtle": "#94A3B8"
          }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      })
    })()
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 rune-pattern text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 md:py-6 flex justify-between items-center relative z-50">
        <div className="flex items-center gap-5">
          <Image
            src={LOGO_SRC}
            alt={LOGO_ALT}
            width={80}
            height={80}
            className="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
            priority
            unoptimized
          />
          <div className="hidden md:flex items-center gap-5">
            <div className="w-px h-8 bg-slate-800" />
            <span className="text- font-semibold tracking-[-0.01em] text-white">
              Hextech Software
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-slate-300">
          <Link href="#services" className="hover:text-white transition">What We Build</Link>
          <Link href="/facts" className="hover:text-white transition">Facts</Link>
          <Link href="#work" className="hover:text-white transition">Work</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Call Button - icon only on mobile */}
          <a
            href="tel:+14138965642"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-95 w-11 h-11 md:w-auto md:h-auto md:px-6 md:py-3"
          >
            {/* Phone icon - fixed SVG */}
            <svg className="w-5 h-5 md:w-4 md:h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0.7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden md:inline text-sm md:text-base">Call Now</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 grid place-items-center rounded-xl bg-slate-900 border border-slate-800"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-white transition ${menuOpen? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition ${menuOpen? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition ${menuOpen? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 md:hidden shadow-2xl">
            <div className="flex flex-col gap-5 text- font-medium">
              <Link href="#services" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white transition">What We Build</Link>
              <Link href="/facts" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white transition">Facts</Link>
              <Link href="#work" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white transition">Work</Link>
              <Link href="/pricing" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white transition">Pricing</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white transition">Contact</Link>
              <div className="h-px bg-slate-800 my-1" />
              <a href="tel:+14138965642" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-6 py-3.5 font-semibold">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 0 0 0.7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call (413) 896-5642
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-12 md:py-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute top-20 right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-[2.5rem] md:text-7xl font-bold mb-6 md:mb-8 leading-[1.1]">
            Software You Actually Own.<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Built For Your Business.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Stop renting your business from no-code platforms. We build custom software where
            <span className="text-white font-semibold"> you own the code, the database, and the future</span>.
            No monthly lock-in, no feature limits, no platform shutting down on you.
          </p>

          <p className="text- md:text-lg text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Unlike one-click app builders that give you a generic wrapper, we build real Progressive Web Apps (PWAs)
            and native apps that do exactly what your business needs.
          </p>

          <div className="flex justify-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-purple-500/30 rounded-full px-4 md:px-5 py-2.5 backdrop-blur text-center">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0"></span>
              <span className="text- md:text-sm text-slate-300">Custom PWAs starting at <span className="text-white font-bold">$750</span> — you own everything, hosting from $99/mo</span>
            </div>
          </div>

          <div className="flex gap-3 md:gap-4 justify-center flex-wrap mb-16 md:mb-20">
            <button
              data-cal-namespace="15min"
              data-cal-link="beyondthefold777/15min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-95"
            >
              Book Free Scope Call →
            </button>
            <a
              href="#services"
              className="w-full md:w-auto text-center px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:bg-slate-700/80 hover:border-slate-600 font-semibold text-lg backdrop-blur transition-all duration-300 active:scale-95"
            >
              See What We Build
            </a>
          </div>

          {/* What We Can Do Grid */}
          <div id="services" className="grid md:grid-cols-3 gap-4 md:gap-6 text-left">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur hover:border-purple-500/30 transition-colors">
              <h3 className="text-purple-400 font-bold mb-3">For Your Customers</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-purple-400">•</span> Installable PWA — Add to Home Screen like a real app</li>
                <li className="flex gap-2"><span className="text-purple-400">•</span> Client portals with login, profiles & dashboards</li>
                <li className="flex gap-2"><span className="text-purple-400">•</span> Online booking, scheduling & payments</li>
                <li className="flex gap-2"><span className="text-purple-400">•</span> Push notifications that actually get seen</li>
                <li className="flex gap-2"><span className="text-purple-400">•</span> Works offline — no signal needed</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur hover:border-blue-500/30 transition-colors">
              <h3 className="text-blue-400 font-bold mb-3">For Your Operations</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Camera capture, file & photo uploads</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Custom forms, contracts & e-signatures</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Real-time messaging & chat built-in</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> GPS tracking, maps & location features</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Automated workflows & reminders</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur hover:border-emerald-500/30 transition-colors">
              <h3 className="text-emerald-400 font-bold mb-3">For Your Growth</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-emerald-400">•</span> Admin dashboard to manage everything</li>
                <li className="flex gap-2"><span className="text-emerald-400">•</span> Your own database — export anytime</li>
                <li className="flex gap-2"><span className="text-emerald-400">•</span> iOS & Android App Store ready</li>
                <li className="flex gap-2"><span className="text-emerald-400">•</span> AI features, analytics & reporting</li>
                <li className="flex gap-2"><span className="text-emerald-400">•</span> You own the GitHub repo Day 1 — no hostage code</li>
              </ul>
            </div>
          </div>

          {/* PWA FACTS TEASER */}
          <section id="facts" className="mt-16 md:mt-20 text-left">
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></span>
                  Why Businesses Switch
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                  Not just a website. <span className="text-white/50">An app they keep.</span>
                </h2>
              </div>
              <Link href="/facts" className="hidden md:inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
                See all facts →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur hover:border-violet-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center text-lg">📱</div>
                <h3 className="mt-4 font-semibold">On the Home Screen</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">One tap to open. Not lost in 40 tabs. 3.2x more repeat visits vs mobile web.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur hover:border-blue-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-lg">⚡</div>
                <h3 className="mt-4 font-semibold">Loads in &lt;1 Second</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">Even on 3G. Google ranks you higher and 53% fewer people bounce.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur hover:border-blue-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 grid place-items-center text-lg">🔔</div>
                <h3 className="mt-4 font-semibold">Push Notifications</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">Free marketing. "Order ready" / "20% off today" direct to their phone.</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/facts" className="inline-flex h-11 px-6 rounded-full bg-white text-black text-sm font-semibold items-center gap-2 hover:bg-slate-200 transition-all hover:scale-105 active:scale-95">
                Read full Facts & FAQ →
              </Link>
            </div>
          </section>

          {/* Timeline */}
          <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-slate-900 border border-blue-500/20 rounded-xl p-6 relative overflow-hidden hover:border-blue-500/40 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h4 className="font-bold text-lg mb-1">Progressive Web App (PWA)</h4>
              <p className="text-blue-400 text-sm font-semibold mb-3">Timeline: 7-14 days • Most Popular</p>
              <p className="text-slate-400 text-sm mb-3">Installs to home screen, works like a native app, no App Store needed. Perfect to launch fast.</p>
              <div className="flex gap-2 text-xs text-slate-500 flex-wrap">
                <span className="bg-slate-800 px-2 py-1 rounded">Week 1: Design & Build</span>
                <span className="bg-slate-800 px-2 py-1 rounded">Week 2: Launch</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-purple-500/20 rounded-xl p-6 relative overflow-hidden hover:border-purple-500/40 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <h4 className="font-bold text-lg mb-1">Native iOS & Android App</h4>
              <p className="text-purple-400 text-sm font-semibold mb-3">Timeline: 30-45 days • App Store Ready</p>
              <p className="text-slate-400 text-sm mb-3">Full native build for Apple & Google Play. Includes PWA + native wrappers + store submission.</p>
              <div className="flex gap-2 text-xs text-slate-500 flex-wrap">
                <span className="bg-slate-800 px-2 py-1 rounded">Weeks 1-2: PWA Core</span>
                <span className="bg-slate-800 px-2 py-1 rounded">Weeks 3-6: Native & Submit</span>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm mt-10 pb-10">
            Built with React, Next.js, React Native, Node.js & AI — modern stack that scales with you.
          </p>
        </div>
      </section>
    </main>
  )
}
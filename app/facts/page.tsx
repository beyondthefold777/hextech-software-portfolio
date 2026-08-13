"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FiSmartphone, FiZap, FiBell, FiWifi, FiPackage, FiLayers } from 'react-icons/fi';

export default function FactsPage() {
  const benefits = [
    { icon: FiSmartphone, title: "Lives on Home Screen", desc: "Not lost in 40 browser tabs. One tap to open, like a real app.", impact: "Business Impact: +3.2x repeat visits", accent: "from-violet-500 to-fuchsia-500" },
    { icon: FiZap, title: "Lightning Fast", desc: "Loads in <1 sec, even on 3G. Google ranks you higher for speed.", impact: "Business Impact: -53% bounce rate", accent: "from-blue-500 to-cyan-400" },
    { icon: FiBell, title: "Push Notifications", desc: "Free marketing channel. New menu, deal, event → direct to phone.", impact: "Business Impact: $0 ad spend for re-engagement", accent: "from-fuchsia-500 to-pink-500" },
    { icon: FiWifi, title: "Works Offline", desc: "Menu, prices, hours, contact — always available, no signal needed.", impact: "Business Impact: Never lose a customer to bad service", accent: "from-emerald-400 to-teal-400" },
    { icon: FiPackage, title: "No App Store Hassle", desc: "No 30% cut, no approval wait. You own it. And when you DO need native, we ship that too (2 apps live on Play Store).", impact: "Business Impact: Save $10k+ vs native app", accent: "from-orange-400 to-amber-400" },
    { icon: FiLayers, title: "One Codebase, Everywhere", desc: "iOS, Android, Desktop from one build. No double dev cost.", impact: "Business Impact: 1 build, 100% coverage", accent: "from-violet-400 to-indigo-500" },
  ];

  const faqs = [
    { q: "What exactly is a PWA?", a: "A Progressive Web App is your website that behaves like a native app. Installable to home screen, works offline, sends push notifications, loads instantly — no App Store needed. And when you need store distribution or deeper device access, we build native apps too." },
    { q: "What is a Native App and why would I pay $5k+ for it?", a: "A native app lives IN the phone, not just ON it. Think DoorDash, Uber, Starbucks. You pay more because you're getting 2 real apps (iPhone + Android) + we handle App Store submission + it can do things a website physically can't: tap phone to pay with NFC, connect to Bluetooth printers/scales, use Face ID to login, run in background tracking delivery driver. Most businesses don't need that Day 1. That's why we say start PWA, you own the code, and upgrade later — your customers + database carry over. No rebuild." },
    { q: "Will it replace my existing website?", a: "It IS your website, supercharged. Same URL, same SEO. We upgrade it to be installable and offline-ready. No need to manage two properties." },
    { q: "Do customers need to go to the App Store?", a: "No. They visit your site and get a prompt to 'Add to Home Screen'. Two taps and your icon is on their phone. If you want App Store presence for discovery, we can publish native alongside it." },
    { q: "How long does it take?", a: "Starter PWA: 7-10 days. Growth: 10-14 days. Pro: 14-21 days. Native iOS & Android: 30-45 days including App Store submission." },
    { q: "Do I own the code?", a: "Yes. Full source, no lock-in, host anywhere. Upon final payment you get the GitHub repo + MongoDB Atlas database. Daily backups." },
    { q: "What about iPhone?", a: "PWAs work great on iPhone now. Apple added full support in iOS 16.4+ including push notifications. 97%+ of phones support PWAs. We test on real iPhones." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#08080C] text-white antialiased overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-96 left-1/2 -translate-x-1/2 w- h- bg-[radial-gradient(ellipse_at_center,_rgba(120,80,255,0.18),transparent_60%)]" />
        <div className="absolute top-0 -right-96 w- h- bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12),transparent_60%)]" />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <Link href="/" className="inline-flex mb-8 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] font-medium transition text-sm">
          ← Back Home
        </Link>

        <div className="inline-flex text-xs tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">PWA Facts</div>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[0.95]">PWAs give you the best of both worlds: <span className="text-white/40">the reach of the web with the experience of a native app.</span></h1>
        <p className="mt-4 max-w-2xl text-white/60 text-">For most local businesses, it's faster, cheaper, and easier to maintain than a traditional native app — without sacrificing performance. And when you need full native power, we ship that too.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {benefits.map(b => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${b.accent} grid place-items-center`}>
                <b.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{b.desc}</p>
              <div className="mt-3 text- px-2.5 py-1 rounded-full bg-violet-500/15 border border-violet-500/20 text-violet-200 inline-block">{b.impact}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 overflow-x-auto">
          <h3 className="font-semibold text-lg mb-2">PWA vs Native App — What's The Difference?</h3>
          <p className="text-sm text-white/50 mb-6">90% of businesses should start with PWA. Here's why native costs more.</p>
          <table className="w-full text-sm">
            <thead className="text-white/40 text-xs uppercase tracking-wide"><tr><th className="text-left py-3">Feature</th><th className="text-left py-3 text-violet-300">PWA (What We Recommend First)</th><th className="text-left py-3 text-blue-300">Native App</th></tr></thead>
            <tbody className="text-white/70 divide-y divide-white/10">
              <tr><td className="py-4 font-medium text-white/90">Install</td><td className="py-4 pr-4">Add to Home Screen from link, 2 seconds. No store.</td><td className="py-4">App Store / Play Store search + download + approval</td></tr>
              <tr><td className="py-4 font-medium text-white/90">Works Offline</td><td className="py-4 pr-4">Yes — offline fallback page + cached menu/prices/hours/contact</td><td className="py-4">Yes — full offline mode, even heavy content</td></tr>
              <tr><td className="py-4 font-medium text-white/90">Push Notifications</td><td className="py-4 pr-4">Yes — even when app closed (iOS 16.4+). "Order ready" / "20% off today"</td><td className="py-4">Yes — more reliable, rich media, background actions</td></tr>
              <tr><td className="py-4 font-medium text-white/90">Speed</td><td className="py-4 pr-4">Super fast (&lt;1s), perfect for menus, booking, dashboards</td><td className="py-4">Fastest — 60fps animations, heavy games / video / maps</td></tr>
              <tr><td className="py-4 font-medium text-white/90">Phone Features</td><td className="py-4 pr-4">Camera, GPS, mic, file uploads, tap-to-call, share, maps</td><td className="py-4"><span className="text-white">EVERYTHING</span> — Bluetooth, NFC tap-to-pay, Face ID / Touch ID, contacts, AR, background location tracking, health kit</td></tr>
              <tr><td className="py-4 font-medium text-white/90">Discoverability</td><td className="py-4 pr-4">Google finds it — SEO, link goes viral, QR code to install</td><td className="py-4">App Store search + Featured + credibility badge "As seen on App Store"</td></tr>
              <tr><td className="py-4 font-medium text-white/90">Updates</td><td className="py-4 pr-4"><span className="text-white">Instant</span> — we push, you refresh. No wait.</td><td className="py-4">App Store review — 1-2 days</td></tr>
              <tr><td className="py-4 font-medium text-white/90">App Store Fees</td><td className="py-4 pr-4"><span className="text-emerald-300">None</span></td><td className="py-4">$99/yr Apple + $25 Play + 15-30% cut if you sell inside app</td></tr>
              <tr><td className="py-4 font-medium text-white/90">Typical Cost</td><td className="py-4 pr-4"><span className="text-white font-semibold">$750 - $2,500 one-time</span> — you own GitHub + DB</td><td className="py-4"><span className="text-white font-semibold">Starting at $5,000</span> — 2 apps (iOS + Android) + store submission handled</td></tr>
              <tr><td className="py-4 font-medium text-white/90">Best For</td><td className="py-4 pr-4"><span className="text-white">90% of businesses</span> who want to launch FAST, own everything, and stop paying monthly rent</td><td className="py-4">Gyms, delivery, restaurants with kiosks, social apps, anything needing Bluetooth printers, NFC, constant background tracking</td></tr>
            </tbody>
          </table>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-violet-500/10 border border-violet-500/20 p-5">
              <div className="font-medium text-white">What is a PWA?</div>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">Your website that behaves like a native app. Installable to home screen with your logo, splash screen, offline page, tap-to-call, directions, share button, push notifications. Lives at your domain, Google can find it. No App Store needed. You own the GitHub + database Day 1.</p>
            </div>
            <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-5">
              <div className="font-medium text-white">What is a Native App and why pay more?</div>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">A native app lives <span className="text-white">IN</span> the phone, not just ON it. Think DoorDash, Uber, Starbucks. You pay more because you're getting 2 real apps (iPhone + Android) + we handle App Store submission + it can do things a website physically can't: tap phone to pay with NFC, connect to Bluetooth printers/scales, use Face ID to login, run in background tracking delivery driver.</p>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">Most businesses don't need that Day 1. That's why we say <span className="text-white">start PWA, you own the code, and upgrade later — your customers + database carry over. No rebuild.</span></p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <h3 className="text-xl font-semibold mb-6">FAQ — what owners actually ask</h3>
          {faqs.map((f,i) => (
            <div key={i} className="border-b border-white/10 py-5">
              <button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full text-left flex justify-between gap-4">
                <span className="font-medium text-">{f.q}</span><span className="text-white/40">{openFaq===i?"−":"+"}</span>
              </button>
              {openFaq===i && <p className="mt-3 text-sm text-white/60 leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
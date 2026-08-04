"use client"

import { useState } from 'react';
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
    { q: "Will it replace my existing website?", a: "It IS your website, supercharged. Same URL, same SEO. We upgrade it to be installable and offline-ready. No need to manage two properties." },
    { q: "Do customers need to go to the App Store?", a: "No. They visit your site and get a prompt to 'Add to Home Screen'. Two taps and your icon is on their phone. If you want App Store presence for discovery, we can publish native alongside it." },
    { q: "How long does it take?", a: "7-14 days from kickoff to live PWA for most local businesses. Native apps are 3-6 months." },
    { q: "Do I own the code?", a: "Yes. Full source, no lock-in, host anywhere. Upon final payment you get the repo." },
    { q: "What about iPhone?", a: "PWAs work great on iPhone now. Apple added full support in iOS 16.4+ including push notifications. 97%+ of phones support PWAs. We test on real iPhones." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#08080C] text-white antialiased overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top- left-1/2 -translate-x-1/2 w- h- bg-[radial-gradient(ellipse_at_center,_rgba(120,80,255,0.18),transparent_60%)]" />
        <div className="absolute top- -right-96 w- h- bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12),transparent_60%)]" />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="inline-flex text- tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">PWA Facts</div>
        <h1 className="mt-4 text- md:text- font-semibold tracking-tight leading-[0.95]">PWAs give you the best of both worlds: <span className="text-white/40">the reach of the web with the experience of a native app.</span></h1>
        <p className="mt-4 max-w-2xl text-white/60">For most local businesses, it's faster, cheaper, and easier to maintain than a traditional native app — without sacrificing performance. And when you need full native power, we ship that too.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {benefits.map(b => (
            <div key={b.title} className="rounded- border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${b.accent} grid place-items-center`}>
                <b.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-white/60">{b.desc}</p>
              <div className="mt-3 text- px-2.5 py-1 rounded-full bg-violet-500/15 border border-violet-500/20 text-violet-200 inline-block">{b.impact}</div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 rounded- border border-white/10 bg-white/[0.03] p-6 overflow-x-auto">
          <h3 className="font-semibold mb-4">Website vs PWA vs Native App</h3>
          <table className="w-full text-sm">
            <thead className="text-white/40 text-xs"><tr><th className="text-left py-2">Feature</th><th>Website</th><th className="text-violet-300">PWA</th><th>Native</th></tr></thead>
            <tbody className="text-white/70">
              <tr className="border-t border-white/10"><td className="py-2">Installable</td><td>❌</td><td className="text-white">✅</td><td>✅</td></tr>
              <tr className="border-t border-white/10"><td className="py-2">Offline</td><td>❌</td><td className="text-white">✅</td><td>✅</td></tr>
              <tr className="border-t border-white/10"><td className="py-2">Push</td><td>❌</td><td className="text-white">✅</td><td>✅</td></tr>
              <tr className="border-t border-white/10"><td className="py-2">App Store Needed?</td><td>No</td><td>No</td><td>Yes + Approval</td></tr>
              <tr className="border-t border-white/10"><td className="py-2">Typical Cost</td><td>$800-1.5k</td><td className="text-white font-semibold">$1.5k-4k</td><td>$15k-80k+</td></tr>
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl">
          <h3 className="text- font-semibold mb-6">FAQ — what owners actually ask</h3>
          {faqs.map((f,i) => (
            <div key={i} className="border-b border-white/10 py-4">
              <button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full text-left flex justify-between gap-4">
                <span className="font-medium">{f.q}</span><span>{openFaq===i?"−":"+"}</span>
              </button>
              {openFaq===i && <p className="mt-3 text-sm text-white/60 leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
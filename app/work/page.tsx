"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

const projects = [
  {
    name: "NativeBridge",
    type: "Native Android App • Marketplace + Escrow + Stripe",
    tier: "Native - $5k+",
    tierColor: "from-blue-500 to-cyan-400",
    desc: "My flagship. On-demand marketplace: post a job and get work done in minutes, not days. Supports tech (software dev, IT, web/mobile, automation, design, content, data) to everyday remote jobs. Built-in protections: clients review & approve before payout, workers submit files/URLs, direct in-app chat, job tracking, secure escrow via Stripe.",
    bullets: ["Real-time online/offline job search", "Escrow + Stripe Connect - payouts enabled", "File/URL submissions + direct messaging", "You own the DB, users, and revenue"],
    link: "https://play.google.com/store/apps/details?id=com.sylo777.nativebridgeproject",
    images: [
      "/work-images/nativebridge-1.webp",
      "/work-images/nativebridge-2.webp",
      "/work-images/nativebridge-3.webp",
      "/work-images/nativebridge-4.webp"
    ],
    liveLabel: "Live on Play Store →"
  },
  {
    name: "Barber World",
    type: "Native Android App • Booking Platform for Barbers",
    tier: "Native - $5k+",
    tierColor: "from-violet-500 to-fuchsia-500",
    desc: "Booking platform built for barbers, not generic Calendly. For independent barbers + multi-chair shops. Client search by City/State or ZIP, shop profiles, services + pricing, photo gallery, verified reviews, 24/7 booking without phone calls, appointment management, client DB + in-app messaging. Global expansion live.",
    bullets: ["City/ZIP + global search", "Profiles with gallery, services, reviews", "Smart 24/7 booking - no phone tag"],
    link: "https://play.google.com/store/apps/details?id=com.yourcompany.barberworld",
    images: [
      "/work-images/barber-1.webp",
      "/work-images/barber-2.webp",
      "/work-images/barber-3.webp",
      "/work-images/barber-4.webp"
    ],
    liveLabel: "Live on Play Store →"
  }
];

export default function WorkPage() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', () => setIsInstalled(true));
    // @ts-ignore
    if (window.matchMedia('(display-mode: standalone)').matches) setIsInstalled(true);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-white antialiased overflow-hidden">
      {/* glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-96 left-1/2 -translate-x-1/2 w- h- bg-[radial-gradient(ellipse_at_center,_rgba(120,80,255,0.18),transparent_60%)]" />
        <div className="absolute top-0 -right-96 w- h- bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12),transparent_60%)]" />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <Link href="/" className="inline-flex mb-8 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition text-sm">
          ← Back Home
        </Link>

        {/* THIS SITE IS A PWA BANNER */}
        <div className="relative rounded- border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-slate-900/50 to-violet-500/10 p-6 md:p-8 backdrop-blur overflow-hidden">
          <div className="absolute top-0 left-0 w-full h- bg-gradient-to-r from-blue-500 to-violet-500" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text- tracking-widest uppercase text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-3">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Live Demo — This Site IS a PWA
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                You&apos;re looking at one. <span className="text-white/50">Try it right now.</span>
              </h2>
              <p className="mt-3 text-sm md:text- text-white/60 leading-relaxed max-w-xl">
                No App Store. No download wait. On Android: tap Install below. On iPhone: tap Share → Add to Home Screen.
                It installs like a real app, works offline, and opens in 1 second. This is what we build for clients starting at $750.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              {isInstalled? (
                <div className="inline-flex h-12 px-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold items-center justify-center">
                  ✓ App Installed
                </div>
              ) : (
                <button
                  onClick={handleInstall}
                  className="inline-flex h-12 px-8 rounded-xl bg-white text-black font-semibold text- items-center justify-center hover:bg-slate-200 transition active:scale-95 shadow-lg shadow-white/10"
                >
                  {deferredPrompt? "Install This Site Like An App →" : "Add to Home Screen: Share → Add"}
                </button>
              )}
              <p className="text- text-white/40 text-center md:text-left">
                {deferredPrompt? "PWA install ready" : "iPhone: Use Safari Share menu"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="inline-flex text-xs tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">Work — Shipped</div>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[0.95]">Native apps prove we can ship.<br/><span className="text-white/40">PWAs are the easy part.</span></h1>
          <p className="mt-4 max-w-2xl text-white/60 text- leading-relaxed">
            Most PWA sellers never shipped native. We have 2 live Android apps with payments, chat, real-time search, and user accounts.
            If we can build this, your $750-$2,500 PWA is simple. You own 100% of code + DB.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          {projects.map(proj => (
            <div key={proj.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur hover:border-white/15 transition">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl md:text-2xl font-semibold">{proj.name}</h2>
                <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${proj.tierColor} text-white font-medium`}>{proj.tier}</span>
                <span className="text-xs text-white/40">{proj.type}</span>
              </div>
              <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-3xl">{proj.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {proj.bullets.map(b => (<span key={b} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70">{b}</span>))}
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {proj.images.map(img => (
                  <div key={img} className="aspect-[9/19.5] rounded-xl overflow-hidden bg-black border border-white/10 relative group">
                    <img src={img} alt={proj.name} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition duration-300" />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a href={proj.link} target="_blank" className="inline-flex px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition">
                  {proj.liveLabel}
                </a>
                <span className="inline-flex px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 text-xs items-center">
                  Built in React Native • Live on Play Store
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="text-lg font-semibold">This could be your business in 7-14 days.</h3>
          <p className="mt-2 text-sm text-white/50">Start with a PWA ($750-$2,500), own everything, upgrade to native later — DB + customers carry over.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/pricing" className="px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] font-semibold text-sm transition">See Pricing</Link>
            <Link href="/#services" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-sm transition">What We Build</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
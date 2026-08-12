"use client"

import Link from 'next/link';
import { useState } from 'react';
import { FiCheck, FiArrowRight, FiSmartphone, FiLayers, FiServer, FiHelpCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function PricingPage() {

  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (name: string) => setExpanded(expanded === name? null : name);

  const pwaPlans = [
    {
      name: "Starter PWA",
      tagline: "I just need a fast, professional site that works like an app",
      price: "$750",
      sub: "One-time",
      desc: "Your website, but built as an app. Fast, installable, and you own everything from day one.",
      features: [
        "3-5 pages (Home, Services/Menu, About, Contact)",
        "Fully responsive — iPhone, Android, tablet & desktop",
        "Installable to home screen as an app (PWA)",
        "Custom app icon + splash screen with your logo",
        "Favicon — icon in browser tab",
        "Tap-to-call button — tap to dial from phone",
        "Get Directions button — opens Google/Apple Maps",
        "Share button — share your business via text",
        "Embedded Google Map on contact page",
        "Domain connection — we connect your domain",
        "SSL / HTTPS / Lock Icon — secured & auto-renews",
        "Basic SEO — Google title, description, social share image",
        "Speed optimized — compressed images, <1 sec load",
        "Offline fallback page — shows when no signal",
        "Photo gallery — up to 10 photos",
        "Contact form that emails you + you own code/GitHub Day 1",
      ],
      shortCount: 6,
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth PWA",
      tagline: "I want to get more customers and keep them coming back",
      price: "$1,500",
      sub: "One-time",
      desc: "Most businesses choose this. Turns visitors into repeat customers.",
      features: [
        "Everything in Starter PWA + GitHub ownership",
        "Push Notifications — send offers like a text (even when app closed)",
        "Simple Bookings — lead form: customer requests time, you confirm manually",
        "Contact forms save to your database (MongoDB Atlas) — never lose a lead",
        "Email + Database double backup for every lead",
        "Basic Analytics Dashboard — views, leads, where they came from",
        "Editable photo galleries — add/remove photos yourself",
        "Coupons / Promo codes you can create + send via push notification",
        "Reviews Section — pull Google reviews or on-site reviews",
        "QR code for table/menu/storefront — scans to open app",
        "Google Business Profile sync — hours, address, reviews stay consistent",
        "Social links — Instagram, Facebook, TikTok linked",
        "Database setup — MongoDB Atlas + daily backups — you own the data",
      ],
      shortCount: 6,
      cta: "Most Businesses Choose This",
      popular: true
    },
    {
      name: "Pro Business System",
      tagline: "I want my business to RUN on this app",
      price: "$2,500+",
      sub: "One-time",
      desc: "Your business on autopilot — customers book their own appointments, pay online, reschedule & cancel themselves. No phone tag.",
      features: [
        "Everything in Growth PWA — Starter + Growth + full GitHub + database ownership",
        "REAL Bookings: live calendar, no double-booking, auto-confirm",
        "Real-time read/write — fetches availability from DB, blocks slot instantly",
        "Prevents double-booking — checks staff hours + service duration",
        "Staff assignment — assigns to correct staff member automatically",
        "Payments — Stripe deposits/full payments, refunds from dashboard",
        "Customer self-service — reschedule/cancel themselves",
        "Auto email/SMS reminders — reduces no-shows",
        "Class Scheduling: recurring classes, capacity limits, waitlists, check-in list",
        "Full Admin Dashboard: edit menu/prices/photos/staff/hours from your phone",
        "View all customers, bookings, sales in one place — no code",
        "User logins / Customer accounts — see history, 1-tap rebook",
        "GPS + location: delivery tracking, field staff location, store locator",
        "Loyalty points — Buy 9 get 10th free logic",
        "Inventory tracking for products",
        "Daily automated backups + full DB export anytime — you own everything",
      ],
      shortCount: 6,
      cta: "Build My System",
      popular: false
    },
  ];

  const nativePlan = {
    name: "Native iOS & Android Apps",
    price: "Starting at $5,000",
    sub: "One-time — App Store & Play Store",
    desc: "Want a real app in the App Store, or want to upgrade your existing PWA to native? We build true native apps for iOS & Android from one codebase. You own everything.",
    features: [
      "iOS + Android apps from one codebase",
      "Listed in Apple App Store & Google Play Store",
      "Full access to phone features: camera, GPS, push, biometrics, offline",
      "Faster, smoother native performance",
      "App Store submission + approvals handled",
      "You own the source, database & GitHub Day 1",
    ],
    howItWorks: "Start with native from day one, or start with a PWA to launch fast and upgrade to native later — your data and code carry over. Base native build is $5,000 for a standard business app. Complex features are quoted on top. Fixed price upfront."
  };

  return (
    <div className="min-h-screen bg-slate-950 rune-pattern text-white antialiased overflow-x-hidden">
      <div className="container mx-auto px-6 py-6 relative z-50">
        <Link href="/" className="inline-flex px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 font-medium transition text-sm">
          ← Back Home
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 pb-20 pt-4 md:pt-10 relative z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute top-20 right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex text-xs tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">Pricing</div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">Simple pricing. <span className="text-white/40">You own it all.</span></h1>
          <p className="mt-4 text-white/60 max-w-2xl text-lg leading-relaxed">No monthly rent for your software. One-time build, you own the GitHub, code, and database. Hosting is optional.</p>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <FiSmartphone className="w-5 h-5 text-violet-300" />
            <h2 className="text-xl font-semibold">Progressive Web Apps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 items-start">
            {pwaPlans.map(plan => {
              const isOpen = expanded === plan.name;
              const visibleFeatures = isOpen? plan.features : plan.features.slice(0, plan.shortCount);
              return (
                <div key={plan.name} className={`rounded-2xl border p-6 backdrop-blur relative flex flex-col ${plan.popular? 'border-blue-500/50 bg-blue-500/10' : 'border-slate-800 bg-slate-900/50'}`}>
                  {plan.popular && <div className="absolute -top-3 right-6 text- tracking-widest bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-1 rounded-full text-white shadow-lg shadow-blue-500/20">MOST POPULAR</div>}
                  <h3 className="font-semibold text-lg">{plan.name}</h3>
                  <p className="mt-2 text- leading-snug text-violet-300 italic">"{plan.tagline}"</p>
                  <div className="mt-4 flex items-baseline gap-2"><span className="text-3xl font-semibold">{plan.price}</span><span className="text-sm text-white/40">{plan.sub}</span></div>
                  <p className="mt-3 text- text-white/60 leading-relaxed">{plan.desc}</p>
                  <ul className="mt-6 space-y-2.5 text-">
                    {visibleFeatures.map(f => (<li key={f} className="flex gap-2 text-white/80"><FiCheck className="w-4 h-4 text-violet-300 mt-0.5 shrink-0" /><span>{f}</span></li>))}
                  </ul>

                  <div className="mt-auto pt-8 space-y-3">
                    <Link href="/contact" className={`w-full inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition ${plan.popular? 'bg-white text-black hover:bg-white/90' : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'}`}>{plan.cta} <FiArrowRight className="w-4 h-4" /></Link>
                    <button onClick={() => toggle(plan.name)} className="w-full inline-flex justify-center items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-700 bg-transparent hover:bg-slate-800/50 text-white/70 transition">
                      {isOpen? <>Less Info <FiChevronUp className="w-4 h-4" /></> : <>More Info <FiChevronDown className="w-4 h-4" /></>}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4"><FiHelpCircle className="w-5 h-5 text-violet-300" /><h4 className="font-semibold">Simple vs Real Bookings — What's the difference?</h4></div>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-5">
                <div className="font-medium text-white">Simple Booking (Growth)</div>
                <p className="text-white/50 text-xs mt-1">Lead form — you confirm manually</p>
                <ul className="mt-3 space-y-1.5 text-white/70">
                  <li>• Customer requests a time → saves pending to DB</li>
                  <li>• Emails you + shows in dashboard list</li>
                  <li>• You call back to confirm — can double-book</li>
                </ul>
              </div>
              <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-5">
                <div className="font-medium text-white">Real Booking + Class Scheduling (Pro)</div>
                <p className="text-white/50 text-xs mt-1">Full automation — runs itself</p>
                <ul className="mt-3 space-y-1.5 text-white/70">
                  <li>• Live calendar — fetches real availability from DB, blocks instantly</li>
                  <li>• Prevents double-booking, assigns staff, checks hours</li>
                  <li>• Takes payment/deposit, waitlists, auto-reminders, customer self-reschedule</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6"><FiLayers className="w-5 h-5 text-blue-300" /><h2 className="text-xl font-semibold">Native Mobile Apps</h2><span className="text-sm text-white/40 hidden md:inline">— for iOS & Android</span></div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{nativePlan.name}</h3>
              <div className="mt-2 flex items-baseline gap-2"><span className="text-3xl font-semibold">{nativePlan.price}</span><span className="text-sm text-white/40">{nativePlan.sub}</span></div>
              <p className="mt-3 text-sm text-white/60 max-w-xl leading-relaxed">{nativePlan.desc}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">{nativePlan.features.map(f => (<div key={f} className="flex gap-2 text-white/80"><FiCheck className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />{f}</div>))}</div>
              <div className="mt-6 rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 text-sm">
                <div className="font-medium">How it works:</div>
                <p className="mt-1 text-white/60 leading-relaxed">{nativePlan.howItWorks}</p>
              </div>
            </div>
            <div className="md:w-72 rounded-xl bg-slate-800/50 border border-slate-700/50 p-5 text-sm shrink-0 h-fit">
              <div className="font-medium">Popular add-ons:</div>
              <ul className="mt-3 space-y-2 text-white/60">
                <li>• QR Table Ordering: $300</li>
                <li>• Loyalty / Coupons: $250</li>
                <li>• GPS Delivery Tracking: $400</li>
                <li>• Real-time Chat: $600+</li>
                <li>• Inventory / Staff Manager: $500+</li>
              </ul>
              <p className="mt-4 text-xs text-white/30">Most native apps land $5k-9k all-in. Fixed quote upfront.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6"><FiServer className="w-5 h-5 text-emerald-300" /><h2 className="text-xl font-semibold">Hosting + Business Email</h2><span className="text-sm text-white/40 hidden md:inline">— optional, but we handle everything</span></div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 md:p-10 backdrop-blur">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">Managed Hosting — $100/mo</h3>
                <p className="mt-1 text-emerald-300 text-sm font-medium">Business email (you@yourbusiness.com) included — up to 5 accounts</p>
                <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xl">Your code lives on GitHub forever — that's your ultimate backup. You can take it and host it yourself for free anytime.</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex gap-2.5"><FiCheck className="w-4 h-4 text-emerald-300 mt-0.5 shrink-0" /><span className="text-white/80"><span className="font-medium text-white">Code = GitHub:</span> Safely stored Day 1.</span></div>
                  <div className="flex gap-2.5"><FiCheck className="w-4 h-4 text-emerald-300 mt-0.5 shrink-0" /><span className="text-white/80"><span className="font-medium text-white">Daily DB Backups:</span> Customers/bookings backed up nightly.</span></div>
                  <div className="flex gap-2.5"><FiCheck className="w-4 h-4 text-emerald-300 mt-0.5 shrink-0" /><span className="text-white/80"><span className="font-medium text-white">SSL / Lock Icon:</span> Secured & auto-renews.</span></div>
                  <div className="flex gap-2.5"><FiCheck className="w-4 h-4 text-emerald-300 mt-0.5 shrink-0" /><span className="text-white/80"><span className="font-medium text-white">Business Email:</span> Gmail setup, no spam folder.</span></div>
                </div>
              </div>
              <div className="md:w-64 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-5 text-center h-fit">
                <div className="text-3xl font-semibold">$100<span className="text-base font-normal text-white/40">/mo</span></div>
                <p className="text-xs text-white/50 mt-1">Hosting + email + backups + SSL</p>
                <Link href="/contact" className="mt-5 w-full inline-flex justify-center items-center gap-2 bg-white text-black px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/90 transition">Host With Us <FiArrowRight className="w-4 h-4" /></Link>
                <p className="mt-3 text- text-white/30">Or self-host free — you own the code.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-12">© 2026 Hextech Software. All rights reserved.</p>
      </section>
    </div>
  )
}
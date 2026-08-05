"use client"

import Link from 'next/link';
import { FiCheck, FiArrowRight, FiSmartphone, FiLayers, FiServer, FiMail, FiDatabase } from 'react-icons/fi';

export default function PricingPage() {

  const pwaPlans = [
    {
      name: "Starter PWA",
      price: "$750",
      sub: "One-time",
      desc: "Perfect for restaurants, shops, services — gets you installable & fast.",
      features: [
        "Installable to home screen",
        "Lightning fast (<1s load)",
        "Mobile + desktop responsive",
        "Domain + SSL setup",
        "You own the code",
      ],
      cta: "Start with PWA",
      popular: false
    },
    {
      name: "Growth PWA",
      price: "$1,500",
      sub: "One-time",
      desc: "Most popular. Everything in Starter + tools that drive revenue.",
      features: [
        "Everything in Starter",
        "Push Notifications",
        "Offline mode (menu/hours)",
        "Contact forms + analytics",
        "Google Business integration",
        "Basic database (leads/bookings)",
      ],
      cta: "Most Businesses Choose This",
      popular: true
    },
    {
      name: "Pro Business System",
      price: "$2,500+",
      sub: "One-time",
      desc: "Full business platform. Custom database, dashboards, automation.",
      features: [
        "Everything in Growth",
        "Custom database & dashboard",
        "User accounts / logins",
        "Payments / booking / CRM",
        "Admin panel you control",
      ],
      cta: "Build My System",
      popular: false
    },
  ];

  const nativeAddOns = [
    { name: "Push Notifications", price: "$150", note: "Included in Growth+" },
    { name: "Offline Mode", price: "$200" },
    { name: "Booking / Scheduling", price: "$300 - $600" },
    { name: "Payments (Stripe)", price: "$400" },
    { name: "User Accounts / Auth", price: "$350" },
    { name: "Custom Dashboard / Admin", price: "$500+" },
    { name: "Multi-location / Multi-user", price: "$500+" },
    { name: "Complex Database / CRM", price: "Custom" },
  ];

  const nativePlan = {
    name: "Native Mobile App",
    price: "Starting at $5,000",
    sub: "One-time — iOS & Android",
    desc: "Real native apps on Play Store & App Store. One codebase, both stores. You own everything.",
    features: [
      "iOS + Android from one codebase",
      "Published to both app stores",
      "Everything PWA has + native power",
      "Push, camera, GPS, Bluetooth, etc",
      "App Store submission handled",
      "You own the source + database",
    ]
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-white antialiased overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top- left-1/2 -translate-x-1/2 w- h- bg-[radial-gradient(ellipse_at_center,_rgba(120,80,255,0.18),transparent_60%)]" />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex text- tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">Pricing</div>
          <h1 className="mt-6 text- md:text- font-semibold tracking-tight leading-[0.95]">
            Simple pricing. <span className="text-white/40">You own it all.</span>
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl">
            No monthly rent for your software. One-time build cost, you own the code, database, and future. 
            Hosting + email is optional — stay or leave anytime.
          </p>
        </div>

        {/* PWA Pricing */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <FiSmartphone className="w-5 h-5 text-violet-300" />
            <h2 className="text-xl font-semibold">Progressive Web Apps</h2>
            <span className="text-sm text-white/40">— most businesses start here</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {pwaPlans.map(plan => (
              <div key={plan.name} className={`rounded-2xl border p-6 backdrop-blur relative ${plan.popular ? 'border-violet-500/50 bg-violet-500/10' : 'border-white/10 bg-white/[0.04]'}`}>
                {plan.popular && <div className="absolute -top-3 right-6 text-xs bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 rounded-full">MOST POPULAR</div>}
                <h3 className="font-semibold">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  <span className="text-sm text-white/40">{plan.sub}</span>
                </div>
                <p className="mt-3 text-sm text-white/60">{plan.desc}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {plan.features.map(f => (
                    <li key={f} className="flex gap-2 text-white/80"><FiCheck className="w-4 h-4 text-violet-300 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`mt-8 w-full inline-flex justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition ${plan.popular ? 'bg-white text-black hover:bg-white/90' : 'bg-white/10 hover:bg-white/15 border border-white/10'}`}>
                  {plan.cta} <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* PWA Add-ons */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="font-medium">PWA Add-Ons</h4>
            <p className="text-sm text-white/40 mt-1">If your project needs more than base, add only what you need.</p>
            <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {nativeAddOns.map(a => (
                <div key={a.name} className="flex justify-between border-b border-white/5 py-2">
                  <span className="text-white/70">{a.name}</span>
                  <span className="text-white/40">{a.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/30">Example: Starter PWA ($750) + Booking ($400) + Payments ($400) = $1,550 total. Still way under agency pricing.</p>
          </div>
        </div>

        {/* Native Pricing */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <FiLayers className="w-5 h-5 text-blue-300" />
            <h2 className="text-xl font-semibold">Native Mobile Apps</h2>
            <span className="text-sm text-white/40">— Play Store & App Store</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <h3 className="font-semibold text-lg">{nativePlan.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">{nativePlan.price}</span>
                <span className="text-sm text-white/40">{nativePlan.sub}</span>
              </div>
              <p className="mt-3 text-sm text-white/60 max-w-xl">{nativePlan.desc}</p>
              
              <div className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">
                {nativePlan.features.map(f => (
                  <div key={f} className="flex gap-2 text-white/80"><FiCheck className="w-4 h-4 text-blue-300 mt-0.5" />{f}</div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-white/[0.04] border border-white/10 p-4 text-sm">
                <div className="font-medium">How native pricing works:</div>
                <p className="mt-1 text-white/60">Base build is $5,000 for a standard app. Complex features are added on top — e.g., custom CRM ($800+), real-time chat ($600+), complex booking ($700+). We give you a fixed quote upfront. No surprises.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h4 className="font-medium">Native Add-Ons</h4>
              <div className="mt-4 space-y-2.5 text-sm">
                <div className="flex justify-between border-b border-white/5 py-2"><span className="text-white/70">Advanced Push / Segments</span><span className="text-white/40">$300</span></div>
                <div className="flex justify-between border-b border-white/5 py-2"><span className="text-white/70">In-App Purchases</span><span className="text-white/40">$500</span></div>
                <div className="flex justify-between border-b border-white/5 py-2"><span className="text-white/70">Maps / GPS / Location</span><span className="text-white/40">$400</span></div>
                <div className="flex justify-between border-b border-white/5 py-2"><span className="text-white/70">Real-time Chat</span><span className="text-white/40">$600+</span></div>
                <div className="flex justify-between border-b border-white/5 py-2"><span className="text-white/70">Admin Dashboard</span><span className="text-white/40">$800+</span></div>
                <div className="flex justify-between py-2"><span className="text-white/70">Complex Backend</span><span className="text-white/40">Custom</span></div>
              </div>
              <p className="mt-4 text-xs text-white/30">Most native apps land $5k-9k all-in.</p>
            </div>
          </div>
        </div>

        {/* Hosting & Email */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <FiServer className="w-5 h-5 text-emerald-300" />
            <h2 className="text-xl font-semibold">Hosting & Business Email</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <FiServer className="w-5 h-5 text-white/60" />
              <h3 className="mt-4 font-semibold">Hosting</h3>
              <div className="mt-2 flex items-baseline gap-1"><span className="text-2xl font-semibold">$100</span><span className="text-white/40 text-sm">/mo</span></div>
              <p className="mt-2 text-sm text-white/60">Fast, secure, managed hosting. SSL, CDN, backups, updates included.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-emerald-300" /> Vercel / Netlify edge hosting</li>
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-emerald-300" /> Daily backups</li>
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-emerald-300" /> SSL + CDN</li>
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-emerald-300" /> We handle it all</li>
              </ul>
              <p className="mt-4 text-xs text-white/30">Or self-host — you own the code, host anywhere.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <FiMail className="w-5 h-5 text-white/60" />
              <h3 className="mt-4 font-semibold">Business Email</h3>
              <div className="mt-2 flex items-baseline gap-1"><span className="text-2xl font-semibold">$6</span><span className="text-white/40 text-sm">/user/mo</span></div>
              <p className="mt-2 text-sm text-white/60">Professional you@yourbusiness.com email. Powered by Google Workspace or Resend.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-emerald-300" /> you@yourdomain.com</li>
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-emerald-300" /> Gmail interface</li>
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-emerald-300" /> We set up DNS/SPF/DKIM</li>
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-emerald-300" /> Spam filtering</li>
              </ul>
              <p className="mt-4 text-xs text-white/30">We can also set up bulk transactional email via Resend.</p>
            </div>

            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6">
              <FiDatabase className="w-5 h-5 text-violet-300" />
              <h3 className="mt-4 font-semibold">Bundle & Save</h3>
              <div className="mt-2 flex items-baseline gap-1"><span className="text-2xl font-semibold">$125</span><span className="text-white/40 text-sm">/mo</span></div>
              <p className="mt-2 text-sm text-white/60">Hosting + up to 5 business email accounts. Everything managed.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-violet-300" /> Everything in both plans</li>
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-violet-300" /> Domain management included</li>
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-violet-300" /> Priority support</li>
                <li className="flex gap-2"><FiCheck className="w-4 h-4 text-violet-300" /> Best for local businesses</li>
              </ul>
              <Link href="/contact" className="mt-6 w-full inline-flex justify-center gap-2 bg-white text-black px-4 py-3 rounded-xl text-sm font-medium">
                Get Bundle <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Footer */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <h3 className="font-semibold">Not sure what you need?</h3>
          <p className="mt-2 text-sm text-white/60 max-w-xl mx-auto">Book a 30-min call. We’ll map your idea, give you a fixed price, and tell you exactly what you’ll own. No salesy BS.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 rounded-xl text-sm font-medium">
            Book Free Call <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>
    </div>
  )
}
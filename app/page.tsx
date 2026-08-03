import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 rune-pattern text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg"></div>
          <span className="text-2xl font-bold">Hextech Software</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-slate-300">
          <Link href="#services" className="hover:text-white transition">What We Build</Link>
          <Link href="#work" className="hover:text-white transition">Work</Link>
          <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>

        <a href="tel:+1234567890" className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hextech-glow font-medium">
          Call Now
        </a>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-20 right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Software You Actually Own.<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Built For Your Business.
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Stop renting your business from no-code platforms. We build custom software where 
            <span className="text-white font-semibold"> you own the code, the database, and the future</span>. 
            No monthly lock-in, no feature limits, no platform shutting down on you.
          </p>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
            Unlike one-click app builders that give you a generic wrapper, we build real Progressive Web Apps (PWAs) 
            and native apps that install to the home screen, work offline, and do exactly what your business needs.
          </p>

          {/* Price Anchor Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-purple-500/30 rounded-full px-5 py-2.5 backdrop-blur">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-300">Custom PWAs starting at <span className="text-white font-bold">$750</span> — you own everything, hosting from $99/mo</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <a 
              href="https://calendly.com/YOUR-LINK/15min"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hextech-glow font-semibold text-lg"
            >
              Book Free Scope Call →
            </a>
            <a 
              href="#services"
              className="px-8 py-4 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 font-semibold text-lg"
            >
              See What We Build
            </a>
          </div>

          {/* What We Can Do Grid */}
          <div id="services" className="grid md:grid-cols-3 gap-6 text-left mt-20">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur">
              <h3 className="text-purple-400 font-bold mb-3">For Your Customers</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-purple-400">•</span> Installable PWA — Add to Home Screen like a real app</li>
                <li className="flex gap-2"><span className="text-purple-400">•</span> Client portals with login, profiles & dashboards</li>
                <li className="flex gap-2"><span className="text-purple-400">•</span> Online booking, scheduling & payments</li>
                <li className="flex gap-2"><span className="text-purple-400">•</span> Push notifications that actually get seen</li>
                <li className="flex gap-2"><span className="text-purple-400">•</span> Works offline — no signal needed</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur">
              <h3 className="text-blue-400 font-bold mb-3">For Your Operations</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2"><span className="text-blue-400">•</span> Camera capture, file & photo uploads</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Custom forms, contracts & e-signatures</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Real-time messaging & chat built-in</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> GPS tracking, maps & location features</li>
                <li className="flex gap-2"><span className="text-blue-400">•</span> Automated workflows & reminders</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur">
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

          <p className="text-center text-slate-500 text-sm mt-10">
            Built with React, Next.js, React Native, Node.js & AI — modern stack that scales with you.
          </p>
        </div>
      </section>
    </main>
  )
}
"use client"
import Link from 'next/link'
import Script from 'next/script'

export default function BookPage() {
  return (
    <main className="min-h-screen bg-slate-950 rune-pattern text-white">
      {/* Nav - matches your landing */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg"></div>
          <span className="text-2xl font-bold">Hextech Software</span>
        </Link>
        
        <Link href="/" className="px-5 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 font-medium transition">
          ← Back Home
        </Link>
      </nav>

      {/* Calendly Section */}
      <section className="container mx-auto px-6 py-12 md:py-20 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-20 right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-purple-500/30 rounded-full px-5 py-2.5 backdrop-blur mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-300">Free 30-Minute Strategy Call</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Custom App</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              No pitch. No pressure. Tell me about your business and I'll tell you if a PWA makes sense for your timeline + budget. If not, I'll tell you what to use instead.
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-2 md:p-4 backdrop-blur">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/anthonybell67-ab/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Can't find a time that works? Email me directly at anthony@hextech.software
          </p>
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </main>
  )
}
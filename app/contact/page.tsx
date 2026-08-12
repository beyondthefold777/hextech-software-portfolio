"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const LOGO_SRC = "/rune_big_solid_blue_4k.png"
const LOGO_ALT = "Hextech Software"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 rune-pattern text-white">
      <nav className="container mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-5">
          <Image
            src={LOGO_SRC}
            alt={LOGO_ALT}
            width={112}
            height={112}
            className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
            priority
            unoptimized
          />
          <div className="flex items-center gap-5">
            <div className="w-px h-8 bg-slate-800" />
            <span className="text- font-semibold tracking-[-0.01em] text-white">
              Hextech Software
            </span>
          </div>
        </Link>

        <Link href="/" className="hidden md:inline-flex px-5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 font-medium transition">
          ← Back Home
        </Link>
        <Link href="/" className="md:hidden w-11 h-11 grid place-items-center rounded-full bg-slate-900 border border-slate-800">
          ←
        </Link>
      </nav>

      <section className="container mx-auto px-6 py-8 md:py-20 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute top-20 right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-blue-500/30 rounded-full px-5 py-2.5 backdrop-blur mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-300">Let's talk about your project</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get In
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Touch</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Not ready to book a call? Shoot me the details and I'll get back to you within 4 hours.
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 grid place-items-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Based In</div>
                  <p className="text-lg text-slate-300">Northampton, Massachusetts</p>
                  <p className="text-sm text-slate-400 mt-1">Serving clients worldwide</p>
                </div>
              </div>
            </div>

            <p className="text-center md:text-left text-slate-500 text-sm mt-8">
              © 2026 Hextech Software. All rights reserved.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">Send a message</h2>

            {status === 'success'? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full grid place-items-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Message sent!</h3>
                <p className="text-slate-400 text-sm">I'll get back to you within 4 business hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-blue-400 hover:text-blue-300"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone <span className="text-slate-500">(optional)</span></label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">What's your project?</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your business and what you're trying to build..."
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-sm text-red-400">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-4 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] font-semibold text-lg transition shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading'? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
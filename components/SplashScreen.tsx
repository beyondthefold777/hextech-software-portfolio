"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Only show when launched as PWA (standalone) OR first visit
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone
    const hasSeenSplash = sessionStorage.getItem('hextech-splash-seen')

    if (isStandalone ||!hasSeenSplash) {
      setShow(true)
      sessionStorage.setItem('hextech-splash-seen', '1')
      const timer = setTimeout(() => setShow(false), 1400)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black grid place-items-center animate-out fade-out duration-500">
      <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-700">
        <Image
          src="/rune_big_solid_blue_4k.png"
          alt="Hextech Software"
          width={160}
          height={160}
          className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          priority
        />
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <p className="text-xs tracking-[0.2em] uppercase text-white/40">Hextech Software</p>
      </div>
    </div>
  )
}
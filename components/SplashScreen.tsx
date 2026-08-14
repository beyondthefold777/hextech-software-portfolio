"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.matchMedia('(display-mode: fullscreen)').matches ||
      (window.navigator as any).standalone === true

    if (!isStandalone) return

    setShow(true)
    const t = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(t)
  }, [])

  if (!mounted ||!show) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center w-screen h-">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 blur- bg-blue-500/20 rounded-full" />
          <Image
            src="/rune_big_solid_blue_4k.png"
            alt="Hextech"
            width={220}
            height={220}
            className="relative w- h- object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            priority
          />
        </div>
        <div className="mt-10 mb-6 w- h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <p className="text- tracking-[0.32em] font-light text-white/50 uppercase">
          HEXTECH SOFTWARE
        </p>
      </div>
    </div>
  )
}
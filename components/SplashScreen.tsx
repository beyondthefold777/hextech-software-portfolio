"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2500) // stays 2.5s so you actually see it
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
      {/* This div forces black behind Samsung nav bar area */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 blur- bg-blue-500/20 rounded-full" />
          <Image
            src="/rune_big_solid_blue_4k.png"
            alt="Hextech"
            width={220}
            height={220}
            className="relative w- h- md:w- md:h- object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
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
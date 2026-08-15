"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Change this number = how long you want it to hold
    // 2000 = 2 seconds, 2500 = 2.5 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <div className="relative w-32 h-32 animate-pulse">
        <Image
          src="/rune_big_solid_blue_4k.png"
          alt="Hextech"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="mt-6 text-sm tracking-[0.3em] text-white/60">
        HEXTECH SOFTWARE
      </p>
    </div>
  );
}
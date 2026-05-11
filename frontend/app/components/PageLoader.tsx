'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function PageLoader() {
  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    // Short delay so user registers the brand moment
    const fadeTimer = setTimeout(() => setFading(true), 300)
    // Remove from DOM after transition completes
    const goneTimer = setTimeout(() => setGone(true), 900)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(goneTimer)
    }
  }, [])

  if (gone) return null

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-primary z-[99999] gap-10 transition-opacity duration-500 ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="w-40 md:w-56">
        <Image
          src="/assets/img/MennTEC_logo_827x473px.png"
          alt="MennTEC"
          width={224}
          height={128}
          priority
          className="w-full"
        />
      </div>

      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-tertiary" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent animate-spin" />
      </div>
    </div>
  )
}

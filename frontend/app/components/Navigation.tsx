'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* Background layer */}
      <div className="fixed top-0 left-0 w-full bg-primary z-[20000000]" />

      {/* Header */}
      <div className="fixed top-0 left-0 w-full bg-primary z-[20000001]">
        <div className="mx-auto px-[5.5vw] md:px-[2.5vw] py-6 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="block w-full max-w-[8rem] md:max-w-[14rem]">
            <Image
              src="/assets/img/MennTEC_logo_827x473px.png"
              alt="MennTEC Logo"
              width={224}
              height={128}
              priority
              className="w-full"
            />
          </Link>

          {/* Hamburger + Close — selbe Position, überblenden */}
          <div className="relative h-5 w-[1.875rem]">

            {/* Hamburger */}
            <button
              className={`menu-btn absolute inset-0 border-0 bg-none cursor-pointer transition-opacity duration-[250ms] ease ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              onClick={toggleMenu}
              aria-label="Menu öffnen"
            >
              <div className="menu-line-1 bg-[#414041] h-1 absolute right-0 rounded-full w-[1.56rem] top-0" />
              <div className="menu-line-2 bg-[#414041] h-1 absolute right-0 rounded-full w-[1.875rem] top-2" />
              <div className="menu-line-3 bg-[#414041] h-1 absolute right-0 rounded-full w-4 top-4" />
            </button>

            {/* Close — exakt dieselbe Größe & Position */}
            <button
              className={`absolute inset-0 border-0 p-0 bg-none cursor-pointer z-[77777778] transition-opacity duration-[250ms] ease ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onClick={toggleMenu}
              aria-label="Menu schließen"
            >
              <div className="bg-white h-1 rounded-full w-[1.5625rem] absolute top-1/2 rotate-45" />
              <div className="bg-white h-1 rounded-full w-[1.5625rem] absolute top-1/2 -rotate-45" />
            </button>
          </div>

          {/* Overlay menu — open: 250ms, close: 80ms (matches Angular @slide trigger) */}
          <div
            className="fixed top-0 left-0 right-0 w-full max-w-[100vw] h-full max-h-[100vh] z-[77777777] text-primary bg-nav overflow-auto"
            style={{
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: `transform ${isMenuOpen ? '250ms' : '80ms'} ease`,
            }}
          >
            {/* Menu items */}
            <nav>
              <ul className="mt-[15rem] text-center p-0 list-none">
                <li className="my-[0.7rem]">
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-primary text-[2.1rem] md:text-[2.7rem] font-bold uppercase hover:text-accent transition-all duration-[400ms]"
                  >
                    Home
                  </Link>
                </li>
                <li className="my-[0.7rem]">
                  <Link
                    href="/impressum"
                    onClick={closeMenu}
                    className="text-primary text-[2.1rem] md:text-[2.7rem] font-bold uppercase hover:text-accent transition-all duration-[400ms]"
                  >
                    Impressum
                  </Link>
                </li>
                <li className="my-[0.7rem]">
                  <Link
                    href="/datenschutz"
                    onClick={closeMenu}
                    className="text-primary text-[2.1rem] md:text-[2.7rem] font-bold uppercase hover:text-accent transition-all duration-[400ms]"
                  >
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

"use client"
// Needs to be a client component since it uses useState for the mobile menu toggle

import { useState } from "react"
import Link from "next/link"
import { NAV_LINKS } from "@/lib/constants"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-forest-deep px-8 md:px-16 py-6 relative">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-display text-xl text-offwhite">
          Julia Migwi
        </Link>

        {/* Desktop links, hidden on mobile */}
        <div className="hidden md:flex gap-8 font-body text-cream">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-burgundy-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button, visible only on mobile */}
        <button
          className="md:hidden text-offwhite"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown, only renders when isOpen is true */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-6 font-body text-cream">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-burgundy-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/timings", label: "Timings" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Dr. Mansoori Clinic Logo"
              width={48}
              height={48}
              className="rounded-full bg-white"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-opacity hover:opacity-80",
                  pathname === link.href ? "opacity-100" : "opacity-75"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:042989995"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium py-2 transition-opacity",
                    pathname === link.href ? "opacity-100" : "opacity-75"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:042989995"
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-lg text-sm font-medium mt-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

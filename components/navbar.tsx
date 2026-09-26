"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/charleslaishoots/",
      external: true,
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors"
        >
          Charles Lai
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {/* About */}
          <li>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </li>

          {/* Portfolio Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isPortfolioOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isPortfolioOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-background border border-border shadow-lg rounded-md overflow-hidden">
                <Link
                  href="/photography"
                  className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsPortfolioOpen(false)}
                >
                  Photography
                </Link>

                <Link
                  href="/videography"
                  className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsPortfolioOpen(false)}
                >
                  Videography
                </Link>
              </div>
            )}
          </li>

          {/* Contact */}
          <li>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </li>

          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com/charleslaishoots/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="px-6 py-4 flex flex-col gap-4">

            {/* About */}
            <li>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>

            {/* Portfolio */}
            <li>
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isPortfolioOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Portfolio Submenu */}
              {isPortfolioOpen && (
                <ul className="mt-3 ml-4 flex flex-col gap-3 border-l border-border pl-4">
                  <li>
                    <Link
                      href="/portfolio/photography"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsPortfolioOpen(false)
                      }}
                    >
                      Photography
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/portfolio/videography"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsPortfolioOpen(false)
                      }}
                    >
                      Videography
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/charleslaishoots/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Instagram
              </a>
            </li>

          </ul>
        </div>
      )}
    </header>
  )
}
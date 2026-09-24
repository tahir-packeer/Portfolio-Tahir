'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Code } from 'lucide-react'
import { NAV_LINKS } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      setIsOpen(false)
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50'
          : 'bg-transparent'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 text-slate-50 font-mono text-lg font-medium hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md px-2 py-1"
            aria-label="Go to homepage"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <Code className="h-5 w-5 text-sky-400" aria-hidden="true" />
            <span>TNP</span>
          </Link>

          <div className={cn('hidden md:flex items-center gap-8', isScrolled ? '' : '')}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-sky-400 hover:after:w-full after:transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-1 py-0.5"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-sky-400 transition-colors rounded-lg hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-md',
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="py-4 space-y-2 px-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800 rounded-lg transition-colors text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
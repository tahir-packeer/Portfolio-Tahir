'use client'

import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { CONTACT_INFO, HERO_CONTENT } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Footer() {
  // Blinking cursor animation
  const cursorAnimation = {
    opacity: [1, 0, 1],
    transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
  }

  return (
    <footer id="contact" className="relative bg-slate-950 border-t border-slate-800" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="font-mono text-slate-500 text-sm tracking-wider uppercase mb-6">
              {HERO_CONTENT.name}
            </div>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md font-light">
              Software Engineer specializing in Backend Systems & Cloud Architecture.
              Building scalable distributed systems, resilient APIs, and cloud-native infrastructure.
            </p>

            <div className="space-y-3" role="list" aria-label="Contact information">
              <div className="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors" role="listitem">
                <Terminal className="h-5 w-5 text-sky-400 flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-sm text-sky-400">{'>'}</span>
                <span className="font-mono text-sm">connect</span>
                <span className="font-mono text-emerald-400 text-sm">--email</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="font-mono text-sm text-slate-300 hover:text-sky-400 transition-colors underline-offset-2 hover:underline"
                  aria-label={`Email: ${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-400" role="listitem">
                <Terminal className="h-5 w-5 text-sky-400 flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-sm text-sky-400">{'>'}</span>
                <span className="font-mono text-sm">connect</span>
                <span className="font-mono text-emerald-400 text-sm">--github</span>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-slate-300 hover:text-sky-400 transition-colors underline-offset-2 hover:underline"
                  aria-label="GitHub profile"
                >
                  github.com/tahir-packeer
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-400" role="listitem">
                <Terminal className="h-5 w-5 text-sky-400 flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-sm text-sky-400">{'>'}</span>
                <span className="font-mono text-sm">connect</span>
                <span className="font-mono text-emerald-400 text-sm">--linkedin</span>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-slate-300 hover:text-sky-400 transition-colors underline-offset-2 hover:underline"
                  aria-label="LinkedIn profile"
                >
                  linkedin.com/in/tahirpackeer
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-mono text-emerald-400 text-sm tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3" aria-label="Footer navigation">
              <a
                href="#projects"
                className="block text-slate-400 hover:text-sky-400 transition-colors text-sm font-mono"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Featured Projects
              </a>
              <a
                href="#skills"
                className="block text-slate-400 hover:text-sky-400 transition-colors text-sm font-mono"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Technical Arsenal
              </a>
              <a
                href="#experience"
                className="block text-slate-400 hover:text-sky-400 transition-colors text-sm font-mono"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Experience & Education
              </a>
              <a
                href="https://github.com/tahir-packeer"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-sky-400 transition-colors text-sm font-mono"
              >
                GitHub Repositories
              </a>
            </nav>

            <div className="mt-10 pt-8 border-t border-slate-800">
              <p className="text-slate-500 text-sm font-mono">
                Built with Next.js 14, TypeScript & Tailwind CSS
              </p>
              <p className="text-slate-600 text-xs font-mono mt-2">
                Deployed on Vercel • Zero maintenance • SSG
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-mono">
            © {new Date().getFullYear()} {HERO_CONTENT.name}. All rights reserved.
          </p>
          <motion.span
            animate={cursorAnimation}
            className="font-mono text-sky-400 text-sm"
            aria-hidden="true"
          >
            _
          </motion.span>
        </div>
      </div>
    </footer>
  )
}
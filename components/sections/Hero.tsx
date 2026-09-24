'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HERO_CONTENT, CONTACT_INFO } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Hero() {
  const socialLinks = [
    { href: CONTACT_INFO.github, label: 'GitHub', icon: Github },
    { href: CONTACT_INFO.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: `mailto:${CONTACT_INFO.email}`, label: 'Email', icon: Mail },
  ] as const

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/5 via-transparent to-emerald-500/5" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-6xl w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <span className="font-mono text-emerald-400 text-sm sm:text-base tracking-wider uppercase">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-slate-50"
          >
            {HERO_CONTENT.headline.split(' ').map((word, i) => (
              <span key={i} className={cn('inline-block', i === 5 && 'text-sky-400')}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="mb-10 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
              {HERO_CONTENT.ctaPrimary}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg">
              <Download className="h-5 w-5" aria-hidden="true" />
              {HERO_CONTENT.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            className="flex items-center justify-center gap-6"
            role="list"
            aria-label="Social links"
          >
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  'p-3 rounded-lg bg-slate-800/50 backdrop-blur-md border border-slate-700/50',
                  'text-slate-400 hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/10',
                  'transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'
                )}
                aria-label={label}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-slate-600 text-xs tracking-widest uppercase">
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-2 text-sky-400"
            aria-hidden="true"
          >
            <svg className="mx-auto h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
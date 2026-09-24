'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface TimelineItemProps {
  role: string
  company: string
  period: string
  bullets: readonly string[]
  type: 'work' | 'education'
  index: number
}

const typeConfig = {
  work: { icon: Briefcase, color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-400/20' },
  education: { icon: GraduationCap, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-400/20' },
}

export function TimelineItem({ role, company, period, bullets, type, index }: TimelineItemProps) {
  const { icon: Icon, color, bg, border } = typeConfig[type]

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-1">
        <div className={cn('w-3 h-3 rounded-full border-4 relative z-10', color.replace('text', 'border'), bg.replace('bg', 'bg'))} aria-hidden="true" />
        {index !== 0 && (
          <div className="absolute left-[5px] top-[11px] w-0.5 h-full bg-slate-700/50" aria-hidden="true" />
        )}
      </div>

      <div className={cn('bg-slate-800/50 backdrop-blur-md border rounded-xl p-5 transition-all duration-300 hover:border-sky-400/30', border)}>
        <div className="flex items-start gap-3 mb-3">
          <div className={cn('p-2 rounded-lg flex-shrink-0', bg)}>
            <Icon className={cn('h-5 w-5', color)} aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-slate-50 font-medium text-base">{role}</h4>
            <p className="text-sky-400 text-sm font-medium">{company}</p>
          </div>
          <time className="font-mono text-slate-500 text-xs whitespace-nowrap flex-shrink-0" dateTime={period}>
            {period.replace('—', '–')}
          </time>
        </div>

        <ul className="space-y-2 pl-10 border-l border-slate-700/50" role="list">
          {bullets.map((bullet, bulletIndex) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + bulletIndex * 0.05 }}
              className="relative pl-4 pb-3 last:pb-0 text-slate-300 text-sm leading-relaxed before:absolute before:left-[-10px] before:top-1 before:w-2 before:h-2 before:rounded-full before:bg-sky-400/50"
            >
              {bullet}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
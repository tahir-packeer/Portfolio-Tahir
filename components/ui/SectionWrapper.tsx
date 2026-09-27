import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24', className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
  return (
    <header className={cn('mb-12 text-center', className)}>
      <h2 className="font-mono text-emerald-400 text-sm sm:text-base tracking-wider uppercase mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  )
}
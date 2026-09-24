import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'muted'
  size?: 'sm' | 'md'
}

export function Tag({ className, variant = 'default', size = 'md', children, ...props }: TagProps) {
  const variants = {
    default: 'bg-slate-700/50 text-emerald-400 border border-emerald-400/20',
    accent: 'bg-sky-500/10 text-sky-400 border border-sky-400/20',
    muted: 'bg-slate-700/30 text-slate-400 border border-slate-600/30',
  }

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium rounded-full transition-colors duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
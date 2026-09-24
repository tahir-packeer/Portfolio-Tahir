import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPeriod(period: string): string {
  return period.replace('—', '–')
}

export function scrollToSection(href: string): void {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
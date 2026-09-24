'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Terminal, Zap } from 'lucide-react'
import { Tag } from '@/components/ui/Tag'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

export interface ProjectCardProps {
  title: string
  description: string
  techStack: readonly string[]
  hardPart: string
  githubUrl?: string | null
  liveUrl?: string | null
  featured?: boolean
}

export function ProjectCard({ title, description, techStack, hardPart, githubUrl, liveUrl, featured }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Card variant="elevated" className="h-full flex flex-col overflow-hidden">
        <CardContent className="flex-1 flex flex-col p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-xl font-medium text-slate-50 flex-1 pr-4">
              {title}
              {featured && (
                <span className="ml-2 flex-shrink-0" aria-label="Featured project">
                  <Zap className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                </span>
              )}
            </h3>
          </div>
          
          <p className="text-slate-400 text-base leading-relaxed mb-6 flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technology stack">
            {techStack.map((tech) => (
              <Tag key={tech} variant="accent" size="sm" role="listitem">
                {tech}
              </Tag>
            ))}
          </div>

          <div className="relative pl-4 border-l-2 border-sky-500/50 bg-sky-500/5 rounded-r-lg p-4 mt-auto">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-sky-400" aria-hidden="true" />
              <span className="font-mono text-sky-400 text-sm font-medium">The Hard Part</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {hardPart}
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-2 py-1"
                aria-label={`View ${title} on GitHub`}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-2 py-1"
                aria-label={`View ${title} live demo`}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span>Live</span>
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.article>
  )
}
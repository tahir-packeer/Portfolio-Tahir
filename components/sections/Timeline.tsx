'use client'

import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper'
import { TimelineItem } from './TimelineItem'
import { EXPERIENCE } from '@/data/portfolio'

export function Timeline() {
  const workExperience = EXPERIENCE.filter((e) => e.type === 'work')
  const education = EXPERIENCE.filter((e) => e.type === 'education')

  return (
    <SectionWrapper id="experience" className="bg-slate-900">
      <SectionHeader
        title="Experience & Education"
        subtitle="Technical roles and academic foundation shaping my approach to system design and engineering excellence."
      />

      <div className="space-y-16">
        {workExperience.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="font-mono text-sky-400 text-sm tracking-wider uppercase mb-8 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-sky-400" aria-hidden="true" />
              Professional Experience
            </h3>
            <div className="relative">
              <div className="absolute left-[5px] top-0 bottom-0 w-0.5 bg-slate-700/50" aria-hidden="true" />
              <div className="space-y-0">
                {workExperience.map((exp, index) => (
                  <TimelineItem
                    key={`${exp.company}-${exp.role}`}
                    role={exp.role}
                    company={exp.company}
                    period={exp.period}
                    bullets={exp.bullets}
                    type={exp.type}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {education.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            <h3 className="font-mono text-emerald-400 text-sm tracking-wider uppercase mb-8 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-emerald-400" aria-hidden="true" />
              Education
            </h3>
            <div className="relative">
              <div className="absolute left-[5px] top-0 bottom-0 w-0.5 bg-slate-700/50" aria-hidden="true" />
              <div className="space-y-0">
                {education.map((edu, index) => (
                  <TimelineItem
                    key={`${edu.company}-${edu.role}`}
                    role={edu.role}
                    company={edu.company}
                    period={edu.period}
                    bullets={edu.bullets}
                    type={edu.type}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  )
}
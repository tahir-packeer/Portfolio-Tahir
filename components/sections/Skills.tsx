'use client'

import { motion } from 'framer-motion'
import { Tag } from '@/components/ui/Tag'
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper'
import { SKILLS } from '@/data/portfolio'

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <SectionWrapper id="skills" className="bg-slate-900">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <SectionHeader
          title="Technical Arsenal"
          subtitle="Categorized proficiency across the stack. No progress bars — just technologies I ship with."
        />
        
        <div className="space-y-10">
          {SKILLS.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="font-mono text-sky-400 text-sm tracking-wider uppercase flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-emerald-400" aria-hidden="true" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2.5" role="list" aria-label={`${category.category} skills`}>
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    transition={{ delay: skillIndex * 0.02 }}
                  >
                    <Tag variant="default" size="md" role="listitem">
                      {skill}
                    </Tag>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
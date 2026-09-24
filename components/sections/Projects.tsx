'use client'

import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper'
import { ProjectCard } from './ProjectCard'
import { PROJECTS } from '@/data/portfolio'

export function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured)
  const otherProjects = PROJECTS.filter((p) => !p.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <SectionWrapper id="projects" className="bg-slate-900">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <SectionHeader
          title="Featured Projects"
          subtitle="End-to-end systems solving real engineering challenges. Each project includes a deep-dive on the hardest technical problem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" role="list">
          {featuredProjects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants} role="listitem">
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                hardPart={project.hardPart}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="border-t border-slate-700/50 pt-12"
          >
            <h3 className="font-mono text-sky-400 text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-sky-400" aria-hidden="true" />
              Additional Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {otherProjects.map((project) => (
                <motion.div key={project.title} variants={itemVariants} role="listitem">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    hardPart={project.hardPart}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    featured={project.featured}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </SectionWrapper>
  )
}
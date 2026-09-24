import { Hero } from '@/components/sections/Hero'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Timeline } from '@/components/sections/Timeline'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
    </>
  )
}
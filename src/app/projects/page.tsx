'use client'
import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'
import { projectsInfo } from '../../data/projects'
import { motion as m } from 'framer-motion'

const page = () => {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start space-y-16 p-2 pt-36 text-center">
      <m.h1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        className="bg-gradient-to-r from-[#FD80C1] to-[#BF80E5] bg-clip-text text-5xl font-extrabold text-transparent"
      >
        Projects
      </m.h1>

      <m.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className="text-lg text-secondary"
      >
        Here you can find{' '}
        <span className="text-primary">{projectsInfo.length} projects</span>{' '}
        I&apos;ve selected to showcase my skills as a developer.
      </m.p>

      <section className="grid w-5/6 grid-cols-1 gap-16 md:grid-cols-2 2xl:grid-cols-3">
        {projectsInfo.map((project, i) => (
          <ProjectsCard key={project.title} project={project} index={i} />
        ))}
      </section>
    </main>
  )
}

export default page

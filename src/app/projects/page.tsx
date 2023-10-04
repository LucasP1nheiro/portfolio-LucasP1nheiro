import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'
import { projectsInfo } from '../../data/projects'

const page = () => {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start space-y-16 p-2 pt-36 text-center">
      <h1 className="bg-gradient-to-r from-[#FD80C1] to-[#BF80E5] bg-clip-text text-5xl font-extrabold text-transparent">
        Projects
      </h1>

      <p className="text-lg text-secondary">
        Here you can find{' '}
        <span className="text-primary">{projectsInfo.length} projects</span>{' '}
        I&apos;ve selected to showcase my skills as a developer.
      </p>

      <section className="grid w-5/6 grid-cols-1 gap-16 md:grid-cols-2 2xl:grid-cols-3">
        {projectsInfo.map((project) => (
          <ProjectsCard key={project.title} project={project} />
        ))}
      </section>
    </main>
  )
}

export default page

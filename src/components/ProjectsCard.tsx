'use client'

import { ProjectInfoProps } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'
import { motion as m } from 'framer-motion'

interface ProjectsCardProps {
  project: ProjectInfoProps
  index: number
}

const ProjectsCard = ({ project, index }: ProjectsCardProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: 0.1 * index }}
    >
      <Link
        href={`/projects/${project.href.toLocaleLowerCase()}`}
        className="group flex flex-col items-start justify-between gap-4 rounded-md bg-primary/10 p-4 text-start transition-all duration-300 hover:bg-primary/10 lg:bg-background"
      >
        <div className="space-y-5">
          <Image
            src={project.image}
            priority
            alt={`${project.title} project image`}
            width={96}
            height={96}
            className="h-auto w-full grayscale-0 group-hover:grayscale-0 lg:grayscale"
          />
          <h1 className="text-2xl font-extrabold text-primary">
            {project.title}
          </h1>
          <p className="text-secondary">{project.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-lg text-primary">Stack : </h3>
          {project.stack.map((skill) => (
            <Image
              key={skill.name}
              src={skill.image}
              priority
              alt={`${skill.name} project image`}
              width={24}
              height={24}
            />
          ))}
        </div>
      </Link>
    </m.div>
  )
}

export default ProjectsCard

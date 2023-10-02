import { ProjectInfoProps } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'

const ProjectsCard = ({
  title,
  image,
  stack,
  description,
}: ProjectInfoProps) => {
  return (
    <Link
      href={`/projects/${title.toLocaleLowerCase()}`}
      className="group flex flex-col items-start justify-between gap-4 rounded-md bg-primary/10 p-4 text-start transition-all duration-300 hover:bg-primary/10 lg:bg-background"
    >
      <Image
        src={image}
        priority
        alt={`${title} project image`}
        width={96}
        height={96}
        className="h-auto w-full grayscale-0 group-hover:grayscale-0 lg:grayscale"
      />
      <h1 className="text-2xl font-extrabold text-primary">{title}</h1>
      <p className="text-secondary">{description}</p>
      <div className="flex items-center gap-4">
        <h3 className="text-lg text-primary">Stack : </h3>
        {stack.map((skill) => (
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
  )
}

export default ProjectsCard

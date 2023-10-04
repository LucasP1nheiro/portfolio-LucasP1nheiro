import { projectsInfo } from '@/data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'

interface PageProps {
  params: {
    slug: string
  }
}

const page = ({ params: { slug } }: PageProps) => {
  const [project] = projectsInfo.filter((project) => {
    return project.href.toLowerCase() === slug
  })

  if (project === undefined) {
    return notFound()
  }

  return (
    <main className="mx-auto flex min-h-screen w-full flex-col items-start justify-center space-y-12 px-4 py-36 md:w-3/5 md:px-0">
      <div className="flex w-full flex-col  justify-between gap-12 text-center lg:flex-row lg:items-center">
        <h1
          className={`bg-gradient-to-r from-[#9488FE] to-[#88CFF2] bg-clip-text text-5xl font-bold text-transparent`}
        >
          {project.title}
        </h1>

        <div className="flex w-full flex-col items-center gap-8 lg:w-fit lg:flex-row">
          <Link
            href={project.githubUrl}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-primary p-2 transition-all duration-300 hover:bg-secondary/90 lg:w-[200px]"
          >
            <Github />
            <p>Github</p>
          </Link>

          <Link
            href={project.deployUrl}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-primary p-2 transition-all duration-300 hover:bg-secondary/90 lg:w-[200px]"
          >
            <ArrowUpRight />
            <p>Live project</p>
          </Link>
        </div>
      </div>

      <Image
        src={project.image}
        priority
        alt={`${project.title} project image`}
        width={96}
        height={96}
        className="h-auto w-full"
      />

      <section
        className={`prose w-[300px] p-2 prose-h1:text-primary prose-h2:text-primary prose-h3:text-primary prose-p:text-secondary prose-a:text-[#9488FE] prose-strong:text-[#88CFF2] prose-code:text-[#88CFF2] prose-ol:text-secondary prose-ul:text-secondary md:w-full `}
      >
        {project?.markdown}
      </section>
    </main>
  )
}

export default page

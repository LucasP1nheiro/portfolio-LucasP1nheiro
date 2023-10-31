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
      <Image
        src={project.image}
        priority
        alt={`${project.title} project image`}
        width={96}
        height={96}
        className="h-auto w-full"
      />

      <div className="flex w-full flex-col justify-center gap-12 lg:flex-row lg:items-center">
        <Link
          href={project.githubUrl}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-primary p-[1px] py-2 text-center transition-all duration-300 hover:bg-primary/90 lg:w-[200px]"
        >
          <Github />
          <span>Github</span>
        </Link>

        <Link
          href={project.githubUrl}
          className="flex w-full items-center justify-center gap-2 rounded-md border p-[1px] py-2 text-center text-primary transition-all duration-300 hover:bg-primary/10 lg:w-[200px]"
        >
          <ArrowUpRight />
          <span>Live project</span>
        </Link>
      </div>

      <section
        className={`prose w-[300px] p-2 prose-h1:text-primary prose-h2:text-primary prose-h3:text-primary prose-p:text-secondary prose-a:text-[#88FF9D] prose-strong:text-[#88FF9D] prose-ol:text-secondary prose-ul:text-secondary md:w-full `}
      >
        {project?.markdown}
      </section>
    </main>
  )
}

export default page

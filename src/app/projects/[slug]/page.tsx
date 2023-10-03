import { projectsInfo } from '@/data/projects'

interface PageProps {
  params: {
    slug: string
  }
}

const page = ({ params: { slug } }: PageProps) => {
  const [project] = projectsInfo.filter((project) => {
    return project.href.toLowerCase() === slug
  })

  return (
    <main className="mx-auto flex min-h-screen w-full flex-col items-start justify-center space-y-12 px-4 py-36 md:w-3/5 md:px-0">
      <h1 className="bg-gradient-to-r from-[#9488FE] to-[#88CFF2] bg-clip-text text-5xl font-bold text-transparent">
        {project.title}
      </h1>

      <section className="prose w-[300px] p-2 prose-h1:text-primary prose-h2:text-primary prose-h3:text-primary prose-p:text-secondary prose-a:text-[#9488FE] prose-code:text-[#9488FE] prose-ol:text-secondary prose-ul:text-secondary md:w-full ">
        {project?.markdown}
      </section>
    </main>
  )
}

export default page

import Skills from '@/components/Skills'
import About from '../components/About'
import getMyAge from '../utils/getMyAge'
import Contact from '@/components/Contact'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen w-screen space-y-36 py-12">
      <div className="mx-auto flex h-[80vh] w-full flex-col items-center justify-center gap-12 text-center ">
        <h1 className="bg-gradient-to-r from-[#FFF883] to-[#FFAAAB] bg-clip-text  text-7xl font-extrabold text-transparent">
          Hi, my name is Lucas Pinheiro
        </h1>
        <h3 className="text-2xl text-secondary">
          I&apos;m a {getMyAge()} y/o developer from 🇧🇷 Brazil based in{' '}
          <a
            href="https://www.google.com/search?q=braganca+paulista"
            className="text-primary underline"
          >
            Bragança Paulista.
          </a>
        </h3>
        <div className="flex items-center gap-8">
          <a
            href="resume.pdf"
            className="flex items-center gap-2 rounded-md bg-primary p-2 text-background transition-all duration-300 hover:bg-primary/90"
          >
            <ArrowUpRight />
            Check out my resume
          </a>
          <Link
            href="/projects"
            className="rounded-md bg-gradient-to-r from-[#FFF883]  to-[#FFAAAB] p-[1px]"
          >
            <div className="h-full w-full rounded-md bg-background px-8 py-2 font-semibold text-primary transition-colors duration-300 hover:bg-transparent hover:text-background">
              Projects
            </div>
          </Link>
        </div>
      </div>
      <About />
      <Skills />
      <Contact />
    </main>
  )
}

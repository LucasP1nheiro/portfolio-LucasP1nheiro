import Skills from '@/components/Skills'
import About from '../components/About'
import getMyAge from '../utils/getMyAge'
import Contact from '@/components/Contact'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen w-screen space-y-36 p-6 py-12">
      <div className="mx-auto flex h-[80vh] w-full flex-col items-center justify-center gap-12 text-center">
        <h1 className="bg-gradient-to-r from-[#FFF883] to-[#FFAAAB] bg-clip-text text-4xl font-extrabold text-transparent lg:text-5xl 2xl:text-7xl">
          Hi, my name is Lucas Pinheiro
        </h1>
        <h3 className="text-lg text-secondary lg:text-2xl">
          I&apos;m a {getMyAge()} y/o developer from 🇧🇷 Brazil based in{' '}
          <a
            href="https://www.google.com/search?q=braganca+paulista"
            className="text-primary underline"
          >
            Bragança Paulista.
          </a>
        </h3>
        <div className="flex w-full flex-col items-center gap-8 lg:w-fit lg:flex-row">
          <a
            href="resume.pdf"
            className="flex w-full items-center justify-center  gap-2 rounded-md bg-primary p-2 text-background transition-all duration-300 hover:bg-primary/90 lg:w-fit"
          >
            <ArrowUpRight />
            Check out my resume
          </a>
          <Link
            href="/projects"
            className="w-full rounded-md bg-gradient-to-r  from-[#FFF883] to-[#FFAAAB] p-[1px] lg:w-fit"
          >
            <div className="h-full w-full rounded-md bg-transparent px-8 py-2 font-semibold text-background transition-colors duration-300 hover:bg-transparent hover:text-background lg:bg-background lg:text-primary">
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

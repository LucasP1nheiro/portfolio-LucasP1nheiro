'use client'

import getMyAge from '@/utils/getMyAge'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion as m } from 'framer-motion'

const MainContent = () => {
  return (
    <div className="mx-auto flex h-[80vh] w-full flex-col items-center justify-center gap-12 text-center">
      <m.h1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        className="bg-gradient-to-r from-[#FFF883] to-[#FFAAAB] bg-clip-text text-4xl font-extrabold text-transparent lg:text-5xl 2xl:text-7xl"
      >
        Hi, my name is Lucas Pinheiro
      </m.h1>
      <m.h3
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className="text-lg text-secondary lg:text-2xl"
      >
        I&apos;m a {getMyAge()} y/o developer from 🇧🇷 Brazil based in{' '}
        <a
          href="https://www.google.com/search?q=braganca+paulista"
          className="text-primary underline"
        >
          Bragança Paulista.
        </a>
      </m.h3>
      <m.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.2 }}
        className="flex w-full flex-col items-center gap-8 lg:w-fit lg:flex-row"
      >
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
      </m.div>
    </div>
  )
}

export default MainContent

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '../components/ui/hover-card'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="mx-auto flex w-3/5 flex-col items-start justify-center gap-8 ">
      <h1 className="bg-gradient-to-r from-[#9488FE] to-[#88CFF2] bg-clip-text text-5xl font-bold text-transparent">
        About me
      </h1>
      <div className="prose">
        <blockquote className="flex flex-col gap-4 text-lg text-secondary">
          <span>
            When I was a child, my favorite class was math because I always
            enjoyed solving problems. Then, when I joined college, on my first
            few algorithms classes, I was introduced to computational thinking,
            and I&apos;ve been hooked ever since.{' '}
          </span>
          <span>
            Now, I&apos;m on my way to finish my graduation and get my degree in
            Systems Analysis and Development at{' '}
            <HoverCard>
              <HoverCardTrigger
                href="https://www.ifsp.edu.br/"
                target="_blank"
                className="text-primary underline transition-all duration-200 hover:cursor-pointer hover:text-[#6dd5ed]"
              >
                @IFSP.
              </HoverCardTrigger>
              <HoverCardContent className="flex h-[100px] items-center justify-center gap-2 bg-background py-2 text-sm text-secondary">
                <Image
                  src={'https://www.ifsp.edu.br/images/Marca_IFSP_2015031.png'}
                  alt="IFSP logo"
                  width={40}
                  height={40}
                />
                <span>IFSP - Instituto Federal de São Paulo</span>
              </HoverCardContent>
            </HoverCard>
          </span>
          In addition to that, as a front-end developer, my passion lies in
          crafting minimalist screens that are not only aesthetically pleasing
          but also highly functional, easy to navigate, and enjoyable to use.
        </blockquote>
      </div>
    </section>
  )
}

export default About

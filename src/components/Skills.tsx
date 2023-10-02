import Image from 'next/image'
import { skillsArray } from '../data/skills'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card'

const Skills = () => {
  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center gap-16 lg:w-3/5 lg:items-start">
      <h1 className="bg-gradient-to-r from-[#81FFE3] to-[#88FF9D] bg-clip-text text-5xl font-bold text-transparent">
        Technologies
      </h1>

      <div className="grid w-fit grid-cols-2 gap-16 md:grid-cols-4 lg:w-full xl:grid-cols-9">
        {skillsArray.map((skill) => (
          <HoverCard key={skill.name}>
            <HoverCardTrigger>
              <Image
                src={skill.image}
                alt={`${skill.name} image`}
                width={42}
                height={42}
                className="hover:cursor-pointer"
              />
            </HoverCardTrigger>
            <HoverCardContent className="rounded-md border bg-background p-4">
              <p className="text-secondary">{skill.name}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </section>
  )
}

export default Skills

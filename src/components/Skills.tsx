import Image from 'next/image'
import { skillsArray } from '../data/skills'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card'

const Skills = () => {
  return (
    <section className="mx-auto flex w-3/5 flex-col items-start justify-center gap-16">
      <h1 className="bg-gradient-to-r from-[#81FFE3] to-[#88FF9D] bg-clip-text text-5xl font-bold text-transparent">
        Technologies
      </h1>

      <div className="grid w-full grid-cols-2 gap-16 md:grid-cols-4 xl:grid-cols-9">
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

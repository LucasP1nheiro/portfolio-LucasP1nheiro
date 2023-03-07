import { useState } from 'react'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import typescript from '../assets/typescript.svg'
import git from '../assets/git.svg'
import javascript from '../assets/javascript.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import {motion} from 'framer-motion'

interface SkillProps {
    name: string
}

const Skill = ({ name }: SkillProps) => {

  const possibleSkills = [
    {
      name: "react",
      image: react
    }, 
    {
      name: 'typescript',
      image: typescript
    },
    {
      name: 'git',
      image: git
    },
    {
      name: 'tailwind',
      image: tailwind
    },
    {
      name: 'javascript',
      image: javascript
    },
    {
      name: 'html',
      image: html
    },
    {
      name: 'css',
      image: css
    }

  ]

    const [hover, setHover] = useState(false)

  return (
      <div className="flex flex-col hover:cursor-pointer  items-center w-fit gap-2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
          {possibleSkills.map((skill, index) => 
            name === skill.name && <img src={skill.image} alt={name} className="h-20" />
          )}
      
          {hover  ? (
            <motion.p
            initial={{ y: '-12px' }}
            animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-eggPlant uppercase text-base"
            >
              {name}
            </motion.p>
          ) : (
              <p className="text-paleBlue uppercase text-base">{name}</p>
          )}

    </div>
  )
}

export default Skill
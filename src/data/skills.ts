import html from '../assets/html.svg'
import css from '../assets/css.svg'
import react from '../assets/react.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import nextjs from '../assets/nextjs.svg'
import git from '../assets/git.svg'
import typescript from '../assets/typescript.svg'
import javascript from '../assets/javascript.svg'
import node from '../assets/node.svg'

export interface SkillsProps {
  name: string
  image: string
}

export const skillsArray: SkillsProps[] = [
  {
    name: 'Html',
    image: html,
  },
  {
    name: 'CSS',
    image: css,
  },
  {
    name: 'React',
    image: react,
  },
  {
    name: 'Tailwind',
    image: tailwindcss,
  },
  {
    name: 'Next.js',
    image: nextjs,
  },
  {
    name: 'Git',
    image: git,
  },
  {
    name: 'Typescript',
    image: typescript,
  },
  {
    name: 'JavaScript',
    image: javascript,
  },
  {
    name: 'Node.js',
    image: node,
  },
]

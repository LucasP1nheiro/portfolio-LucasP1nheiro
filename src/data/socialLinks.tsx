import { Github, Linkedin, Mail } from 'lucide-react'

export interface socialLinksProps {
  href: string
  icon: React.ReactNode
  name: string
  changeTextColor: string
}

export const socialLinks: socialLinksProps[] = [
  {
    href: 'https://github.com/LucasP1nheiro',
    icon: <Github size={18} />,
    name: 'github',
    changeTextColor: 'text-violet-300',
  },
  {
    href: 'https://www.linkedin.com/in/lucas-pinheiro-da-silva/',
    icon: <Linkedin size={18} />,
    name: 'linkedin',
    changeTextColor: 'text-sky-300',
  },
  {
    href: 'mailto:lps1704@gmail.com',
    icon: <Mail size={18} />,
    name: 'email',
    changeTextColor: 'text-red-300',
  },
]

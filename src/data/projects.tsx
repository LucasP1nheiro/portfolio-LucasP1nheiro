import taskproImage from '../assets/taskpro-thumbnail.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import nextjs from '../assets/nextjs.svg'
import react from '../assets/react.svg'
import node from '../assets/node.svg'
import supabase from '@/assets/supabase.svg'
import { SkillsProps } from './skills'
import mymdbImage from '../assets/mymdb-thumbnail.svg'
import portfolioImage from '../assets/portfolio-thumbnail.svg'
import shopeaseImage from '../assets/shopease-thumbnail.svg'
import formWizardImage from '@/assets/formwizard-thumbnail.svg'
import ShopEaseMarkdown from '../markdowns/shopease-markdown.mdx'
import MovieAppMarkdown from '../markdowns/movieapp-markdown.mdx'
import TaskProMarkdown from '../markdowns/taskpro-markdown.mdx'
import PortfolioMarkdown from '../markdowns/portfolio-markdown.mdx'
import FormWizardMarkdown from '@/markdowns/form-wizard-markdown.mdx'

export interface ProjectInfoProps {
  image: string
  title: string
  description: string
  stack: SkillsProps[]
  markdown?: React.ReactNode
  href: string
  githubUrl: string
  deployUrl: string
}

export const projectsInfo: ProjectInfoProps[] = [
  {
    title: 'Form Wizard',
    description:
      'Form Wizard is a form builder designed to streamline the process of creating forms with ease. With a wide array of features including drag and drop functionality, analytics visualization, real-time preview, and secure user authentication, Form Wizard empowers you to create professional forms effortlessly.',
    image: formWizardImage.src,
    stack: [
      {
        name: 'Supabase',
        image: supabase.src,
      },
      {
        name: 'Next.js',
        image: nextjs.src,
      },
      {
        name: 'Tailwind',
        image: tailwindcss.src,
      },
    ],
    href: 'form-wizard',
    markdown: <FormWizardMarkdown />,
    githubUrl: 'https://github.com/LucasP1nheiro/form-wizard',
    deployUrl: 'https://form-wizard-nine.vercel.app/',
  },
  {
    title: 'Portfolio',
    description:
      'The portfolio project is a showcase of my skills and experience as a web developer. It features a modern and clean design with a user-friendly interface. Overall, this portfolio project highlights my technical abilities and creative vision.',
    image: portfolioImage.src,
    stack: [
      {
        name: 'Next.js',
        image: nextjs.src,
      },
      {
        name: 'Tailwind',
        image: tailwindcss.src,
      },
    ],
    href: 'portfolio',
    markdown: <PortfolioMarkdown />,
    githubUrl: 'https://github.com/LucasP1nheiro/portfolio-LucasP1nheiro',
    deployUrl: 'https://portfolio-lucas-p1nheiro.vercel.app/',
  },
  {
    title: 'TaskPro',
    description:
      'TaskPro is a comprehensive full-stack application designed to streamline task management. It empowers you to effortlessly organize tasks by priority, status, and category. ',
    image: taskproImage.src,
    stack: [
      {
        name: 'Tailwind',
        image: tailwindcss.src,
      },
      {
        name: 'Next.js',
        image: nextjs.src,
      },
      {
        name: 'Node.js',
        image: node.src,
      },
    ],
    href: 'taskpro',
    markdown: <TaskProMarkdown />,
    githubUrl: 'https://github.com/LucasP1nheiro/task-pro',
    deployUrl: 'https://task-pro-lyart.vercel.app/',
  },
  {
    title: 'ShopEase',
    description:
      'This project is a fake e-commerce app built using Next.js. It simulates a real-world shopping website with features like product listings, shopping cart functionality, and checkout. The app has a simple and modern user interface, designed to make it easy for users to browse and purchase products. Using Next.js allows for improved performance and server-side rendering, resulting in faster page load times and better SEO.',
    image: shopeaseImage.src,
    stack: [
      {
        name: 'Next.js',
        image: nextjs.src,
      },
      {
        name: 'Tailwind',
        image: tailwindcss.src,
      },
    ],
    markdown: <ShopEaseMarkdown />,
    href: 'shopease',
    githubUrl: 'https://github.com/LucasP1nheiro/e-commerce',
    deployUrl: 'https://shop-ease-lucasp1nheiro.vercel.app/',
  },
  {
    title: 'Movie App',
    description:
      'This project is an application that allows users to search for movies and TV Shows using various filters such as title, genre and more. Users can view information about each movie, including the cast, director, plot, and ratings. The application uses an API to fetch data and displays it in an intuitive and user-friendly way.',
    image: mymdbImage,
    stack: [
      {
        name: 'React.js',
        image: react.src,
      },
      {
        name: 'Tailwind',
        image: tailwindcss.src,
      },
    ],
    markdown: <MovieAppMarkdown />,
    href: 'movieapp',
    githubUrl: 'https://github.com/LucasP1nheiro/mymdb',
    deployUrl: 'https://mymoviedb.vercel.app/',
  },
]

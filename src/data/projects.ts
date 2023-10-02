import taskproImage from '../assets/taskpro-thumbnail.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import nextjs from '../assets/nextjs.svg'
import react from '../assets/react.svg'
import node from '../assets/node.svg'
import { SkillsProps } from './skills'
import mymdbImage from '../assets/mymdb-thumbnail.svg'
import portfolioImage from '../assets/portfolio-thumbnail.svg'
import pomodoroImage from '../assets/pomodoro-thumbnail.svg'
import shopeaseImage from '../assets/shopease-thumbnail.svg'

export interface ProjectInfoProps {
  image: string
  title: string
  description: string
  stack: SkillsProps[]
}

export const projectsInfo: ProjectInfoProps[] = [
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
  },

  {
    title: 'Pomodoro',
    description:
      'The Pomodoro App is a productivity tool that helps users focus on their tasks by using the Pomodoro Technique, a time management method that involves working for a set period of time and taking short breaks in between. The app also allows users to customize the length of each session and break to suit their needs.',
    image: pomodoroImage.src,
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
  },
]

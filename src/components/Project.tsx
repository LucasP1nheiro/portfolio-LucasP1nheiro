
import { motion } from 'framer-motion'
import pomodoro from '../assets/pomodoro.svg'
import portfolio from '../assets/portfolio.svg'
import github from '../assets/github.svg'
import mymdb from '../assets/mymdb.svg'
import comingsoon from '../assets/comingsoon.svg'
import { Eye } from 'phosphor-react'

interface ProjectProps {
    name: string
}

const Project = ({ name }: ProjectProps) => {
  
  
  const possibleProjects = [
    {
       name: "PomodoroApp",
      description: "When i started my journey as a developer, i always struggled to keep myself focused for long periods of time. Therefore, i've created this app to help me  be more productive.",
      image: pomodoro,
      live: "https://mymdb-seven.vercel.app"
    },
    {
      name: "Portfolio",
      description: "Project built with the purpose of showing people some of my work and catch eye of recruiters to land my first job.",
      image: portfolio,
      live: "https://mymdb-seven.vercel.app"
    },
    {
      name: "MyMDB",
      description: "The MyMDB is a movie search application that allows users to search movies and TV shows and see some informations about them or discover new ones.",
      image: mymdb,
      live: "https://mymdb-seven.vercel.app"
    },
    {
      name: "Coming Soon",
      description: "There's certainly more about to come. If you liked what you've seen, come back later to see my next project.",
      image: comingsoon,
    }
]
  
  console.log(name === possibleProjects[0].name)

  

  return (
      <motion.div
      className="w-full h-full flex items-center justify-center"
      >
      {possibleProjects.map((project, index) => 
        name === project.name && (
          <div className="w-4/5 min-h-full  flex flex-col xl:flex-row items-start xl:items-center justify-between  xl:mt-0 ">
            <motion.img
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              src={project.image} alt="Pomodoro Project" className="2xl:h-96 h-72 md:h-80"
            />
          
          <div className="flex flex-col items-start justify-evenly 2xl:gap-8 gap-4 h-96 xl:w-1/2 w-full">
              <motion.h1
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-royalBlue text-4xl md:text-5xl 2xl:text-7xl uppercase">{name}</motion.h1>
            
              <motion.p
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.75 }}
                className="w-full xl:w-4/5 text-xl text-royalBlue"
              >
                {project.description}
              </motion.p>
              {name !== "Coming Soon" && (
                <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="w-full flex gap-4  sm:justify-start"
              >
                  <a href="https://github.com/LucasP1nheiro/PomodoroApp" className="btn">
                      <img src={github} alt="" className="h-8 z-50"/>
                      <span className="text-paleBlue text-sm sm:text-xl z-50">Source Code</span>
                </a>
                <a href={project.live} className="btn">
                      <Eye size={32} color="#01257D" weight="bold" className="z-50" />
                      <span className="text-paleBlue text-sm sm:text-xl z-50">Check it out</span>
                </a>
              </motion.div>
              )}
          </div>
       </div>
        ))}
    </motion.div>
  )
}

export default Project
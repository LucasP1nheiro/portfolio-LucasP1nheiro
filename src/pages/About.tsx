import { motion } from "framer-motion"
import { useContext } from "react"
import GitHub from "../components/GitHub"
import { StageContext } from "../context/StageContext"
import profile from "../assets/profile.svg"
import brasil from "../assets/brasil.svg"
import LinkedIn from "../components/LinkedIn"
import { Link } from "react-router-dom"
import Skill from "../components/Skill"




const About = () => {
  const {setStage} = useContext(StageContext)
    
    setStage('About')

  return (
    <div className="w-screen min-h-screen flex flex-col xl:gap-64 gap-32 pb-32 p-4">
      
      <div className="h-full  w-full flex justify-around items-start ">
        <div className="flex flex-col  justify-center gap-8">
        <motion.img
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 1}}
              src={profile}
              alt="Profile"
              className="h-64 xl:hidden"
            />
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5}}
          className="w-full flex justify-between items-center  gap-12 "
          >
           
          <h2 className="text-3xl text-eggPlant uppercase" > About Me</h2>
          <div className="flex w-2/5 justify-around items-center">
            <GitHub />
            <LinkedIn/>
          </div>
       </motion.div>
        <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6}}
          className="text-royalBlue text-sm sm:text-base xl:text-lg"
        >
          Hi, my name is Lucas Pinheiro and I'm a <img src={brasil} alt="Brazilian" className="h-6 inline" /> frontend developer.
      </motion.p>

      <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7}}
          className="text-royalBlue text-sm sm:text-base xl:text-lg"
        >
          I love  creating enjoyable user interfaces to solve real life problems.
        </motion.p>
        
        <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8}}
          className="text-royalBlue text-sm sm:text-base xl:text-lg"
        >
          I'm currently looking for an opportunity to show my potential.
        </motion.p>
         
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1}}
          className="w-full flex justify-between"
        >
          <Link to="/contact" className="btn">
            <span className="z-50">hire me</span>
          </Link>
          <button className="btn">
            <span className="z-50">Resume</span>
          </button>
        </motion.div>
       </div>
      
      <motion.img
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        src={profile}
        alt="Profile"
        className="h-80 hidden xl:block"
      />

      
      </div>
      <div className="h-full  w-full flex flex-col justify-center items-center gap-12">
        <motion.h2
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75}}
          className="text-5xl text-eggPlant uppercase"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1}}
          className="w-fit grid gap-x-32 gap-y-12 2xl:grid-cols-7 xl:grid-cols-5  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 "
        >
          <Skill name="react" />
          <Skill name="typescript" />
          <Skill name="tailwind" />
          <Skill name="git" />
          <Skill name="html" />
          <Skill name="css" />
          <Skill name="javascript" />
        </motion.div>
      </div>
    </div>
  )
}

export default About




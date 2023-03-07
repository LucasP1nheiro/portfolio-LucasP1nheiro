
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import developer from '../assets/developer.svg'
import GitHub from '../components/GitHub'
import LinkedIn from '../components/LinkedIn'
import { StageContext } from '../context/StageContext'

const Home = () => {
  const { setStage } = useContext(StageContext)

  setStage('Home')

  return (
    <div
      className="h-full w-full bg-paleBlue flex flex-col xl:flex-row items-center justify-end md:justify-evenly p-4 sm:p-0"
    >
          <div className="flex flex-col justify-start gap-4 md:gap-12 items-start h-full">
        <motion.img
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1}}
          src={developer}
          alt="Developer Image"
          className="h-64 sm:h-96 xl:hidden" />
        <motion.h1
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75}}
          className="text-2xl xl:text-6xl sm:text-4xl text-royalBlue"
        >
          Hi, my name is<h1 className=" text-eggPlant text-3xl xl:text-8xl sm:text-6xl">Lucas Pinheiro</h1> Welcome to my website!
        </motion.h1>

        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-between items-center w-full"
        >
            <Link
              to="/contact"
              className="btn"
            >
                <span className="z-10">Contact me </span>
          </Link >
          
          <div className="flex w-1/3  justify-around py-2 gap-6 ">
            <GitHub />
            <LinkedIn />
          </div>
          </motion.div>
          </div>
        <motion.img
            initial={{ x: '100vw'}}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            src={developer} alt="Developer Image" className="h-96 hidden xl:block"
        />
      </div>
  )
}

export default Home
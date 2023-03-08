import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import notfound from '../assets/notfound.svg'

const NotFound = () => {
  return (
      <div className="h-full w-full flex max-[375px]:gap-0 gap-32 xl:gap-0 justify-evenly flex-col xl:flex-row p-4">
      <motion.img
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        src={notfound} alt="404 Image" className="h-52 sm:h-72 xl:hidden"
      />
          <div className="flex flex-col h-full w-full xl:w-1/2 gap-12 items-center xl:items-start">
        <motion.h1
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5}}
          className="text-3xl 2xl:text-6xl sm:text-4xl text-royalBlue"
        >
          It seems like you're lost
        </motion.h1>
        <motion.h2
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75}}
          className="text-eggPlant text-sm sm:text-base xl:text-lg"
        >
          Click on the button down below to go back to the home page.
        </motion.h2>
              <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ duration: 1}}
              >
                <Link to="/"
                    className="btn">
                    <span className="z-10">back to home</span>
                </Link >
              </motion.div>
          </div>
      <motion.img
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        src={notfound} alt="404 Image" className="2xl:h-72 xl:h-64 hidden xl:block"
      />
    </div>
  )
}

export default NotFound
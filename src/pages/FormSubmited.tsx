import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import thanks from '../assets/thankyou.svg'
import { StageContext } from '../context/StageContext';

const FormSubmited = () => {
    const params = useParams();
    const { setStage } = useContext(StageContext)

    setStage('Home')
  

  return (
      <div
       className="h-full w-full flex max-[375px]:gap-0 gap-32 xl:gap-0 justify-evenly flex-col xl:flex-row p-4"
      >
      <motion.img
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        src={thanks} alt="Thankfulness Image" className="h-52 sm:h-72 xl:hidden"
      />
          <div className="flex flex-col h-full w-full xl:w-1/2 gap-12 items-center xl:items-start">
        <motion.h1
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5}}
          className="text-base 2xl:text-6xl xl:text-4xl sm:text-2xl text-royalBlue"
        >
          Hello, <span className="text-eggPlant">{params.name}.</span> Thank you for contacting me!
        </motion.h1>
        <motion.h2
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75}}
          className="text-eggPlant text-sm sm:text-lg"
        >
          I'll be answering you as soon as possible.
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
          transition={{ duration: 0.7}}
          src={thanks} alt="Thankfulness Image" className="2xl:h-72 xl:h-60 hidden xl:block"
        />
      </div>
  )
}

export default FormSubmited
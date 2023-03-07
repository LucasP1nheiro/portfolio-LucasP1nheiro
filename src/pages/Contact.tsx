import React, { useContext } from 'react'
import Form from '../components/Form'
import contact from '../assets/contact.svg'
import { motion } from 'framer-motion'
import { StageContext } from '../context/StageContext'

const Contact = () => {
  const {setStage} = useContext(StageContext)
    
    setStage('Contact')

  return (
    <div
      className="h-full w-full p-4 bg-paleBlue flex flex-col xl:flex-row items-center 2xl:justify-evenly xl:justify-around sm:justify-center justify-end gap-4 xl:gap-0 sm:gap-12 "
    >
      <motion.img
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        src={contact} alt="Contact Image" className="max-[376px]:h-48 h-72 xl:hidden"
      />
          <div className="flex flex-col gap-4 xl:gap-12 md:w-1/2 w-4/5">
        <motion.h2
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5}}
          className="text-2xl md:text-4xl xl:text-5xl text-royalBlue font-bold uppercase "
        >
          Send me an e-mail
        </motion.h2>
              <Form/>
          </div>

      <motion.img
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1}}
        src={contact} alt="Contact Image" className="h-96 hidden xl:block"
      />
    </div>
  )
}

export default Contact
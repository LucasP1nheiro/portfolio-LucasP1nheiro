import { Browser, Chat, Info } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StageContext } from '../context/StageContext'
import logo from '../assets/logo.svg'
import { motion } from 'framer-motion'



const Header = () => {
    const { stage, setStage } = useContext(StageContext)


  return (
      <nav className="w-full h-1/10 bg-paleBlue/95 flex justify-around items-center  z-50 fixed right-0 top-0">
          <Link
              to="/"
          >
              <img src={logo} alt="Logo Image" className="h-12 " />
          </Link>

          <div className="flex gap-3 sm:gap-8 items-center">
              <Link
                  to="/about"
                  className="flex flex-col items-center p-2 rounded-xl transition-all duration-500 hover:bg-white/10 hover:cursor-pointer"                 
              >
                  <div className="md:hidden ">
                      <Info size={42} color={stage === "About" ? "#00FFFF" : "#ffffff"} weight={stage === "About" ? 'fill' : 'bold'} />
                  </div>
                  <p className={stage === "About" ? "text-eggPlant text-base md:text-3xl text-bold uppercase hidden md:block  " : "text-royalBlue text-base md:text-3xl text-bold uppercase hidden md:block"}>About</p>
                  {stage === "About" && (
                      <motion.span                      
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5}}
                        className="h-[2px] w-full bg-eggPlant hidden md:block"
                      ></motion.span>
                  )}
              </Link>
              <Link
                  to="/projects"
                  className="flex flex-col items-center p-2 rounded-xl transition-all duration-500 hover:cursor-pointer hover:bg-white/10"                 
              >
                  <div className="md:hidden">
                  <Browser size={42} color={stage === "Projects" ? "#00FFFF" : "#ffffff"} weight={stage === "Projects" ? 'fill' : 'bold'}/>
                  </div>
                  <p className={stage === "Projects" ? "text-eggPlant text-base md:text-3xl text-bold uppercase hidden md:block   " : "text-royalBlue text-base md:text-3xl text-bold uppercase hidden md:block "}>Projects</p>
                  {stage === "Projects" && (
                      <motion.span                      
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5}}
                        className="h-[2px] w-full bg-eggPlant hidden md:block"
                      ></motion.span>
                  )}
              </Link>
              <Link
                  to="/contact"
                  className="flex flex-col items-center p-2 rounded-xl transition-all duration-500 hover:cursor-pointer hover:bg-white/10" 
              >
                  <div className="md:hidden">
                  <Chat size={42} color={stage === "Contact" ? "#00FFFF" : "#ffffff"} weight={stage === "Contact" ? 'fill' : 'bold'} />
                  </div>
                  <p className={stage === "Contact" ? "text-eggPlant text-base md:text-3xl text-bold uppercase hidden md:block  " : "text-royalBlue text-base md:text-3xl text-bold uppercase hidden md:block"}>Contact</p>
                  {stage === "Contact" && (
                      <motion.span                      
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5}}
                        className="h-[2px] w-full bg-eggPlant hidden md:block"

                      ></motion.span>
                  )}
              </Link>
          </div>
    </nav>
  )
}

export default Header
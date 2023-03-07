import  {motion} from 'framer-motion'

const LinkedIn = () => {
    const pathBgVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(1, 37, 125, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1, 
            fill: "rgba(1, 37, 125, 1)",
            transition: {
                duration: 2,
                ease: "easeIn"
            }
        }
    }

    const pathTextVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(1, 37, 125, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1, 
            fill: "rgba(1, 37, 125, 1)",
            transition: {
                duration: 2,
                ease: "easeIn"
            }
        }
    }

  return (
      <div>
          
          <a href="https://www.linkedin.com/in/lucas-pinheiro-134261269/">
          <svg viewBox="0 0 128 128" className="h-12">
              <motion.path
                  variants={pathBgVariants}
                  strokeWidth="4"
                  stroke="#ffffff"
                  initial="hidden"
                  animate="visible"
                  fill="#0076b2"
                  d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
              >
              </motion.path>
              <motion.path
                  strokeWidth="4"
                  stroke="#ffffff"
                  variants={pathTextVariants}
                  initial="hidden"
                  animate="visible"
                  fill="#fff"
                  d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              >
              </motion.path>
            </svg>
          
          </a>
    </div>
  )
}

export default LinkedIn
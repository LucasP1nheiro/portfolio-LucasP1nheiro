import { useEffect, useState } from "react"
import InvalidEmail from "./InvalidEmail"
import {motion} from 'framer-motion'
import GitHub from "./GitHub"
import LinkedIn from "./LinkedIn"


const Form = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const regex = /\S+@\S+\.\S+/
    const [isEmailValid, setIsEmailValid] = useState(false)
    

    useEffect(() => {
        setIsEmailValid(regex.test(email))
    }, [email])

    
  return (
      <form
          className="flex flex-col gap-2 2xl:w-2/3 w-full bg-paleBlue"
          action="https://formsubmit.co/lps1704@gmail.com" method="POST"
          autoComplete="off"
      >
          <input type="hidden" name="_next" value={`http://192.168.15.12:5173/form-submited/${name}`} />
          <input type="hidden" name="_captcha" value="false"/>
          <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6}}
              className="inputDiv mb-6"
          >
              <input type="text" name="Name" className="inputBox" required onChange={(e) => setName(e.target.value)} />
              <span>First Name</span>
          </motion.div>
          <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7}}
              className="inputDiv mb-6"
          >
              <input type="text" name="Last Name" className="inputBox" required/>
              <span>Last Name</span>
          </motion.div>
          <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8}}
              className="inputDiv mb-6"
          >
              <input type="text" name="Message" className="inputBox" required/>
              <span>Message</span>
          </motion.div>
          
          <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9}}
              className="inputDiv mb-6"
          >
              <input type="text" name="E-mail" className="inputBox" required onChange={(e) => setEmail(e.target.value)} />
              <span>E-mail</span>
              <div className="w-full flex items-end justify-end">
              {!isEmailValid && email.length > 0 && <InvalidEmail />}
              </div>
          </motion.div>

          <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-0 items-center justify-between">
              <motion.div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1}}
                  className="btn"
              >
                  <input type="submit" value="Submit" className="z-10 cursor-pointer w-full h-full tracking-[0.125em] uppercase" />
              </motion.div>
                
              
          </div>
      </form>
  )
}

export default Form
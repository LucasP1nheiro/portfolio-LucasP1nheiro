import { motion } from 'framer-motion'
import { ThumbsDown } from 'phosphor-react'
import React from 'react'

const InvalidEmail = () => {
  return (
      <motion.div
            initial={{ y: '-15px' }}
          animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
          className="absolute top-3 right-1"
      >
          <ThumbsDown size={24} color="#00FFFF" weight="fill" />
    </motion.div>
  )
}

export default InvalidEmail
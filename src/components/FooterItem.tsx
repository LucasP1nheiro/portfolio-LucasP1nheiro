import { socialLinksProps } from '@/data/socialLinks'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const FooterItem = ({
  href,
  name,
  changeTextColor,
  icon,
}: socialLinksProps) => {
  const [hover, setHover] = useState(false)

  return (
    <li>
      <a
        href={href}
        className={cn(
          `flex w-[80px] items-center justify-center gap-2 md:justify-start ${changeTextColor}`,
          {
            'md:text-secondary': !hover,
          },
        )}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className="text-md hidden md:block">{name}</p>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ opacity: 1 }}
            className="hidden md:block"
          >
            {icon}
          </motion.div>
        )}
        <div className="md:hidden">{icon}</div>
      </a>
    </li>
  )
}

export default FooterItem

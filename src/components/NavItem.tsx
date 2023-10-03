'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '../lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

interface NavItemProps {
  path: string
}

const NavItem = ({ path }: NavItemProps) => {
  const pathName = usePathname()

  return (
    <Link
      href={`/${path}`}
      className="flex h-full flex-col items-center justify-center rounded-md p-2 duration-300 hover:bg-primary/10"
    >
      <span
        className={cn('p-1 capitalize', {
          'text-primary': `/${path}` === pathName,
          'text-secondary': `/${path}` !== pathName,
        })}
      >
        {path}
      </span>
      {`/${path}` === pathName ? (
        <AnimatePresence>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="h-[1px] w-4 bg-primary"
          ></motion.span>
        </AnimatePresence>
      ) : (
        <span className="h-[1px] w-4 bg-transparent"></span>
      )}
    </Link>
  )
}

export default NavItem

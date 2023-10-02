import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'
import Image from 'next/image'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="fixed top-0 h-[10%] w-screen border border-b bg-background">
      <nav className="h-full">
        <ul className="mx-auto flex h-full w-3/5 items-center justify-between">
          <li>
            <Link href="/" className="text-primary">
              <Image
                src={logo.src}
                alt="Logo Image"
                priority
                width={31}
                height={41}
              />
            </Link>
          </li>
          <div className="flex h-full items-center gap-4 py-5">
            <li>
              <NavItem path="projects" />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header

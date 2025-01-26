import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className="border-b px-10 py-6">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="flex gap-5 text-lg">
            <Link
              href={"/"}
              className="hover:text-zinc-900 text-zinc-800 hover:underline duration-200 transition-colors"
            >
              Dashboard
            </Link>

            <UserButton />
          </div>
        </nav>
      </div>
  )
}

export default Navbar
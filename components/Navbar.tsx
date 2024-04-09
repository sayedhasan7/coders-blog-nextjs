import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../public/logo.png"
const Navbar = () => {
  const [togglenav, settogglenav] = useState(false)
  const toggle = () => {
    settogglenav(!togglenav)
  }
  return (
    <nav className='flex items-center sticky top-0 z-10 bg-white justify-between flex-col md:flex-row md:py-6'>
      <div className="container flex md:w-auto">
        <Link href="/" className='flex items-center ml-2 md:ml-0'>
          <Image src={logo} width={30} height={30} alt='' /><span className='font-medium ml-2 text-violet-600 text-2xl' >Coders Blogs</span>
        </Link>
        <button onClick={toggle} className='ml-auto p-4 mr-2 flex md:hidden'>
          {
            togglenav ?
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
          }
        </button>
      </div>
      <ul className={'md:flex items-center flex-col transition-all duration-200 md:flex-row my-4 md:justify-center justify-start w-full md:w-auto ' + `${togglenav ? "" : "hidden md:flex"}`}>
        <li><a className='px-4 py-2 font-sans' href="/about">Products</a></li>
        <li><a className='px-4 py-2 font-sans' href="/about">Pricing</a></li>
        <li><a className='px-4 py-2 font-sans' href="/">Docs</a></li>
        <li><a className='px-4 py-2 font-sans' href="/">Company</a></li>
      </ul>
      <ul className="items-center md:flex hidden">
        <li className="mr-6"><a href="">Log In</a></li>
        <li className="mr-6 bg-violet-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-violet-900 transition-colors"><a href="">Sign Up</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import Image from 'next/image'
import logo from "../public/logo.png"
import Link from 'next/link'


const Footer = () => {
    const date = new Date()
    return (
        <footer className=" body-font border-t-2 relative bg-white bottom-0 container mx-auto">
            <div className="px-6 py-8  flex items-center sm:flex-row flex-col">
                <Link href="/" className='flex ml-5 items-center'>
                    <Image src={logo} width={30} height={30} alt='' /><span className='font-medium ml-2 text-violet-600 text-xl' >Coders Blogs</span>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {date.getFullYear()} Coders Blog
                    <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"></a>
                </p>
                <span className="inline-flex mr-10 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                       
                        <a className="ml-3 text-gray-500" href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500" href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                    </span>
                </span>
            </div>
        </footer>
    )
}

export default Footer
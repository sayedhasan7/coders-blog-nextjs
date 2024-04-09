import { IArticles } from '@/types'
import Link from 'next/link'
import React from 'react'
interface IPropType {
    article: IArticles
}
const BlogCardWithImage = ({ article }: IPropType) => {
    return (
        <div className='bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex mx-2 items-center h-64 px-4 md:px-0'>
            <Link href={"#"} className='w-5/6  p-6'>
                <span className="text-2xl width-2/3 text-white font-bold break-words">{article.attributes.Title}</span>
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-journal-check mr-auto w-2/12 p-2 text-blue-500" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
            </svg>
        </div>
    )
}

export default BlogCardWithImage
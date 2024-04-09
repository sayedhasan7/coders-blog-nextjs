import { IArticles } from '@/types'
import { formatDate } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface IPropType {
    article: IArticles;
}

const BlogCard = ({ article }: IPropType) => {
    return (
        <div className='mx-2 p-5 border rounded-md'>
            
            <Link href={`/article/${article.attributes.Slug}`}>
                <h1 className="text-xl text-gray-600 font-sans font-medium hover:decoration-2 hover:underline cursor-pointer hover:decoration-violet-500">
                    {article.attributes.Title}
                </h1>
            </Link>
            <div className="flex items-center my-1.5">
                <div className='rounded-lg overflow-hidden flex items-center justify-center mr-2 border'>
                    <img src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.url}`} width={40} height={40} alt='avatar' />
                </div>
                <span className='text-sm font-bold text-gray-600'>
                    {article.attributes.author.data.attributes.firstname} {" "} {article.attributes.author.data.attributes.lastname} On &nbsp;
                    <span className='text-gray-400'>
                        {formatDate(article.attributes.createdAt)}
                    </span>
                </span>
            </div>
            <div className='text-gray-500'>{article.attributes.shortDiscription.slice(0, 250)} {article.attributes.shortDiscription.length > 250 ? "..." : ""}</div>
            { }
        </div>

    )
}

export default BlogCard

import React from 'react'
import { ICategory } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IPropsType {
    categories: ICategory[];
    handleOnSearch: (query: string) => viod;
}

const Tabs = ({ categories, handleOnSearch }: IPropsType) => {
    const router = useRouter()
    const isActiveLink = (categories: ICategory) => {
        return categories.attributes.Slug === router.query.category;
    }

    return (
        <>
            <div className="flex border-b md:flex-row flex-col-reverse justify-center py-2">
                <ul className='flex items-center h-full w-full py-2'>
                    <li>
                        <Link href={"/"} className={"mr-2 py-4 px-4 " + `${router.pathname === "/" ? " border-b-2 border-violet-600 text-violet-600" : "border-white"}`}>Recent</Link>
                    </li>
                    {categories.map((categories) => {
                        return <li key={categories.id}><Link href={`/category/${categories.attributes.Slug}`} className={'mr-2 px-4 py-4 border-b-2 ' + `${isActiveLink(categories) ? "border-violet-600 text-violet-600" : "border-white"}`}>{categories.attributes.Title}</Link></li>
                    })}
                </ul>
                <fieldset className=" space-y-1 text-gray-800 mx-2  md:mr-6 md:mb-0 mb-2">
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative ">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="button" title="search" className="p-1 focus:outline-none "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg></button>
                        </span>
                        <input type="search" onChange={(e)=>handleOnSearch(e.target.value)} name="Search" placeholder="Search..." className=" w-full search py-2 pl-10 text-sm rounded-md focus:outline-none px-2 bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-violet-600" />
                    </div>
                </fieldset>
            </div>
        </>
    )
}

export default Tabs
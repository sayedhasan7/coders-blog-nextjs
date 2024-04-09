import React from 'react'
import qs from "qs"
import { useRouter } from 'next/router'


type TDirection = 1 | -1
interface IPropType {
    page: number,
    pageCount: number,
    redirectUrl ?: string
}

const Pagination = ({ page, pageCount,redirectUrl="/" }: IPropType) => {

    const router = useRouter()
    const isNextDisabled = (): boolean => {
        return page >= pageCount
    }

    const isPrevDisabled = (): boolean => {
        return page <= 1
    }

    const handlePagination = async (direction: TDirection) => {
        if (direction === 1 && isNextDisabled()) {
            return
        }
        if (direction === -1 && isPrevDisabled()) {
            return
        }
        const queryString = qs.stringify({
            ...router.query,
            page: page + direction
        })
        router.push(`${redirectUrl}?${queryString}`)
    }

    return (
        <div className='flex justify-center items-center gap-4 py-4'>
            <button onClick={() => handlePagination(-1)} className={`bg-violet-600 py-2 px-4 w-24 rounded text-white ${isPrevDisabled() ? "opacity-50 cursor-not-allowed" : ""}`}>
                Previous
            </button>
            <button onClick={() => handlePagination(1)} className={`bg-violet-600 py-2 px-4 w-24 rounded text-white ${isNextDisabled() ? "opacity-50 cursor-not-allowed" : ""}`}>
                Next
            </button>
        </div>
    )
}

export default Pagination
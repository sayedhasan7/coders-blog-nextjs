import { IArticles } from '@/types'
import React from 'react'
import BlogCard from './BlogCard'
import BlogCardWithImage from './BlogCardWithImage'

interface IPropType {
    articles: IArticles[]
}

const ArticleList = ({ articles }: IPropType) => {
    return (
        <>
        <div className="my-12">
            <div className="grid lg:grid-cols-2 overflow-auto gap-10 mt-5">
                {
                    articles.map((article,index) => {
                        if(index===1){
                            return <BlogCardWithImage article={article} key={"blogspecialcard"+article.id}/> 
                        }else{
                            return <BlogCard article={article} key={"blogcard"+article.id}/>
                        }
                    })
                }
            </div>
        </div>
        </>
    )
}

export default ArticleList
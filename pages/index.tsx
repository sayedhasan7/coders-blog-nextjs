import { GetServerSideProps, Metadata, NextPage } from 'next'
import Head from 'next/head'
import React, { Component, useRef } from 'react'
import { fetchArticles, fetchCategories } from '@/http'
import { Props, ScriptProps } from 'next/script'
import { AxiosResponse } from 'axios'
import { IArticles, ICategory, ICollectionResponse, IPagination, IQueryOption } from '@/types'
import Tabs from '@/components/Tabs'
import ArticleList from '@/components/ArticleList'
import qs from "qs"
import Pagination from '@/components/Pagination'
import { useRouter } from 'next/router'
import _debounce from "lodash.debounce"
export const metadata: Metadata = {
  title: 'Coders Blog - Home',
  description: 'Coders Blogs Here You Get New Blogs Tips & Tricks For Coding',
}

interface IProps {
  categories: {
    items: ICategory[]
  },
  articles: {
    items: IArticles[],
    pagination: IPagination
  }
}

const page: NextPage<IProps> = ({ categories, articles }) => {
  const { page, pageCount } = articles.pagination
  const router = useRouter()
  const searchTermRef = useRef('');
  const search = () => {
    router.push(`/?search=${searchTermRef.current}`)
  }
  const debouncedSearchRef = useRef(_debounce(search, 300));
  
  const handleSearch = (query: string) => {
    searchTermRef.current = query
    debouncedSearchRef.current()
  }

  return (
    <>
      <Tabs categories={categories.items} handleOnSearch={handleSearch} />
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} />
    </>
  )
}


export async function getServerSideProps({ query }) {
  const options: Partial<IQueryOption> = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    pagination: {
      page: query.page ? query.page : 1,
      pageSize: 1
    }
  }
  
  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search
      }
    }
  }

  //categories fetching
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories()

  // Articles Fetching 
  const queryString = qs.stringify(options)
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticles[]>> = await fetchArticles(queryString)

  return {
    props: {
      categories: {
        items: categories.data
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination
      }
    }
  }
}



export default page
import Tabs from '@/components/Tabs'
import { fetchArticles, fetchCategories } from '@/http'
import { IArticles, ICategory, ICollectionResponse, IPagination, IQueryOption } from '@/types'
import { AxiosResponse } from 'axios'
import { Metadata } from 'next'
import Head from 'next/head'
import React, { useReducer, useRef } from 'react'
import qs from "qs"
import ArticleList from '@/components/ArticleList'
import { capitailizeFirstLetter, makeCategory } from '@/utils'
import Pagination from '@/components/Pagination'
import { useRouter } from 'next/router'
import _debounce from 'lodash.debounce';

interface IProps {
  categories: {
    items: ICategory[],
    pagination: IPagination,
  },
  articles: {
    items: IArticles[],
    pagination: IPagination,
  },
  Slug: string
}

// interface IQuery {
//   query: {
//     category: string
//   }
// }

const category = ({ categories, articles, Slug }: IProps) => {
  const { page, pageCount } = articles.pagination
  const router = useRouter()
  const searchTermRef = useRef('');
  const { category: categorySlug } = router.query;

  const search = () => {
    router.push(`/category/${categorySlug}/?search=${searchTermRef.current}`)
  }
  const debouncedSearchRef = useRef(_debounce(search, 300));

  const handleSearch = (query: string) => {
    searchTermRef.current = query
    debouncedSearchRef.current()
  }

  const formattedcategory = () => {
    return capitailizeFirstLetter(makeCategory(Slug))
  }

  return (
    <>
      <Head>
        <title>Coder's Blog {formattedcategory()}</title>
        <meta name='description' content='these is category page' />
      </Head>
      <Tabs categories={categories.items} handleOnSearch={handleSearch} />
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} redirectUrl={`/category/${categorySlug}`} />

    </>
  )

}
export async function getServerSideProps({ query }) {

  const options: Partial<IQueryOption> = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    filters: {
      category: {
        Slug: query.category
      }
    },
    pagination: {
      page: query.page ? +query.page : 1,
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

  const queryString = qs.stringify(options)

  //categories fetching
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories()

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticles[]>> = await fetchArticles(queryString)

  return {
    props: {
      categories: {
        items: categories.data,
        pagination: categories.meta.pagination
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
      Slug: query.category
    }
  }
}

export default category
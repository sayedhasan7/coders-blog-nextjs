import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IResourceMeta {
    pagination: IPagination;
}

export interface ICollectionResponse<T> {
    data: T;
    meta: IResourceMeta;
}

export interface ICategoryAttribute {
    Title: string;
    Slug: string;
}

export interface ICategory {
    id: number;
    attributes: ICategoryAttribute;
}

export interface IArticles {
    id: number;
    attributes: IArticlesAttribute;
}

export interface IArticlesAttribute {
    Title: string;
    body: string | MDXRemoteSerializeResult;
    Slug: string;
    Image: IimageData;
    createdAt: string;
    author: IAuthor;
    shortDiscription: string;
}

export interface IAuthor {
    data: {
        attributes: {
            firstname: string;
            lastname: string;
            avatar: {
                data: {
                    attributes: {
                        url: string;
                        formats: {
                            thumbnail: {
                            }
                        }
                    }

                }
            }
        }
    }
}

export interface IimageData {
    data: {
        attributes: {
            url: string;
            formats: {
                small: {
                    url: string
                }
            }
        }
    }
}

export interface IQueryOption {
    populate: [
        string
    ],
    sort: [
        string
    ],
    filters: {
        category?: { slug: any }
        Title?: {}
    }
    pagination: {
        page: number,
        pageSize: number
    }
}
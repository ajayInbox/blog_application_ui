import { Content } from "@tiptap/react"
import { UserType } from "./user-type"

export type ArticleResultType = {
    articleId: number,
    articleBannerUrl: string,
    articleTitle: string,
    articleContent: string | Content,
    readTime: string,
    createdAt: string,
    tags: ArticleTag[],
    user: UserType
}

export type ArticleTag = {
    tagId: number,
    tagLabel: string,
    articles: ArticleResultTypeV2[]
}

export type ArticleTagV2 = {
    tagId: number,
    tagLabel: string
}

export type ArticleType = {
    articleBannerUrl: string,
    articleTitle: string,
    articleContent: string | Content,
    articleTags: string
}

export type ArticleResultTypeV2 = {
    articleId: number,
    articleBannerUrl: string,
    articleTitle: string,
    articleContent: string | Content,
    readTime: string,
    createdAt: string,
}
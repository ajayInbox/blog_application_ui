import { Content } from "@tiptap/react"

export type ArticleType = {
    articleBannerUrl: string,
    articleTitle: string,
    articleContent: string | Content,
    articleTags: string
}

export type ArticleResultType = {
    articleId: number,
    articleBannerUrl: string,
    articleTitle: string,
    articleContent: string | Content,
    articleTags: string
}
import { Editor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from '@tiptap/extension-image'
import React from "react"
import ArticleStat from "./article-stats"
import UserCard from "./user-card"
import SmallArticleView from "./small-article-view"
import PostComment from "./post-comment"
import { ArticleResultType, ArticleResultTypeV2, ArticleTag } from "../types/article-type"

export default function ViewArticle({data}:{data:ArticleResultType}) {

    const {articleBannerUrl, articleContent, articleId, articleTitle, createdAt, readTime, tags, user} = data
  

  const editor = new Editor({
     editorProps: {
        attributes: {
            class: 'w-full prose prose-2xl text-2xl focus:outline-none'
        }
    },
    editable:false,
    content: `
        ${articleContent}
      `,
    extensions: [
      StarterKit, 
      Image.configure({
        HTMLAttributes: {
          class: "w-full h-100px rounded"
        }
      })
    ],
  })

  if (!editor) {
    return null
  }

  return (
    <section className="flex flex-col">
    <div className="flex">
      <div className="w-[15%]">
        <ArticleStat/>
      </div>
      <div className='p-7 mx-auto w-full'>
        <h1 className='text-[48px] font-bold'>{articleTitle}</h1>
        {tags && tags.map((tag: ArticleTag) =>(
          <React.Fragment key={tag.tagId}>
            <span className='batch'>{tag.tagLabel}</span>
          </React.Fragment>
        ))}
        <EditorContent editor={editor} className="py-3"/>
      </div>
      <div className="w-[35%]">
        <UserCard user={user}/>
        <div>
          <h2 className="font-semibold text-[20px] p-3">Latest from User</h2>
          {user.articles.map((article: ArticleResultTypeV2) =>(
            <React.Fragment>
              <SmallArticleView article={article}/>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
    <div className="ml-40">
      <PostComment/>
    </div>
    
    </section>
  )
}

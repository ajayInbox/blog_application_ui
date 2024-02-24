import { useQuery } from "@tanstack/react-query"
import { getArticleById } from "../api-v2"
import { Editor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from '@tiptap/extension-image'
import React from "react"
import { useParams } from "react-router-dom"

export default function ViewArticle() {

  const params = useParams()
  const id = Number(params.articleId)

  const individualArticleQuery = useQuery({
    queryKey: ["articles", id],
    queryFn: () => getArticleById(id)
  })

  const{ data } = individualArticleQuery

  if(individualArticleQuery.isLoading) return <div>Loading...</div>
  if(individualArticleQuery.isError) return <div>{JSON.stringify(individualArticleQuery.error)}</div>

  const editor = new Editor({
     editorProps: {
        attributes: {
            class: 'w-full prose prose-2xl text-2xl focus:outline-none'
        }
    },
    editable:false,
    content: `
        ${data.articleContent}
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
    <div>
      <div className='mx-auto max-w-[900px] w-full bg-white'>
        <div className='relative w-full h-[300px] hover:opacity-80 border-4 border-grey mx-auto'>
          <img src={data.articleBannerUrl} alt='image'/>
        </div>
        <div className='p-7 m-auto w-full'>
          <h1 className='text-[48px] font-bold'>{data.articleTitle}</h1>
          {data.articleTags && data.articleTags?.split(",").map((tag: string, index: number) =>(
            <React.Fragment key={index}>
              <span className='batch'>{tag}</span>
            </React.Fragment>
          ))}
          <EditorContent editor={editor} />
        </div>
        </div>
    </div>
  )
}

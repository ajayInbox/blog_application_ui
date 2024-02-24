import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { useContentContext } from '../context/content-context'
import React from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { addArticle } from '../api-v2'
import { useNavigate } from 'react-router-dom'

export default () => {
  const { wholeContent } = useContentContext()
  const{ articleBannerUrl, articleTitle, articleContent, articleTags} = wholeContent
  const navigate = useNavigate()

  const articleMutation = useMutation({
    mutationFn: addArticle,
    onError: ((error) => console.log(error)),
    onSuccess: data => (console.log(data))
  })

  const onPublish = () => {
        if(articleTitle === ""){
          toast.error("Please provide title for blog")
        }
        else if(articleContent === ""){
          toast.error("Please provide content for blog")
        }
        else{
          const newArticle = {
          articleBannerUrl,
          articleTitle,
          articleContent,
          articleTags
        }
        articleMutation.mutate(newArticle)
        navigate("/")
        }

    }

  const editor = useEditor({
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
    <div>
      <Toaster/>
      <nav className='navbar justify-between'>
            <Link to={"/"} className="flex-none w-10">
                <h1 className="w-full">
                YeBlog
                </h1>
            </Link>
            <div>
                <button className='btn-dark' onClick={onPublish}>
                    Publish
                </button>
            </div>
        </nav>
      <div className='mx-auto max-w-[900px] w-full'>
        <div className='relative w-full h-[300px] hover:opacity-80 bg-white border-4 border-grey mx-auto'>
          <img src={articleBannerUrl} alt='image'/>
        </div>
        <div className='p-7 m-auto w-full'>
          <h1 className='text-[48px] font-bold'>{articleTitle}</h1>
          {articleTags?.split(",").map((tag, index) =>(
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
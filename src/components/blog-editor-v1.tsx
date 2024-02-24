import { useState } from "react"
import { Link } from 'react-router-dom'
import { useContentContext } from "../context/content-context"
import Tiptap from "./blog-editor-v3"
import { Content } from "@tiptap/react"
import { PlusCircle, XCircle } from "lucide-react"

export default function BlogEditorV1() {

    const{ wholeContent, setWholeContent } = useContentContext()
    const{ articleBannerUrl, articleTitle, articleContent, articleTags} = wholeContent

    const[title, setTitle] = useState(articleTitle)
    const[bannerUrl, setBannerUrl] = useState(articleBannerUrl)
    const[addBlogBanner, setAddBlogBanner] = useState(false)
    const[addTags, setAddTags] = useState(false)
    const[tags, setTags] = useState(articleTags)
    const[content, setContent] = useState<Content>(articleContent)

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.code === "Enter"){
            e.preventDefault()
        }
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value)
        let input = e.target
        input.style.height = 'auto'
        input.style.height = input.scrollHeight + "px"
    }

    const onSaveDraft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const newBlog = {
            articleBannerUrl: bannerUrl,
            articleTitle: title,
            articleContent: content,
            articleTags: tags
        }
        setWholeContent(newBlog)
        console.log(wholeContent)
    }

  return (
    <div>
        <nav className='navbar'>
            <Link to={"/"} className="flex-none w-10">
                <h1 className="w-full">
                YeBlog
                </h1>
            </Link>
            <div className='flex items-center ml-auto gap-3 md:gap-6'>
                <button type="submit" className='btn-light' onClick={(e) => onSaveDraft(e)}>
                    Save Draft
                </button>
                <Link to={"/preview"}>
                    <button type="submit" className='btn-light'>
                        Preview
                    </button>
                </Link>
            </div>
        </nav>
        <section>
            <div className="mx-auto max-w-[900px] w-full">
                <div>
                    {!addBlogBanner ?
                        <button onClick={() => setAddBlogBanner(!addBlogBanner)}>
                            <PlusCircle />
                        </button>
                        :
                    <div>
                        <button onClick={() => setAddBlogBanner(!addBlogBanner)}>
                            <XCircle />
                        </button>
                        <div>
                            <input className="w-full p-5 outline-none border border-grey" placeholder="Add image url for blog banner"
                            value={bannerUrl}
                            onChange={(e) => setBannerUrl(e.target.value)}/>
                        </div>
                    </div>
                    } 
                </div>
                 <div>
                    {!addTags ?
                        <button onClick={() => setAddTags(!addTags)}>
                            <PlusCircle />
                        </button>
                        :
                    <div>
                        <button onClick={() => setAddTags(!addTags)}>
                            <XCircle />
                        </button>
                        <div>
                            <input className="w-full p-5 outline-none border border-grey" placeholder="Add different tags separated with comma"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}/>
                        </div>
                    </div>
                    } 
                </div>
                <textarea
                placeholder='Blog Title'
                className='text-4xl font-medium w-full h-20 outline-none resize-none mt-7 leading-tight placeholder:opacity-40'
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={(e) => handleTitleChange(e)}
                value={title}
                >

                </textarea>
                <hr className="w-full opacity-40 my-1"/>
                <Tiptap content={content} setContent={setContent}/>
            </div>
        </section>
    </div>
  )
}

import React from "react"
import { ArticleResultType } from "../types"
import { Bookmark, CircleUserRound } from "lucide-react"
import { Parser } from "html-to-react"
import { useNavigate } from "react-router-dom"

export default function Article(article: ArticleResultType) {

    const{ articleId, articleTitle, articleContent, articleTags} = article
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/article/${articleId}`)
    }

  return (
    <>
    <div className='max-w-[750px] my-1.5 p-5 bg-white cursor-pointer min-w-[400px] sm:w-full' onClick={handleClick}>
        <div className='flex items-center gap-2'>
            <CircleUserRound />
            <p>Ajay Patel</p>
            <p>Nov 7</p>
        </div>
        <div className='flex flex-col items-start w-full pl-9'>
            <h3 className='font-bold text-2xl'>{articleTitle}</h3>
            <p className='hidden md:line-clamp-3'>
                {Parser().parse(articleContent)}
            </p>
        </div>
        <div className='flex justify-between my-5 pl-9'>
            <div>
            {articleTags && articleTags?.split(",").map((tag, index) =>(
                <React.Fragment key={index}>
                <span className='batch'>{tag}</span>
                </React.Fragment>
            ))}
            </div>
            <div className='flex gap-3 items-center justify-end'>
                <p>7 min read</p>
                <Bookmark />
            </div>
        </div>
        <hr className="w-full opacity-40 my-1"/>
    </div>
    </>
  )
}

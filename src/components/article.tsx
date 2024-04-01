import { Parser } from 'html-to-react'
import { Bookmark, CircleUserRound } from 'lucide-react'
import React from 'react'
import { ArticleResultType, ArticleTag } from '../types/article-type'
import { useNavigate } from 'react-router-dom'
import { useTagResultContext } from '../context/tags-context'

export default function Article(article: ArticleResultType) {

    const { articleId, articleBannerUrl, articleTitle, articleContent, tags, readTime, createdAt, user} = article

    const { setUserId } = useTagResultContext()

    const day = new Date(createdAt).getDate()
    const monthName = new Date(createdAt).toLocaleString('default', { month: 'long' })
    const dateToDisplay = day + " " + monthName;

    const navigate = useNavigate();
    const gotoThatArticle = () =>{
        navigate(`/article/${articleId}`)
    }

    const handleClickOnUser = () => {
        setUserId(user.userId)
        navigate("/profile")
    }

  return (
    <section className='max-w-[950px] w-full flex p-7 bg-white mb-2.5 rounded-md'>
        <div className='w-full lg:w-[70%]'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <CircleUserRound onClick={() =>handleClickOnUser()}/>
                    <p className="font-semibold" onClick={() =>handleClickOnUser()}>{user.handleName}</p>
                    <p className="font-medium text-dark-grey">{dateToDisplay}</p>
                </div>
                <div className='flex flex-col items-start w-full py-3 cursor-pointer' onClick={gotoThatArticle}>
                    <h3 className='font-bold text-2xl line-clamp-2'>{articleTitle}</h3>
                    <p className='hidden md:line-clamp-2'>
                        {Parser().parse(articleContent)}
                    </p>
                </div>
            <div className='flex justify-between items-center'>
                <div className="mt-3">
                    {tags.map((tag: ArticleTag) =>(
                        <React.Fragment key={tag.tagId}>
                        <span className='mr-3 p-1.5 bg-dark-grey rounded'>{tag.tagLabel}</span>
                        </React.Fragment>
                    ))}
                </div>
                <div className='flex gap-3 items-center justify-end'>
                    <p className="text-dark-grey">{readTime}</p>
                    <Bookmark size={20} className='text-dark-grey' />
                </div>
            </div>
        </div>
        <div className="h-[130px] hidden md:block md:w-[25%] lg:block lg:w-[25%] ml-11 cursor-pointer" onClick={gotoThatArticle}>
            <img src={articleBannerUrl} alt=''/>
        </div>
    </section>
  )
}

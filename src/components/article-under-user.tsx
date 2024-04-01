import { Parser } from 'html-to-react'
import { ArticleResultTypeV2 } from '../types/article-type'
import { Bookmark } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

export default function ArticleUnderUser({article}: {article: ArticleResultTypeV2}) {

    const navigate = useNavigate();
    const gotoThatArticle = () =>{
        navigate(`/article/${article.articleId}`, {replace: true})
    }

    const day = new Date(article.createdAt).getDate()
    const monthName = new Date(article.createdAt).toLocaleString('default', { month: 'long' })
    const dateToDisplay =  monthName+ " " + day + ", " + new Date(article.createdAt).getFullYear();

    return (
        <section className='max-w-[950px] w-full flex p-7 bg-white mb-2.5 rounded-md'>
            <div className='w-full lg:w-[70%]'>
                    <div className='flex flex-col items-start w-full py-3 cursor-pointer' onClick={gotoThatArticle}>
                        <h3 className='font-bold text-2xl line-clamp-2'>{article.articleTitle}</h3>
                        <p className='hidden md:line-clamp-2'>
                            {Parser().parse(article.articleContent)}
                        </p>
                    </div>
                <div className='flex justify-between items-center'>
                    {/* <div className="mt-3">
                        {tags.map((tag: ArticleTag) =>(
                            <React.Fragment key={tag.tagId}>
                            <span className='mr-3 p-1.5 bg-dark-grey rounded'>{tag.tagLabel}</span>
                            </React.Fragment>
                        ))}
                    </div> */}
                    <p className='font-semibold text-dark-grey'>{dateToDisplay}</p>
                    <div className='flex gap-3 items-center justify-end'>
                        <p className="text-dark-grey">{article.readTime}</p>
                        <Bookmark size={20} className='text-dark-grey' />
                    </div>
                </div>
            </div>
            <div className="h-[130px] hidden md:block md:w-[25%] lg:block lg:w-[25%] ml-11 cursor-pointer" onClick={gotoThatArticle}>
                <img src={article.articleBannerUrl} alt=''/>
            </div>
        </section>
      )
}

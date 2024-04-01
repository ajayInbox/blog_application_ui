// import { useQuery } from '@tanstack/react-query'
// import { getArticleForLatest } from '../api-v2'
import { ArticleResultTypeV2 } from '../types/article-type'

export default function SmallArticleView({article}:{article: ArticleResultTypeV2}) {

  const day = new Date(article.createdAt).getDate()
  const monthName = new Date(article.createdAt).toLocaleString('default', { month: 'long' })
  const dateToDisplay = day + " " + monthName;

  // const queryResult = useQuery({
  //   queryKey: ["article",id],
  //   queryFn: () => getArticleForLatest(id)
  // })

  // let content = null
  // if(queryResult.isLoading){
  //   content = (<div>Loading...</div>)
  // }
  // else if(queryResult.isError){
  //   console.log(queryResult.error)
  //   content = (<div>{JSON.stringify(queryResult.error)}</div>) 
  // }
  // else{
  //   content = (
  //     <>
  //       <h1 className='font-bold p-3'>{queryResult.data.articleTitle}</h1>
  //       <div className='flex justify-between text-dark-grey'>
  //           <p className='pl-3'>{queryResult.data.createdAt}</p>
  //           <p className='pr-3'>{queryResult.data.readTime}</p>
  //       </div>
  //     </>
  //   )
  // }
  return (
    <article className='m-3 p-3 bg-grey rounded-md'>
        <h1 className='font-bold p-3'>{article.articleTitle}</h1>
        <div className='flex justify-between text-dark-grey'>
            <p className='pl-3'>{dateToDisplay}</p>
            <p className='pr-3'>{article.readTime}</p>
        </div>
    </article>
  )
}

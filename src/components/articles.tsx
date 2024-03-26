import Article from './article'
import { useQuery } from '@tanstack/react-query'
import { getAllArticles } from '../api-v2'
import React from 'react'
//import { articleList } from '../sample-data-home'

export default function Articles() {

  const articleQuery = useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles
  })

  console.log(articleQuery.data)


  if(articleQuery.isLoading) return <div>Loading...</div>
  if(articleQuery.status === "error") return <pre>{JSON.stringify(articleQuery.error)}</pre>

  return (
    <div className='flex flex-col items-center mt-3'>
      {articleQuery.data && articleQuery.data.map((article) =>(
        <React.Fragment key={article.articleId}>
          <Article {...article}/>
        </React.Fragment>
        
      ))}
    </div>
  )
}

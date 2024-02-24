import Article from './article'
import { useQuery } from '@tanstack/react-query'
import { getAllArticles } from '../api-v2'
import React from 'react'

export default function Articles() {

  const articleQuery = useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticles
  })

  console.log(articleQuery.data)


  if(articleQuery.isLoading) return <div>Loading...</div>
  if(articleQuery.status === "error") return <pre>{JSON.stringify(articleQuery.error)}</pre>

  return (
    <div className='flex flex-col items-center flex-1'>
      {articleQuery.data && articleQuery.data.map((article, index) =>(
        <React.Fragment key={index}>
          <Article {...article}/>
        </React.Fragment>
        
      ))}
    </div>
  )
}

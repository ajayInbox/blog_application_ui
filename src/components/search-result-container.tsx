import { useQuery } from '@tanstack/react-query'
import { useTagResultContext } from '../context/tags-context'
import { getTagAssociatedArticlesByTagId } from '../api-v2'
import React from 'react'
import Article from './article'

export default function SearchResultContainer() {

    const{ tagContent } = useTagResultContext()
    console.log(tagContent)

    const result = useQuery({
        queryKey: ["article", tagContent.tagId],
        queryFn: () => getTagAssociatedArticlesByTagId(tagContent.tagId)
    })

    console.log(result.data)

    let content = null
    if(result.isLoading){
        content = (<div>Loading...</div>)
    }
    else if(result.isError){
        console.log(result.error)
        content = (<div>{JSON.stringify(result.error)}</div>)
    }
    else{
        content = (
            <div className='flex flex-col items-center mt-3'>
                {result.data && result.data.map((article) =>(
                    <React.Fragment key={article.articleId}>
                        <Article {...article}/>
                    </React.Fragment>
                ))}
            </div>
        )
    }

  return (
    <section className='w-[70%] mx-auto bg-grey border border-grey'>
        <h1 className='text-2xl font-semibold pt-3'>'{tagContent.tagLabel}' Related Search</h1>
        {content}
    </section>
  )
}

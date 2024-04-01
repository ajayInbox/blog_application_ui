import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllTrandingTags } from '../api-v2'
import { useTagResultContext } from "../context/tags-context"
import { ArticleTagV2 } from '../types/article-type'
import { useNavigate } from 'react-router-dom'

export default function TrendingTagsComponent() {

  const allTags = useQuery({
    queryKey: ["tags"],
    queryFn: () => getAllTrandingTags()
  })

  console.log(allTags.data)
  const navigate = useNavigate()

  const { setTagContent } = useTagResultContext()
  const onTagClick = (tag: ArticleTagV2) => {
    setTagContent(tag)
    navigate("/search")
  }

  let content = null
  if(allTags.isLoading){
    content = (<div>Loading...</div>)
  }
  else if(allTags.isError){
    console.log(allTags.error)
    content = (<div>{JSON.stringify(allTags.error)}</div>)
  }
  else{
    content = (
      allTags.data?.map(( tag ) => (
        <React.Fragment key={tag.tagId}>
            <p className='batch cursor-pointer' onClick={() => onTagClick(tag)}>{tag.tagLabel}</p>
        </React.Fragment>
    ))
    )
  }

  return (
    <div className='m-3 p-3 bg-white rounded-md'>
        <h1 className='text-2xl font-semibold'>Recomended Topics</h1>
        {content}
    </div>
  )
}

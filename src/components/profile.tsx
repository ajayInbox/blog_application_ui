import React from 'react'
import { useTagResultContext } from '../context/tags-context'
import { useQuery } from '@tanstack/react-query'
import { getUserById } from '../api-v2'
import ArticleUnderUser from './article-under-user'

export default function Profile() {

  const { userId } = useTagResultContext()
  const user = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId)
  })
  console.log(user.data)

  return (
    <>
      <div className='bg-grey flex flex-col p-7 rounded-md items-center'>
      <div className='h-[170px] w-[170px] rounded-full border'>
      </div>
      <div className='w-[60%] border mt-3'/>
      <h1 className='text-3xl font-semibold'>{user.data?.handleName}</h1>
      <p className='text-2xl p-7'>Staff Developer Advocate at TBD; previously at GitHub</p>
      <div className='flex justify-between p-5 items-center border w-[50%] font-semibold text-dark-grey'>
        <p className='text-xl'>
          Joined on Dec 28 2023
        </p>
        <div className='flex justify-evenly gap-3 '>
          <p className='text-xl'>My Portfolio</p>
          <p className='text-xl'>GitHub</p>
          <p className='text-xl'>X</p>
        </div>
      </div>
      <div className='flex justify-between p-5 w-[50%] border'>
        <div className='flex flex-col items-center'>
          <p className='text-xl font-semibold text-dark-grey'>Education</p>
          <p className='text-xl'>Boston University</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-xl font-semibold text-dark-grey'>Work</p>
          <p className='text-xl'>Google</p>
        </div>
      </div>
      </div>
      <div className='mt-5 bg-grey mx-auto'>
        <h1 className="text-2xl font-semibold bg-white">Article List</h1>
        {
          user.data?.articles.map((article) => (
            <React.Fragment key={article.articleId}>
              <ArticleUnderUser article={article}/>
            </React.Fragment>
          ))
        }
      </div>
    </>

  )
}

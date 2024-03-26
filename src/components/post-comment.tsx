import React from 'react'

export default function PostComment() {
  return (
    <div className='w-[730px] p-3'>
        <h1 className='text-[18px] font-semibold py-3'>
            Leave a Comment
        </h1>
        <div className=''>
            <textarea
            placeholder='Write a comment here..'
            className='w-full h-[150px] p-3 border border-dark-grey rounded-md border-opacity-60'/>
            <button className='text-left bg-purple py-3 px-7 text-white rounded-xl my-3'>Post</button>
        </div>
    </div>
  )
}

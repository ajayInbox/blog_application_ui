import React from 'react'

export default function Sidebar() {
  return (
    <div className='p-5'>
    <div className=''>
        <h3 className='text-[16px] font-semibold pb-3'>Recomended Topics</h3>
        <p className='batch'>React</p>
        <p className='batch'>Data Engineering</p>
         <p className='batch'>React</p>
        <p className='batch'>Data Engineering</p>
         <p className='batch'>React</p>
        <p className='batch'>Data Engineering</p>
         <p className='batch'>React</p>
        <p className='batch'>Data Engineering</p>
        <p className='batch'>abdc</p>
    </div>
    <div className='py-3 flex flex-col gap-3'>
        <h3 className='text-[16px] font-semibold '>Trending Articles</h3>
        <p className='hover:bg-grey hover:rounded-lg'>Discover the Benefits of DEV Organization Accounts!</p>
        <p className='hover:bg-grey hover:rounded-lg'>Discover the Benefits of DEV Organization Accounts!Discover the Benefits of DEV Organization Accounts!</p>
        <p>Discover the Benefits of DEV Organization Accounts!</p>
        <p>Discover the Benefits of DEV Organization Accounts!</p>
        <p>Discover the Benefits of DEV Organization Accounts!</p>
    </div>
    </div>
  )
}

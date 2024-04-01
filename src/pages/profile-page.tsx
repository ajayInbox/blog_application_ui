import React from 'react'
import NavbarWithUser from '../components/navbar-with-user'
import Profile from '../components/profile'

export default function ProfilePage() {
  return (
    <>
    <NavbarWithUser/>
    <section className='w-[70%] mx-auto border border-grey'>
        <Profile/>
    </section>
    </>
  )
}

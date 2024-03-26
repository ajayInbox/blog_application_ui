import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function FollowUsComponent() {
  return (
    <div className='m-3 p-3 bg-white rounded-md'>
        <h1 className="text-2xl font-semibold">Follow Us</h1>
        <div className='flex items-center gap-20 pt-5 pb-3'>
        <Facebook className='cursor-pointer'/>
        <Instagram className='cursor-pointer' />
        <Twitter className='cursor-pointer' />
        <Linkedin className='cursor-pointer' />
        </div>
    </div>
  )
}

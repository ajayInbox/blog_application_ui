import { Pencil, Search } from 'lucide-react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NavbarWithUser() {
    const[searchbarVisibility, setSearchbarVisibility] = useState(false)
    const[openProfileMenu, setOpenProfileMenu] = useState(false)

    return (
      <div >
         <nav className="navbar">
          <Link to={"/"} className="w-25">
            <div className="bg-gradient-to-r from-dark-blue to-dark-purple text-transparent bg-clip-text">
              <p className="text-2xl font-semibold">Entropy</p>
            </div>
          </Link>
          <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " + (searchbarVisibility ? "show" : "hide")}>
            <input className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12" type="text" placeholder="Search..." />
            <Search size={16} className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"/>
          </div>
  
          <div className="flex items-center gap-3 md:gap-6 ml-auto">
            <button onClick={() => setSearchbarVisibility(!searchbarVisibility)} className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center">
            <Search size={16} />
            </button>
          </div>
  
          <Link to={"/editor"} className="hidden md:flex gap-2 link md:items-center">
            <Pencil size={16} />
            <p>Write</p>
          </Link>
          <div className='flex flex-col items-center relative'>
            <div className="border border-dark-grey h-11 w-11 rounded-full cursor-pointer" onClick={() => setOpenProfileMenu(!openProfileMenu)}>
            </div>
            {openProfileMenu && (
                <div className='absolute top-12 p-5 border border-dark-grey bg-dark-grey rounded-md flex flex-col items-center'>
                    <p className='cursor-pointer pb-1.5'>Profile</p>
                    <div className='h-1 w-20 bg-white'/>
                    <p className='pt-1.5 cursor-pointer'>Log out</p>
                </div>
            )}
          </div>
         </nav>
         <Outlet/>
      </div>
    )
}

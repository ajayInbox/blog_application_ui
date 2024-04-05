//import Navbar from '../components/navbar'
import Articles from '../components/articles'
import Sidebar from '../components/sidebar'
import NavbarWithUser from '../components/navbar-with-user'

export default function Home() {

  return (
    <>
    {/* <NavbarWithUser/> */}
    <main className='flex'>
        <section className='w-[70%] mx-auto bg-grey border border-grey'>
            <Articles/>
        </section>
        <section className='hidden max-w-[30%] md:block bg-grey sidebar'>
            <Sidebar/>
        </section>
    </main>
    </>
  )
}

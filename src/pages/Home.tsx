import Navbar from '../components/navbar'
import Articles from '../components/articles'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className='flex'>
        <section className='w-full m-auto p-3 bg-grey border border-grey'>
            <Articles/>
        </section>
        <section className='hidden max-w-[30%] md:block'>
            <Sidebar/>
        </section>
    </main>
    </>
  )
}

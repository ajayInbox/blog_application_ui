import { Link } from 'react-router-dom'
import UserCard from '../components/user-card'
import ViewArticle from '../components/view-article'

export default function ViewArticlePage() {
  return (
    <div>
        <nav className='navbar justify-between'>
            <Link to={"/"} className="flex-none w-10">
                <h1 className="w-full">
                    YeBlog
                </h1>
            </Link>
        </nav>
        <div className='flex bg-grey'>
            <section className='w-full mx-auto'>
                <ViewArticle/>
            </section>
            <section className='hidden w-[25%] fixed right-0'>
                <UserCard/>
            </section>
        </div>
    </div>
  )
}

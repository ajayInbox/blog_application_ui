import { Link, useParams } from 'react-router-dom'
import ViewArticle from '../components/view-article'
import { getArticleById } from '../api-v2'
import { useQuery } from '@tanstack/react-query'

export default function ViewArticlePage() {

    const params = useParams()
    const id = Number(params.articleId)

    const individualArticleQuery = useQuery({
        queryKey: ["articles", id],
        queryFn: () => getArticleById(id)
    })

    const{ data } = individualArticleQuery
    console.log(data)

    if(individualArticleQuery.isLoading) return <div>Loading...</div>
    if(individualArticleQuery.isError) return <div>{JSON.stringify(individualArticleQuery.error)}</div>

  return (
    <div>
        <nav className='navbar justify-between'>
            <Link to={"/"} className="flex-none w-10">
                <h1 className="w-full">
                    YeBlog
                </h1>
            </Link>
        </nav>
        <div className='bg-grey'>
            <section className='mx-auto max-w-[1300px] w-full bg-white'>
                <div className='relative w-full h-[400px] hover:opacity-80 border-4 border-grey mx-auto'>
                    <img src={data?.articleBannerUrl} alt='image'/>
                </div>
                <ViewArticle data={data}/>
            </section>
        </div>
    </div>
  )
}

import { articleList } from '../sample-data-home'

export default function TrendingArticlesComponent() {
  return (
    <div className='m-3 p-3 bg-white rounded-md'>
        <h1 className="text-2xl font-semibold">Trending Articles</h1>
        {articleList.map((article) =>(
                <div key={article.articleId} className='bg-grey p-3 rounded-md m-3 cursor-pointer'>
                    <h2 className="text-xl font-medium">{article.articleTitle}</h2>
                    <p className='text-right text-dark-grey font-medium'>-by Author</p>
                </div>
        ))}
    </div>
  )
}

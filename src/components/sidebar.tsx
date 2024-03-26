import FollowUsComponent from './follow-us-component'
import TrendingTagsComponent from './trending-tags-component'
import TrendingArticlesComponent from './trending-articles-component'

export default function Sidebar() {
  return (
    <div className='mr-7'>
      <FollowUsComponent/>
      <TrendingTagsComponent/>
      <TrendingArticlesComponent/>
    </div>
  )
}

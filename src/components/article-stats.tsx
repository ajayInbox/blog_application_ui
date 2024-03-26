import { BarChart2, Share2, ThumbsUp } from 'lucide-react'

export default function ArticleStat() {
  return (
    <div className="flex flex-col gap-5 items-center pt-11 ">
        <div className="">
            <ThumbsUp size={19} strokeWidth={0.75} />
            <p className="text-sm">Likes</p>
            <p className="text-sm">100</p>
        </div>
        <div className="">
            <BarChart2 size={19} strokeWidth={3} />
            <p className="text-sm">views</p>
            <p className="text-sm">1.66k</p>
        </div>
        <div className="">
            <Share2 size={19} strokeWidth={0.75} />
            <p className="text-sm">share</p>
        </div>   
    </div>
  )
}

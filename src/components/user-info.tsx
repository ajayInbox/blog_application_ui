import { CircleUserRound, MessageCircle, ThumbsUp } from 'lucide-react'
import React from 'react'

export default function UserInfo() {
  return (
    <div className="border w-full h-[120px] flex items-center">
        <CircleUserRound size={"100px"} strokeWidth={"0.5px"} />
        <div className="">
            <p className="">User Name</p>
            <p className="">Published at</p>
        </div>
    </div>
  )
}

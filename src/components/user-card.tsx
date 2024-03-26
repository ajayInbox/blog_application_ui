import { CircleUserRound } from "lucide-react";
import { UserType } from "../types/user-type";

export default function UserCard({user}:{user:UserType}) {
  return (
    <div className=" max-w-[370px] h-[300px] p-5 bg-grey flex flex-col items-center rounded-lg mx-3 mt-7 mb-3">
        <p className="text-[20px] font-bold">Author</p>
        <p className="">{user.handleName}</p>
        <CircleUserRound size={120} strokeWidth={1.5} />
        <p className="p-3">Something about user from bio or self introduction</p>
        <button className="px-20 py-3 bg-twitter text-white rounded-md">Follow</button>
    </div>
  )
}

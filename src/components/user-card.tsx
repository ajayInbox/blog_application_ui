
export default function UserCard() {
  return (
    <div className=" max-w-[370px] h-[300px] p-5 border-opacity-60 bg-white">
        <div className="flex items-center justify-between">
            <section className="">
                <p className="pb-3 text-dark-grey font-semibold text-xl">full Name</p>
                <p className="pb-3 text-dark-grey font-semibold text-xl">handle name</p>
            </section>
            <div className="border border-dark-grey w-[65px] h-[65px] rounded-full">
                <img src="" alt="" className="cover-fit"/>
            </div>
        </div>
        <hr className="w-full opacity-40 my-1"/>
        <div className="p-5 flex flex-col">
            <p className="pb-3 text-dark-grey font-semibold text-xl">grug no dev, grug small brain</p>
            <p className="pb-3 text-dark-grey font-semibold text-xl">Joined: <span>11 Nov</span></p> 
            <p className="pb-3 text-dark-grey font-semibold text-xl">Worked: <span>Infosys Limited</span></p>
            <button className="text-white bg-purple p-3 font-semibold text-xl">Follow</button>
        </div>
    </div>
  )
}

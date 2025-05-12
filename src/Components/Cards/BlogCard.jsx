export default function BlogCard({card}){

    return(
        <>
        <div className="w-56 md:w-[20rem] rounded-lg overflow-hidden shadow-lg shrink-0 bg-white">
  <img className="w-full rounded-2xl" src={card.image} alt="Sunset in the mountains"></img>
  <div className="px-6 py-4">
  <p class="text-sm mt-6">{card.date}</p>
           
    <div className="font-bold text-xl mb-2">{card.title}</div>
    <p className="text-gray-700 text-base">
      {card.description}
    </p>
  </div>
  <div className="px-6 pt-4 mb-6">
  <button className="border-[gray] border-[1px] px-3 py-2 rounded-full text-black w-fit">Read more</button>

  </div>
</div>
        </>
    )
}


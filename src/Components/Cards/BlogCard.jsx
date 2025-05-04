export default function BlogCard(){
    return(
        <>
        <div className="w-56 md:w-[20rem] rounded-2xl overflow-hidden shadow-lg shrink-0">
  <img className="w-full rounded-2xl" src="/public/assets/Images/blogs/seo.jpg" alt="Sunset in the mountains"></img>
  <div className="px-6 py-4">
  <p class="text-sm mt-6">February 8, 2025</p>
           
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 mb-6">
  <button className="border-[gray] border-[1px] px-3 py-2 rounded-full text-black w-fit">Read more</button>

  </div>
</div>
        </>
    )
}


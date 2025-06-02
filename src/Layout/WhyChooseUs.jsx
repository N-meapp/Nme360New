export default function WhyChooseUs(){
    return(
    <div class="relative bg-cover bg-center m-4 sm:m-8 md:m-20 rounded-lg h-[560px] jamjuree mt-12">
    <div class="backgroundimg">
    <img alt="Background image" class="absolute object-center inset-0 w-full h-full object-cover rounded-lg" src="/assets/Images/About/trust.jpg" />
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="absolute inset-0 bg-gradient-to-b from-[black] to-[#ffffff00] p-6 sm:p-8 md:p-12 rounded-lg mx-auto w-full  h-[560px]">
        <div class="flex flex-col sm:flex-row md: items-center justify-center">
          <div class="sm:w-2/3 w-full mb-6 sm:mb-0">
            <p class="text-white mb-2 font-bai text-base sm:text-lg">
              Why Choose Us: 
              <span class="text-[#A49DFF]">The Trust Factor</span>
            </p>
            <h2 class="text-2xl sm:text-[40px] lg:text-[54px] font-bold mb-4 text-white leading-snug lg:leading-[70px]">
              Technology That <br /> Works. Partners You  <br></br> Trust.
            </h2>
            <ul class="list-disc list-inside space-y-2 text-white text-sm sm:text-base">
              <li>"End-to-end IT expertise."</li>
              <li>"Future-ready solutions."</li>
              <li>"Unmatched customer support."</li>
            </ul>
          </div>
          <div class="sm:w-1/3 flex justify-center mt-16 leading-loose sm:mt-0 bg-[#0000006b] bg-opacity-25 backdrop-blur-sm text-[#d9d8d8] text-center p-4 rounded-xl">
           <h3 className="quote" >Trust is built through consistency, transparency, and putting our clients first.</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
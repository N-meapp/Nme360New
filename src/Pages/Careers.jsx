import { useContext } from "react";
import { ScrollContext } from "../main";

export default function Careers(){

      const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
        const translateY = scrollHeight * 0.09; // Move slower than scroll
        const translateX = scrollHeight * 0.08;
        const translateY3 = scrollHeight * 0.03;
    return(
        <>

        <div className="w-full h-auto pt-28 md:pt-20 bg-white pb-10 md:pb-20 jamjuree">

                <div className="text-center md:py-12 px-12 pb-0"
                style={{
                    transform: `translateY(${-translateY}px)`,
                    transition: "transform 0.05s linear ease",
                }}>
                
                    <p className="text-black text-[24px]">
                    Careers :
                        <a className="text-[#3A329D]" href="#">
                        The What
                        </a>
                    </p>
                    <h2 className="text-4xl md:text-6xl font-semibold text-black md:mt-8 mt-4 mb-4 md:mb-8">

                        Building the Future Together
                        </h2>
                    <p className="text-black max-w-[901px] mx-auto">
                    Join N-me 360 and be part of a dynamic team driving innovation, growth, and success in the tech world.
                    </p>
                </div>
<div className="w-full flex flex-col lg:flex-row items-center justify-between gap-1 px-6 lg:px-16 mt-10 md:mt-10">
<div className="w-full lg:w-1/2 flex justify-center"
style={{
    transform: `translateX(${-translateX}px)`,
    transition: "transform 0.05s linear ease",
}}>
  <img src="/public/assets/Images/Careers/careers.png" className="w-[350px] lg:w-[500px] rounded-lg"></img>
</div>



<div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 sm:gap-10 mt-10 lg:mt-0"
style={{
    transform: `translateX(${translateX}px)`,
    transition: "transform 0.05s linear ease",
}}
>
  <div className="flex items-center gap-4">
    <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#fddab7] rounded-full">
        <img src="/public/assets/Images/Careers/innovative.png" alt="Innovative Work Environment Icon" className="w-[30px] h-[30px]"></img>
    </div>
    <p className="text-lg sm:text-2xl font-semibold">Innovative Work Environment</p>
</div>

<div className="flex items-center gap-4">
    <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#d1ff8d] rounded-full">
        <img src="/public/assets/Images/Careers/careergrowth.png" alt="Career Growth & Learning Icon" className="w-[30px] h-[30px]"></img>
    </div>
    <p className="text-lg sm:text-2xl font-semibold">Career Growth & Learning</p>
</div>

<div className="flex items-center gap-4">
    <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#aee4f7] rounded-full">
        <img src="/public/assets/Images/Careers/teamculture.png" alt="Collaborative Team Culture Icon" className="w-[30px] h-[30px]"></img>
    </div>
    <p className="text-lg sm:text-2xl font-semibold">Collaborative Team Culture</p>
</div>

<div className="flex items-center gap-4">
    <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#cafffb] rounded-full">
        <img src="/public/assets/Images/Careers/it infrasture.png" alt="Reliable IT Infrastructure Icon" className="w-[30px] h-[30px]"></img>
    </div>
    <p className="text-lg sm:text-2xl font-semibold">Reliable IT Infrastructure</p>
</div>



    <div>
        <p className="text-sm sm:text-base text-justify">
          Step into a dynamic world where innovation drives impact. At N-me 360, we nurture talent, champion growth, and develop next-generation solutions. Whether you're launching your career or bringing years of experience, your journey starts here.            </p>
    </div>
</div>
</div>


<div className=" w-full max-w-[40rem] mx-auto h-auto mt-28 text-center px-4">
<h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold mb-4">
   Current Openings
</h1>
</div>

<div className="w-full flex justify-center px-4 mt-20">
<div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">


  
      
        <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-xl shadow-md transform transition hover:scale-105">
            <div className="absolute bottom-0 left-0 w-full"></div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Mern Stack Developer</h3>
                <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
            </div>
            <p className="text-gray-600 mt-2">React.js | Node.js | Express.js | MongoDB</p>
            <p className="text-gray-700 mt-3"><strong>Experience:</strong> Fresher</p>
        </div>

    
        <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-xl shadow-md transform transition hover:scale-105">
            <div className="absolute bottom-0 left-0 w-full"></div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Graphic Designer</h3>
                <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
            </div>
            <p className="text-gray-600 mt-2">Photoshop | Illustrator | InDesign | CorelDraw</p>
            <p className="text-gray-700 mt-3"><strong>Experience:</strong> 0 - 2 Yr</p>
        </div>

  
        <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-xl shadow-md transform transition hover:scale-105">
            <div className="absolute bottom-0 left-0 w-full"></div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Telecallers</h3>
                <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
            </div>
            <p className="text-gray-600 mt-2">Verbal communication | MS Office</p>
            <p className="text-gray-700 mt-3"><strong>Experience:</strong> 0 - 2 Yr</p>
        </div>

       
        <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-xl shadow-md transform transition hover:scale-105">
            <div className="absolute bottom-0 left-0 w-full"></div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Marketing Executives</h3>
                <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
            </div>
            <p className="text-gray-600 mt-2">Written & verbal communication | Google Analytics</p>
            <p className="text-gray-700 mt-3"><strong>Experience:</strong> 0 - 2 Yr</p>
        </div>

      
        <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-xl shadow-md transform transition hover:scale-105">
            <div className="absolute bottom-0 left-0 w-full"></div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Content Writer</h3>
                <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
            </div>
            <p className="text-gray-600 mt-2">English Proficiency | Content Creation</p>
            <p className="text-gray-700 mt-3"><strong>Experience:</strong> 0 - 2 Yr</p>
        </div>

        
        <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-xl shadow-md transform transition hover:scale-105">
            <div className="absolute bottom-0 left-0 w-full"></div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">SEO Analyst</h3>
                <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
            </div>
            <p className="text-gray-600 mt-2">Google Analytics | Search Console | Keyword Planner</p>
            <p className="text-gray-700 mt-3"><strong>Experience:</strong> 0 - 2 Yr</p>
        </div>
        <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-xl shadow-md transform transition hover:scale-105">
          <div className="absolute bottom-0 left-0 w-full"></div>
          <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Video Editor</h3>
              <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
          </div>
          <p className="text-gray-600 mt-2">Premiere Pro | After Effects</p>
          <p className="mt-3 text-gray-700"><strong>Experience:</strong> 0 - 2 Yr</p>
      </div>
      
      <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-xl shadow-md transform transition hover:scale-105">
          <div className="absolute bottom-0 left-0 w-full"></div>
          <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Content Creator</h3>
              <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
          </div>
          <p className="text-gray-600 mt-2">Excellent writing, editing, and proofreading</p>
          <p className="mt-3 text-gray-700"><strong>Experience:</strong> 1 - 2 Yr</p>
      </div>
      
    </div>
</div>


<div id="popup-modal" className="fixed inset-0 bg-black bg-opacity-50 hidden flex justify-center items-center overflow-y-auto">
<div className="bg-white mt-20 p-6 rounded-xl shadow-lg max-w-6xl w-full max-h-[80vh] overflow-y-auto">
  <h3 className="text-xl font-semibold" id="modal-title"></h3>
  <p className="text-gray-700 mt-2" id="modal-content"></p>
  <button id="close-modal" className="mt-4 bg-[#3F37A5] text-white px-4 py-2 rounded-lg">Close</button>
</div>
</div>







<div className=" w-full max-w-[40rem] mx-auto h-auto mt-28 text-center px-4">
<h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold mb-4"
style={{
    transform: `translateY(${translateY3}px)`,
    transition: "transform 0.05s linear ease",
}}>
 Apply for a Job
</h1>
</div>

<form action="https://formsubmit.co/nme360info@gmail.com"
className="w-4/5 p-6 md:p-10 shadow-md  mt-10 md:mt-20 mx-auto">

<input type="hidden" name="_captcha" value="false"></input>
<input type="hidden" name="_next" value="http://127.0.0.1:5500/NME360/careers.html"></input>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    

    <div className="w-full">
        <label className="block text-[#8D8D8D] text-sm">Full Name</label>
        <input type="text" name="name" required 
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>
    </div>

 
    <div className="w-full">
        <label className="block text-[#8D8D8D] text-sm">Email</label>
        <input type="email" name="email" required
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>
    </div>

   
    <div className="w-full">
        <label className="block text-[#8D8D8D] text-sm">Phone Number</label>
        <input type="tel" name="phone" required
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>
    </div>

    <div className="w-full">
        <label className="block text-[#8D8D8D] text-sm">Position Applied For</label>
        <input type="text" name="position" required
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>
    </div>


    <div className="w-full md:col-span-2">
        <label className="block text-[#8D8D8D] text-sm">Upload Resume</label>
        <input type="file" name="attachment" accept=".pdf,.doc,.docx,.jpg,.png"
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>
    </div>

  
    <div className="w-full md:col-span-2">
        <label className="block text-[#8D8D8D] text-sm">Why should we hire you?</label>
        <textarea name="message" rows="4" required
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></textarea>
    </div>
</div>


<button type="submit"
    className="w-full bg-black text-white py-3 md:py-4 text-base md:text-lg hover:bg-gray-700 mt-6">
    Submit
</button>
</form>

</div>

        </>
    )
}
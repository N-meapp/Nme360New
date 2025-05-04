import { useContext } from "react";
import { ScrollContext } from "../main";

export default function ContactUs() {

     const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
            const translateY = scrollHeight * -0.2; // Move slower than scroll
            const translateX = scrollHeight * 0.08;
            const translateY3 = scrollHeight * 0.03;

  return (
    <>
      <div className="w-full h-auto pt-28 md:pt-20 bg-white pb-10 md:pb-20 jamjuree">
        <div
          className="text-center md:py-12 px-12 pb-0"
          style={{
            transform: `translateY(${-translateY}px)`,
            transition: "transform 0.05s linear ease",
          }}
        >
          <p className="text-black text-[24px]">
            Call to Action:
            <a className="text-[#3A329D]" href="#">
              The Next Step
            </a>
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold text-black md:mt-8 mt-4 mb-4 md:mb-8">
            Contact Us
          </h2>
          <p className="text-black max-w-[901px] mx-auto">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div class=" flex items-center justify-center  ">
          <div class="w-full max-w-6xl bg-white rounded-lg  p-8 md:flex">
            <div class="md:w-1/2 bg-black text-white p-8 rounded-lg md:rounded-r-none">
              <h2 class="text-3xl font-semibold mb-4">Contact Information</h2>
              <h1 class="mb-5 font-thin">
                Say something to start a live chat!
              </h1>

              <div class="mb-8">
                <i class="fas fa-phone-alt mr-2"></i> +91 9072919991
              </div>
              <div class="mb-8">
                <i class="fas fa-envelope mr-2"></i> nme360info@gmail.com
              </div>
              <div class="mb-8">
                <i class="fas fa-map-marker-alt mr-2"></i> Carnival Infopark
                Phase 1, Infopark campus kakkanad, Kochi, Kerala 682030
              </div>
            </div>
            <div class="md:w-1/2 p-8 h-[667px]">
              <form>
                <div class="flex flex-wrap -mx-2 mb-4">
                  <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <label class="block text-[#8D8D8D] text-[12px]">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"
                    ></input>
                  </div>
                  <div class="w-full md:w-1/2 px-2">
                    <label class="block text-[#8D8D8D] text-[12px]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"
                    ></input>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-2 mb-4">
                  <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <label class="block text-[#8D8D8D] text-[12px]">
                      Email
                    </label>
                    <input
                      type="email"
                      class="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"
                    ></input>
                  </div>
                  <div class="w-full md:w-1/2 px-2">
                    <label class="block text-[#8D8D8D] text-[12px]">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      class="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"
                    ></input>
                  </div>
                </div>
                <div class="mb-4">
                  <h3 class="font-semibold text-[1.5rem]">Select Subject?</h3>
                  <div class="row enquiry mt-3">
                    <div class="flex col-lg-3 enquiry-box">
                      <input
                        type="radio"
                        name="subject"
                        class="mr-2 "
                        checked
                      ></input>
                      <label class="mr-4 ">General Inquiry</label>
                    </div>
                    <div class="flex col-lg-3 enquiry-box">
                      <input
                        type="radio"
                        name="subject"
                        class="mr-2 "
                        checked
                      ></input>
                      <label class="mr-4">Development</label>
                    </div>
                    <div class="flex col-lg-3 enquiry-box">
                      <input
                        type="radio"
                        name="subject"
                        class="mr-2 "
                        checked
                      ></input>
                      <label class="mr-4">Designing</label>
                    </div>
                    <div class="flex col-lg-3 enquiry-box">
                      <input
                        type="radio"
                        name="subject"
                        class="mr-2 "
                        checked
                      ></input>
                      <label>Hardware </label>
                    </div>
                  </div>
                </div>
                <h1>
                  <div class="mb-5 pt-10 ">
                    <label class="block text-[#8D8D8D] text-[12px]">
                      Message
                    </label>
                    <textarea
                      class="w-full h-[40px] border-b-2 border-gray-300 focus:border-black outline-none py-2"
                      rows="4"
                      placeholder="Write your message.."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    class="bg-black text-white px-4 h-[50px] w-[205px] mt-8 rounded-[4px] items-center"
                  >
                    Send Message
                  </button>
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

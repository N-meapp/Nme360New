import { useContext } from "react";
import { ScrollContext } from "../main";
import ContactUsSection from "../Layout/Admin/ContactUsSection";
import Footer from "../Layout/Footer";

export default function ContactUs() {

  const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
  const translateY = scrollHeight * -0.2; // Move slower than scroll
  const translateX = scrollHeight * 0.08;
  const translateY3 = scrollHeight * 0.03;


  return (
    <>
      <div className="w-full h-auto pt-28 md:pt-20 bg-[#f9f9f9] pb-10 md:pb-20 jamjuree">
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

              <div class="mb-8 flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={14} viewBox="0 0 512 512"><path fill="currentColor" d="m493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464c0-11.2-7.7-20.9-18.6-23.4"/></svg>                <h3>
                  +91 9072919991
                </h3>
              </div>
              <div class="mb-8 flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 26 26"><path fill="currentColor" d="M13.14 11.949a.25.25 0 0 1-.302 0L6.183 6.83c-.358-.275-.155-.83.303-.83h13.028c.459 0 .661.555.303.83zM22 9.491v9.527c0 .54-.473.982-1.05.982H5.05C4.473 20 4 19.558 4 19.018V9.49c0-.413.515-.638.85-.383l7.982 5.971a.3.3 0 0 0 .336 0l7.981-5.971c.336-.255.851-.03.851.383"/></svg>                <h3>nme360info@gmail.com</h3>
              </div>
              <div class="mb-8 flex gap-2 content-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="self-start" width={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                <h3>Carnival Infopark
                  Phase 1, Infopark campus kakkanad, Kochi, Kerala 682030</h3>
              </div>
            </div>
            <div class="md:w-1/2 p-8 h-[667px]">
             <ContactUsSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

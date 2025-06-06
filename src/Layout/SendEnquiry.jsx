import { useState } from "react";
import EnquiryModal from "../Components/Modals/EnquiryModal";

export default function SendEnquiry({ title, image }) {

  const [isModalOpened, setIsModalOpened] = useState(false)
  


  return (
    <div
      className="w-fit md:w-full px-3 h-fit md:mx-auto py-4 shrink-0 rounded-xl md:h-52 bg-[#f7f6f6] flex flex-col gap-10 md:justify-between relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-[black] to-[#ffffff00] absolute top-0 left-0 rounded-xl"></div>
      <h3 className="text-white md:text-xl md:font-extralight z-10">{title}</h3>
      <div>
        <div className="flex gap-2 flex-col">
          <a href={`https://wa.me/9656629064?text=I want to know about ${title},`} >
            <button className="w-full flex  justify-center gap-2 rounded-lg bg-[white] items-center px-4 py-2 z-10">
              <h3 className="text-xs text-[gray]">Send enquiry via </h3>
              <img className="md:w-5 w-4 h-4 md:h-5" src="/assets/Images/logo/whatsapp-svgrepo-com.svg"></img>
            </button>
          </a>
          <button onClick={() => {
            setIsModalOpened(true)
          }} className="w-full flex justify-center gap-2 rounded-lg bg-[white] items-center py-2 z-10">
            <h3 className="text-xs text-[gray]">Send enquiry via </h3>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-5 w-4 h-4 md:h-5"
              viewBox="0 0 512 512"
            >
              <path
                fill="#96a9b2"
                d="M511.824 425.007c1.941-5.245-220.916-173.519-220.916-173.519c-27.9-20.589-42.574-20.913-70.164 0c0 0-222.532 168.138-220.659 173.311l-.045.038c.023.045.06.076.091.117a48.5 48.5 0 0 0 8.119 14.157c1.473 1.786 3.248 3.282 4.955 4.837l-.083.064c.136.121.317.177.453.298c7.235 6.454 16.359 10.634 26.495 11.827c.159.019.287.102.446.121h.612c1.541.147 3.006.517 4.584.517h420.721c20.717 0 38.269-13.028 45.241-31.291c.083-.136.211-.234.287-.374z"
                stroke-width="13"
                stroke="#96a9b2"
              />
              <path
                fill="#b9c5c6"
                d="M256.133 232.176L1.216 423.364V152.515c0-26.4 21.397-47.797 47.797-47.797h414.24c26.4 0 47.797 21.397 47.797 47.797v270.849z"
                stroke-width="13"
                stroke="#b9c5c6"
              />
              <path
                fill="#edece6"
                d="m4.189 135.896l217.645 170.949c27.47 20.271 41.918 20.591 69.083 0L508.22 136.167c-3.77-6.834-9.414-12.233-15.869-16.538l2.989-2.342c-7.295-6.641-16.62-10.946-26.971-12.058l-424.455.015c-10.322 1.097-19.662 5.417-26.942 12.043l2.967 2.313c-6.38 4.245-11.972 9.551-15.75 16.296"
                stroke-width="13"
                stroke="#edece6"
              />
              <path
                fill="#dce2e2"
                d="M4.118 136.254C2.207 141.419 221.63 307.099 221.63 307.099c27.47 20.271 41.918 20.591 69.083 0c0 0 219.103-165.546 217.258-170.64l.045-.037c-.022-.045-.059-.074-.089-.115a47.7 47.7 0 0 0-7.994-13.939c-1.45-1.759-3.198-3.231-4.878-4.763l.082-.063c-.134-.119-.312-.175-.446-.294c-7.124-6.354-16.107-10.47-26.086-11.645c-.156-.019-.283-.1-.439-.119h-.602c-1.517-.145-2.96-.509-4.514-.509H48.81c-20.398 0-37.68 12.828-44.543 30.809c-.082.134-.208.231-.283.368z"
                stroke-width="13"
                stroke="#dce2e2"
              />
              <path
                fill="#dce2e2"
                d="M291.401 154.645h-38.632a6.155 6.155 0 0 0-6.155 6.155v21.722a6.155 6.155 0 0 0 6.155 6.155h31.415a6.155 6.155 0 0 1 6.155 6.155v11.616a6.155 6.155 0 0 1-6.155 6.155h-31.415a6.155 6.155 0 0 0-6.155 6.155v23.578a6.155 6.155 0 0 0 6.155 6.155h41.316a6.155 6.155 0 0 1 6.155 6.155v12.441a6.155 6.155 0 0 1-6.155 6.155h-75.76a6.155 6.155 0 0 1-6.155-6.155V136.461a6.155 6.155 0 0 1 6.155-6.155h74.81c3.749 0 6.627 3.322 6.092 7.033l-1.733 12.028a6.156 6.156 0 0 1-6.093 5.278"
                stroke-width="13"
                stroke="#dce2e2"
              />
            </svg>
          </button>
        </div>
      </div>
      {isModalOpened ?
        <EnquiryModal setIsModalOpened={setIsModalOpened} title={title} />
        :
        null
      }
    </div>
  );
}

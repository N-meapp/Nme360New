import { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { ScrollContext } from "../main";

export default function LandingSection() {

  const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
  const translateY = scrollHeight * -0.2; // Move slower than scroll
  const radius = `${Math.min(Math.max(1, scrollHeight * 0.1), 24)}px`; // min 16px, max 50px
  const width = `${Math.max(98, 100 - scrollHeight * 0.01)}%`;







  return (
    <>
    {/* <div className="w-full absolute h-screen bg-[#ff000000] z-50 text-[white]  pl-[108px] content-end">
    <h3 className="text-[60px] md:text-[90px] lg:text-[135px] xl:text-[180px] lg:leading-[173px] md:leading-tight font-semibold poppins w-full" style={{
                transform: `translateY(${translateY}px)`,
                transition: "transform 0.05s linear ease",
              }}>
                your future
                <br />
                coded
              </h3>
    </div> */}
      <div className="w-full h-fit bg-[white] ">
        <div
          className="bg-[white] mx-auto w-full h-screen bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('/public/assets/Images/header/Rectangle.png')",
            width: width,
            borderRadius: radius,
            transition: "width 0.05s linear ease, border-radius 0.05s ease",


          }}
        >
          <div className="w-full h-full bg-[#00000080] top-0 content-center"
            style={{
              borderRadius: radius,
              transition: "border-radius 0.05s ease",
            }}

          >
            <div className={`text-[white] md:hidden flex w-full text-center top-0 bottom-0 `}>
              <h3 className="text-[80px] leading-tight font-semibold poppins w-full" style={{
                transform: `translateY(${translateY}px)`,
                transition: "transform 0.05s linear ease",
              }}>
                your future
                <br />
                coded
              </h3>
              
            </div>
            <div className={`text-[white] absolute bottom-4 pl-[108px] w-full pr-[28px] md:flex hidden`}>
              <h3 className="text-[60px] md:text-[90px] lg:text-[135px] xl:text-[180px] lg:leading-[173px] md:leading-tight font-semibold poppins w-full" style={{
                transform: `translateY(${translateY}px)`,
                transition: "transform 0.05s linear ease",
              }}>
                your future
                <br />
                coded
              </h3>
              <h3 className="text-[36px] leading-[36px] w-fit content-end font-semibold text-right poppins">
                Revolutionizing
                <br />
                IT for a
                <br />
                Connected
                <br />
                World.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

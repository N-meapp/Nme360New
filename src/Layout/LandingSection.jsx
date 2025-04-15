import { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { ScrollContext } from "../main";

export default function LandingSection() {

    const { scrollHeight,setScrollHeight } = useContext(ScrollContext);
    const translateY = scrollHeight * -0.2; // Move slower than scroll
    const radius = Math.min(scrollHeight * 0.5, 50); // cap it at 50px



    
    
  return (
    <>
      <div 
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/public/assets/Images/header/Rectangle.png')",
          borderRadius:`{${radius}}`,
          transition: "border-radius 0.2s ease",


        }}
      >
        <div className="w-full h-full bg-[#00000080] top-0">
          <div className={`text-[white] absolute bottom-4 flex pl-[108px] w-full pr-[28px]`}>
            <h3 className="text-[45px] md:text-[90px] lg:text-[135px] xl:text-[180px] leading-[173px] font-semibold poppins w-full"  style={{
        transform: `translateY(${translateY}px)`,
        borderRadius:`{${radius}}`,
        transition: "transform 0.05s linear, border-radius 0.2s ease",
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
    </>
  );
}

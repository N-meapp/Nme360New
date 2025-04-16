import { useState } from "react";
import Scroll from "../Components/Scrollbar/SmoothScroll";

export default function AboutUsSection({
  isPointLeft,
  leftTranslateX,
  rightTranslateX,
}) {

    console.log(rightTranslateX,leftTranslateX);
    
  return (
    <>
      <div className="w-full fixed -z-10 h-[500rem]">
        <div className="w-full h-screen p-2">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl flex"
            // style={{
            //     backgroundImage: "url('/public/assets/Images/header/us.jpg",
            // }}
          >
            <div
              className={`${
                isPointLeft ? "w-[62%]" : "w-[38%]"
              }  overflow-hidden h-full transition-all duration-500 rounded-2xl bg-[#00000000] relative text-center content-center`} style={{
                transform: `translateX(${leftTranslateX}px)`,
                transition: "transform 0.5s linear, width 0.5s ease",
              }}>
              <img
                className={`w-[99vw] max-w-none top-0 absolute h-screen -z-20 object-cover left-0`}
                src="/public/assets/Images/header/us.jpg"
              ></img>
              <h3 className="text-[54px] text-[white] font-semibold jamjuree">
                About Us
              </h3>
            </div>
            <div
              className={`${
                !isPointLeft ? "w-[62%]" : "w-[38%]"
              }  overflow-hidden h-full rounded-2xl transition-all duration-500 relative `}
              style={{
                transform: `translateX(${rightTranslateX}px)`,
                transition: "transform 0.5s linear, width 0.5s ease",
              }}
            >
              <img
                className={`w-[99vw] max-w-none top-0 absolute h-screen -z-30 object-cover right-0`}
                src="/public/assets/Images/header/us.jpg"
              ></img>
              <div className="w-full h-full bg-[#00000080] text-center content-center">
                <h3 className="text-[54px] text-[white] font-semibold jamjuree">
                  The Why
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

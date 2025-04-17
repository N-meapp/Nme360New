import { useContext, useEffect, useState, useRef } from "react";
import { ScrollContext } from "../main";

export default function AboutUsSectionAlternative({
  isPointLeft,
  setIsPointLeft,
  leftTranslateX,
  setleftTranslateX,
  rightTranslateX,
  setRightTranslateX,
}) {
  const { scrollHeight, setScrollHeight } = useContext(ScrollContext);

  const prevScroll = useRef(0);

  const isAtTop = () => {
    const div = document.getElementById("about-div");
    const rect = div.getBoundingClientRect();

    // Determine scroll direction
    const isScrollingDown = scrollHeight > prevScroll.current;
    prevScroll.current = scrollHeight;
    

    if (rect.top <= -600) {
      if (isScrollingDown) {
        if(isPointLeft){
          setleftTranslateX(-scrollHeight * 0.2);
          setRightTranslateX(scrollHeight * 0.1);
        }else{
          setleftTranslateX(-scrollHeight * 0.1);
          setRightTranslateX(scrollHeight * 0.2);
        }
      } else {
        // if(leftTranslateX<=0){
        if(isPointLeft){
          setleftTranslateX(scrollHeight * -0.2);
          setRightTranslateX(-scrollHeight * -0.1);
        }else{
          setleftTranslateX(scrollHeight * -0.1);
          setRightTranslateX(-scrollHeight * -0.2);
        }

        // }
      }
    } else {
      setleftTranslateX(0);
      setRightTranslateX(0);
    }
  };

  useEffect(() => {
    isAtTop();
  }, [scrollHeight]);

  return (
    <div id="about-div" className="w-full h-[400vh] p-2 -z-10 bg-[#ffffff00]">
      <div className="w-full h-full rounded-2xl flex">
        <div
          id="left-div"
          onMouseEnter={() => setIsPointLeft(true)}
          className={`${
            isPointLeft ? "w-[62%]" : "w-[38%]"
          } overflow-hidden h-full rounded-2xl transition-[width] duration-500 ease-in-out bg-[#ff000000] relative`}
          style={{
            transform: `translateX(${leftTranslateX}px)`,
            transition: "transform 0.5s linear, border-radius 0.2s ease",
          }}
        >
          g
        </div>
        <div
          onMouseEnter={() => setIsPointLeft(false)}
          className={`${
            !isPointLeft ? "w-[62%]" : "w-[38%]"
          } overflow-hidden h-full rounded-2xl transition-[width] duration-500 ease-in-out bg-[#00800000] relative`}
          style={{
            transform: `translateX(${rightTranslateX}px)`,
            transition: "transform 0.5s linear, border-radius 0.2s ease",
          }}
        >
          de
        </div>
      </div>
    </div>
  );
}

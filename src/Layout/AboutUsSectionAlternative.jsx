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

    if (rect.top <= -300) {
      if (isScrollingDown) {
        setleftTranslateX(-scrollHeight * 0.3);
        setRightTranslateX(scrollHeight * 0.3);
      } else {
        // if(leftTranslateX<=0){
        setleftTranslateX(0);
        setRightTranslateX(0);

        // }
      }
    } else {
      setleftTranslateX(0);
      setRightTranslateX(0);

      console.log("div is not at the top");
    }
  };

  useEffect(() => {
    isAtTop();
  }, [scrollHeight]);

  return (
    <div id="about-div" className="w-full h-[500vh] bg-[#ff000000] p-2 -z-10">
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

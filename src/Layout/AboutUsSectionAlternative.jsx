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
    // isAtTop();


    const aboutDiv = document.getElementById('about-div')
    const rect = aboutDiv.getBoundingClientRect();
    if(rect.top<=0){
      
          
      setRightTranslateX(Math.abs(rect.top)*0.9)
      setleftTranslateX(rect.top *0.9)

      // if(isPointLeft){
      // setleftTranslateX(Math.abs(rect.top)*0.9)
      // setRightTranslateX(rect.top *0.8)
      // }else{
      // }
      
    }else{
      setRightTranslateX(0)
      setleftTranslateX(0)
    }
    


  }, [scrollHeight]);

;
  

  return (
    <>
      <div id="about-div" className="w-full h-[60vh] md:h-[50vh] p-2 -z-10 bg-[#ffffff00] overflow-hidden mt-52">
      <div className="w-full h-full md:h-full rounded-2xl md:flex">
        <div
          id="left-div"
          onMouseEnter={() => setIsPointLeft(true)}
          className={`${
            isPointLeft ? "h-[62%] md:w-[62%]" : "h-[38%] md:w-[38%]"
          } overflow-hidden w-full md:h-full rounded-2xl transition-[width] duration-500 ease-in-out relative`}
          style={{
            transform: `translateX(${leftTranslateX}px)`,
            transition: "transform 0.5s linear, border-radius 0.2s ease",
          }}
        >
        </div>
        <div
          onMouseEnter={() => setIsPointLeft(false)}
          className={`${
            !isPointLeft ? "h-[62%] md:w-[62%]" : "h-[38%] md:w-[38%]"
          } overflow-hidden w-full md:h-full rounded-2xl transition-[width] duration-500 ease-in-out relative md:mt-0`}
          style={{
            transform: `translateX(${rightTranslateX}px)`,
            transition: "transform 0.5s linear, border-radius 0.2s ease",
          }}
        >
        </div>
      </div>
    </div>
    </>
  );
}

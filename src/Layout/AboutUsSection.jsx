import { useContext, useEffect, useRef, useState } from "react";
import Scroll from "../Components/Scrollbar/SmoothScroll";
import { text } from "@fortawesome/fontawesome-svg-core";
import BackgroundVideoSection from "./BackgroundVideoSection";
import { ScrollContext } from "../main";
import DescriptionSection from "./DescriptionSection";

export default function AboutUsSection({
  isPointLeft,
  leftTranslateX,
  rightTranslateX,
  isStartScrolling,
  setStartStickyScrolling
}) {


  const [scaleText, setScaleText] = useState(0)
  const { scrollHeight, setScrollHeight } = useContext(ScrollContext);



  const divRef = useRef(null);
  const ContainerRef = useRef(null);

  const [isPartiallyVisible, setIsPartiallyVisible] = useState(false);
  const [translateY, setTranslateY] = useState(0)


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPartiallyVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0, // 0 means even 1 pixel visible = true
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }


    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };

  }, [rightTranslateX, leftTranslateX]);

  useEffect(() => {
    let divHeight;
    if (ContainerRef.current) {
      divHeight = ContainerRef.current.getBoundingClientRect().height;
    }

    if (isStartScrolling) {
      // setTranslateY(divHeight + divHeight + divHeight / 2 + scrollHeight * -0.5)
      const windowHeight = window.innerHeight;
      setTranslateY(-windowHeight-isStartScrolling)
      console.log(windowHeight-isStartScrolling,'hahahahaa');
      
    }

  }, [scrollHeight])


  return (
    <>
      <div className="w-full fixed top-0 -z-10 h-auto overscroll-auto bg-[white]" style={{
        transform: `translateY(-${translateY}px)`,
        transition: "transform 0.01s linear ease",
      }}>
        <div className="w-full h-screen p-2 hidden md:block" ref={ContainerRef}>
          <BackgroundVideoSection scaleText={scaleText} setScaleText={setScaleText} rightTranslateX={rightTranslateX} isPartiallyVisible={isPartiallyVisible} />
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl flex overflow-hidden"

          >
            <div
              ref={divRef}
              className={`${isPointLeft ? "w-[62%]" : "w-[38%]"
                }  overflow-hidden h-full transition-all duration-500 rounded-2xl bg-[#00000000] relative text-center content-center`} style={{
                  transform: `translateX(${leftTranslateX}px)`,
                  transition: "transform 0.05s linear, width 0.5s ease",
                }}>
              <img
                className={`w-[99vw] max-w-none top-0 absolute h-screen -z-20 object-cover left-0`}
                src="/public/assets/Images/header/us2.jpg"
              ></img>
              <h3 className="text-[54px] text-[white] font-semibold jamjuree">
                About Us
              </h3>
            </div>
            <div
              className={`${!isPointLeft ? "w-[62%]" : "w-[38%]"
                }  overflow-hidden h-full rounded-2xl transition-all duration-500 relative `}
              style={{
                transform: `translateX(${rightTranslateX}px)`,
                transition: "transform 0.05s linear, width 0.5s ease",
              }}
            >
              <img
                className={`w-[99vw] max-w-none top-0 absolute h-screen -z-30 object-cover right-0`}
                src="/public/assets/Images/header/us2.jpg"
              ></img>
              <div className="w-full h-full bg-[#00000080] text-center content-center">
                <h3 className="text-[54px] text-[white] font-semibold jamjuree">
                  The Why
                </h3>
              </div>
            </div>
          </div>
        </div>






        <div className="w-full h-screen p-2 block md:hidden">
          <BackgroundVideoSection scaleText={scaleText} setScaleText={setScaleText} rightTranslateX={rightTranslateX} isPartiallyVisible={isPartiallyVisible} />
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"

          >
            <div
              ref={divRef}
              className={`${isPointLeft ? "h-[62%]" : "h-[38%]"
                }  overflow-hidden transition-all duration-500 rounded-t-2xl bg-[#00000000] relative text-center w-full content-center`} style={{
                  transform: `translateY(${leftTranslateX}px)`,
                  transition: "transform 0.05s linear, height 0.5s ease",
                }}>
              <img
                className={`w-[99vw] max-w-none top-0 absolute h-screen -z-20 object-cover`}
                src="/public/assets/Images/header/us2.jpg"
              ></img>
              <h3 className="text-3xl md:text-[54px] text-[white] font-semibold jamjuree">
                About Us
              </h3>
            </div>
            <div
              className={`${!isPointLeft ? "h-[62%]" : "h-[38%]"
                }  overflow-hidden w-full rounded-b-2xl transition-all duration-500 relative text-center content-center `}
              style={{
                transform: `translateY(${rightTranslateX}px)`,
                transition: "transform 0.05s linear, height 0.5s ease",
              }}
            >
              <img
                className={`w-[99vw] max-w-none -bottom-5 absolute h-screen -z-30 object-cover`}
                src="/public/assets/Images/header/us2.jpg"
              ></img>
              <div className="w-full h-full bg-[#00000080] text-center content-center">
                <h3 className="text-3xl md:text-[54px] text-[white] font-semibold jamjuree">
                  The Why
                </h3>
              </div>
            </div>
          </div>

        </div>
        <DescriptionSection translateY={translateY} setStartStickyScrolling={setStartStickyScrolling} />

      </div>

    </>
  );
}

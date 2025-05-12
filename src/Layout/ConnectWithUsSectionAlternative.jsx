import { useState, useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../main";

export default function ConnectWithUsSectionAlternative({ setConnectWithScrollHeight }) {
  const { scrollHeight } = useContext(ScrollContext);
  const myDivRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  // const radius = `${Math.min(Math.max(1, scrollHeight * 0.01), 24)}px`; // min 16px, max 50px
  // const width = `${Math.max(97, 100 - scrollHeight * 0.01)}%`; // min width 97%

  const [radius,setRadius] = useState(0)
  const [width,setWidth] = useState(100)

  const handleScroll = () => {
    if (myDivRef.current) {
      const rect = myDivRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight) {
        const rectAbs = Math.abs(rect.top);

        if (rect.top < 0) {
          
          setWidth(Math.max(98, 100 - rectAbs * 0.01));
          setRadius(Math.min(Math.max(1, rectAbs * 0.1), 24));
        }else{
          setRadius(0)
          setWidth(100)
        }

        setConnectWithScrollHeight(rect.top);
      } else {
        setConnectWithScrollHeight(windowHeight);
      }

      setOffsetY(rect.top); // smoother animation value
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: `${width}%`,
        borderRadius: `${radius}px`,
        transition: "width 0.05s linear ease, border-radius 0.05s ease",
      }}
      ref={myDivRef} className=" h-screen mx-auto bg-[#ffffff] pb-[14px]">
      <div
        className="w-full h-full bg-center bg-no-repeat bg-cover text-center content-center relative"
        style={{
          backgroundImage: "url('/assets/Images/header/connectbg.png')",
          borderRadius: `${radius}px`,
          transition: "border-radius 0.05s ease",
        }}
      >
        <img className="w-full absolute left-0 right-0 bottom-0 object-contain z-40" src="/assets/Images/header/connectwithus.png"></img>
        <div
          className="text-3xl md:text-[80px] md:leading-[90px] jamjuree font-bold text-white flex gap-2 md:gap-5 mx-auto w-fit"
        >
          <h3
            style={{
              transform: `translateY(${-offsetY * -0.2}px)`,
              transition: "transform 0.05s ease",
            }}
          >Connect </h3>
          <h3
            style={{
              transform: `translateY(${-offsetY * -0.3}px)`,
              transition: "transform 0.05s ease",
            }}
          >with </h3>
          <h3
            style={{
              transform: `translateY(${-offsetY * -0.4}px)`,
              transition: "transform 0.05s ease",
            }}
          > Us</h3>
        </div>
      </div>
    </div>
  );
}

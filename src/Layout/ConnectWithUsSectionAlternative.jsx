import { useState, useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../main";

export default function ConnectWithUsSectionAlternative({ setConnectWithScrollHeight }) {
  const { scrollHeight } = useContext(ScrollContext);
  const myDivRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (myDivRef.current) {
      const rect = myDivRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      console.log(offsetY,'offsety');
      

      // For ConnectWithUs scrollHeight prop
      if (rect.top < windowHeight) {
        setConnectWithScrollHeight(rect.top);
      } else {
        setConnectWithScrollHeight(windowHeight);
      }

      // This gives more natural transform effect
      setOffsetY(rect.top);
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
    <div ref={myDivRef} className="w-full h-screen bg-[#ffffff] p-[14px]">
      <div
        className="w-full h-full rounded-2xl bg-center bg-no-repeat bg-cover text-center content-center relative"
        style={{
          backgroundImage: "url('/assets/Images/header/connectbg.png')",
          transition: "border-radius 0.2s ease",
        }}
      >
          <img className="w-full h-full absolute left-0 right-0 bottom-0 object-contain z-40"  src="/public/assets/Images/header/connectwithus.png"></img>
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

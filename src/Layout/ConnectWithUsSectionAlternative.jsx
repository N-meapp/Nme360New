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
        className="w-full h-full rounded-2xl bg-center bg-no-repeat bg-cover text-center content-center"
        style={{
          backgroundImage: "url('/assets/Images/projects/contactus.png')",
          transition: "border-radius 0.2s ease",
        }}
      >
        <h3
          className="text-3xl md:text-[54px] jamjuree font-bold text-white"
          style={{
            transform: `translateY(${-offsetY * -0.2}px)`,
            transition: "transform 0.05s ease",
          }}
        >
          Connect with Us
        </h3>
      </div>
    </div>
  );
}

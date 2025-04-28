import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../main";

export default function FutureProjectsAlternative({setProjectsScrollHeight}){

    const myDivRef = useRef(null);

        const { scrollHeight } = useContext(ScrollContext);
    

    const handleScroll = () => {
        if (myDivRef.current) {
          const rect = myDivRef.current.getBoundingClientRect();
          if(rect.top<=0){
              setProjectsScrollHeight(rect.top)
          }else{
            setProjectsScrollHeight(0)
          }
        }
      };

    useEffect(() => {
        handleScroll()
      }, [scrollHeight]);

    return(
        <>
        <div className="w-full h-full -z-50 bg-[#ffffff00]" ref={myDivRef} >
            <div className="w-full h-screen bg-[#ee82ee00] sticky top-0"></div>
            <div className="w-full h-screen bg-[#536b1000] sticky top-0"></div>
            <div className="w-full h-screen bg-[#d45c2500] sticky top-0"></div>



        </div>

        </>
    )
}
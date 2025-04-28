import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../main";
import BackendWorksSection from "./BackendWorksSection";

export default function BackendWorksAlternative({setBackendScrollHeight,setBackendTopRect,backendScrollHeight,backendTopRect}) {

          const { scrollHeight,setScrollHeight } = useContext(ScrollContext);
      
    
        const myDivRef = useRef(null)
    
        const handleScroll = () => {
            if (myDivRef.current) {
                const rect = myDivRef.current.getBoundingClientRect();
                setBackendTopRect(rect.top)
                
                const windowHeight = window.innerHeight;
                const distanceFromBottom = Math.max(0, windowHeight - rect.top);
        
                setBackendScrollHeight(distanceFromBottom);
            }
        };
        
    
          useEffect(()=>{
            handleScroll()
          },[scrollHeight])

    return (
        <>
            <div ref={myDivRef} className="w-full h-[200vh] bg-[#ffffff00]">
            {/* <BackendWorksSection backendScrollHeight={backendScrollHeight} backendTopRect={backendTopRect}  /> */}
            </div>


        </>
    )
}
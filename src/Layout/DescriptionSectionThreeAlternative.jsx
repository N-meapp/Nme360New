import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../main";

export default function DescriptionSectionThreeAlternative({setDescriptionScrollHeight}){

      const { scrollHeight,setScrollHeight } = useContext(ScrollContext);
  

    const myDivRef = useRef(null)

    const handleScroll = () => {
        if (myDivRef.current) {
          const rect = myDivRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight  
          if(rect.top <windowHeight){
              setDescriptionScrollHeight(rect.top)
          }else{
            setDescriptionScrollHeight(windowHeight)
          }
        }
      };

      useEffect(()=>{
        handleScroll()
      },[scrollHeight])


    return(
        <>
                <div ref={myDivRef} className="w-full h-screen bg-[#ffffff00]"></div>

        </>
    )
}
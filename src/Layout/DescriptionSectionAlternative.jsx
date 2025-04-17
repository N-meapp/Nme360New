import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../main";

export default function DescriptionSectionAlternative({setIsStartScrolling}) {

    const { scrollHeight, setScrollHeight } = useContext(ScrollContext);



    const divRef = useRef(null);
    const [isPartiallyVisible, setIsPartiallyVisible] = useState(false);


  useEffect(() => {
//    const descriptionElement = document.getElementById('description-id')
   const distanceFromTop = divRef.current?.getBoundingClientRect().top;
   const browserHeight = window.innerHeight;
   if(browserHeight>=distanceFromTop){
        setIsStartScrolling(true)
   }else{
    setIsStartScrolling(false)
   }
   

    

}, [scrollHeight]); // empty array here



    return (
        <>
            <div
            ref={divRef}
                className="w-full h-[200vh] bg-[#ffffff00]">

            </div>
        </>
    )
}
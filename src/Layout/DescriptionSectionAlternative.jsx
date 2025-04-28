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
    // console.log(distanceFromTop,'disstance');
    
        setIsStartScrolling(distanceFromTop)
   }
   

    

}, [scrollHeight]); // empty array here



    return (
        <>
            <div
            ref={divRef}
                className="w-full h-[300vh] bg-[#ffffff00]">

            </div>
        </>
    )
}
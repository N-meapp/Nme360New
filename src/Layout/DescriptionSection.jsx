import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../main";
import AboutTextSpan from "../Components/Texts/AboutTextSpan";

export default function DescriptionSection({setStartStickyScrolling}) {

    const { scrollHeight, setScrollHeight } = useContext(ScrollContext);

    const [firstQuote, setFirstQuote] = useState(`From innovative hardware to transformative software solutions, N-me 360 powers your digital journey.`.split(""))


    useEffect(() => {
        const divBottomReachedTop = (element) => {
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return rect.bottom <= 0;
          };

          const scrollingElement = document.getElementById('scrolling-element')
          setStartStickyScrolling(divBottomReachedTop(scrollingElement))
          
          
          
    }, [scrollHeight])



    return (
        <>
            <div id="scrolling-element" className="w-full h-screen fixed bg-[#ffffff] content-center">   
                <div className="w-[64%] ml-[9%] text-3xl md:text-[80px] md:leading-[90px] font-semibold jamjuree " style={{
        // transform: `translateY(${translateY/5}px)`,
        transition: "transform 0.01s linear ease",
      }}>
                    {firstQuote.map((letter, i) => {

                        return <AboutTextSpan text={letter} id={`about${letter + i}`} isFirst={true} firstColor={'#606060'} secondColor={'#BBBBBB'} />
                    }
                    )}
                </div>
            </div>
        </>
    )
}
import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../main";
import TextSpan from "../Components/Texts/TextSpan";

export default function SecondTextSection({descriptionScrollHeight}) {


    const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
    const [firstQuote, setFirstQuote] = useState(`Turning everyday+ ideas into meaningful+ digital impact.`.split(""))
    const [secondQuote, setSecondQuote] = useState(`Digital solutions crafted+ with care, purpose+ and clarity.`.split(""))
    const [translateY,setTranslateY] = useState(0)

    useEffect(() => {
        const secondText = document.getElementById('second-text');
        if (secondText) {
          const rect = secondText.getBoundingClientRect();
          const topDistance = rect.top; // Distance from top of viewport
          if(topDistance<0){
            setTranslateY(Math.abs(topDistance))
          }
        }
      });





    return (
        <>
            <div id="second-text" className="w-full h-screen text-3xl md:text-[54px] md:leading-[70px] font-semibold jamjuree text-[#606060] bg-[#BBBBBB] content-center text-center relative pointer-events-none">

                    <div className="w-fit h-fit absolute justify-self-center bottom-1/2 right-0 left-0"
                    
                    style={{
                        transform: `translateY(${translateY*0.4}px)`,
                        transition: "transform 0.05s linear, width 0.5s ease",
                      }}>
                    
                        {firstQuote.map((letter, i) => {

                            return <TextSpan text={letter} i={i} id={`second-1-${letter + i}`} isFirst={true} />
                        }
                        )}
                    </div>

                    <div className="w-fit h-fit absolute justify-self-center bottom-1/2 right-0 left-0"
                    style={{
                        transform: `translateY(${translateY*0.4}px)`,
                        transition: "transform 0.05s linear, width 0.5s ease",
                      }}>

                        {secondQuote.map((letter, i) => {

                            return <TextSpan text={letter} i={i} id={`second-2-${letter + i}`} isFirst={false} />
                        }
                        )}
                    </div>



            </div>
        </>
    )
}



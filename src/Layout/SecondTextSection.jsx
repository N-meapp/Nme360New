import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../main";
import TextSpan from "../Components/Texts/TextSpan";

export default function SecondTextSection({descriptionScrollHeight}) {


    const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
    const [firstQuote, setFirstQuote] = useState(`Transform ideas into+ reality with cutting-edge IT+ solutions.`.split(""))
    const [secondQuote, setSecondQuote] = useState(`Transform ideas into+ reality with cutting-edge IT+ solutions.`.split(""))





    return (
        <>
            <div className="w-full h-screen text-3xl md:text-[80px] md:leading-[90px] font-semibold jamjuree text-[#606060] bg-[#BBBBBB] content-center text-center relative pointer-events-none">

                    <div className="w-fit h-fit absolute justify-self-center bottom-1/2 right-0 left-0"
                    
                    style={{
                        // transform: `translateY(${scrollHeight*0.2}px)`,
                        // transition: "transform 0.05s linear, width 0.5s ease",
                      }}>
                    
                        {firstQuote.map((letter, i) => {

                            return <TextSpan text={letter} id={`second-1-${letter + i}`} isFirst={true} />
                        }
                        )}
                    </div>

                    <div className="w-fit h-fit absolute justify-self-center bottom-1/2 right-0 left-0"
                    style={{
                        // transform: `translateY(${scrollHeight*0.2}px)`,
                        // transition: "transform 0.05s linear, width 0.5s ease",
                      }}>

                        {secondQuote.map((letter, i) => {

                            return <TextSpan text={letter} id={`second-2-${letter + i}`} isFirst={false} />
                        }
                        )}
                    </div>



            </div>
        </>
    )
}



import { useState } from "react";
import DescriptionSection from "./DescriptionSection";
import AboutTextSpan from "../Components/Texts/AboutTextSpan";

export default function DescriptionSectionThree({setConnectWithScrollHeight,connectWithScrollHeight}) {
    const [firstQuote, setFirstQuote] = useState(`Code.+ Create. Connect.+ Grow With Us.`.split(""))

    const windowHeight = window.innerHeight  


    return (
        <>
            <div className="w-full h-[100vh] fixed top-0 -z-40 bg-[#BBBBBB] content-center"
            style={{
                transform: `translateY(-${windowHeight-connectWithScrollHeight}px)`,
                transition: "transform 0.01s linear ease",
              }}>
                {/* <DescriptionSection /> */}
                <div className="md:text-[80px] text-4xl md:leading-[90px] w-[64%] mx-auto jamjuree font-bold"
                
                style={{
                    transform: `translateY(-${connectWithScrollHeight*-0.2}px)`,
                    transition: "transform 0.01s linear ease",
                  }}>
                
                    {firstQuote.map((letter, i) => {
                        return <AboutTextSpan text={letter} id={`des-three-${letter + i}`} isFirst={true} firstColor={'#606060'} secondColor={'#BBBBBB'} />
                    }
                    )}
                </div>

            </div>
        </>
    )
}
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../main";

export default function BackgroundVideoSection({ scaleText, setScaleText, rightTranslateX,isPartiallyVisible }) {

    const { scrollHeight } = useContext(ScrollContext);
    const prevScroll = useRef(0);

    

    useEffect(() => {
        const isScrollingDown = scrollHeight > prevScroll.current;

        if (rightTranslateX > 0) {
            if (scaleText <= 1) {
                setScaleText(scaleText + 0.10);
            }

            if (!isScrollingDown && isPartiallyVisible) {
                setScaleText(scaleText - 0.01);
            }
        }else{
            setScaleText(0)
            
        }
        

        // if(1==Math.floor(scaleText)){
        //     console.log('scrollll herere');
        //     setIsStartScrolling(true)
        // }else{
        //     setIsStartScrolling(false)
        // }
        

        prevScroll.current = scrollHeight; // update AFTER logic is used 
    }, [scrollHeight]);
    

    return (
        <div className="w-full h-screen absolute mx-auto -z-30 p-2 left-0 pb-5 right-0">
            <div className="w-full h-full relative">
                <h3 id="text" className="text-[54px] font-semibold jamjuree absolute top-0 bottom-0 right-0 left-0 w-fit h-fit justify-self-center self-center z-20 text-white" style={{
                    // transform: `scale(${scaleText})`,
                    opacity:scaleText,
                    transition: "transform 1s ease, opacity 1s ease",
                }}>
                    Together we built the future
                </h3>
                <div className="w-[inherit] h-full bg-[#0000004f] absolute z-10 rounded-2xl"></div>
                <video className="w-full object-cover h-full rounded-2xl" src="/public/assets/Videos/digitalworld.mp4" autoPlay muted loop></video>
            </div>
        </div>
    );
}

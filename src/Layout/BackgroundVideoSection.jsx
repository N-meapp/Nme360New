import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../main";

export default function BackgroundVideoSection({ scaleText, setScaleText, rightTranslateX, isPartiallyVisible }) {

    const { scrollHeight } = useContext(ScrollContext);
    const [opacity, setOpacity] = useState(0)
    const prevScroll = useRef(0);



    useEffect(() => {
        console.log(scaleText);

        const isScrollingDown = scrollHeight > prevScroll.current;

        if (rightTranslateX > 0) {
            if (scaleText <= 1) {
                setScaleText(scaleText + 0.10);
                setOpacity(1)
            }

            if (!isScrollingDown && isPartiallyVisible) {
                setScaleText(scaleText - 0.05);
                setOpacity(0.5)
            }
        } else {
            setScaleText(0.8)
            setOpacity(0)

        }



        prevScroll.current = scrollHeight; // update AFTER logic is used 
    }, [scrollHeight]);


    return (
        <div className="w-full h-screen absolute mx-auto -z-30 p-2 left-0 pb-5 right-0 bg-[#ffffff]">
            <div className="w-full h-full relative">
                <h3
                    id="text"
                    className="text-3xl md:text-[54px] font-semibold jamjuree absolute bg-[red] top-[50%] left-1/2 w-fit h-fit z-20 text-center text-white"
                    style={{
                        transform: `translate(-50%, -50%) scale(${scaleText})`,
                        opacity: opacity,
                        transition: "transform 1s ease, opacity 2s ease",
                    }}
                >
                    Together we built the future
                </h3>

                <div className="w-[inherit] h-full bg-[#0000004f] absolute z-10 rounded-2xl"></div>
                <video className="w-full object-cover h-full rounded-2xl" src="/assets/Videos/digitalworld.mp4" autoPlay muted loop></video>
            </div>
        </div>
    );
}

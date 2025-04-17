import { useContext, useEffect, useRef, useState } from "react"
import { ScrollContext } from "../main";

export default function FutureProjects({startStickyScrolling}) {
    const { scrollHeight,setScrollHeight } = useContext(ScrollContext);
    const [translateY,setTranslateY] = useState(0)
      const divRef = useRef(null);
    



    useEffect(()=>{
       const divHeight = divRef.current.getBoundingClientRect().height;
      console.log('Div height is:', divHeight);
      setTranslateY(divHeight)
        if(startStickyScrolling){



            setTranslateY(divHeight - 0.10)
            console.log(divHeight-0.10);
            
        }
    },[scrollHeight])

    return (
        <>
            <div className="w-full flex fixed -z-30 h-screen bg-[#BBBBBB] p-3 gap-2">
                <div className="w-full flex-1 h-full bg-[#ffffff] rounded-2xl p-[14px] relative">
                    <h3 className="text-[54px] font-semibold jamjuree mt-[30%] text-center">n-me app</h3>
                    <hr className="w-[67%] mx-auto border-[#1F1F1F1A] border-[1px] mt-[8%]"></hr>
                    <div className="w-[70%] h-auto mx-auto text-center mt-[8%]"><h3 className="text-[16px] jamjuree">n-me app is an innovative platform
                        designed to revolutionize how users discover and engage with local businesses.</h3></div>
                    <div className="w-[85%] justify-self-center absolute bottom-[14px] right-0 left-0 ">
                        <div className="w-fit flex gap-2 mx-auto mb-[12px]">
                            <h3 className="text-[10px] jamjuree">1. NME APP</h3>
                            <h3 className="text-[10px] jamjuree">1. NME APP</h3>
                            <h3 className="text-[10px] jamjuree">1. NME APP</h3>
                            <h3 className="text-[10px] jamjuree">1. NME APP</h3>

                        </div>
                        <button className="w-full bg-[#3F37A580] h-[63px] rounded-xl text-[18px] jamjuree text-[white]">Explore n-me app</button>
                    </div>
                </div>
                <div className="w-[60%] h-full bg-[green] rounded-2xl relative">
                    <div className="w-full h-full bg-[yellow] absolute rounded-2xl content-center text-center">1</div>
                    <div className="w-full h-full bg-[#1baf33] absolute rounded-2xl content-center text-center">2</div>
                    <div className="w-full h-full bg-[#8d8d18] absolute rounded-2xl content-center text-center">3</div>
                    <div ref={divRef} className="w-full h-full bg-gradient-to-r from-[#05BCF6] to-[#036E90] absolute rounded-2xl content-center text-center" style={{
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.05s linear, border-radius 0.2s ease",
      }}>
                        <img src="/public/assets/Images/projects/nmeapp.png" className="w-full h-full object-cover"></img>
                    </div>

                </div>

            </div>
        </>
    )
}
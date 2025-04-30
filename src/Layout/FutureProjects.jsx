
import { useContext, useEffect, useRef, useState } from "react"
import { ScrollContext } from "../main";
import Scroll from "../Components/Scrollbar/SmoothScroll";
import EachProject from "./EachProject";
import TextSection from "./TextSection";
import SecondTextSection from "./SecondTextSection";
import BackendWorksSection from "./BackendWorksSection";

export default function FutureProjects({ startStickyScrolling, projectsScrollHeight, descriptionScrollHeight, backendScrollHeight, backendTopRect, setDescriptionScrollHeight, thridDescriptionScrollHeight }) {
    const { scrollHeight } = useContext(ScrollContext);
    const [translateY, setTranslateY] = useState(0);
    const [tempHeight, setTempHeight] = useState(0);
    const [oldScrollRate, setOldScrollRate] = useState(0);
    const [currentProject, setCurrentProject] = useState('nmeapp');
    const windowHeight = window.innerHeight

    useEffect(() => {


        if (startStickyScrolling) {
            const scrollingDiv = document.getElementById('scrolling-div');
            scrollingDiv.scrollTo({
                top: Math.abs(projectsScrollHeight),
            });

            const scrollingDiv2 = document.getElementById('scrolling-div-2');
            scrollingDiv2.scrollTo({
                top: Math.abs(projectsScrollHeight),
                // behavior: 'smooth'
            });
        }
        setOldScrollRate(scrollHeight)


    }, [scrollHeight]);


    return (
        <>
            <Scroll>

                <div className="w-full fixed bottom-0 -z-30 h-screen bg-[#c54f4f]"
                    style={{
                        // transform: `translateY( ${0}px)`,
                        transform: `translateY( -${backendTopRect > 0 ? windowHeight - descriptionScrollHeight : ''}px)`,

                        transition: "transform 0.01s linear ease-out",
                    }}
                >
                    <div className="w-full h-full p-3 bg-[#BBBBBB] gap-2 md:flex hidden"
                    
                    >
                        <div className="w-full flex-1 h-full bg-[#e0dfdb] rounded-2xl  relative bg-center "
                         style={{
                            backgroundImage: "url('/public/assets/Images/projects/background.jpg')",
                            backgroundSize: 'cover',        // optional, makes image cover the entire div
                            backgroundRepeat: 'no-repeat'   // optional, prevents tiling
                          }}
                        >
                            <div className="w-full h-full bg-[#ffffff9a] rounded-2xl p-[14px]">
                            <h3 className="text-[54px] font-semibold jamjuree mt-[30%] text-center">{currentProject}</h3>
                            <hr className="w-[67%] mx-auto border-[#1F1F1F1A] border-[1px] mt-[8%]" />
                            <div className="w-[70%] h-auto mx-auto text-center mt-[8%] bg-white/30 backdrop-blur-md p-4 rounded-2xl">
                                <h3 className="text-[16px] jamjuree">
                                    n-me app is an innovative platform designed to revolutionize how users discover and engage with local businesses.
                                </h3>
                            </div>
                            <div className="w-[85%] justify-self-center absolute bottom-[14px] right-0 left-0">
                                <div className="w-fit flex gap-2 mx-auto mb-[12px]">
                                    <h3 className="text-[10px] jamjuree">1. NME APP</h3>
                                    <h3 className="text-[10px] jamjuree">2. BUYSEL</h3>
                                    <h3 className="text-[10px] jamjuree">3. TICKETTO</h3>
                                    {/* <h3 className="text-[10px] jamjuree">4. NME APP</h3> */}
                                </div>
                                <button className="w-full bg-[#3f37a5] h-[63px] rounded-xl text-[18px] jamjuree text-white">
                                    Explore {currentProject}
                                </button>
                            </div>
                            </div>
                            {/* Left section */}
                            
                        </div>

                        {/* Right scrolling div */}
                        <div id="scrolling-div"
                            className="w-[60%] h-auto rounded-2xl relative overflow-hidden">

                            <EachProject mobile={false} colorCode1={'#05BCF6'} colorCode2={'#036E90'} id={'nmeapp'} translateY={translateY} scrollHeight={scrollHeight} setCurrentProject={setCurrentProject} currentProject={currentProject} image={'/public/assets/Images/projects/nmeapp.png'} />
                            <EachProject mobile={false} colorCode1={'#8bc83f'} colorCode2={null} id={'buysel'} translateY={translateY} scrollHeight={scrollHeight} setCurrentProject={setCurrentProject} currentProject={currentProject} image={'/public/assets/Images/projects/buysel.jpg'} />
                            <EachProject mobile={false} colorCode1={'#f6054d'} colorCode2={'#900303'} id={'ticketto'} translateY={translateY} scrollHeight={scrollHeight} setCurrentProject={setCurrentProject} currentProject={currentProject} image={'/public/assets/Images/projects/tickets.jpg'} />

                        </div>
                    </div>


                    <div className="w-full h-screen p-3 bg-[#BBBBBB] gap-2 md:hidden block"

                    >
                       

                        <div id="scrolling-div-2"
                            className="w-ful h-full  relative rounded-2xl overflow-hidden flex flex-col gap-2">
                            <EachProject mobile={true} colorCode1={'#05BCF6'} colorCode2={'#036E90'} id={'nmeapp'} translateY={translateY} scrollHeight={scrollHeight} setCurrentProject={setCurrentProject} currentProject={'nmeapp'} image={'/public/assets/Images/projects/nmeapp.png'} />
                            <EachProject mobile={true} colorCode1={'#8bc83f'} colorCode2={null} id={'buysel'} translateY={translateY} scrollHeight={scrollHeight} setCurrentProject={setCurrentProject} currentProject={'buysel'} image={'/public/assets/Images/projects/buysel.jpg'} />
                            <EachProject mobile={true} colorCode1={''} colorCode2={''} id={'ticketto'} translateY={translateY} scrollHeight={scrollHeight} setCurrentProject={setCurrentProject} currentProject={'ticketto'} image={'/public/assets/Images/projects/tickets.jpg'} />

                        </div>
                    </div>

                    <SecondTextSection descriptionScrollHeight={descriptionScrollHeight} />
                    <BackendWorksSection backendScrollHeight={backendScrollHeight} backendTopRect={backendTopRect} thridDescriptionScrollHeight={thridDescriptionScrollHeight} />

                </div>
            </Scroll>
        </>
    )
}

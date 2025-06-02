import { useEffect, useState } from "react";
import Scroll from "../Components/Scrollbar/SmoothScroll";
import AboutUsSection from "../Layout/AboutUsSection";
import LandingSection from "../Layout/LandingSection";
import NavBar from "../Layout/NavBar";
import TextSection from "../Layout/TextSection";
import AboutUsSectionAlternative from "../Layout/AboutUsSectionAlternative";
import DescriptionSectionAlternative from "../Layout/DescriptionSectionAlternative";
import FutureProjectsAlternative from "../Layout/FutureProjectsAlternative";
import FutureProjects from "../Layout/FutureProjects";
import DescriptionSectionTwoAtlernative from "../Layout/DescriptionSectionTwoAtlernative";
import BackendWorksAlternative from "../Layout/BackendWorksAlternative";
import DescriptionSectionThreeAlternative from "../Layout/DescriptionSectionThreeAlternative";
import DescriptionSectionThree from "../Layout/DescriptionSectionThree";
import ConnectWithUsSectionAlternative from "../Layout/ConnectWithUsSectionAlternative";
import FooterAlternative from "../Layout/FooterAlternative";
import Footer from "../Layout/Footer";
import Loader from "../Layout/Loader";
import InfiniteCarosel from "../Components/Scrollbar/InfiniteCarosel";
import EachFeatures from "../Components/Cards/EachFeatures";
import FeaturesSection from "../Layout/FeaturesSection";
import ServiceSection from "../Layout/ServiceSection";
import WhyChooseUs from "../Layout/WhyChooseUs";

export default function Home() {
  const [isPointLeft, setIsPointLeft] = useState(true);
  const [leftTranslateX, setleftTranslateX] = useState(0);
  const [rightTranslateX, setRightTranslateX] = useState(0);
  const [isStartScrolling,setIsStartScrolling] = useState(false);
  const [startStickyScrolling,setStartStickyScrolling] = useState(false)
   const [projectsScrollHeight,setProjectsScrollHeight] = useState(0)
   const [descriptionScrollHeight,setDescriptionScrollHeight] = useState(0)
   const [backendScrollHeight,setBackendScrollHeight] = useState(0)
   const [backendTopRect,setBackendTopRect] = useState(0)
   const [thridDescriptionScrollHeight,setThridDescriptionScrollHeight] = useState(0)
   const [connectWithScrollHeight,setConnectWithScrollHeight] = useState(0)



    useEffect(()=>{
           window.scrollTo({ top: 0});
   
       },[])


  return (
    // <>


      
        // <LandingSection />
    //    <TextSection />
    //     <AboutUsSectionAlternative
    //       setIsPointLeft={setIsPointLeft}
    //       isPointLeft={isPointLeft}
    //       leftTranslateX={leftTranslateX}
    //       setleftTranslateX={setleftTranslateX}
    //       rightTranslateX={rightTranslateX}
    //       setRightTranslateX={setRightTranslateX}
    //     />
    //      <AboutUsSection
    //     setIsPointLeft={setIsPointLeft}
    //     isPointLeft={isPointLeft}
    //     leftTranslateX={leftTranslateX}
    //     rightTranslateX={rightTranslateX}
    //     isStartScrolling={isStartScrolling}
    //     setStartStickyScrolling={setStartStickyScrolling}
    //   />
    //     <DescriptionSectionAlternative setIsStartScrolling={setIsStartScrolling} />
    //     <FutureProjects startStickyScrolling={startStickyScrolling} projectsScrollHeight={projectsScrollHeight} descriptionScrollHeight={descriptionScrollHeight} setDescriptionScrollHeight={setDescriptionScrollHeight} backendScrollHeight={backendScrollHeight} backendTopRect={backendTopRect} thridDescriptionScrollHeight={thridDescriptionScrollHeight} />
    //     <FutureProjectsAlternative projectsScrollHeight={projectsScrollHeight} setProjectsScrollHeight={setProjectsScrollHeight} /> 
    //     <DescriptionSectionTwoAtlernative setDescriptionScrollHeight={setDescriptionScrollHeight} />  
    //     <BackendWorksAlternative setBackendScrollHeight={setBackendScrollHeight} backendScrollHeight={backendScrollHeight} backendTopRect={backendTopRect} setBackendTopRect={setBackendTopRect} />
    //     <DescriptionSectionThreeAlternative setDescriptionScrollHeight={setThridDescriptionScrollHeight} />
    //     <div className="bg-[white] w-full h-fit">
    //     <DescriptionSectionThree connectWithScrollHeight={connectWithScrollHeight} setConnectWithScrollHeight={setConnectWithScrollHeight} />
    //     <ConnectWithUsSectionAlternative setConnectWithScrollHeight={setConnectWithScrollHeight} />
    //     </div>
        

    //   {/* </Scroll> */}
    // </>
    <div className="">

    <div className="w-full h-screen relative">
    <div className="h-fit w-full pl-8 pt-52">
      <h3 className="poppins md:text-7xl text-5xl font-semibold">Your future <br></br> coded</h3>
      <h3 className="md:text-2xl text-xl font-semibold jamjuree mt-2">Revolutionizing
      IT for a
      <br />
      Connected
      <br />
      World.</h3>
      <div className="w-full h-fit">
      <div className="p-3 bg-[#3f37a5] rounded-lg mt-5 text-[white] absolute z-10 text-xs md:text-base cursor-pointer">Explore</div>
      <img className="w-full md:w-1/2 md:absolute -z-40 md:top-0 md:right-0 md:rotate-180" src="/assets/Images/header/connection.jpg">
      </img>
      </div>
    </div>
    </div>
    <div>
    <InfiniteCarosel />
    </div>

    <FeaturesSection />

    <ServiceSection />


    <WhyChooseUs />

    <AboutUsSection />


    <Footer />

    </div>


  );
}

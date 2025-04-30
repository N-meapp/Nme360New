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
    <>


      
        <LandingSection />
       <TextSection />
        <AboutUsSectionAlternative
          setIsPointLeft={setIsPointLeft}
          isPointLeft={isPointLeft}
          leftTranslateX={leftTranslateX}
          setleftTranslateX={setleftTranslateX}
          rightTranslateX={rightTranslateX}
          setRightTranslateX={setRightTranslateX}
        />
         <AboutUsSection
        setIsPointLeft={setIsPointLeft}
        isPointLeft={isPointLeft}
        leftTranslateX={leftTranslateX}
        rightTranslateX={rightTranslateX}
        isStartScrolling={isStartScrolling}
        setStartStickyScrolling={setStartStickyScrolling}
      />
        <DescriptionSectionAlternative setIsStartScrolling={setIsStartScrolling} />
        
        <FutureProjects startStickyScrolling={startStickyScrolling} projectsScrollHeight={projectsScrollHeight} descriptionScrollHeight={descriptionScrollHeight} setDescriptionScrollHeight={setDescriptionScrollHeight} backendScrollHeight={backendScrollHeight} backendTopRect={backendTopRect} thridDescriptionScrollHeight={thridDescriptionScrollHeight} />
        <FutureProjectsAlternative projectsScrollHeight={projectsScrollHeight} setProjectsScrollHeight={setProjectsScrollHeight} /> 
        <DescriptionSectionTwoAtlernative setDescriptionScrollHeight={setDescriptionScrollHeight} />  
        <BackendWorksAlternative setBackendScrollHeight={setBackendScrollHeight} backendScrollHeight={backendScrollHeight} backendTopRect={backendTopRect} setBackendTopRect={setBackendTopRect} />
        <DescriptionSectionThreeAlternative setDescriptionScrollHeight={setThridDescriptionScrollHeight} />
        <DescriptionSectionThree connectWithScrollHeight={connectWithScrollHeight} setConnectWithScrollHeight={setConnectWithScrollHeight} />
        <ConnectWithUsSectionAlternative setConnectWithScrollHeight={setConnectWithScrollHeight} />
        

      {/* </Scroll> */}
    </>
  );
}

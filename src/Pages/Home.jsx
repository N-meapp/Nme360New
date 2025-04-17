import { useState } from "react";
import Scroll from "../Components/Scrollbar/SmoothScroll";
import AboutUsSection from "../Layout/AboutUsSection";
import LandingSection from "../Layout/LandingSection";
import NavBar from "../Layout/NavBar";
import TextSection from "../Layout/TextSection";
import AboutUsSectionAlternative from "../Layout/AboutUsSectionAlternative";
import DescriptionSectionAlternative from "../Layout/DescriptionSectionAlternative";
import FutureProjectsAlternative from "../Layout/FutureProjectsAlternative";
import FutureProjects from "../Layout/FutureProjects";

export default function Home() {
  const [isPointLeft, setIsPointLeft] = useState(true);
  const [leftTranslateX, setleftTranslateX] = useState(0);
  const [rightTranslateX, setRightTranslateX] = useState(0);
  const [isStartScrolling,setIsStartScrolling] = useState(false);
  const [startStickyScrolling,setStartStickyScrolling] = useState(false)

  return (
    <>
      <NavBar />
      <FutureProjects startStickyScrolling={startStickyScrolling} />

      <AboutUsSection
        setIsPointLeft={setIsPointLeft}
        isPointLeft={isPointLeft}
        leftTranslateX={leftTranslateX}
        rightTranslateX={rightTranslateX}
        isStartScrolling={isStartScrolling}
        setStartStickyScrolling={setStartStickyScrolling}
      />



      <Scroll>
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
        <DescriptionSectionAlternative setIsStartScrolling={setIsStartScrolling} />
        <FutureProjectsAlternative />

      </Scroll>
    </>
  );
}

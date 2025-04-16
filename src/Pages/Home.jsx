import { useState } from "react";
import Scroll from "../Components/Scrollbar/SmoothScroll";
import AboutUsSection from "../Layout/AboutUsSection";
import LandingSection from "../Layout/LandingSection";
import NavBar from "../Layout/NavBar";
import TextSection from "../Layout/TextSection";
import AboutUsSectionAlternative from "../Layout/AboutUsSectionAlternative";
import DescriptionSection from "../Layout/DescriptionSection";

export default function Home() {
  const [isPointLeft, setIsPointLeft] = useState(true);
  const [leftTranslateX, setleftTranslateX] = useState(0);
  const [rightTranslateX, setRightTranslateX] = useState(0);

  return (
    <>
      {/* Fixed-position section stays outside the scroll container */}
      <NavBar />
      <AboutUsSection
        setIsPointLeft={setIsPointLeft}
        isPointLeft={isPointLeft}
        leftTranslateX={leftTranslateX}
        rightTranslateX={rightTranslateX}
      />
      {/* Smooth scroll area */}
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
        {/* <DescriptionSection /> */}
      </Scroll>
    </>
  );
}

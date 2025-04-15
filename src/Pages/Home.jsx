import { useState } from 'react';
import Scroll from '../Components/Scrollbar/SmoothScroll';
import AboutUsSection from '../Layout/AboutUsSection';
import LandingSection from '../Layout/LandingSection';
import NavBar from '../Layout/NavBar';
import TextSection from '../Layout/TextSection';
import AboutUsSectionAlternative from '../Layout/AboutUsSectionAlternative';


export default function Home() {

  const [isPointLeft,setIsPointLeft] = useState(true)

  return (
    <>
      {/* Fixed-position section stays outside the scroll container */}
      <NavBar />
      <AboutUsSection setIsPointLeft={setIsPointLeft} isPointLeft={isPointLeft} />
      {/* Smooth scroll area */}
      <Scroll>
        <LandingSection />
        <TextSection />
        <AboutUsSectionAlternative setIsPointLeft={setIsPointLeft} isPointLeft={isPointLeft} />
        
      </Scroll>
    </>
  );
}

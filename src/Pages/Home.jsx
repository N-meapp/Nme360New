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
  const [isStartScrolling, setIsStartScrolling] = useState(false);
  const [startStickyScrolling, setStartStickyScrolling] = useState(false)
  const [projectsScrollHeight, setProjectsScrollHeight] = useState(0)
  const [descriptionScrollHeight, setDescriptionScrollHeight] = useState(0)
  const [backendScrollHeight, setBackendScrollHeight] = useState(0)
  const [backendTopRect, setBackendTopRect] = useState(0)
  const [thridDescriptionScrollHeight, setThridDescriptionScrollHeight] = useState(0)
  const [connectWithScrollHeight, setConnectWithScrollHeight] = useState(0)



  useEffect(() => {
    window.scrollTo({ top: 0 });

  }, [])


  return (

    <div className="">

      <div className="w-full h-screen relative">
        <div className="h-fit w-full md:pl-20 pl-8 pt-52">
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
      <div className="md:hidden block">
        <InfiniteCarosel />
      </div>
      <div className="md:block hidden">
        <div className="w-[80%] h-fit bg-[#f8f8f8] jamjuree mt-28 mx-auto py-10 px-4 text-black text-center rounded-lg">
          <div className="flex w-fit mx-auto">
            <span>
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="-rotate-12 -mr-" viewBox="0 0 24 24"><path fill="#3f37a5" d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5zm-1.06 13.54L7.4 12l1.41-1.41l2.12 2.12l4.24-4.24l1.41 1.41z"/></svg>            </span>
            <h3 className="text-4xl font-semibold relative flex">Our trusted clients
            </h3>

          </div>
          <p className="mt-6 mb-14">llar of trust and collaboration — where integrity meets lasting partnership.</p>
          <InfiniteCarosel />

          <div>

          </div>

        </div>
      </div>

      <FeaturesSection />

      <ServiceSection />


      <WhyChooseUs />

      <AboutUsSection />


      <Footer />

    </div>


  );
}

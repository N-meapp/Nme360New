import { useContext } from "react";
import { ScrollContext } from "../main";
import FeaturesCard from "../Components/Cards/FeaturesCard";
import AboutFeaturesSection from "../Layout/AboutFeaturesSection";

export default function AboutUs() {


    const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
    const translateY = scrollHeight * 0.09; // Move slower than scroll
    const translateY2 = scrollHeight * 0.04;
    const translateY3 = scrollHeight * 0.03;

    return (
        <>

        <div className="w-full h-auto pt-28 md:pt-20 bg-[#f9f9f9] pb-10 md:pb-20 jamjuree">

                <div className="text-center md:py-12 px-12 pb-0">
                    <p className="text-black text-[24px]">
                        About Us:
                        <a className="text-[#3A329D]" href="#">
                            The Why
                        </a>
                    </p>
                    <h2 className="text-4xl md:text-6xl font-semibold text-black md:mt-8 mt-4 mb-4 md:mb-8">
                    We are N-me 360
                    </h2>
                    <p className="text-black max-w-[901px] mx-auto">
                        N-me 360 is the mother company bridging the gap between hardware and software, simplifying technology for businesses and individuals worldwide. We believe in creating value through innovation.
                    </p>
                </div>
                <div className="flex justify-center mt-8 ml-6 mr-6">
                    <img alt="Three happy people, one making a peace sign, one holding a book, and one holding a tablet, all smiling and standing together " className="rounded-lg " src="/assets/Images/About/about.png"
                        style={{
                            transform: `translateY(${translateY}px)`,
                            transition: "transform 0.05s linear ease",
                        }}>
                    </img>
                </div >
                <div className="flex items-center justify-center pt-14 md:mt-32 para px-4 md:px-8 lg:px-16">
                    <div className="bg-[#F24D400A] p-6 md:p-12 lg:p-20 rounded-lg w-full max-w-[1240px]">
                        <h1 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-black mb-4 leading-snug md:leading-[42px] max-w-full md:max-w-[1030px]">
                            Kickstart your journey with N-Me Smartech’s custom IT solutions streamlining workflows and highlighting the technology driving your business
                        </h1>
                        <p className="text-black text-sm md:text-base leading-relaxed md:leading-[30px]">
                            We are dedicated to offering advanced technology solutions that meet your company's requirements. Our team aims to provide innovative technology that promotes growth and success, from web and app development to digital marketing and branding. Simplifying processes, increasing productivity and guaranteeing smooth platform integration are our areas of expertise. Join forces with us to advance your company using results-driven, tech-driven and customized strategies.
                        </p>
                    </div>
                </div>

               <AboutFeaturesSection translateY2={translateY2} />


                <div className=" flex items-center justify-center px-4 mb-5"
                    style={{
                        transform: `translateY(${translateY3}px)`,
                        transition: "transform 0.05s linear ease",
                    }}>

                    <div className="bg-[#40D4F20A] p-8 md:p-12 lg:p-20 rounded-lg  mx-auto container">
                        <h1 className="text-[32px] md:text-[44px] lg:text-[54px] font-bold mb-6 md:mb-8 text-center md:text-left">
                            Know more about us
                        </h1>
                        <p className="text-base md:text-lg mb-6 md:mb-8 w-full mx-auto md:mx-0 text-justify ">
                            N-me 360 is a forward-thinking digital services provider focused on helping businesses transform their digital
                            environments. We specialize in delivering comprehensive IT solutions and marketing strategies that enhance
                            operational efficiency, drive growth, and improve business performance.
                        </p>
                        <p className="text-base md:text-lg mb-6 md:mb-8  mx-auto md:mx-0 text-justify">
                            Our team of over 130 professionals is dedicated to providing innovative, high-quality services to meet the
                            evolving needs of our clients. We focus on empowering businesses to thrive in a competitive market by offering
                            customized solutions tailored to specific business goals.
                        </p>
                        <p className="text-base md:text-lg w-full mx-auto md:mx-0 text-justify">
                            With a track record of working with over 1,500 clients and completing more than 1,800 projects, N-me 360 has
                            established a reputation for excellence. Whether partnering with large enterprises or small startups, we
                            prioritize building long-lasting relationships that foster mutual growth and success. We are committed to
                            helping businesses stay ahead of the curve through cutting-edge technologies and effective marketing strategies
                            for sustained success in today’s digital landscape.
                        </p>
                    </div>
                </div>
            </div>






        </>


    )
}
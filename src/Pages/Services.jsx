import { useContext } from "react";
import ServicesCard from "../Components/Cards/ServicesCard";
import { services } from "../constants/products";
import { ScrollContext } from "../main";
import Footer from "../Layout/Footer";

export default function Services() {

    const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
    const translateY = scrollHeight * 0.09; 
    const translateY2 = scrollHeight * 0.04;
    const translateY3 = scrollHeight * 0.03;

    return (
        <>
        <div className="w-full h-auto pt-28 md:pt-20 bg-[#f9f9f9] pb-10 md:pb-20 jamjuree">


                <div className="bg-[#f9f9f9] px-4">
                    <div className="max-w-full mx-auto text-center">
                        <div className="text-center md:py-12 px-12 pb-0">
                            <p className="text-black text-[24px]">
                                Our Services: <a className="text-[#3A329D]" href="#">The How</a>
                            </p>
                            <h2 className="text-4xl md:text-6xl font-semibold text-black md:mt-8 mt-4 mb-4 md:mb-8">

                                Taking digital experiences to new heights
                            </h2>
                            <p className="text-black max-w-[901px] mx-auto">
                                Discover how N-me 360 has transformed ideas into reality with cutting-edge IT solutions.
                            </p>
                        </div>

                        <div className="w-[87%] h-fit flex flex-wrap gap-[20px] mx-auto justify-center mt-10 md:mt-0"
                            style={{
                                transform: `translateY(${translateY}px)`,
                                transition: "transform 0.05s linear ease",
                            }}>
                            {services.map((service) => {
                                return (
                                    <ServicesCard service={service} />
                                )
                            })}
                        </div>

                    </div>
                </div>
                <div className="w-[80%] md:w-[87%] mx-auto h-fit pt-36 md:py-[160px]">

                    <div className="w-full md:flex justify-between items-center mb-10 md:mb-[160px]">


                        <div className="md:w-[62%] w-full h-fit pt-[68px]">
                            <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-semibold p-5 mb-4 ">Do more with us</h1>
                            <p className="text-black text-sm sm:text-base leading-6  sm:leading-7  text-justify service-text">
                                At NME 360, we provide complete IT solutions to help businesses thrive in the digital era. From custom
                                software development to branding and cloud solutions, we specialize in digital transformation, data
                                analytics, and strategic marketing. Our expert team leverages cutting-edge technology to optimize
                                operations, enhance customer engagement, and drive growth, empowering businesses to stay ahead in a
                                competitive market.
                            </p>
                        </div>
                        <div className="">
                            <img className="max-w-full h-auto " src="/assets/Images/services/service1.png" alt="Image"></img>
                        </div>

                    </div>
                    <div className="w-full md:flex justify-between items-center">
                        <div className="">
                            <img className="max-w-full h-auto " src="/assets/Images/services/service2.png" alt="Image"></img>
                        </div>
                        <div className="md:w-[62%] w-full h-fit md:pt-[68px]">
                            <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-semibold p-5 mb-4 leading-[48px] sm:leading-[58px] lg:leading-[70.2px]">
                                Why we or what makes us unique
                            </h1>
                            <p className="text-black text-sm sm:text-base leading-6 sm:leading-7  text-justify service-text">
                                At NME 360, we drive business growth with tailored IT solutions, custom branding, and
                                strategic marketing. Unlike one-size-fits-all approaches, we craft personalized strategies
                                to optimize operations, enhance your brand, and boost customer engagement. By staying ahead
                                of digital trends and leveraging cutting-edge technology, we empower your business to lead
                                in a dynamic market. With future-proof solutions, we help you thrive today and tomorrow.
                            </p>


                        </div>


                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
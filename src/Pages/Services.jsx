import { useContext } from "react";
import ServicesCard from "../Components/Cards/ServicesCard";
import { services } from "../constants/products";
import { ScrollContext } from "../main";

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


                        {/* 
                    <div className="grid grid-cols-1 md:w-auto justify-items-center sm:grid-cols-1 lg:grid-cols-4  md:grid-cols-3 gap-2 card-grid overflow-hidden mr-7 p-10">
                        <div className="bg-[#EFF2F9] p-6 rounded-lg text-left w-[100%%] h-[100%] cards pb-32">
                            <img src="./assets/img/Group 39529.png" alt="Web Development Icon" className="mb-16 w-[81px] h-[81px]">
                            </img>
                            <h3 className="text-[24px] font-semibold text-blue-500 mb-4">Web Development</h3>
                            <p className="text-[#1F1F1F] text-base leading-[30px]">
                                Crafting responsive, secure, and visually stunning websites that connect with your audience and drive results.
                            </p>
                        </div>

                        <div className="bg-[#F8F1E6] p-6 rounded-lg text-left w-[100%%] h-[100%] pb-32 cards">
                            <img src="./assets/img/Group 39523.png" alt="App Development Icon" className="mb-16 w-[81px] h-[81px]">
                            </img>
                            <h3 className="text-[24px] font-semibold text-[#ECA642] mb-4">App Development</h3>
                            <p className="text-[#1F1F1F] text-base leading-[30px]">
                                Designing intuitive and high-performance mobile apps tailored for Android, iOS, and cross-platform users.
                            </p>
                        </div>

                        <div className="bg-[#F0F5E9] p-6 rounded-lg text-left w-[100%%] h-[100%] pb-32 cards">
                            <img src="./assets/img/Group 39524.png" alt="Digital Marketing Icon" className="mb-16 w-[81px] h-[81px]">
                            </img>
                            <h3 className="text-[24px] font-semibold text-[#78AE26] mb-4">Digital Marketing</h3>
                            <p className="text-[#1F1F1F] text-base leading-[30px]">
                                Delivering targeted digital marketing campaigns that elevate brand awareness and maximize ROI.
                            </p>
                        </div>

                        <div className="bg-[#EDF3F5] p-6 rounded-lg text-left w-[100%%] h-[100%] pb-32 cards">
                            <img src="./assets/img/Group 39525.png" alt="UI/UX Design Icon" className="mb-16 w-[81px] h-[81px]">
                            </img>
                            <h3 className="text-[24px] font-semibold text-[#2183A4] mb-4">UI/UX Design</h3>
                            <p className="text-[#1F1F1F] text-base leading-[30px]">
                                Creating intuitive, user-focused designs that seamlessly blend functionality with aesthetics.
                            </p>
                        </div>

                        <div className="bg-[#EDFFFE] p-6 rounded-lg text-left w-[100%%] h-[100%] pb-32 cards">
                            <img src="./assets/img/Group 39526.png" alt="Branding Icon" className="mb-16 w-[81px] h-[81px]">
                            </img>
                            <h3 className="text-[24px] font-semibold text-[#42ECDE] leading-6 mb-4">Branding and Designing</h3>
                            <p className="text-[#1F1F1F] text-base leading-[30px]">
                                Branding and design define your business, crafting unique, modern visuals that engage and connect with your audience.
                            </p>
                        </div>

                        <div className="bg-[#EEEDF4] p-6 rounded-lg text-left w-[100%%] h-[100%] pb-32 cards">
                            <img src="./assets/img/Group 39527.png" alt="SEO Icon" className="mb-16 w-[81px] h-[81px]">
                            </img>
                            <h3 className="text-[24px] font-semibold text-[#372E9F] mb-4">SEO</h3>
                            <p className="text-[#1F1F1F] text-base leading-[30px]">
                                Boost your visibility, drive organic traffic, and dominate search rankings with our expert SEO services.
                            </p>
                        </div>

                        <div className="bg-[#FFEDF2] p-6 rounded-lg text-left w-[100%%] h-[100%] pb-32 cards">
                            <img src="./assets/img/Group 39528.png" alt="Software Installation Icon" className="mb-16 w-[81px] h-[81px]">
                            </img>
                            <h3 className="text-[24px] font-semibold text-[#9F2E50] mb-4">Software Installation</h3>
                            <p className="text-[#1F1F1F] text-base leading-[30px]">
                                We follow the SDLC approach, developing high-quality software applications that align with your business goals.
                            </p>
                        </div>
                    </div> */}
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
        </>
    )
}
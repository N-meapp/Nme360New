import { useState } from "react";
import FeaturesCard from "../Components/Cards/FeaturesCard";

export default function AboutFeaturesSection({ translateY2 }) {

    const [selectedCard, setSelectedCard] = useState(null)
    const [limitedCard, setLimitedCard] = useState(null)

    return (
        <>
            <div className="md:block hidden">
                <div className=" items-center justify-center mt-20 flex">
                    <div className="text-center px-4">
                        <h1 className="text-[54px] font-bold mb-4"
                        >
                            Features</h1>
                        <p className="text-black mb-8 max-w-2xl mx-auto leading-7">
                            Discover the brilliance of NME 360, designed to redefine innovation, <br></br> reliability, and performance with its advanced
                            <span className="font-bold">4S</span> features setting a new benchmark in <br></br> technology.
                        </p>
                        <div className="w-fit mx-auto h-fit flex mb-[106px] gap-[24px]"
                            style={{
                                transform: `translateY(${translateY2}px)`,
                                transition: "transform 0.05s linear ease",
                            }}
                        >
                            <div className="flex flex-col gap-[24px]">
                                <FeaturesCard selectedCard={selectedCard} setSelectedCard={setSelectedCard} limitedCard={limitedCard} setLimitedCard={setLimitedCard} bg={'#B2A4FF'} icon={'/assets/Images/About/smart.png'} color={'white'} text={'Smart'} shrinkText={'Speed'} description={'Smart technology simplifies tasks and enhances efficiency.'} />
                                <FeaturesCard selectedCard={selectedCard} setSelectedCard={setSelectedCard} limitedCard={limitedCard} setLimitedCard={setLimitedCard} bg={'#FFB4B4'} icon={'/assets/Images/About/speed.png'} color={'white'} text={'Speed'} shrinkText={'Smart'} description={'Experience unmatched speed for seamless performance.'} />
                            </div>

                            <div className="flex flex-col gap-[24px]">                                
                                <FeaturesCard selectedCard={selectedCard} setSelectedCard={setSelectedCard} limitedCard={limitedCard} setLimitedCard={setLimitedCard} bg={'#FDF7C3'} icon={'/assets/Images/About/secure.png'} color={'#434343'} text={'Secure'} shrinkText={'Support'} description={'Top-notch security features protect your data at all times.'} />
                                <FeaturesCard selectedCard={selectedCard} setSelectedCard={setSelectedCard} limitedCard={limitedCard} setLimitedCard={setLimitedCard} bg={'#FFDEB4'} icon={'/assets/Images/About/support.png'} color={'#434343'} text={'Support'} shrinkText={'Secure'} description={'Unparalleled support ensures your success.'} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
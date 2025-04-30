import { useEffect, useState } from "react"
import ServicesCard from "../Components/Cards/ServicesCard"
import { services } from "../constants/products"

export default function BackendWorksSection({ backendScrollHeight, backendTopRect,thridDescriptionScrollHeight }) {

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight


    const [translateX, setTranslateX] = useState(window.innerWidth)
    const [translateY, setTranslateY] = useState(0)

    useEffect(() => {


        if (backendTopRect > 0) {
            setTranslateY(backendScrollHeight * 0.4)
        }

        setTranslateX(backendScrollHeight)
    }, [backendScrollHeight])

    return (
        <>
            <div className="w-full h-screen relative bg-[#ffffff]"
             style={{
                // transform: `translateY( ${0}px)`,
                transform: `translateY( -${screenHeight-thridDescriptionScrollHeight}px)`,

                transition: "transform 0.01s linear ease-out",
            }}
            >
                <div className="text-3xl md:text-[90px] text-[#5756564b] absolute top-32  w-full text-center jamjuree font-bold flex justify-center items-center">
                {/* <img className="w-14 md:w-32 spin -mr-7 md:-mr-16 -z-10" src="/public/assets/Images/gearicon.png" alt="" /> */}

                <h3 className="bg-[#ffffff] w-fit md:py-4  md:px-1 rounded-full">Services</h3>
                </div>
                
                <div
                    id="services"
                    style={{
                        transform: `translateX(${screenWidth - translateX}px) translateY(${translateY}px)`,
                        transition: "transform 0.01s linear ease-out",
                    }}

                    className="w-fit h-fit overflow-visible flex gap-3 ">
                    {services.map((service) => {
                        return (
                            <ServicesCard service={service} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}   
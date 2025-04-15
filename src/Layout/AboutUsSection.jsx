import { useState } from "react"

export default function AboutUsSection({isPointLeft,setIsPointLeft}) {
    
    return (
        <>
            <div className="w-full h-screen fixed p-2 -z-10" >
                <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl flex"
                // style={{
                //     backgroundImage: "url('/public/assets/Images/header/us.jpg",
                // }}
                >
                    <div className={`${isPointLeft?'w-[62%]':'w-[38%]'}  overflow-hidden h-full transition-[width] duration-500 rounded-2xl bg-[#00000080] relative`}>
                        <img className={`w-[99vw] max-w-none top-0 absolute h-screen object-cover left-0`} src="/public/assets/Images/header/us.jpg"></img>
                        <h3 className="text-[54px] text-[white] font-semibold">About Us</h3>
                    </div>
                    <div className={`${!isPointLeft?'w-[62%]':'w-[38%]'}  overflow-hidden h-full rounded-2xl transition-[width] duration-500 relative`}>
                        <img className={`w-[99vw] max-w-none top-0 absolute h-screen -z-10 object-cover right-0`} src="/public/assets/Images/header/us.jpg"></img>
                        <div className="w-full h-full bg-[#00000080]"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
import { useState } from "react";

export default function AboutUsSectionAlternative({isPointLeft,setIsPointLeft}) {


    return (
        <>
            <div className="w-full h-screen fixed p-2 -z-10">
                <div className="w-full h-full rounded-2xl flex">
                    <div
                        onMouseEnter={() => {
                            console.log('first div');
                            setIsPointLeft(true);
                        }}
                        className={`
        ${isPointLeft ? 'w-[62%]' : 'w-[38%]'}
        overflow-hidden h-full rounded-2xl
        transition-[width] duration-500 ease-in-out
        bg-[#ffffff00] relative
      `}
                    ></div>

                    <div
                        onMouseEnter={() => {
                            console.log('second div');
                            setIsPointLeft(false);
                        }}
                        className={`
        ${!isPointLeft ? 'w-[62%]' : 'w-[38%]'}
        overflow-hidden h-full rounded-2xl
        transition-[width] duration-500 ease-in-out
        bg-[#c9672e00] relative
      `}
                    ></div>
                </div>
            </div>

        </>
    )
}
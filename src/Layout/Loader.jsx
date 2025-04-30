import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loader() {
  useEffect(() => {
    const roundElement = document.getElementById('rounded-div');
    setTimeout(() => {
      if (roundElement) {
        roundElement.style.transform = 'translateY(-100vh) scale(0)'; // move up and shrink
        roundElement.style.borderRadius = '100%'
      }
    }, 3000);
  }, []);

  return (
    // <div className='overflow-hidden w-screen h-screen fixed top-0 z-50'>
      <div
        id='rounded-div'
        className='w-full h-screen content-center top-0 justify-items-center fixed z-[500] transition-all duration-[5s] bg-[#ffffff] rounded-b-none items-center overflow-hidden'
        style={{
          transform: 'translateY(0) scale(1)', // initial state
        }}
      >
        <DotLottieReact
          src="https://lottie.host/0c18222b-61ed-4e32-8553-4c8f360d7c14/EZ6UrEl4SA.lottie"
          loop
          autoplay
          className='w-52 h-52 rounded-full'
        />
      {/* </div> */}
    </div>
  );
}

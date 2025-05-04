import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavHandler() {
  const [isHovered, setIsHovered] = useState(false);
  const navArray = ['Home', 'About Us', 'Services', 'Careers', 'Blogs', 'Contact Us'];
  const [selectedTab, setSelectedTab] = useState('Home');
  const navigate = useNavigate()

  const handleNav = (value) => {
    if (value == 'About Us') {
      navigate('/about')
    }
    else if(value=='Services'){
      navigate('/services')

    }else if(value=='Careers'){
      navigate('/careers')

    }else if(value=='Blogs'){
      navigate('/blogs')

    }else if(value=='Contact Us'){
      navigate('/contactus')

    } else {
      navigate('/')
    }

    setSelectedTab(value)
    setIsHovered(false)
  }

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative p-[1px] md:p-[2px] bg-white rounded-md h-[50px] md:h-[80px] transition-all duration-500 overflow-hidden md:flex hidden ${isHovered ? 'w-[700px]' : 'w-[110px] md:w-[219.45px]'
          }`}
        style={{ transition: "all 0.5s ease" }} // For smoother transform
      >
        {/* Left Part */}
        <div className="flex-1 h-full flex items-center justify-center relative">
          {isHovered ? (
            <div className="flex gap-7 absolute left-4 top-0 h-full items-center">
              {navArray.map((tab, index) => (
                <h3
                  key={index}
                  className="md:text-sm text-xs font-medium text-[#000000] jamjuree cursor-pointer"
                  onClick={() => {
                    handleNav(tab)
                  }}
                >
                  {tab}
                </h3>
              ))}
            </div>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 md:size-10" fill="#000000" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          )}
        </div>

        {/* Right Part */}
        <div className="w-[146.85px] h-full rounded-[5px] bg-[#3F37A5] text-center flex items-center justify-center z-10 shrink-0">
          <h3 className="xl:text-lg text-[14.85px] font-medium text-white jamjuree">{selectedTab}</h3>
        </div>
      </div>


      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-fit bg-white rounded-md overflow-hidden transition-all duration-500 md:hidden`}
        style={{
          height: isHovered ? "300px" : "58px",
          transition: "height 0.5s ease"
        }}
      >
        {/* Top Row */}
        <div className="relative p-1 w-[110px] flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="#000000" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>

          <div className="w-full h-[50px] rounded-[5px] bg-[#3F37A5] text-center flex items-center justify-center z-10">
            <h3 className="text-xs font-medium text-white jamjuree">{selectedTab}</h3>
          </div>
        </div>

        {/* Expanded Content */}
        {isHovered && (
          <div className="flex flex-col gap-3 items-center mt-3 px-2">
            {navArray.map((tab, index) => (
              <h3
                key={index}
                className="text-xs font-medium text-black jamjuree cursor-pointer"
                onClick={() => handleNav(tab)
                }
              >
                {tab}
              </h3>
            ))}
          </div>
        )}
      </div>


    </>
  );
}

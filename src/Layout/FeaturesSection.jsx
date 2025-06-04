import { useState } from "react";
import EachFeatures from "../Components/Cards/EachFeatures";

export default function FeaturesSection() {
  const [selectedTab, setSelectedTab] = useState("one");

  return (
    <>
    <div className="w-[90%] md:w-[80%] h-fit mb-12 mt-20 mx-auto" >
        <h3 className="text-2xl md:text-4xl font-semibold jamjuree mb-10">Features</h3>
      <div className="w-full md:flex h-fit  mx-auto rounded-lg bg-[#ffffff] p-5 border">
        <div className="w-full md:w-1/3 overflow-x-auto scrollbar-hide">
          <div className="flex md:flex-col md:text-wrap md:p-6 rounded-lg md:h-full md:w-fit md:bg-[#f7f6f6] gap-10 whitespace-nowrap scrollbar-hide text-xs">
            <div className="w-fit h-fit">
              <h3
                className="md:text-lg"
                onClick={() => {
                  setSelectedTab("one");
                }}
              >
                360° Digital Solution
              </h3>
              {selectedTab == "one" ? (
                <hr className="w-full border-[1.5px] rounded-full mt-1 border-[#3f37a5]"></hr>
              ) : null}
            </div>
            <div className="w-fit h-fit">
              <h3
                className="md:text-lg"
                onClick={() => {
                  setSelectedTab("two");
                }}
              >
                Custom-Fit
              </h3>
              {selectedTab == "two" ? (
                <hr className="w-full border-[1.5px] rounded-full mt-1 border-[#3f37a5]"></hr>
              ) : null}
            </div>
            <div className="w-fit h-fit">
              <h3
                className="md:text-lg"
                onClick={() => {
                  setSelectedTab("three");
                }}
              >
                Expert Support
              </h3>
              {selectedTab == "three" ? (
                <hr className="w-full border-[1.5px] rounded-full mt-1 border-[#3f37a5]"></hr>
              ) : null}
            </div>

            <div className="w-fit h-fit">
              <h3
                className="md:text-lg"
                onClick={() => {
                  setSelectedTab("four");
                }}
              >
                Smooth UX
              </h3>
              {selectedTab == "four" ? (
                <hr className="w-full border-[1.5px] rounded-full mt-1 border-[#3f37a5]"></hr>
              ) : null}
            </div>

            <div className="w-fit h-fit">
              <h3
                className="md:text-lg"
                onClick={() => {
                  setSelectedTab("five");
                }}
              >
                Security
              </h3>
              {selectedTab == "five" ? (
                <hr className="w-full border-[1.5px] rounded-full mt-1 border-[#3f37a5]"></hr>
              ) : null}
            </div>
          </div>
        </div>
        <div>
        </div>

        {selectedTab == "one" ? (
          <EachFeatures
            image={"/assets/Images/About/digitalsolution.jpg"}
            title={"End-to-End Digital Solutions"}
            description={
              "From web development to digital marketing, we offer full-spectrum IT services under one roof. N-me 360 is your all-in-one partner for building, growing, and managing your digital presence."
            }
          />
        ) : selectedTab == "two" ? (
          <EachFeatures
            image={"/assets/Images/About/custombuild.jpg"}
            title={"Custom-Built for Your Brand"}
            description={
              "We don’t use generic templates. Every project is tailored to your business goals, ensuring your website, app, or marketing campaign reflects your unique identity and audience."
            }
          />
        ) : selectedTab == "three" ? (
          <EachFeatures
            image={"/assets/Images/About/team3.jpg"}
            title={"Dedicated Support Team"}
            description={
              "We don’t disappear after launch. Get 24/7 technical support, bug fixes, and continuous improvements from a team that’s committed to your long-term success."
            }
          />
        ) : selectedTab == "four" ? (
          <EachFeatures
            image={"/assets/Images/About/ux.jpg"}
            title={"Seamless User Experience"}
            description={
              "Design meets function in everything we build. We focus on clean interfaces, fast loading, and easy navigation to keep users engaged and coming back."
            }
          />
        ) : selectedTab == "five" ? (
          <EachFeatures
            image={"/assets/Images/About/security.jpg"}
            title={"Data-Secure Platforms"}
            description={
              "Security is never optional. We implement secure hosting, encrypted payments, and user data protection to give you and your customers complete peace of mind."
            }
          />
        ) : null}
      </div>
    </div>
    </>
  );
}

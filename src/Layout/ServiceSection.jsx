import { useState } from "react";
import SendEnquiry from "./SendEnquiry";
import ServiceItemsCard from "../Components/Cards/ServiceItemsCard";

export default function ServiceSection() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [webTitle,setWebTitle] = useState(null);

  return (
    <>
      <div className="w-[90%] h-fit mx-auto jamjuree md:hidden block">
        <h3 className="text-2xl md:text-4xl font-semibold">Services</h3>
        <div className="w-full mt-8 h-fit">
          <div
            onClick={() => {
              if (selectedTab == "app") {
                setSelectedTab(null);
              } else {
                setSelectedTab("app");
              }
            }}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3f37a5"
                  d="M7 11.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 7 2.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 7 11.5"
                  class="duoicon-primary-layer"
                />
                <path
                  fill="#3f37a5"
                  d="M17 21.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 17 12.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 17 21.5m0-10c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 17 2.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 17 11.5m-10 10c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 7 12.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 7 21.5"
                  class="duoicon-secondary-layer"
                  opacity="0.3"
                />
              </svg>
              <h3
                className={`${selectedTab == "app" ? "font-semibold" : ""
                  } transition-all`}
              >
                App Development
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              className={`${selectedTab == "app" ? "rotate-180" : "rotate-0"
                } transition-all duration-200`}
            >
              <g
                fill="none"
                stroke="#afa8c8"
                stroke-linejoin="round"
                stroke-width="1.9"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m33 21l-9 9l-9-9" />
              </g>
            </svg>
          </div>
          <div
            className={`${selectedTab == "app" ? "h-80" : "h-0"
              } transition-all duration-200 w-full overflow-hidden`}
          >
            <h3 className="mt-3 text-sm leading-loose md:text-base">
              From web development to digital marketing, we offer full-spectrum
              IT services under one roof. N-me 360 is your all-in-one partner
              for building, growing, and managing your digital presence.
            </h3>
            <div className="w-full h-fit overflow-x-auto scrollbar-hide">
              <div className="w-auto h-fit mt-5 flex gap-4 scrollbar-hide">
                <SendEnquiry
                  title={"Android Applications"}
                  image={"/assets/Images/services/android.jpg"}
                />
                <SendEnquiry
                  title={"IOS Applications"}
                  image={"/assets/Images/services/ios.jpg"}
                />
              </div>
            </div>
          </div>
          <hr className="mt-5 mb-5"></hr>

          <div
            onClick={() => {
              if (selectedTab == "web") {
                setSelectedTab(null);
              } else {
                setSelectedTab("web");
              }
            }}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3f37a5"
                  d="m4.416 11l2.246-2.246q.14-.14.15-.344t-.15-.364t-.354-.16t-.354.16l-2.388 2.388q-.243.243-.243.566t.243.566l2.388 2.388q.14.14.344.15t.364-.15t.16-.354t-.16-.354zm15.169 0l-2.246 2.246q-.141.14-.15.344t.15.364t.353.16t.354-.16l2.389-2.388q.242-.243.242-.566t-.242-.565l-2.389-2.389q-.14-.14-.344-.15t-.363.15t-.16.354t.16.354zM3 6.77V5.615q0-.691.463-1.154T4.615 4h14.77q.69 0 1.152.462T21 5.615V6.77q0 .214-.143.357t-.357.143t-.357-.143T20 6.769V5.615q0-.269-.173-.442T19.385 5H4.615q-.269 0-.442.173T4 5.616v1.153q0 .214-.143.357t-.357.143t-.357-.143T3 6.769M9.808 20q-.348 0-.578-.23T9 19.192V18H4.616q-.691 0-1.153-.462T3 16.384v-1.148q0-.213.143-.353q.144-.14.357-.14t.357.143t.143.356v1.142q0 .27.173.443t.443.173h14.769q.269 0 .442-.173t.173-.443v-1.148q0-.213.143-.353t.357-.14t.357.143t.143.356v1.142q0 .691-.463 1.153T19.385 18H15v1.192q0 .349-.23.578t-.578.23zM12 11"
                />
              </svg>
              <h3
                className={`${selectedTab == "web" ? "font-semibold" : ""
                  } transition-all`}
              >
                Web Development
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              className={`${selectedTab == "web" ? "rotate-180" : "rotate-0"
                } transition-all duration-200`}
            >
              <g
                fill="none"
                stroke="#afa8c8"
                stroke-linejoin="round"
                stroke-width="1.9"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m33 21l-9 9l-9-9" />
              </g>
            </svg>
          </div>
          <div
            className={`${selectedTab == "web" ? "h-80" : "h-0"
              } transition-all duration-200 w-full overflow-hidden`}
          >
            <h3 className="mt-3 text-sm leading-loose md:text-base">
              From web development to digital marketing, we offer full-spectrum
              IT services under one roof. N-me 360 is your all-in-one partner
              for building, growing, and managing your digital presence.
            </h3>
            <div className="w-full h-fit overflow-x-auto scrollbar-hide">
              <div className="w-auto h-fit mt-5 flex gap-4 scrollbar-hide">
                <SendEnquiry
                  title={"Static Websites"}
                  image={"/assets/Images/services/static.jpg"}
                />
                <SendEnquiry
                  title={"Dynamic Websites"}
                  image={"/assets/Images/services/dynamic.jpg"}
                />
                <SendEnquiry
                  title={"E-commerce Websites"}
                  image={"/assets/Images/services/ecommerce.jpg"}
                />
                <SendEnquiry
                  title={"Web applications"}
                  image={"/assets/Images/services/webapp.jpg"}
                />
                <SendEnquiry
                  title={"Web designing"}
                  image={"/assets/Images/services/webdesign.jpg"}
                />
              </div>
            </div>
          </div>
          <hr className="mt-5 mb-5"></hr>

          <div
            onClick={() => {
              if (selectedTab == "dm") {
                setSelectedTab(null);
              } else {
                setSelectedTab("dm");
              }
            }}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3f37a5"
                  fill-rule="evenodd"
                  d="M8 2.25A6.75 6.75 0 0 0 2.969 13.5a.75.75 0 0 0 1.118-1A5.25 5.25 0 0 1 8 3.75h4a5.25 5.25 0 1 1 0 10.5h-2a.75.75 0 0 0 0 1.5h2a6.75 6.75 0 0 0 0-13.5z"
                  clip-rule="evenodd"
                />
                <path
                  fill="#3f37a5"
                  d="M6.75 15c0-2.9 2.35-5.25 5.25-5.25h2a.75.75 0 0 0 0-1.5h-2a6.75 6.75 0 0 0 0 13.5h4a6.75 6.75 0 0 0 5.031-11.25a.75.75 0 0 0-1.118 1A5.25 5.25 0 0 1 16 20.25h-4A5.25 5.25 0 0 1 6.75 15"
                  opacity="0.5"
                />
              </svg>
              <h3
                className={`${selectedTab == "dm" ? "font-semibold" : ""
                  } transition-all`}
              >
                Digital Marketing
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              className={`${selectedTab == "dm" ? "rotate-180" : "rotate-0"
                } transition-all duration-200`}
            >
              <g
                fill="none"
                stroke="#afa8c8"
                stroke-linejoin="round"
                stroke-width="1.9"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m33 21l-9 9l-9-9" />
              </g>
            </svg>
          </div>
          <div
            className={`${selectedTab == "dm" ? "h-80" : "h-0"
              } transition-all duration-200 w-full overflow-hidden`}
          >
            <h3 className="mt-3 text-sm leading-loose md:text-base">
              From web development to digital marketing, we offer full-spectrum
              IT services under one roof. N-me 360 is your all-in-one partner
              for building, growing, and managing your digital presence.
            </h3>
            <div className="w-full h-fit overflow-x-auto scrollbar-hide">
              <div className="w-auto h-fit mt-5 flex gap-4 scrollbar-hide">
                <SendEnquiry
                  title={"Google Ads"}
                  image={"/assets/Images/services/googleads.jpg"}
                />
                <SendEnquiry
                  title={"Meta Ads"}
                  image={"/assets/Images/services/metaads.jpg"}
                />
                <SendEnquiry
                  title={"Social-media Marketing"}
                  image={"/assets/Images/services/smm.jpg"}
                />
                <SendEnquiry
                  title={"Lead Generation"}
                  image={"/assets/Images/services/lead.jpg"}
                />
                <SendEnquiry
                  title={"Web designing"}
                  image={"/assets/Images/services/webdesign.jpg"}
                />
              </div>
            </div>
          </div>

          <hr className="mt-5 mb-5"></hr>

          <div
            onClick={() => {
              if (selectedTab == "ui") {
                setSelectedTab(null);
              } else {
                setSelectedTab("ui");
              }
            }}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#3f37a5"
                  d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
                />
              </svg>
              <h3
                className={`${selectedTab == "ui" ? "font-semibold" : ""
                  } transition-all`}
              >
                UI/UX Design
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              className={`${selectedTab == "ui" ? "rotate-180" : "rotate-0"
                } transition-all duration-200`}
            >
              <g
                fill="none"
                stroke="#afa8c8"
                stroke-linejoin="round"
                stroke-width="1.9"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m33 21l-9 9l-9-9" />
              </g>
            </svg>
          </div>
          <div
            className={`${selectedTab == "ui" ? "h-80" : "h-0"
              } transition-all duration-200 w-full overflow-hidden`}
          >
            <h3 className="mt-3 text-sm leading-loose md:text-base">
              From web development to digital marketing, we offer full-spectrum
              IT services under one roof. N-me 360 is your all-in-one partner
              for building, growing, and managing your digital presence.
            </h3>
            <div className="w-full h-fit overflow-x-auto scrollbar-hide">
              <div className="w-auto h-fit mt-5 flex gap-4 scrollbar-hide">
                <SendEnquiry
                  title={"Google Ads"}
                  image={"/assets/Images/services/googleads.jpg"}
                />
                <SendEnquiry
                  title={"Meta Ads"}
                  image={"/assets/Images/services/metaads.jpg"}
                />
                <SendEnquiry
                  title={"Social-media Marketing"}
                  image={"/assets/Images/services/smm.jpg"}
                />
                <SendEnquiry
                  title={"Lead Generation"}
                  image={"/assets/Images/services/lead.jpg"}
                />
                <SendEnquiry
                  title={"Web designing"}
                  image={"/assets/Images/services/webdesign.jpg"}
                />
              </div>
            </div>
          </div>

          <hr className="mt-5 mb-5"></hr>

          <div
            onClick={() => {
              if (selectedTab == "design") {
                setSelectedTab(null);
              } else {
                setSelectedTab("design");
              }
            }}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#3f37a5"
                  d="M4.58 2.125a.5.5 0 0 1 .12.598a.3.3 0 0 0-.013.09c0 .063.016.183.167.333c.073.073.129.125.19.182c.05.046.103.094.17.16c.13.124.267.27.39.453c.255.383.396.862.396 1.559C6 6.97 5.023 8 4 8S2 6.97 2 5.5c0-.326.087-.715.207-1.074s.288-.732.482-1.032c.231-.39.556-.717.808-.937a6 6 0 0 1 .432-.343l.044-.03a.5.5 0 0 1 .608.041M4 9a2.68 2.68 0 0 0 1.68-.595q.071.211.12.425c.2.87.2 1.916.2 2.645v.025c0 2.787-.379 4.368-.796 5.272c-.21.455-.433.745-.626.927a1.5 1.5 0 0 1-.258.198a1 1 0 0 1-.133.067S4.074 18 4 18s-.187-.036-.187-.036a1 1 0 0 1-.133-.067a1.5 1.5 0 0 1-.258-.198c-.193-.183-.416-.472-.626-.927C2.379 15.868 2 14.287 2 11.5v-.025c0-.73 0-1.775.2-2.645q.049-.214.12-.425A2.68 2.68 0 0 0 4 9m5 4c-.715 0-1.396-.15-2.01-.42q.02-.534.02-1.11A4 4 0 0 0 9 12v-2a2 2 0 0 1 2-2h2a4 4 0 0 0-6.082-3.416a3.3 3.3 0 0 0-.338-.96A5 5 0 0 1 14 8h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm4.9-4a5.01 5.01 0 0 1-3.9 3.9V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1.026 0H11a1 1 0 0 0-1 1v1.874A4.01 4.01 0 0 0 12.874 9"
                />
              </svg>
              <h3
                className={`${selectedTab == "design" ? "font-semibold" : ""
                  } transition-all`}
              >
                Branding and Designing
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              className={`${selectedTab == "design" ? "rotate-180" : "rotate-0"
                } transition-all duration-200`}
            >
              <g
                fill="none"
                stroke="#afa8c8"
                stroke-linejoin="round"
                stroke-width="1.9"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m33 21l-9 9l-9-9" />
              </g>
            </svg>
          </div>
          <div
            className={`${selectedTab == "design" ? "h-80" : "h-0"
              } transition-all duration-200 w-full overflow-hidden`}
          >
            <h3 className="mt-3 text-sm leading-loose md:text-base">
              From web development to digital marketing, we offer full-spectrum
              IT services under one roof. N-me 360 is your all-in-one partner
              for building, growing, and managing your digital presence.
            </h3>
            <div className="w-full h-fit overflow-x-auto scrollbar-hide">
              <div className="w-auto h-fit mt-5 flex gap-4 scrollbar-hide">
                <SendEnquiry
                  title={"Google Ads"}
                  image={"/assets/Images/services/googleads.jpg"}
                />
                <SendEnquiry
                  title={"Meta Ads"}
                  image={"/assets/Images/services/metaads.jpg"}
                />
                <SendEnquiry
                  title={"Social-media Marketing"}
                  image={"/assets/Images/services/smm.jpg"}
                />
                <SendEnquiry
                  title={"Lead Generation"}
                  image={"/assets/Images/services/lead.jpg"}
                />
                <SendEnquiry
                  title={"Web designing"}
                  image={"/assets/Images/services/webdesign.jpg"}
                />
              </div>
            </div>
          </div>

          <hr className="mt-5 mb-5"></hr>

          <div
            onClick={() => {
              if (selectedTab == "software") {
                setSelectedTab(null);
              } else {
                setSelectedTab("software");
              }
            }}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3f37a5"
                  d="M4.616 21q-.691 0-1.153-.462T3 19.385V4.615q0-.69.463-1.152T4.615 3h7.214q.331 0 .632.13t.518.349L16.52 7.02q.217.218.348.518t.131.632v3.618q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356V8h-4V4H4.616q-.231 0-.424.192T4 4.615v14.77q0 .23.192.423t.423.192h8.924q.212 0 .356.144t.143.357t-.143.356t-.357.143zM4 20V4zm1.962-1.77q.08-.987.608-1.814t1.38-1.31l-.777-1.373q0-.006.075-.323q.092-.045.186-.026q.093.02.143.106l.783 1.404q.405-.155.811-.242t.832-.086t.84.083q.413.084.798.245l.782-1.403q.02-.02.293-.081q.092.05.126.146q.035.096-.006.177l-.767 1.373q.858.485 1.374 1.31q.516.827.595 1.815zm2.23-1.21q.162 0 .273-.122q.112-.121.112-.283t-.116-.282t-.269-.121q-.161 0-.283.12q-.12.122-.12.284t.12.282t.283.121m3.635 0q.161 0 .282-.121q.122-.121.122-.283t-.122-.282t-.282-.121t-.283.12t-.121.284t.121.282t.283.121m6.211 2.054v-4.361q0-.213.144-.357q.144-.143.357-.143t.356.143t.144.357v4.361l1.765-1.74q.146-.14.344-.131t.344.153q.134.143.14.335q.006.19-.14.337l-2.388 2.407q-.243.243-.566.243t-.565-.243l-2.388-2.407q-.134-.136-.14-.339t.14-.35q.14-.165.353-.155q.214.01.36.15z"
                />
              </svg>
              <h3
                className={`${selectedTab == "software" ? "font-semibold" : ""
                  } transition-all`}
              >
                Software Installation
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 48 48"
              className={`${selectedTab == "software" ? "rotate-180" : "rotate-0"
                } transition-all duration-200`}
            >
              <g
                fill="none"
                stroke="#afa8c8"
                stroke-linejoin="round"
                stroke-width="1.9"
              >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path stroke-linecap="round" d="m33 21l-9 9l-9-9" />
              </g>
            </svg>
          </div>
          <div
            className={`${selectedTab == "software" ? "h-80" : "h-0"
              } transition-all duration-200 w-full overflow-hidden`}
          >
            <h3 className="mt-3 text-sm leading-loose md:text-base">
              From web development to digital marketing, we offer full-spectrum
              IT services under one roof. N-me 360 is your all-in-one partner
              for building, growing, and managing your digital presence.
            </h3>
            <div className="w-full h-fit overflow-x-auto scrollbar-hide">
              <div className="w-auto h-fit mt-5 flex gap-4 scrollbar-hide">
                <SendEnquiry
                  title={"Google Ads"}
                  image={"/assets/Images/services/googleads.jpg"}
                />
                <SendEnquiry
                  title={"Meta Ads"}
                  image={"/assets/Images/services/metaads.jpg"}
                />
                <SendEnquiry
                  title={"Social-media Marketing"}
                  image={"/assets/Images/services/smm.jpg"}
                />
                <SendEnquiry
                  title={"Lead Generation"}
                  image={"/assets/Images/services/lead.jpg"}
                />
                <SendEnquiry
                  title={"Web designing"}
                  image={"/assets/Images/services/webdesign.jpg"}
                />
              </div>
            </div>
          </div>

          <hr className="mt-5 mb-5"></hr>
        </div>
      </div>

      <div className="w-[90%] h-fit mt-20  mx-auto jamjuree md:block hidden">
        <h3 className="text-2xl md:text-4xl font-semibold">Services</h3>
        <div className="w-full flex gap-10">
        <div className="w-full mt-8 ">
          <div className={`w-full border-[#ebeaea] rounded-xl bg-[#fdfdfd] border p-10 mt-10 ${selectedTab=='app'?'h-auto':'h-56'} overflow-hidden`}>
            <div
              onClick={() => {
                if (selectedTab == "app") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("app");
                }
              }}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 md:w-8 md:h-8 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3f37a5"
                    d="M7 11.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 7 2.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 7 11.5"
                    class="duoicon-primary-layer"
                  />
                  <path
                    fill="#3f37a5"
                    d="M17 21.5c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 17 12.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 17 21.5m0-10c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 17 2.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 17 11.5m-10 10c-3.464 0-5.63-3.75-3.897-6.75A4.5 4.5 0 0 1 7 12.5c3.464 0 5.63 3.75 3.897 6.75A4.5 4.5 0 0 1 7 21.5"
                    class="duoicon-secondary-layer"
                    opacity="0.3"
                  />
                </svg>
                <h3
                  className={`${selectedTab == "app" ? "font-semibold" : ""
                    } transition-all md:text-xl md:font-semibold`}
                >
                  App Development
                </h3>
              </div>

            </div>
            <div>
              <h3 className="mt-3 text-sm leading-loose md:text-base">
                From web development to digital marketing, we offer
                full-spectrum IT services under one roof. N-me 360 is your
                all-in-one partner for building, growing, and managing your
                digital presence.
              </h3>
              <button onClick={() => {
                if (selectedTab == "app") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("app");
                }
              }} className="py-2 px-3 bg-[#3f37a5] rounded-lg mt-4 text-white text-sm mb-8">Check</button>
              <div className="flex-col flex gap-4 mt-10 ">
                <ServiceItemsCard img={'android.png'} title={'Android Applications'} />
                <ServiceItemsCard img={'apple.png'} title={'IOS Applications'} />
              </div>

            </div>
          </div>
           <div className={`w-full border-[#ebeaea] rounded-xl bg-[#fdfdfd] border p-10 mt-10 ${selectedTab=='web'?'h-auto':'h-56'} overflow-hidden`}>
            <div
              onClick={() => {
                if (selectedTab == "web") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("web");
                }
              }}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 md:w-8 md:h-8 h-6"

                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3f37a5"
                    d="m4.416 11l2.246-2.246q.14-.14.15-.344t-.15-.364t-.354-.16t-.354.16l-2.388 2.388q-.243.243-.243.566t.243.566l2.388 2.388q.14.14.344.15t.364-.15t.16-.354t-.16-.354zm15.169 0l-2.246 2.246q-.141.14-.15.344t.15.364t.353.16t.354-.16l2.389-2.388q.242-.243.242-.566t-.242-.565l-2.389-2.389q-.14-.14-.344-.15t-.363.15t-.16.354t.16.354zM3 6.77V5.615q0-.691.463-1.154T4.615 4h14.77q.69 0 1.152.462T21 5.615V6.77q0 .214-.143.357t-.357.143t-.357-.143T20 6.769V5.615q0-.269-.173-.442T19.385 5H4.615q-.269 0-.442.173T4 5.616v1.153q0 .214-.143.357t-.357.143t-.357-.143T3 6.769M9.808 20q-.348 0-.578-.23T9 19.192V18H4.616q-.691 0-1.153-.462T3 16.384v-1.148q0-.213.143-.353q.144-.14.357-.14t.357.143t.143.356v1.142q0 .27.173.443t.443.173h14.769q.269 0 .442-.173t.173-.443v-1.148q0-.213.143-.353t.357-.14t.357.143t.143.356v1.142q0 .691-.463 1.153T19.385 18H15v1.192q0 .349-.23.578t-.578.23zM12 11"
                  />
                </svg>
                <h3
                  className={`${selectedTab == "web" ? "font-semibold" : ""
                    } transition-all md:text-xl md:font-semibold`}
                >
                  Web Development
                </h3>
              </div>

            </div>
            <div>
              <h3 className="mt-3 text-sm leading-loose md:text-base">
                From web development to digital marketing, we offer
                full-spectrum IT services under one roof. N-me 360 is your
                all-in-one partner for building, growing, and managing your
                digital presence.
              </h3>
              <button onClick={() => {
                if (selectedTab == "web") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("web");
                }
              }} className="py-2 px-3 bg-[#3f37a5] rounded-lg mt-4 text-white text-sm mb-8">Check</button>
              <div className="flex-col flex gap-4 mt-10 ">

                <ServiceItemsCard img={'dynamic.png'} title={'Dynamic Websites'} />
                <ServiceItemsCard img={'static.png'} title={'Static Websites'} />
                <ServiceItemsCard img={'eccomerce.png'} title={'E-commerce Websites'} />
                <ServiceItemsCard img={'webapp.png'} title={'Web Applications'} />
                <ServiceItemsCard img={'webd.png'} title={'Web Designing'} />
              </div>

            </div>
          </div>
          <div className={`w-full border-[#ebeaea] rounded-xl bg-[#fdfdfd] border p-10 mt-10 ${selectedTab=='ui'?'h-auto':'h-56'} overflow-hidden`}>
            <div
              onClick={() => {
                if (selectedTab == "ui") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("ui");
                }
              }}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 md:w-6 md:h-6 h-4"

                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#3f37a5"
                    d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
                  />
                </svg>
                <h3
                  className={`${selectedTab == "ui" ? "font-semibold" : ""
                    } transition-all md:text-xl md:font-semibold`}
                >
                  UI/UX Design
                </h3>
              </div>

            </div>
            <div>
              <h3 className="mt-3 text-sm leading-loose md:text-base">
                From web development to digital marketing, we offer
                full-spectrum IT services under one roof. N-me 360 is your
                all-in-one partner for building, growing, and managing your
                digital presence.
              </h3>
              <button onClick={() => {
                if (selectedTab == "ui") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("ui");
                }
              }} className="py-2 px-3 bg-[#3f37a5] rounded-lg mt-4 text-white text-sm mb-8">Check</button>
              <div className="flex-col flex gap-4 mt-10 ">
                <ServiceItemsCard img={'app.png'} title={'Applications'} />
                <ServiceItemsCard img={'webui.png'} title={'Websites'} />
              </div>

            </div>
          </div>
         
          
         
        </div>
         <div className="w-full mt-8 ">
          
          
          <div className={`w-full border-[#ebeaea] rounded-xl bg-[#fdfdfd] border p-10 mt-10 ${selectedTab=='brand'?'h-auto':'h-56'} overflow-hidden`}>
            <div
              onClick={() => {
                if (selectedTab == "brand") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("brand");
                }
              }}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 md:w-8 md:h-8 h-6"

                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#3f37a5"
                    d="M4.58 2.125a.5.5 0 0 1 .12.598a.3.3 0 0 0-.013.09c0 .063.016.183.167.333c.073.073.129.125.19.182c.05.046.103.094.17.16c.13.124.267.27.39.453c.255.383.396.862.396 1.559C6 6.97 5.023 8 4 8S2 6.97 2 5.5c0-.326.087-.715.207-1.074s.288-.732.482-1.032c.231-.39.556-.717.808-.937a6 6 0 0 1 .432-.343l.044-.03a.5.5 0 0 1 .608.041M4 9a2.68 2.68 0 0 0 1.68-.595q.071.211.12.425c.2.87.2 1.916.2 2.645v.025c0 2.787-.379 4.368-.796 5.272c-.21.455-.433.745-.626.927a1.5 1.5 0 0 1-.258.198a1 1 0 0 1-.133.067S4.074 18 4 18s-.187-.036-.187-.036a1 1 0 0 1-.133-.067a1.5 1.5 0 0 1-.258-.198c-.193-.183-.416-.472-.626-.927C2.379 15.868 2 14.287 2 11.5v-.025c0-.73 0-1.775.2-2.645q.049-.214.12-.425A2.68 2.68 0 0 0 4 9m5 4c-.715 0-1.396-.15-2.01-.42q.02-.534.02-1.11A4 4 0 0 0 9 12v-2a2 2 0 0 1 2-2h2a4 4 0 0 0-6.082-3.416a3.3 3.3 0 0 0-.338-.96A5 5 0 0 1 14 8h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm4.9-4a5.01 5.01 0 0 1-3.9 3.9V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1.026 0H11a1 1 0 0 0-1 1v1.874A4.01 4.01 0 0 0 12.874 9"
                  />
                </svg>
                <h3
                  className={`${selectedTab == "brand" ? "font-semibold" : ""
                    } transition-all md:text-xl md:font-semibold`}
                >
                  Branding and Designing
                </h3>
              </div>

            </div>
            <div>
              <h3 className="mt-3 text-sm leading-loose md:text-base">
                From web development to digital marketing, we offer
                full-spectrum IT services under one roof. N-me 360 is your
                all-in-one partner for building, growing, and managing your
                digital presence.
              </h3>
              <button onClick={() => {
                if (selectedTab == "brand") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("brand");
                }
              }} className="py-2 px-3 bg-[#3f37a5] rounded-lg mt-4 text-white text-sm mb-8">Check</button>
              <div className="flex-col flex gap-4 mt-10 ">
                <ServiceItemsCard img={'android.png'} title={'Android Applications'} />
                <ServiceItemsCard img={'apple.png'} title={'IOS Applications'} />
              </div>

            </div>
          </div>
          <div className={`w-full border-[#ebeaea] rounded-xl bg-[#fdfdfd] border p-10 mt-10 ${selectedTab=='dm'?'h-auto':'h-56'} overflow-hidden`}>
            <div
              onClick={() => {
                if (selectedTab == "dm") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("dm");
                }
              }}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 md:w-8 md:h-8 h-6"

                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3f37a5"
                    fill-rule="evenodd"
                    d="M8 2.25A6.75 6.75 0 0 0 2.969 13.5a.75.75 0 0 0 1.118-1A5.25 5.25 0 0 1 8 3.75h4a5.25 5.25 0 1 1 0 10.5h-2a.75.75 0 0 0 0 1.5h2a6.75 6.75 0 0 0 0-13.5z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="#3f37a5"
                    d="M6.75 15c0-2.9 2.35-5.25 5.25-5.25h2a.75.75 0 0 0 0-1.5h-2a6.75 6.75 0 0 0 0 13.5h4a6.75 6.75 0 0 0 5.031-11.25a.75.75 0 0 0-1.118 1A5.25 5.25 0 0 1 16 20.25h-4A5.25 5.25 0 0 1 6.75 15"
                    opacity="0.5"
                  />
                </svg>
                <h3
                  className={`${selectedTab == "dm" ? "font-semibold" : ""
                    } transition-all md:text-xl md:font-semibold`}
                >
                  Digital Marketing
                </h3>
              </div>

            </div>
            <div>
              <h3 className="mt-3 text-sm leading-loose md:text-base">
                From web development to digital marketing, we offer
                full-spectrum IT services under one roof. N-me 360 is your
                all-in-one partner for building, growing, and managing your
                digital presence.
              </h3>
              <button onClick={() => {
                if (selectedTab == "dm") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("dm");
                }
              }} className="py-2 px-3 bg-[#3f37a5] rounded-lg mt-4 text-white text-sm mb-8">Check</button>
              <div className="flex-col flex gap-4 mt-10 ">
                <ServiceItemsCard img={'googleads.png'} title={'Google Ads'} />
                <ServiceItemsCard img={'metaads.png'} title={'Meta Ads'} />
                <ServiceItemsCard img={'smh.png'} title={'Social Media Handling'} />
                <ServiceItemsCard img={'smm.png'} title={'Social Media Marketing'} />
                <ServiceItemsCard img={'leadg.png'} title={'Lead Generation'} />
                <ServiceItemsCard img={'seo.png'} title={'SEO'} />
                <ServiceItemsCard img={'smo.png'} title={'SMO'} />


              </div>

            </div>
          </div>
          <div className={`w-full border-[#ebeaea] rounded-xl bg-[#fdfdfd] border p-10 mt-10 ${selectedTab=='software'?'h-auto':'h-56'} overflow-hidden`}>
            <div
              onClick={() => {
                if (selectedTab == "software") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("software");
                }
              }}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 md:w-8 md:h-8 h-6"

                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3f37a5"
                    d="M4.616 21q-.691 0-1.153-.462T3 19.385V4.615q0-.69.463-1.152T4.615 3h7.214q.331 0 .632.13t.518.349L16.52 7.02q.217.218.348.518t.131.632v3.618q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356V8h-4V4H4.616q-.231 0-.424.192T4 4.615v14.77q0 .23.192.423t.423.192h8.924q.212 0 .356.144t.143.357t-.143.356t-.357.143zM4 20V4zm1.962-1.77q.08-.987.608-1.814t1.38-1.31l-.777-1.373q0-.006.075-.323q.092-.045.186-.026q.093.02.143.106l.783 1.404q.405-.155.811-.242t.832-.086t.84.083q.413.084.798.245l.782-1.403q.02-.02.293-.081q.092.05.126.146q.035.096-.006.177l-.767 1.373q.858.485 1.374 1.31q.516.827.595 1.815zm2.23-1.21q.162 0 .273-.122q.112-.121.112-.283t-.116-.282t-.269-.121q-.161 0-.283.12q-.12.122-.12.284t.12.282t.283.121m3.635 0q.161 0 .282-.121q.122-.121.122-.283t-.122-.282t-.282-.121t-.283.12t-.121.284t.121.282t.283.121m6.211 2.054v-4.361q0-.213.144-.357q.144-.143.357-.143t.356.143t.144.357v4.361l1.765-1.74q.146-.14.344-.131t.344.153q.134.143.14.335q.006.19-.14.337l-2.388 2.407q-.243.243-.566.243t-.565-.243l-2.388-2.407q-.134-.136-.14-.339t.14-.35q.14-.165.353-.155q.214.01.36.15z"
                  />
                </svg>
                <h3
                  className={`${selectedTab == "software" ? "font-semibold" : ""
                    } transition-all md:text-xl md:font-semibold`}
                >
                  Softwares
                </h3>
              </div>

            </div>
            <div>
              <h3 className="mt-3 text-sm leading-loose md:text-base">
                From web development to digital marketing, we offer
                full-spectrum IT services under one roof. N-me 360 is your
                all-in-one partner for building, growing, and managing your
                digital presence.
              </h3>
              <button onClick={() => {
                if (selectedTab == "software") {
                  setSelectedTab(null);
                } else {
                  setSelectedTab("software");
                }
              }} className="py-2 px-3 bg-[#3f37a5] rounded-lg mt-4 text-white text-sm mb-8">Check</button>
              <div className="flex-col flex gap-4 mt-10 ">
                <ServiceItemsCard img={'billing.png'} title={'Billing Softwares'} />
                <ServiceItemsCard img={'othersoftware.png'} title={'Other Softwares'} />
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

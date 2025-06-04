import React from "react";

const images = [
  "/assets/Images/logo/fresh-bucket-logo.png",
    "/assets/Images/logo/club-sulaimani-logo.png",
    "/assets/Images/logo/daymart-logo.png",
    "/assets/Images/logo/jk-logo.svg",
    "/assets/Images/logo/srs-logo.png",
    "/assets/Images/logo/theorem-logo.png",

];

const InfiniteCarosel = () => {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex animate-scroll whitespace-nowrap mt-5 items-center md:gap-28 gap-12"
        style={{ animationDuration: "10s" }}
      >
        {[...images, ...images, ...images, ...images].map((src, index) => (
            <img className="w-14 md:w-20 h-fit" src={src}></img>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarosel;

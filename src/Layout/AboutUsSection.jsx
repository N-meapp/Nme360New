export default function AboutUsSection() {
  return (
    <div className="mt-10 jamjuree mb-24 flex flex-col md:h-max  md:flex-row items-center">
      <div className="md:w-full">
        <h3 className="text-2xl md:text-4xl font-semibold jamjuree mb-10 text-center">About Us</h3>
      <p className="text-center mt-5 font-extralight w-[90%] justify-self-center">
        We build smart IT solutions that drive growth and innovation.
      </p>
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 mx-auto w-fit ">
        <div className="">
          <h3 className="text-xl font-bold text-center">553434</h3>
          <div className="flex justify-center gap-2 items-center mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 20 20"
            >
              <g fill="#3f37a5" fill-rule="evenodd" clip-rule="evenodd">
                <path
                  stroke="#3f37a5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.5 15.9L6.865 18l.533-5.13L4 9.04l4.965-1.07L11.5 3.5l2.535 4.469L19 9.039l-3.398 3.831l.533 5.13z"
                  opacity="0.2"
                  stroke-width="1"
                />
                <path d="M5.571 17.455L10 15.448l4.429 2.007a.5.5 0 0 0 .704-.507l-.51-4.91l3.251-3.668a.5.5 0 0 0-.269-.82L12.86 6.527l-2.425-4.274a.5.5 0 0 0-.87 0L7.14 6.527L2.395 7.55a.5.5 0 0 0-.27.82l3.253 3.667l-.51 4.911a.5.5 0 0 0 .703.507m4.223-3.01l-3.842 1.74l.443-4.263a.5.5 0 0 0-.123-.384l-2.83-3.191l4.128-.89a.5.5 0 0 0 .33-.242L10 3.513l2.1 3.702a.5.5 0 0 0 .33.242l4.128.89l-2.83 3.191a.5.5 0 0 0-.123.384l.443 4.263l-3.842-1.74a.5.5 0 0 0-.412 0" />
              </g>
            </svg>
            <h3 className="">Total Experience</h3>
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-bold text-center">553434</h3>
          <div className="flex justify-center gap-2 items-center mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="6" r="4" fill="#3f37a5" />
              <path
                fill="#3f37a5"
                d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
                opacity="0.5"
              />
            </svg>{" "}
            <h3 className="">Total Clients</h3>
          </div>{" "}
        </div>
        <div className="">
          <h3 className="text-xl font-bold text-center">553434</h3>
          <div className="flex justify-center gap-2 items-center mt-3">
           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"><g fill="#3f37a5"><path d="M6.5 2h6.685a1.5 1.5 0 0 1 1.106.486l4.314 4.702A1.5 1.5 0 0 1 19 8.202V18.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-15A1.5 1.5 0 0 1 6.5 2" opacity="0.2"/><path d="M6.5 12a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"/><path fill-rule="evenodd" d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"/><path d="M11 7h5.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0z"/></g></svg>
            <h3 className="">Total Works</h3>
          </div>{" "}
        </div>
      </div>
      </div>
      <div className="w-full md:h-auto">
      <div className="w-[90%] md:w-fit h-52 jamjuree bg-[#3f37a5] text-white shadow-md mx-auto mt-10  rounded-bl-[70px] rounded-tl-xl rounded-r-[70px] p-5 text-left">
      <h3 className="text-3xl mb-4 font-bold ">Our Why</h3>
      <p>To transform challenges into digital possibilities,<br></br> crafting innovative IT experiences that move businesses forward.</p>
      </div>
      </div>

    </div>
  );
}

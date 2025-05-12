// import { useContext, useEffect, useRef } from "react";
// import Scrollbar from "smooth-scrollbar";
// import { ScrollContext } from "../../main";

// const Scroll = ({ children }) => {
//   const { setScrollHeight } = useContext(ScrollContext);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     if (!scrollRef.current) return;

//     const scrollbar = Scrollbar.init(scrollRef.current, {
//       damping: 0.06,
//       plugins: {
//         overscroll: {
//           enable: true,
//           effect: 'bounce',
//           damping: 1,
//           maxOverscroll: 20,
//           glowColor: '#fff',
//         },
//       },
//     });

//     const handleScroll = (status) => {
//       setScrollHeight(status.offset.y);
//     };

//     scrollbar.addListener(handleScroll);

//     return () => {
//       scrollbar.removeListener(handleScroll);
//       scrollbar.destroy();
//     };
//   }, []);

//   return (
//     <div ref={scrollRef} id="scroll-container" style={{ height: "100vh", overflow: "hidden" }}>
//       {children}
//     </div>
//   );
// };

// export default Scroll;



import { useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollContext } from "../../main";

const Scroll = ({ children }) => {
  const { setScrollHeight } = useContext(ScrollContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

   const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  smoothTouch: true,      
  touchMultiplier: 1.5,
  gestureOrientation: "vertical",
});


    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update scroll position in your context
    function onScroll() {
      setScrollHeight(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      lenis.destroy();
    };
  }, [setScrollHeight]);

  return (
    <div ref={scrollRef} id="scroll-container" style={{ height: "auto", overflow: "initial" }}>
      {children}
    </div>
  );
};

export default Scroll;

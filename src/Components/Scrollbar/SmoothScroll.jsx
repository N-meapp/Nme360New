import { useContext, useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollContext } from "../../main";

const Scroll = ({ children }) => {
  const { setScrollHeight } = useContext(ScrollContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.06,
      plugins: {
        overscroll: {
          enable: true,
          effect: 'bounce',
          damping: 1,
          maxOverscroll: 20,
          glowColor: '#fff',
        },
      },
    });

    const handleScroll = (status) => {
      setScrollHeight(status.offset.y);
    };

    scrollbar.addListener(handleScroll);

    return () => {
      scrollbar.removeListener(handleScroll);
      scrollbar.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} id="scroll-container" style={{ height: "100vh", overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default Scroll;

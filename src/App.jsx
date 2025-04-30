import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AnimatedCursor from "react-animated-cursor";
import Loader from "./Layout/Loader";
import AboutUs from "./Pages/AboutUs";
import NavBar from "./Layout/NavBar";
import Scroll from "./Components/Scrollbar/SmoothScroll";
import Footer from "./Layout/Footer";
import FooterAlternative from "./Layout/FooterAlternative";
import Services from "./Pages/Services";

export default function App() {
  return (
    <>
     <AnimatedCursor
  innerSize={12}
  outerSize={40}
  color='0,0,0'
  outerAlpha={0.5}
  innerScale={1}
  outerScale={2}
  clickables={['a', 'button', '.link']}
/>
{/* <Loader /> */}
<Scroll>
      <BrowserRouter>
<NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Services />} />

          <Route path="*" element={<Home />} />
        </Routes>
      <Footer />
        <FooterAlternative />
      </BrowserRouter>
      </Scroll>

    </>
  )
}
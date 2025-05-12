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
import Careers from "./Pages/Careers";
import ContactUs from "./Pages/ContactUs";
import Blogs from "./Pages/Blogs";
import { useEffect, useState } from "react";
import Admin from "./Pages/Admin";
import { useSelector } from "react-redux";
import LoginPage from "./Pages/LoginPage";

export default function App() {

  const [isAdmin, setIsAdmin] = useState(false)
  const admin = useSelector((state) => state.admin.admin);


  useEffect(() => {
    const location = window.location.href
    if (location.includes('admin')) {
      setIsAdmin(true)
    } else {
      false
    }
  })

  return (
    <>

      {isAdmin ?
        <>
          <BrowserRouter>

            <Routes>

              <Route path="/admin" element={admin ? <Admin /> : <LoginPage />} />
            </Routes>

          </BrowserRouter>
        </>
        :
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
                <Route path="/careers" element={<Careers />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/blogs" element={<Blogs />} />



                <Route path="*" element={<Home />} />
              </Routes>
              <Footer />
              <FooterAlternative />
            </BrowserRouter>
          </Scroll>

        </>

      }

    </>

  )
}
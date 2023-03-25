import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { ParallaxProvider } from "react-scroll-parallax";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import ScrollToTop from "react-scroll-to-top";
import { ScaleLoader } from "react-spinners";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", AOS.refresh);
  }, [location]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [location]);

  return (
    <div>
      {loading ? (
        <div className="loading-effect bg-purple-to-blue">
          <ScaleLoader
            key={location.pathname} // add key prop with pathname
            color={"#fff"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <ParallaxProvider>
          <Navbar />
          <Routes key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/Haqqımızda" element={<About />} />
            <Route path="/Xidmətlər" element={<Services />} />
            <Route path="/Bloq" element={<Blog />} />
            <Route path="/Əlaqə" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ScrollToTop
            smooth
            className="back-to-top"
            component={<BsFillArrowUpCircleFill className="back-to-top-icon" />}
          ></ScrollToTop>
          <Footer />
        </ParallaxProvider>
      )}
    </div>
  );
}

export default App;

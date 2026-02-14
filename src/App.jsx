import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HeroSlider from "./components/HeroSlider.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import AboutPrincipal from "./components/AboutPrincipal.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Faculty from "./components/Faculty.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Curriculum from "./components/Curriculum.jsx";
import Activities from "./components/Activities";
import Rankers from "./components/Rankers";

import "./styles.css";

function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <WhoWeAre />
      <AboutPrincipal />
      <Activities />
      <WhyChooseUs />
      <Faculty />
      {/* <Rankers /> */}
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
    </Router>
  );
}

export default App;

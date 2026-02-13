import { useEffect, useState, useRef } from "react";
import "../styles/HeroSlider.css";
import logo1 from "../assets/img/logo1.png";

import sliderA from "../assets/img/Slider/a.jpg";
import sliderB from "../assets/img/Slider/b.jpg";
import sliderC from "../assets/img/Slider/c.jpg";

const slides = [
  {
    id: 1,
    type: "image",
    image: sliderA,
    title: "SM School - Innovation",
    alt: "School showcase"
  },
  {
    id: 2,
    type: "image",
    image: sliderB,
    title: "Excellence in Education",
    alt: "School campus"
  },
  {
    id: 3,
    type: "image",
    image: sliderC,
    title: "Student Growth",
    alt: "Students learning"
  }
];

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const handleLogoClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [index]);

  return (
    <section className="hero-slider">
      <div className="hero-header-section">
        <img 
          src={logo1} 
          alt="S.M English High School logo" 
          className="hero-logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="hero-slides-container">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide ${i === index ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="hero-slide-image"
            />
            <div className="hero-slide-overlay"></div>
            <div className="hero-slide-content">
             
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`hero-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;

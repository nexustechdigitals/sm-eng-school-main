import { useState } from "react";
import "../styles/Gallery.css";
import Header from "./Header";
import Footer from "./Footer";

// School Logo
import Sci1 from "../assets/img/logo.png";
import Sci2 from "../assets/img/logo.png";
import Sci3 from "../assets/img/logo.png";
import Sci4 from "../assets/img/logo.png";

import Cul1 from "../assets/img/F&A/cul1.jpg";
import Cul2 from "../assets/img/F&A/cul2.jpg";
import Cul3 from "../assets/img/F&A/cul3.jpg";
import Cul4 from "../assets/img/F&A/cul4.jpg";

import Sports1 from "../assets/img/F&A/spo1.jpg";
import Sports2 from "../assets/img/F&A/spo2.jpg";
import Sports3 from "../assets/img/F&A/spo3.jpg";
import Sports4 from "../assets/img/F&A/spo4.jpg";

import Event1 from "../assets/img/F&A/even1.jpg";
import Event2 from "../assets/img/F&A/even2.jpg";
// import Event3 from "../assets/img/F&A/even3.jpg";
// import Event4 from "../assets/img/F&A/even4.jpg";

// import pre1 from "../assets/img/F&A/pre1.jpg";
// import pre2 from "../assets/img/F&A/pre2.jpg";
// import pre3 from "../assets/img/F&A/pre3.jpg";
// import pre4 from "../assets/img/F&A/pre4.jpg";

import logo from "../assets/img/logo.png";


// const galleryCategories = [
//   {
//     id: "tinyTots",
//     label: "Tiny Tots",
//     icon: "🎨",
//     description: "Play-based learning and creative exploration"
//   },
//   {
//     id: "Practicals",
//     label: "Science Lab",
//     icon: "🔬",
//     description: "Hands-on science experiments and learning"
//   },
//   {
//     id: "sports",
//     label: "Sports",
//     icon: "⚽",
//     description: "Athletic activities and games"
//   },
//   {
//     id: "events",
//     label: "Events",
//     icon: "🎉",
//     description: "School celebrations and programs"
//   }
// ];

const galleryData = {
  
  Practicals: {
    title: "Science Practicals",
    images: [
      {
        url: logo,
        description: "Physics experiments with equipment learn with fun and curiosity."
      },
      {
        url: logo,
        description: "Physics practicals that turn concepts into real-world observations."
      },
      {
        url: logo,
        description: "Biology lab sessions using microscopes and specimen study."
      },
      {
        url: logo,
        description: "Students collaborating on experiments to learn scientific method."
      }
    ]
  },
  
  cultural: {
    title: "CULTURAL ACTIVITY",
    images: [
      {
        url: Cul1,
        description: "Dance rehearsals that build rhythm, expression, and confidence."
      },
      {
        url: Cul2,
        description: "Art showcases where students display painting and craft work."
      },
      {
        url: Cul3,
        description: "Leaders with team to build confidence and leadership skills."
      },
      {
        url: Cul4,
        description: "National Days celebrations with flag hoisting and cultural performances."
      }
    ]
  },
  annualSports: {
    title: "ANNUAL SPORTS",
    images: [
      {
        url: Sports1,
        description: "Kabbadi tournament that builds teamwork and sportsmanship."
      },
      {
        url: Sports2,
        description: "Chess tournament that builds strategic thinking and problem solving."
      },
      {
        url: Sports3,
        description: "Kho-kho tournament that builds teamwork and sportsmanship."
      },
      {
        url: Sports4,
        description: "Medal ceremonies celebrating athletic achievements."
      }
    ]
  },
  
  annualFunction: {
    title: "ANNUAL FUNCTION",
    images: [
      {
        url: Event1,
        description: "Dance performances by talented students on annual day."
      },
      {
        url: Event2,
        description: "Musical ensembles featuring vocals and instruments."
      },
      {
        url: logo,
        description: "Stage dramas highlighting creativity and teamwork."
      },
      {
        url: logo,
        description: "Prize distribution honoring student achievements."
      }
    ]
  },

  prePrimary: {
    title: "Pre-Primary Activities",
    images: [
      {
        url: logo,
        description: "Dance performances by talented students on annual day."
      },
      {
        url: logo,
        description: "Musical ensembles featuring vocals and instruments."
      },
      {
        url: logo,
        description: "Stage dramas highlighting creativity and teamwork."
      },
      {
        url: logo,
        description: "Prize distribution honoring student achievements."
      }
    ]
  }
};

function Gallery() {
  const [activeSection, setActiveSection] = useState("Practicals");

  const sections = [
    { id: "Practicals", label: "Science Lab", icon: "🔬" },
    { id: "cultural", label: "Cultural", icon: "🎭" },
    { id: "annualSports", label: "Sports", icon: "⚽" },
    { id: "annualFunction", label: "Events", icon: "🎉" },
    { id: "prePrimary", label: "Primary", icon: "Pre-" }
  ];

  const currentData = galleryData[activeSection];

  return (
    <div className="gallery-page">
      <Header />
      <section className="gallery-section">
        <div className="gallery-header">
          <div className="gallery-header-content">
            <h1 className="gallery-title">Facilities And Activities</h1>
            <p className="gallery-subtitle">Explore moments from our vibrant school community</p>
          </div>
          <div className="gallery-header-logo">
            <img src={logo} alt="School Logo" />
          </div>
        </div>
        
        <div className="gallery-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`gallery-nav-btn ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-label">{section.label}</span>
            </button>
          ))}
        </div>

        <div className="gallery-content">
          <div className="section-header">
            <h2 className="section-title">{currentData.title}</h2>
          </div>
          <div className="gallery-grid">
            {currentData.images.map((item, index) => (
              <div key={index} className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img
                    src={item.url}
                    alt={currentData.title}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-card-content">
                  <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="card-title">{currentData.title}</h3>
                  <p className="gallery-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Gallery;


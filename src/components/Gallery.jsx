import { useState } from "react";
import "../styles/Gallery.css";
import Header from "./Header";
import Footer from "./Footer";

// Cultural images
import Cul1 from "../assets/img/F&A/cul1.jpg";
import Cul2 from "../assets/img/F&A/cul2.jpg";
import Cul3 from "../assets/img/F&A/cul3.jpg";
import Cul4 from "../assets/img/F&A/cul4.jpg";

// Sports images
import Sports1 from "../assets/img/F&A/spo1.jpg";
import Sports2 from "../assets/img/F&A/spo2.jpg";
import Sports3 from "../assets/img/F&A/spo3.jpg";
import Sports4 from "../assets/img/F&A/spo4.jpg";

// Events images
import Event1 from "../assets/img/F&A/even1.jpg";
import Event2 from "../assets/img/F&A/even2.jpg";
import Event3 from "../assets/img/F&A/even3.jpeg";
import Event4 from "../assets/img/F&A/even4.jpeg";

// Educational Trip images
import EduTrip1 from "../assets/img/F&A/edu_trip.jpeg";
import EduTrip2 from "../assets/img/F&A/edu_trip1.jpeg";
import EduTrip3 from "../assets/img/F&A/edu_trip2.jpeg";

// Pre-Primary images
import PrePrime1 from "../assets/img/F&A/pre_prime2.jpeg";
import PrePrime2 from "../assets/img/F&A/pre_prime8.jpeg";
import PrePrime3 from "../assets/img/F&A/pre_prime9.jpeg";
import PrePrime4 from "../assets/img/F&A/pre_prime6.jpeg";

import logo from "../assets/img/logo.png";

const galleryData = {
  eduTrip: {
    title: "EDUCATIONAL TRIP",
    badge: "🚌 Exploration",
    badgeClass: "badge-green",
    images: [
      {
        url: EduTrip1,
        subtitle: "Picnic Walk",
        description: "Students exploring nature and the world beyond the classroom on exciting educational trips.",
        layout: "hero"
      },
      {
        url: EduTrip2,
        subtitle: "Group Trip",
        description: "Learning through travel — visiting places of interest.",
        layout: "tall"
      },
      {
        url: EduTrip3,
        subtitle: "Group Excursion",
        description: "Building teamwork, curiosity, and real-world knowledge through educational excursions.",
        layout: "wide"
      },
      {
        url: EduTrip1,
        subtitle: "Discovery Walk",
        description: "Students gainin hands-on experience and inspiration outside the school walls.",
        layout: "normal"
      }
    ]
  },

  cultural: {
    title: "CULTURAL ACTIVITY",
    badge: "🎭 Creative Arts",
    badgeClass: "badge-purple",
    images: [
      {
        url: Cul1,
        subtitle: "Saraswati Puja",
        description: "Celebration of knowledge and learning, honoring the goddess of wisdom and education.",
        layout: "hero"
      },
      {
        url: Cul2,
        subtitle: "Group Event",
        description: "Students showcasing their talents and creativity through cultural events and performances.",
        layout: "normal"
      },
      {
        url: Cul3,
        subtitle: "Leadership",
        description: "Leaders building confidence and teamwork through cultural events.",
        layout: "wide"
      },
      {
        url: Cul4,
        subtitle: "Exercise & Fitness",
        description: "Students engaging in physical activities and fitness programs that promote health and well-being.",
        layout: "tall"
      }
    ]
  },

  annualSports: {
    title: "ANNUAL SPORTS",
    badge: "⚽ Sports",
    badgeClass: "badge-orange",
    images: [
      {
        url: Sports1,
        subtitle: "Cricket Turf",
        description: "Cricket matches that build teamwork and sportsmanship among students.",
        layout: "tall-hero"
      },
      {
        url: Sports2,
        subtitle: "Long Jump",
        description: "Long jump competitions that build agility and athletic performance.",
        layout: "normal"
      },
      {
        url: Sports3,
        subtitle: "Shot Put",
        description: "Shot put competitions that build strength and coordination.",
        layout: "wide"
      },
      {
        url: Sports4,
        subtitle: "Running Race Competition",
        description: "Students competing in running races that build endurance and competitive spirit.",
        layout: "normal"
      }
    ]
  },

  annualFunction: {
    title: "ANNUAL FUNCTION",
    badge: "🎉 Celebration",
    badgeClass: "badge-pink",
    images: [
      {
        url: Event1,
        subtitle: "School Function",
        description: "school functions that celebrate student achievements and foster a sense of community.",
        layout: "wide-hero"
      },
      {
        url: Event2,
        subtitle: "Prize Distribution",
        description: "Celebrating student achievements with a prize distribution ceremony.",
        layout: "normal"
      },
      {
        url: Event3,
        subtitle: "Stage Drama",
        description: "Stage dramas and skits highlighting creativity and teamwork.",
        layout: "wide"
      },
      {
        url: Event4,
        subtitle: "Food Stalls",
        description: "Students enjoying delicious food and drinks at school events.",
        layout: "normal"
      }
    ]
  },

  prePrimary: {
    title: "PRE-PRIMARY ACTIVITIES",
    badge: "🎨 Early Learning",
    badgeClass: "badge-blue",
    images: [
      {
        url: PrePrime1,
        subtitle: "Creative Play",
        description: "Play-based learning where tiny tots explore creativity and imagination.",
        layout: "hero"
      },
      {
        url: PrePrime2,
        subtitle: "Motor Skills",
        description: "Fun activities that build motor skills and social confidence.",
        layout: "normal"
      },
      {
        url: PrePrime3,
        subtitle: "Krishna Janmashtami",
        description: "Festive celebrations that introduce young learners to cultural traditions and joy.",
        layout: "normal"
      },
      {
        url: PrePrime4,
        subtitle: "Projector Learning",
        description: "Interactive projector-based learning that engages young minds in a fun and educational way.",
        layout: "wide"
      }
    ]
  }
};

function Gallery() {
  const [activeSection, setActiveSection] = useState("eduTrip");

  const sections = [
    { id: "eduTrip", label: "Educational Trip", icon: "🚌" },
    { id: "cultural", label: "Cultural", icon: "🎭" },
    { id: "annualSports", label: "Sports", icon: "⚽" },
    { id: "annualFunction", label: "Events", icon: "🎉" },
    { id: "prePrimary", label: "Pre-Primary", icon: "🎨" }
  ];

  const currentData = galleryData[activeSection];

  return (
    <div className="gallery-page">
      <Header />
      <section className="gallery-section">

        {/* ── Page Header ── */}
        <div className="gallery-header">
          <div className="gallery-header-content">
            <h1 className="gallery-title">Facilities &amp; Activities</h1>
            <p className="gallery-subtitle">Explore moments from our vibrant school community</p>
          </div>
          <div className="gallery-header-logo">
            <img src={logo} alt="School Logo" />
          </div>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="gallery-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`gallery-nav-btn ${activeSection === section.id ? "active" : ""}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-label">{section.label}</span>
            </button>
          ))}
        </div>

        {/* ── Bento Grid Content ── */}
        <div className="gallery-content" key={activeSection}>

          <div className={`bento-grid bento-grid--${activeSection}`}>
            {currentData.images.map((item, index) => (
              <div
                key={index}
                className={`bento-card bento-card--${item.layout} bento-card--idx-${index}`}
              >
                <div className="bento-img-wrap">
                  <img
                    src={item.url}
                    alt={item.subtitle}
                    className="bento-img"
                  />
                  <div className="bento-img-overlay" />
                </div>

                <div className="bento-body">
                  <span className={`bento-badge ${currentData.badgeClass}`}>
                    {currentData.badge}
                  </span>
                  <h3 className="bento-card-title">{item.subtitle}</h3>
                  <p className="bento-card-desc">{item.description}</p>
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

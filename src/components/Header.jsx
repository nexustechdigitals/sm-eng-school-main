import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const handleGalleryClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const url = window.location.origin + "/gallery";
    window.location.href = url;
  };

  const handleCurriculumClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const url = window.location.origin + "/curriculum";
    window.location.href = url;
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // If on home page, scroll directly
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If on another page (like /gallery), navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  // Handle scroll to section when navigating from another route
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const hash = location.hash.substring(1);
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-left" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <div className="logo-text">
          <h2>S.M English High School</h2>
        </div>
      </div>
      <button 
        className={`hamburger-menu ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`header-nav ${mobileMenuOpen ? "open" : ""}`}>
        <a href="#about-us" onClick={(e) => handleScrollToSection(e, "about-us")}>About Us</a>
        <a href="#curriculum" onClick={handleCurriculumClick}>Curriculum</a>
        <a href="#team" onClick={(e) => handleScrollToSection(e, "team")}>Meet our team</a>
        <a href="#album" onClick={handleGalleryClick}>Facilities and activities</a>
        <a href="#footer" onClick={(e) => handleScrollToSection(e, "footer")}>Contact Us</a>
      </nav>
    </header>
  );
}
export default Header;

import "../styles/Footer.css";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/img/logo.png";

function Footer() {
  const mapQuery =
    "Harvate pada, Shiv sena Office, Dhaniv Baug, Nalasopara East, Nala Sopara, Dhaniv, Maharashtra 401208";
  // Embed URL using exact place name and coordinates from the correct Google Maps place
  const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4368577584964!2d72.8526672!3d19.436723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9000fcda36b%3A0x871edf55638668c7!2sSM%20ENGLISH%20HIGH%20SCHOOL!5e0!3m2!1sen!2sin!4v1771044751172!5m2!1sen!2sin";
  // Direct Google Maps place URL provided by user
  const mapsLinkUrl =
"https://maps.app.goo.gl/PfoPDN6uciuKomr57";
  return (
    <footer className="footer" id="footer">
      <div className="footer-wrapper">
        {/* Left Section - School Info */}
        <div className="footer-section-left">
          <div className="footer-brand">
            <h2>S.M English High School</h2>
            <p className="footer-subtitle">& Junior College</p>
            <p className="contact-info">
              Empowering students with a balanced focus on academics,
              creativity, and character since 2019.
            </p>
            <img src={logo} alt="S.M English High School logo" className="footer-logo" />
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section-right">
          <div className="footer-column">
            <h4>Contact</h4>
            <div className="contact-info-inline">
              <p>
                <strong>Phone:</strong> +91 72084 66822
              </p>
              <p>
                <strong>Email:</strong> info@smhighschool.com
              </p>
              <p className="address-block">
                <strong>Address:</strong> {mapQuery}
              </p>
              <p>
                <strong>Office Hours:</strong> Mon - Sat | 8:00 AM - 4:00 PM
              </p>
              <div className="social-links">
  <a
    href="https://wa.me/+917208466822"
    title="WhatsApp"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="WhatsApp"
  >
    <FaWhatsapp size={18} />
  </a>

  <a
    href="https://youtube.com/@sameer_mahto?si=x0Uh6iBoEFN1Ht-7"
    title="YouTube"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="YouTube"
  >
    <FaYoutube size={18} />
  </a>

  <a
    href="https://www.instagram.com/sm_english_high_school?igsh=dXZkNTJhNjQzbGxv"
    title="Instagram"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="Instagram"
  >
    <FaInstagram size={18} />
  </a>

  <a
  href="mailto:mahtosoni81@gmail.com"
  onClick={(e) => {
    e.preventDefault();
    window.location.href = "mailto:mahtosoni81@gmail.com";
  }}
  title="Email"
  aria-label="Email"
>
  <MdEmail size={18} />
</a>

</div>

            </div>
          </div>
        </div>

        {/* Map & Social */}
        <div className="footer-section-map">
          <div className="footer-column">
            <h4>Visit Us</h4>
            <p className="address-block">
              Locate us on the map below or open directions in Google Maps.
            </p>
          </div>
          <div className="contact-map">
            <iframe
              src={mapsEmbedUrl}
              title="SM English High School location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            className="map-cta"
            href={mapsLinkUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            View on Google Maps
          </a>
          
        </div>
      </div>

      {/* Footer Bottom */}
    <a 
  href="https://nexustechdigitals.netlify.app/" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none' }} // Prevents default underline on the whole div
>
  <div className="footer-bottom" style={{ cursor: 'pointer' }}>
    <p className="copyright">
      Designed & Developed by NEXUX. <br></br>Click here for inquiries regarding your website.
    </p>
  </div>
</a>
    </footer>
  );
}

export default Footer;

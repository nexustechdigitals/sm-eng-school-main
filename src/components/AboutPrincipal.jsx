import "../styles/AboutPrincipal.css";
import prince from "../assets/img/priciple24.png";
import md from "../assets/img/md.webp";

function AboutPrincipal() {
  return (
    <section id="about-us" className="ap-section">

      {/* ── Section heading ── */}
      <div className="ap-heading">
        <span className="ap-tag">OUR LEADERSHIP</span>
        <h2>Meet The <span>Visionaries</span> Behind Our School</h2>
        <p>Dedicated leaders who inspire excellence, guide with wisdom, and build tomorrow's future every day.</p>
      </div>

      {/* ── Cards wrapper ── */}
      <div className="ap-cards">

        {/* ── Card 1 — Principal ── */}
        <div className="ap-card ap-card--orange">
          {/* Decorative blobs */}
          <div className="ap-blob ap-blob--1" />
          <div className="ap-blob ap-blob--2" />

          <div className="ap-card-inner">
            {/* Photo side */}
            <div className="ap-photo-wrap">
              <div className="ap-photo-frame">
                <img src={prince} alt="Sarita Singh — Principal" className="ap-photo" />
              </div>
              <div className="ap-photo-badge">
                <span className="ap-badge-icon">🎓</span>
                <span>Since 2023</span>
              </div>
            </div>

            {/* Text side */}
            <div className="ap-text">
              <div className="ap-quote">"</div>
              <p className="ap-role-tag">Principal</p>
              <h3 className="ap-name">Sarita Singh</h3>
              <div className="ap-divider" />
              <p className="ap-message">
                At S.M English High School &amp; Junior College, our mission is to foster an
                inclusive, innovative learning environment that encourages students to explore
                their potential, nurture their talents, and become compassionate lifelong learners
                with discipline, knowledge, and values for a successful future.
              </p>
              <ul className="ap-values">
                <li><span className="ap-bullet" />Excellence in Education</li>
                <li><span className="ap-bullet" />Holistic Development</li>
                <li><span className="ap-bullet" />Inclusive Environment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Card 2 — MD (reversed) ── */}
        <div className="ap-card ap-card--navy ap-card--rev">
          <div className="ap-blob ap-blob--3" />
          <div className="ap-blob ap-blob--4" />

          <div className="ap-card-inner">
            {/* Text side */}
            <div className="ap-text">
              <div className="ap-quote ap-quote--dark">"</div>
              <p className="ap-role-tag ap-role-tag--light">Managing Director</p>
              <h3 className="ap-name ap-name--light">Sameer Mahto</h3>
              <div className="ap-divider ap-divider--light" />
              <p className="ap-message ap-message--light">
                At S.M English High School &amp; Junior College, we commit to providing a
                holistic education that balances academic excellence with personal growth —
                preparing every student to confidently face the challenges of tomorrow's world.
              </p>
              <ul className="ap-values ap-values--light">
                <li><span className="ap-bullet ap-bullet--light" />Student-First Vision</li>
                <li><span className="ap-bullet ap-bullet--light" />Academic Excellence</li>
                <li><span className="ap-bullet ap-bullet--light" />Community &amp; Values</li>
              </ul>
            </div>

            {/* Photo side */}
            <div className="ap-photo-wrap">
              <div className="ap-photo-frame ap-photo-frame--navy">
                <img src={md} alt="Sameer Mahto — Managing Director" className="ap-photo" />
              </div>
              <div className="ap-photo-badge ap-photo-badge--navy">
                <span className="ap-badge-icon">🏫</span>
                <span>S.M English</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutPrincipal;

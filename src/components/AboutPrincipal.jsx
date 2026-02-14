import "../styles/AboutPrincipal.css";
import prince from "../assets/img/priciple24.png";
import md from "../assets/img/md.webp";




function AboutPrincipal() {
  return (
    <section id="about-us" className="principal-section">
      <div className="principal-container">
        <div className="principal-content-panel">
          <div className="principal-intro">
            <p className="principal-greeting">Hello</p>
            <h2 className="principal-name">
              I'm <span>Sarita Singh</span>
            </h2>
            <p className="principal-title">Principal</p>
          </div>

          <p className="principal-message">
              At S.M English High School & Junior College, our mission is to foster an inclusive, innovative learning environment that encourages students to explore their potential, nurture their talents, and become compassionate lifelong learners with discipline, knowledge, and values for a successful future. We commit to providing a holistic education that balances academic excellence with personal growth.
          </p>

          {/* <button className="principal-cta">See more</button> */}
        </div>

        <div className="principal-image">
          <img
           src={prince}
            alt="Mr. Sameer Mahto"
          />
        </div>
      </div>
      <div className="principal-container principal-container-reversed">
        <div className="principal-image">
          <img
           src={md}
            alt="Mr. Sameer Mahto"
          />
        </div>

        <div className="principal-content-panel">
          <div className="principal-intro">
            <p className="principal-greeting">Hello</p>
            <h2 className="principal-name">
              I'm <span>Sameer Mahto</span>
            </h2>
            <p className="principal-title">Managing Director of S.M English High School & Junior College</p>
          </div>

          <p className="principal-message">
              At S.M English High School & Junior College, our mission is to foster an inclusive, innovative learning environment that encourages students to explore their potential, nurture their talents, and become compassionate lifelong learners with discipline, knowledge, and values for a successful future. We commit to providing a holistic education that balances academic excellence with personal growth.
          </p>

          {/* <button className="principal-cta">See more</button> */}
        </div>
      </div>
    </section>
    
  );
}
export default AboutPrincipal;

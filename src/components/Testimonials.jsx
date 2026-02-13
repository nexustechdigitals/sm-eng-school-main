import "../styles/Testimonials.css";
import reviewer1 from "../assets/img/Review/reviewer1.jpg";
import reviewer2 from "../assets/img/Review/reviewer2.webp";
import reviewer3 from "../assets/img/Review/reviewer3.jpg";
import logoFallback from "../assets/img/logo.png";

// Testimonials Data
const testimonials = [
  { 
    name: "Sanjay Mahto",
    relation: "Vidhan Sabha Member",
    rating: 5,
    experience: "SM School has transformed my child's academic performance. The teachers are dedicated and the facilities are world-class.",
    image: reviewer1
  },
  { 
    name: "...",
    relation: "ShivaSena Palghar Jilha Pramukh",
    rating: 5,
    experience: "Best learning experience! The teachers make every subject interesting and engaging. The school environment is supportive.",
    image: reviewer2
  },
  { 
    name: "Vilas Sukur Tare",
    relation: "Boisar MLA",
    rating: 5,
    experience: "Strong foundation from SM School helped me succeed in competitive exams. The discipline and values are invaluable.",
    image: reviewer3
  },
  { 
    name: "Sneha Desai",
    relation: "Parent",
    rating: 5,
    experience: "Impressed with the holistic development approach. My daughter excels in studies and also participates confidently in activities.",
    image: logoFallback
  },
  { 
    name: "Karan Singh",
    relation: "Student",
    rating: 5,
    experience: "The practical learning and hands-on approach make studying enjoyable. Teachers mentor us beyond academics.",
    image: logoFallback
  },
  { 
    name: "Sanjay Mahto",
    relation: "Vidhan Sabha Member",
    rating: 5,
    experience: "SM School has transformed my child's academic performance. The teachers are dedicated and the facilities are world-class.",
    image: reviewer1
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
};

function Testimonials() {
  // Show only first 6 testimonials
  const displayTestimonials = testimonials.slice(0, 6);
  // Duplicate testimonials for infinite loop animation
  const infiniteTestimonials = [...displayTestimonials, ...displayTestimonials];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Reviews</h2>
        <p className="testimonials-subtitle">Don't ignore negative feedback. Address it professionally and try to resolve the issue.</p>
      </div>

      <div className="testimonials-carousel">
        <div className="carousel-track">
          {infiniteTestimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-image">
                <img src={t.image} alt={t.name} />
              </div>
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-experience">{t.experience}</p>
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-relation">{t.relation}</p>
                <StarRating rating={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

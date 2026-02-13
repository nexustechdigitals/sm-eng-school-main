import { useState, useEffect, useRef } from "react";
import "../styles/WhoWeAre.css";

function WhoWeAre() {
  const [stats, setStats] = useState({ success: 0, students: 0, faculty: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const targetStats = { success: 95, students: 500, faculty: 10 };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setStats({
        success: Math.floor(targetStats.success * progress),
        students: Math.floor(targetStats.students * progress),
        faculty: Math.floor(targetStats.faculty * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <section id="who-we-are" className="who-we-are-section" ref={sectionRef}>
      <div className="who-we-are-container">
        <div className="who-we-are-header">
          <h2>Who We Are</h2>
          <p className="who-we-are-subtitle">
            Building Excellence in Education Since Inception
          </p>
        </div>

        <div className="who-we-are-content">
          <div className="who-we-are-text">
            <p>
              S.M English High School & Junior College is a premier institution dedicated to 
              providing quality education that combines academic rigor with holistic development. 
              Our mission is to nurture young minds into responsible, innovative, and compassionate 
              individuals who can lead and contribute to society.
            </p>

            <p>
              With state-of-the-art facilities, experienced faculty, and a student-centric approach, 
              we create an environment where every learner can flourish. We believe in fostering 
              intellectual curiosity, critical thinking, and ethical values that prepare students 
              not just for competitive exams, but for life's real challenges.
            </p>

            <p>
              Our commitment to excellence is reflected in our consistently outstanding academic 
              results, rich co-curricular activities, and strong emphasis on character development. 
              We are proud of our legacy of producing well-rounded individuals who excel in 
              academics, sports, arts, and community service.
            </p>
          </div>

          <div className="who-we-are-highlights">
            <div className="highlight-box">
              <div className="highlight-number">
                <span className="animate-number">{stats.success}</span>%+
              </div>
              <div className="highlight-text">Success Rate</div>
            </div>
            <div className="highlight-box">
              <div className="highlight-number">
                <span className="animate-number">{stats.students}</span>+
              </div>
              <div className="highlight-text">Happy Students</div>
            </div>
            <div className="highlight-box">
              <div className="highlight-number">
                <span className="animate-number">{stats.faculty}</span>+
              </div>
              <div className="highlight-text">Expert Faculty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;

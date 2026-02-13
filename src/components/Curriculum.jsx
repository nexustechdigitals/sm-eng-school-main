import Header from "./Header";
import Footer from "./Footer";
import "../styles/Curriculum.css";
import logo1 from "../assets/img/logo1.png";

const curriculumData = [
  {
    id: 1,
    level: "Primary (Grades 1-5)",
    description: "Foundation years focused on building strong basics",
    subjects: [
      "English Language & Literature",
      "Mathematics",
      "Science & Environmental Studies",
      "Social Studies & History",
      "Hindi/Regional Language",
      "Art & Craft",
      "Physical Education",
      "Music & Performing Arts",
      "Computer Science Basics"
    ],
    highlights: [
      "Play-based learning methodology",
      "Focus on conceptual understanding",
      "Hands-on experiments and activities",
      "Developing critical thinking skills",
      "Emphasis on creativity and imagination"
    ]
  },
  {
    id: 2,
    level: "Secondary (Grades 6-8)",
    description: "Building deeper subject knowledge and analytical skills",
    subjects: [
      "English Language & Literature",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Studies, History & Geography",
      "Hindi/Regional Language",
      "Computer Science",
      "Art & Design",
      "Physical Education",
      "Life Skills"
    ],
    highlights: [
      "Subject-specific competency development",
      "Laboratory-based science learning",
      "Project-based learning approach",
      "Digital literacy integration",
      "Personality development focus"
    ]
  },
  {
    id: 3,
    level: "Senior Secondary (Grades 9-10)",
    description: "ICSE/CBSE curriculum with comprehensive subject exploration",
    subjects: [
      "English (Core & Elective)",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Science (History, Geography, Civics, Economics)",
      "Hindi/Regional Language",
      "Computer Science/IT",
      "Physical Education",
      "Art/Music/Drama (Elective)"
    ],
    highlights: [
      "Board exam preparation excellence",
      "Advanced laboratory practicals",
      "Research-oriented projects",
      "Mock exams & comprehensive assessments",
      "Individual mentoring and guidance"
    ]
  },
  {
    id: 4,
    level: "Junior College (Grades 11-12)",
    description: "Specialized streams with career-focused curriculum",
    subjects: [
      "Science Stream: Physics, Chemistry, Biology/Mathematics",
      "Commerce Stream: Accounts, Economics, Business Studies",
      "Arts Stream: History, Geography, Political Science, Economics",
      "English (Compulsory)",
      "Hindi/Regional Language"
    ],
    highlights: [
      "Stream specialization (Science/Commerce/Arts)",
      "College & competitive exam preparation",
      "Career counseling and guidance",
      "Expert faculty with subject specialization",
      "Industry interactions and internships"
    ]
  }
];

const pedagogyData = [
  {
    icon: "📚",
    title: "Interactive Learning",
    description: "Engaging classroom discussions and collaborative problem-solving"
  },
  {
    icon: "🔬",
    title: "Experiential Learning",
    description: "Hands-on labs, field trips, and real-world applications"
  },
  {
    icon: "💻",
    title: "Technology Integration",
    description: "Digital tools, online resources, and smart classroom learning"
  },
  {
    icon: "🎨",
    title: "Creative Expression",
    description: "Art, music, drama, and creative thinking activities"
  },
  {
    icon: "👥",
    title: "Student-Centric Approach",
    description: "Individualized learning paths and personalized attention"
  },
  {
    icon: "🏅",
    title: "Holistic Development",
    description: "Academic excellence combined with character building"
  }
];

const coScolarData = [
  { name: "Sports", activities: ["Cricket", "Football", "Basketball", "Tennis", "Badminton", "Swimming", "Athletics"] },
  { name: "Cultural Activities", activities: ["Dance", "Music", "Theater", "Debate", "Public Speaking", "Creative Writing"] },
  { name: "STEM Programs", activities: ["Robotics", "Coding Clubs", "Science Fair", "Tech Workshops"] },
  { name: "Community Service", activities: ["Social Outreach", "Environmental Projects", "Charity Drives", "Mentoring Programs"] },
  { name: "Clubs & Societies", activities: ["Literary Club", "Photography", "Film Society", "Entrepreneurship Club"] },
  { name: "Skill Development", activities: ["Leadership Training", "Time Management", "Personality Development", "Career Workshops"] }
];

function Curriculum() {
  return (
    <div className="curriculum-page">
      <Header />
      
      {/* Hero Section */}
      <section className="curriculum-hero">
        <div className="curriculum-hero-content">
          <h1>Our Curriculum</h1>
          <p>Comprehensive, progressive, and contemporary education designed for global excellence</p>
        </div>
        <div className="curriculum-hero-logo">
          <img src={logo1} alt="School Logo" />
        </div>
      </section>

      {/* Main Section */}
      <section className="curriculum-section">
        {/* Curriculum Overview */}
        <div className="curriculum-overview">
          <h2>Academic Excellence Through Comprehensive Curriculum</h2>
          <p className="overview-text">
            At S.M English High School & Junior College, our curriculum is designed to nurture critical thinking, creativity, and character. 
            We follow ICSE/CBSE standards while incorporating modern teaching methodologies to ensure students are prepared for higher education 
            and professional success.
          </p>
        </div>

        {/* Grade Levels */}
        <div className="curriculum-levels">
          <h2>Our Curriculum Levels</h2>
          <div className="levels-grid">
            {curriculumData.map((level) => (
              <div key={level.id} className="level-card">
                <h3>{level.level}</h3>
                <p className="level-description">{level.description}</p>
                
                <div className="level-section">
                  <h4>Core Subjects:</h4>
                  <ul className="subjects-list">
                    {level.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>

                <div className="level-section">
                  <h4>Key Highlights:</h4>
                  <ul className="highlights-list">
                    {level.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Methodology */}
        <div className="teaching-methodology">
          <h2>Our Teaching Methodology</h2>
          <p className="method-intro">
            We employ a student-centric, research-based approach that combines traditional rigor with modern innovation.
          </p>
          <div className="pedagogy-grid">
            {pedagogyData.map((item, idx) => (
              <div key={idx} className="pedagogy-card">
                <div className="pedagogy-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        

        {/* CTA Section */}
        <div className="curriculum-cta">
          <h2>Ready to Experience Excellence?</h2>
          <p>Join S.M English High School & Junior College for a transformative educational journey</p>
          <a href="#footer" className="cta-button">Get in Touch with Us</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Curriculum;

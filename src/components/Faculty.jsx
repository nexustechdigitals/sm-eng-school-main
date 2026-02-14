import "../styles/Faculty.css";


import teacher1 from "../assets/img/Teachers/teacher6.png";
import teacher2 from "../assets/img/Teachers/teacher5.png";
import teacher3 from "../assets/img/Teachers/teacher4.png";
import teacher4 from "../assets/img/Teachers/teacher3.png";
import teacher5 from "../assets/img/Teachers/teacher2.jpg";
import teacher6 from "../assets/img/Teachers/teacher1.jpg";


//temp data for faculty members

const faculty = [
  { 
    name: "Miss Urmila Yadav", 
    role: "Marathi Teacher",
    description: "Experienced Marathi teacher with a years of teaching expertise.",
    image: teacher1
  },
  { 
    name: "Miss Sarita Singh", 
    role: "Hindi Teacher",
    description: "Passionate Hindi educator dedicated to fostering language skills and cultural appreciation.",
    image: teacher2
  },
  { 
    name: " Miss Vandana Singh", 
    role: "Mother Teacher",
    description: "Literature expert focused on communication and writing skills development.",
    image: teacher3
  },
  { 
    name: "Sir Arjun Patil", 
    role: "Social Studies Teacher",
    description: "Dedicated to making history and geography engaging and relevant for students.",
    image: teacher4
  },
  { 
    name: "Sir Sameer Mahto", 
    role: "IT Teacher",
    description: "Tech-savvy educator introducing students to coding and modern applications.",
    image: teacher5
  },
  { 
    name: "Sir Sajid Ansari", 
    role: "English Teacher",
    description: "Experienced English teacher with a passion for literature and communication skills.",
    image: teacher6
  }
];

function Faculty() {
  return (
    <section className="faculty-section" id="team">
      <div className="faculty-header">
        <h2>Meet Our Team</h2>
        <p className="faculty-subtitle">Get to know the dedicated educators shaping our students' futures</p>
      </div>
      <div className="faculty-grid">
        {faculty.map((f, i) => (
          <div key={i} className="faculty-card">
            <div className="faculty-image">
              <img src={f.image} alt={f.name} />
            </div>
            <div className="faculty-details">
              <h3 className="faculty-name">{f.name}</h3>
              <p className="faculty-role">{f.role}</p>
              <p className="faculty-description">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faculty;

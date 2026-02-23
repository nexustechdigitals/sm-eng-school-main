import "../styles/Activities.css";

import cul from "../assets/img/F&A/cul1.jpg";
import sport from "../assets/img/F&A/spo1.jpg";
import pre from "../assets/img/F&A/pre_prime.jpeg";
import eduTrip from "../assets/img/F&A/edu_trip.jpeg";

const activitiesData = [
  {
    id: 1,
    title: "EDUCATIONAL TRIP",
    description: "Students explore the world beyond classrooms through enriching educational trips to historical sites, museums, and places of interest.",
    image: eduTrip,
  },
  {
    id: 2,
    title: "CULTURAL ACTIVITIES",
    description: "Music, dance, drama, and art events that nurture creativity, stage confidence, and teamwork.",
    image: cul,
  },
  {
    id: 3,
    title: "SPORTS & ATHLETICS",
    description: "Athletics and team games that promote fitness, sportsmanship, and leadership under trained coaches.",
    image: sport,
  },
  {
    id: 4,
    title: "Pre-PRIMARY ACTIVITIES",
    description: "Play-based learning, creative exploration, and social development activities designed for our youngest learners.",
    image: pre,
  },
];

function Activities() {
  return (
    <div className="activities-grid">
      {activitiesData.map((activity) => (
        <div key={activity.id} className="activity-card">
          <div className="card-image">
            <img src={activity.image} alt={activity.title} />
          </div>
          <div className="card-content">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Activities;
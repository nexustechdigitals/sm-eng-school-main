import "../styles/Activities.css";

import cul from "../assets/img/F&A/cul1.jpg";
import sport from "../assets/img/F&A/spo1.jpg";
import pre from "../assets/img/F&A/pre_prime.jpeg";
import eduTrip from "../assets/img/F&A/edu_trip.jpeg";

const activitiesData = [
  {
    id: 1,
    title: "Picnic",
    description: "Waterpark picnics that combine fun and learning, fostering camaraderie and exploration in a vibrant outdoor setting.",
    image: eduTrip,
  },
  {
    id: 2,
    title: "Saraswati Puja",
    description: "Celebration of knowledge and learning, honoring the goddess of wisdom and education.",
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
    description: "Engaging activities for pre-primary students that foster creativity, social skills, and early learning in a fun environment.",
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
import "../styles/Activities.css";


// import pre from "../assets/img/Activity/tinny0.webp";
// import sci from "../assets/img/Activity/sci0.webp";
// import cul from "../assets/img/Activity/act0.webp";
// import sport from "../assets/img/Activity/sport0.webp";

import logo from "../assets/img/logo.png";




const activitiesData = [
 
  {
    id: 1,
    title: "SCIENCE PRACTICALS",
    description: "Hands-on experiments in physics, chemistry, and biology labs to build curiosity, observation, and scientific thinking.",
    image: logo,
    imagePosition: "right"
  },
  
  {
    id: 2,
    title: "CULTURAL ACTIVITIES",
    description: "Music, dance, drama, and art events that nurture creativity, stage confidence, and teamwork.",
    image: logo,
    imagePosition: "right"
  },
  {
    id: 3,
    title: "SPORTS & ATHLETICS",
    description: "Athletics and team games that promote fitness, sportsmanship, and leadership under trained coaches.",
    image: logo,
    imagePosition: "left"
  },
  {
    id: 4,
    title: "Pre-PRIMARY ACTIVITIES",
    description: "Play-based learning, creative exploration, and social development activities designed for our youngest learners.",
    image: logo,
    imagePosition: "right"
  },
  
];

function Activities() {
  return (
    // <section id="activities" className="activities-section">
    //   <h2 className="section-title">Our Activities</h2>

    //   <div className="activities-flow">
    //     {activitiesData.map((activity, index) => (
    //       <div key={activity.id} className="activity-step">
    //         <div
    //           className={`activity-content ${
    //             activity.imagePosition === "left" ? "image-left" : "image-right"
    //           }`}
    //         >
    //           {activity.imagePosition === "left" && (
    //             <div className="activity-image-wrapper">
    //               <img
    //                 src={activity.image}
    //                 alt={activity.title}
    //                 className="activity-image"
    //               />
    //             </div>
    //           )}

    //           <div className="activity-text-wrapper">
    //             <h3 className="activity-title">{activity.title}</h3>
    //             <p className="activity-description">{activity.description}</p>
    //           </div>

    //           {activity.imagePosition === "right" && (
    //             <div className="activity-image-wrapper">
    //               <img
    //                 src={activity.image}
    //                 alt={activity.title}
    //                 className="activity-image"
    //               />
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
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
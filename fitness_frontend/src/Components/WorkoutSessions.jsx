import React from "react";

const WorkoutSessions = () => {
  return (
    <div className="welcome">
    <section className="workout_session">
      <div className="wrapper left-section">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Experience the best of fitness with our top-rated workout sessions.
          Designed by professional trainers, these sessions focus on strength,
          endurance, and flexibility, ensuring you get the most out of every
          move. Get ready to push your limits and achieve your fitness goals!
        </p>
        <img src="/img5.jpg" alt="workout" className="main-image" />
      </div>
      <div className="wrapper right-section">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Our featured bootcamps bring together the best of high-intensity
          training with a community-driven approach. Perfect for all fitness
          levels, these bootcamps combine cardio, strength, and functional
          training to give you an all-round workout experience. Challenge
          yourself and join a supportive fitness family today!
        </p>
        <div className="bootcamps">
          <div className="bootcamp-item">
            <img src="./b1.jpg" alt="b1" />
          </div>
          <div className="bootcamp-item">
            <img src="./b2.jpg" alt="b2" />
          </div>
          <div className="bootcamp-item">
            <img src="./b_3.jpg" alt="b3" />
          </div>
          <div className="bootcamp-item">
            <img src="./b4.jpg" alt="b4" />
          </div>
          <div className="bootcamp-item">
            <img src="./b5.jpg" alt="b5" />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default WorkoutSessions;

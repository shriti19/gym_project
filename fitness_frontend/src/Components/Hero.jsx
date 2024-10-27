import React from 'react';

import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    // Redirect to the Loginignup page
    navigate('.Components/Loginignup'); // Correct path for Loginignup page
  };

  const handleDiscoverPlan = () => {
    // Redirect to the FAQs or plan selection page
    navigate('.components/FAQs');
  };
// const Hero = () => {
//   const handleStartJourney = () => {
//     // Redirect to registration or fitness assessment
//     window.location.href = '.component/Loginignup'; // Example URL
//   };

//   const handleDiscoverPlan = () => {
//     // Redirect to personalized plan page or a plan selection page
//     window.location.href = '/FAQs'; // Example URL
//   };
 
  return (
    <section className="hero">
      <div className='content'>
        <div className='title'>
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button onClick={handleStartJourney}>Start Your Journey</button>
          <button onClick={handleDiscoverPlan}>Discover Your Plan</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
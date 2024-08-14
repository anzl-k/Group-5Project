import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Help Yourself is a comprehensive mobile health monitoring
            application designed to empower you in managing your health and
            well-being. Our user-friendly platform offers real-time vital sign
            monitoring, personalized health insights, medication reminders,
            secure data synchronization, and easy appointment scheduling.
            Whether you're a patient, caregiver, or healthcare provider, Help
            Yourself provides the tools you need to stay informed and proactive
            about health management.
          </p>
        </div>
        <div className="banner">
          <img
            src={imageUrl}
            alt="Help Yourself App"
            className="animated-image"
          />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;

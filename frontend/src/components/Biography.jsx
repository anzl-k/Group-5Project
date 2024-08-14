import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="who we are" />
        </div>
        <div className="banner">
          <p>About Help Yourself</p>
          <h3>Empowering Health Management Through Technology</h3>
          <p>
            Help Yourself was developed by a dedicated team of software
            engineering students at Centennial College, driven by the vision of
            making health monitoring accessible and user-friendly for everyone.
          </p>
          <h4>Our Mission:</h4>
          <p>
            To bridge the gap between patients and healthcare professionals by
            providing a convenient and accessible platform for proactive health
            management.
          </p>
          <h4>The Team:</h4>
          <ul>
            <li>Varenyam Bhatt</li>
            <li>Anjal Katwal</li>
            <li>Chantelle Lawson</li>
            <li>Mahesh Makwana</li>
            <li>Sneha Poudel</li>
            <li>Srivarshini Sundar</li>
          </ul>
          <p>
            Under the guidance of our instructor, George Kougioumtzoglou, we've
            combined our diverse skills and passion for technology to create an
            application that addresses the growing need for remote health
            monitoring.
          </p>
          <h4>Our Approach:</h4>
          <p>
            Using agile methodology, we've developed Help Yourself to be
            intuitive, secure, and feature-rich. We're committed to continuous
            improvement and user-centered design to ensure our application meets
            the evolving needs of our users.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li>Real-time monitoring of vital signs</li>
            <li>Personalized health insights</li>
            <li>Medication adherence tracking</li>
            <li>Secure data management</li>
            <li>
              Seamless communication between patients and healthcare providers
            </li>
          </ul>
          <p>
            We believe in the power of technology to transform healthcare
            delivery and improve patient outcomes. Help Yourself is our
            contribution to a healthier, more connected world.
          </p>
          <p>
            Join us on this journey towards better health management. Your
            well-being is our priority.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;

import React from 'react';
import './AboutMissionVision.scss';

const AboutMissionVision = () => {
  return (
    <section className="about-mission-vision">
      <div className="container">
        <div className="boxes-container">
          <div className="mission-box">
            <h3 className="box-title">Our Mission</h3>
            <p className="box-text">
              At EKoChams, we're on a mission to inspire people worldwide to become Earth's guardians. 
              Through easy recycling, sustainable living, smart rewards, and community, we're sowing the 
              seeds of a greener future for generations to come.
            </p>
          </div>
          <div className="vision-box">
            <h3 className="box-title">Our Vision</h3>
            <p className="box-text">
              We envision a world where recycling is effortless, rewarding, and community-driven, led by 
              a global network of EKOCHAMPS dedicated to a greener, sustainable planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
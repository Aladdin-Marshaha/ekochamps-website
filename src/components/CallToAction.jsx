import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.scss';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <h2 className="cta-title">
          Reduce Carbon Footprint, Earn Rewards, and change the World!
        </h2>
        <p className="cta-description">
          The EU aims to reduce CO2 emissions by 55% by 2030 and achieve climate neutrality by 2050. 
          Together, we can do our bit to help achieve this goal...
        </p>
        <Link to="/download-app" className="cta-button">
          Download The App
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
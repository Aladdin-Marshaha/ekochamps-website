import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Recycle.</span>
          <span>Reward.</span>
          <span>Repeat.</span>
        </h1>
        <Link to="/be-ekochamps" className="hero-button">
          Be an EkoChamps
        </Link>
      </div>
    </section>
  );
};

export default Hero;
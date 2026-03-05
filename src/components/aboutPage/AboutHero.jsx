import React from 'react';
import './AboutHero.scss';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="section-title">About Us</h1>
          <div className="hero-text">
            <p>
              EKoChamps is a group of dedicated recycling enthusiasts on a mission to make recycling a rewarding, no-brainer habit for everyone. We're kind of like a cool club that's all about recycling and doing good for the environment.
            </p>
            <p>
              Now, here's the really awesome part: we've created this special app, like a magic tool on your phone, that actually gives you rewards when you recycle. Imagine earning rewards every time you do your part to recycle. It's like turning your trash into treasure!
            </p>
            <p>
              So, join us in this fun adventure. Together, we'll make recycling super easy, and we'll use our eco-powers to make the world a better place. Let's be an EkoChamp and turn our planet into a cleaner, greener paradise!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
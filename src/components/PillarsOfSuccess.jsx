import React from 'react';
import './PillarsOfSuccess.scss';

const PillarsOfSuccess = () => {
  const pillars = [
    {
      id: 1,
      image: './images/hero-background.jpg',
      title: 'BUILDING A COMMUNITY',
      text: `We're all about the power of coming together. That's why we believe that community cleanups like beaches or neighborhoods can be a good idea to change the world. we live in. Imagine joining forces with your fellow community members to make your local area cleaner and greener. These events go beyond just picking up trash; they create bonds, build friendships, and give you a sence of pride in your community. Together, we're not just cleaning up; we're building a brighter future.`
    },
    {
      id: 2,
      image: './images/hands-background.jpg',
      title: 'GLOBAL REACH, LOCAL IMPACT',
      text: `Our platform knows no borders. EkoChampions operates on a global, decintralized network, which means it's accessible to you, whether you're in Sweden or India. We're breaking down geographical barriers to empower individuals from diverse backgrounds to join the global effort towards a cleaner, greener planet. Together, we'll make an impact that span continents!`
    },
    {
      id: 3,
      image: './images/school-kids-background.jpg',
      title: 'RECYCLING FOR ALL',
      text: `We believe that recycling should be as easy as pie and inclusive of every item you can think of. So, from plastic bottles to old electronics, we welcome them all. Our goal is to encourage you to recycle a wide range of materials, amplifying your positive impact on the environment and cultivating sustainable habits. It doesn't matter if it's a soda can or an ancient laptop — every contribution counts!`
    },
    {
      id: 4,
      image: './images/app-mockup.jpg',
      title: 'SMART REWARDS FOR SMART CHOICES',
      text: `Ever wanted to be rewarded just for doing the right thing? Well, with Ekochamps, you can. Our secret sauce? Smart contracts. They automatically reward you when you meet specific recycling goals and conditions. Whether you hit a recycling target within a timeframe or jump into one of our lively community clean-up events, our smart contracts make sure you're recognized and rewarded. No paperwork, no hassle – just pure transparency and security.`
    }
  ];

  return (
    <section className="pillars-of-success">
      <div className="container">
        <h2 className="section-title">OUR PILLARS OF SUCCESS</h2>
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-box">
              <div className="pillar-image">
                <img src={pillar.image} alt={pillar.title} />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-text">{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsOfSuccess;
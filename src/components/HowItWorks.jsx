import React from 'react';
import './HowItWorks.scss';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Join & Locate',
      points: [
        'Sign up to start your recycling journey—it\'s like embarking on an exciting adventure!',
        'Discover nearby recycling bins effortlessly with our built-in nifty app\'s map; just a couple of taps, and you\'re on your way to winning eco-rewards!'
      ]
    },
    {
      id: 2,
      title: 'Scan & Earn',
      points: [
        'Use your phone to scan the QR code on the recycling bin, and you\'re all set.',
        'Trash to treasure, Every time you recycle, you\'re turning your trash into valuable rewards. It\'s like getting a little something back every day!'
      ]
    },
    {
      id: 3,
      title: 'Compete & Shine',
      points: [
        'After recycling, make sure to verify your efforts. This is how you claim your EkoChampion title!',
        'Check out the leaderboard to see where you stand among other eco-heroes. Keep pushing, and don\'t miss out on the fun challenges!'
      ]
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How does it work?</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-box">
              <h3 className="step-title">{step.title}</h3>
              <div className="step-content">
                {step.points.map((point, index) => (
                  <div key={index} className="step-point">
                    <span className="step-number">{index + 1}.</span>
                    <p className="step-text">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import React from 'react';
import './AboutSDGs.scss';

const AboutSDGs = () => {
  return (
    <section className="about-sdgs">
      <div className="container">
        <div className="sdgs-grid">
          <div className="sdg-item">
            <div className="sdg-image">
              <img src="./images/SDG-11-150x150.png" alt="Sustainable Cities & Communities" />
            </div>
            <h3 className="sdg-title">SUSTAINABLE CITIES & COMMUNITIES</h3>
          </div>
          
          <div className="sdg-item">
            <div className="sdg-image">
              <img src="./images/eko-icon-3-150x150.png" alt="Responsible Consumption & Production" />
            </div>
            <h3 className="sdg-title">RESPONSIBLE CONSUMPTION & PRODUCTION</h3>
          </div>
          
          <div className="sdg-item">
            <div className="sdg-image">
              <img src="./images/eko-icon4-150x150.png" alt="Climate Action" />
            </div>
            <h3 className="sdg-title">CLIMATE ACTION</h3>
          </div>

          <div className="sdg-text-item">
            <h4 className="sdg-text-title">Our journey begins with SDG 11</h4>
            <p className="sdg-description">
              Through our app, we're fostering change in urban areas by encouraging recycling practices. 
              We believe that every city should be clean, livable, and environmentally friendly. By promoting 
              recycling in these urban landscapes, we play a pivotal role in reducing waste accumulation and 
              enhancing the overall environmental quality of our communities.
            </p>
          </div>

          <div className="sdg-text-item">
            <h4 className="sdg-text-title">Moving forward, we passionately embrace SDG 12</h4>
            <p className="sdg-description">
              Our app is more than just a tool; it's a catalyst for positive change. We actively contribute 
              to reducing waste generation by promoting recycling practices and providing incentives to individuals, 
              especially in regions where such behaviors are less prevalent. Our focus is on fostering sustainable 
              consumption patterns and encouraging responsible production processes. We aim to raise awareness about 
              the importance of recycling and offer tangible incentives for users to actively engage in recycling activities.
            </p>
          </div>

          <div className="sdg-text-item">
            <h4 className="sdg-text-title">We address the most critical global challenge SDG 13</h4>
            <p className="sdg-description">
              Our app actively encourages recycling, directly resulting in reduced waste generation and lower 
              greenhouse gas emissions. By diverting waste away from landfills and incineration, our app becomes 
              a vital tool in the fight against climate change. Recycling not only mitigates climate change but 
              also reduces the need for resource extraction and carbon-emitting manufacturing processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSDGs;
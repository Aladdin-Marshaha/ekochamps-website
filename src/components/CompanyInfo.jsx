import React from 'react';
import './CompanyInfo.scss';

const CompanyInfo = () => {
  return (
    <section className="company-info">
      <div className="company-content">
        <div className="container">
          <h2 className="company-title">EkoChamps</h2>
          <h3 className="company-subtitle">Your Sustainability Partner</h3>
          <p className="company-description">
            We exist to redefine the way our planet is cared for, striving for a world where 
            sustainable practices are not just attainable but also deeply rewarding, regardless 
            of location. Our existence centers around a platform that seamlessly marries recycling 
            with sustainable living, putting these powerful tools within easy reach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
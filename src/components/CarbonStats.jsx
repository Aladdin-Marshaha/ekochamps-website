import React from 'react';
import './CarbonStats.scss';

const CarbonStats = () => {
  return (
    <section className="carbon-stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card average">
            <div className="stat-content">
              <p className="stat-text">
                The average EU citizen has a carbon footprint of about 7.8 metric tons per year.
              </p>
            </div>
          </div>
          
          <div className="stat-card highest">
            <div className="stat-content">
              <h3 className="stat-title">The highest per capita carbon emission in the EU are</h3>
              <ul className="stat-list">
                <li>° Luxembourg with 14.7 metric tons/year.</li>
                <li>° Estonia with 14.3 metric tons/year.</li>
                <li>° Czech Republic with 13.5 metric tons/year.</li>
              </ul>
            </div>
          </div>
          
          <div className="stat-card lowest">
            <div className="stat-content">
              <h3 className="stat-title">The lowest per capita carbon emissions in the EU are</h3>
              <ul className="stat-list">
                <li>° Portugal with 5.5 metric tons/year.</li>
                <li>° France 5.8 metric tons/year.</li>
                <li>° Sweden stand at 4th position with 6.1 metric tons/year.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonStats;
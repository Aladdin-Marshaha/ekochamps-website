import React from 'react';
import AboutHero from './aboutPage/AboutHero';
import AboutMessage from './aboutPage/AboutMessage';
import AboutMissionVision from './aboutPage/AboutMissionVision';
import AboutPurpose from './aboutPage/AboutPurpose';
import AboutSDGs from './aboutPage/AboutSDGs';
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutMessage />
      <AboutMissionVision />
      <AboutPurpose />
      <AboutSDGs />
    </div>
  );
};

export default AboutPage;
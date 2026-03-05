import React from 'react';
import './ContactMap.scss';

const ContactMap = () => {
  const address = "Carlsgatan 12 A, 211 20 Malmö";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgaN2WA&q=${encodedAddress}`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section className="contact-map">
      <div className="container">
        <div className="map-content">
          <h2 className="map-title">Visit Our Office</h2>
          <p className="map-address">{address}</p>
          
          <div className="map-wrapper">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2259.7542766!2d13.0001!3d55.6052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a1633e3b5e8d%3A0x8!2sCarlsgatan%2012A%2C%20211%2020%20Malm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sse!4v1625000000000!5m2!1sen!2sse`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EkoChamps Office Location"
            ></iframe>
          </div>

          <div className="map-info">
            <a 
              href={googleMapsLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
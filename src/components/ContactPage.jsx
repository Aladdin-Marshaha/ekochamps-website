import React from 'react';
import ContactForm from './contactPage/ContactForm';
import ContactMap from './contactPage/ContactMap';
import './ContactPage.scss';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default ContactPage;
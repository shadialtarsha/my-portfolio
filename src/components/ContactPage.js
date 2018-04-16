import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

const ContactPage = () => (
  <div>
    <Menu />
    <ContactForm />
    <SocialMedia />
    <NavLink to="/portfolio">portfolio</NavLink>
    <button
      onClick={() => {
        window.open('http://localhost:3333/portfolio/resume', '_blank');
      }}
    >
      Download Resume
    </button>
  </div>
);

export default ContactPage;

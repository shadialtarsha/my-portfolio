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
    {/* <NavLink to="/portfolio">portfolio</NavLink> */}
  </div>
);

export default ContactPage;

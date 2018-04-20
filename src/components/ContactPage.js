import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

const ContactPage = () => (
  <div>
    <Menu />
    <div className="page">
      <main className="centered" id="contact">
        <div className="wrapper">
          <div className="contact_container">
            <header>
              <h3>Contact me</h3>
              <p>
                If you wanna get in touch with me for talking about a project, or about a job vacancy, or even just to
                say hi, full up the form below or send an email to{' '}
                <span className="special-word">work@shadialtarsha.com</span>
              </p>
            </header>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
    <SocialMedia />
    {/* <NavLink to="/portfolio">portfolio</NavLink> */}
  </div>
);

export default ContactPage;

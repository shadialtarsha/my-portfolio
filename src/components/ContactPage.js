import React from 'react';
import Menu from './Menu';
import ContactForm from './ContactForm';
import LeftArrow from './LeftArrow';

const ContactPage = () => (
  <div>
    <Menu />
    <div className="page">
      <div className="centered" id="contact">
        <div className="wrapper">
          <div className="contact_container">
            <header>
              <h1>Contact me</h1>
              <p>
                If you wanna get in touch with me for talking about a project, or about a job vacancy, or even just to
                say hi, full up the form below or send an email to{' '}
                <span className="special-word">work@shadialtarsha.com</span>
              </p>
            </header>
            <ContactForm />
            <div className="social-media-container">
              <h2>Let's get social</h2>
              <p>You can follow me on facebook, github, or on twitter.</p>
              <div className="buttons-social-media">
                <a
                  id="facebook-button"
                  href="https://www.facebook.com/shadi.altarsha"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f fa-inverse logo" />
                  <span>Facebook</span>
                </a>
                <a id="github-button" href="https://github.com/shadialtarsha" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github fa-inverse logo" />
                  <span>Github</span>
                </a>
                <a
                  id="twitter-button"
                  href="https://twitter.com/shadi_altarsha"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-inverse logo" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LeftArrow to="portfolio" />
  </div>
);

export default ContactPage;

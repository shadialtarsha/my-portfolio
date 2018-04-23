import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import ContactForm from './ContactForm';

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
              <h3>Let's get social</h3>
              <p>You can follow me on facebook, github, twitter, or on instagram.</p>
              <div className="buttons-social-media">
                <button id="facebook-button">
                  <i className="fab fa-facebook-f fa-inverse logo" />
                  <span>Facebook</span>
                </button>
                <button id="github-button">
                  <i className="fab fa-github fa-inverse logo" />
                  <span>Github</span>
                </button>
                <button id="twitter-button">
                  <i className="fab fa-twitter fa-inverse logo" />
                  <span>Twitter</span>
                </button>
                <button id="instagram-button">
                  <i className="fab fa-instagram logo" />
                  <span>instagram</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavLink to="/portfolio" className="arrow" id="arrow-left">
      <div className="lines">
        <div id="left-upper" className="line" />
        <div id="left-lower" className="line" />
      </div>
      <div id="left-arrow-link">portfolio</div>
    </NavLink>
  </div>
);

export default ContactPage;

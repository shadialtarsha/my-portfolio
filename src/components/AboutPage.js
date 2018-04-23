import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import SocialMedia from './SocialMedia';

const AboutPage = () => (
  <div>
    <Menu />
    <div className="page">
      <div className="centered" id="about">
        <div className="wrapper">
          <div className="about-container">
            <div className="avatar">
              <div className="img" />
            </div>
            <div>
              <h3>Hello, My name is Shadi Al-Tarsha.</h3>
              <p>
                <span className="special-word">I am a Software developer</span>, ambitious, self-motivated, team worker,
                and a big believer in the self-taught approach.
              </p>
              <p>
                My favorite programming language is JavaScript, but Java was my best friend for the first 2 years of my
                career.
              </p>
              <p>
                Check out my projects in the{' '}
                <NavLink className="special-link" to="/portfolio">
                  portfolio page
                </NavLink>.
              </p>
              <p>
                If you want to make something exsiting together, feel free to email me at{' '}
                <span className="special-word">work@shadialtarsha.com</span> or fill a form in the{' '}
                <NavLink className="special-link" to="/contact">
                  contact page
                </NavLink>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavLink to="/skills" className="arrow" id="arrow-right">
      <div id="right-arrow-link">skills</div>
      <div className="lines">
        <div id="right-upper" className="line" />
        <div id="right-lower" className="line" />
      </div>
    </NavLink>
    <SocialMedia />
  </div>
);

export default AboutPage;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import SocialMedia from './SocialMedia';

const AboutPage = () => (
  <div>
    <Menu />
    <div className="page">
      <main className="centered" id="about">
        <div className="wrapper">
          <div className="about__container">
            <div className="avatar">
              <img src="/images/avatar.jpg" alt="me" width="200" height="200" />
            </div>
            <div>
              <h3>Hello, My name is Shadi Al-Tarsha.</h3>
              <p>
                <span id="special-word">I am a Software developer</span>, ambitious, self-motivated, team worker, and a
                big believer in the self-taught approach.
              </p>
              <p>
                My favorite programming language is JavaScript, but Java was my best friend for the first 2 years of my
                career.
              </p>
              <p>
                Check out my projects in the{' '}
                <NavLink id="special-link" to="/portfolio">
                  portfolio page
                </NavLink>.
              </p>
              <p>
                If you want to make something exsiting together, feel free to email me at{' '}
                <span id="special-word">work@shadialtarsha.com</span> or fill a form in the{' '}
                <NavLink id="special-link" to="/contact">
                  contact page
                </NavLink>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
    {/* <NavLink to="/skills">skills</NavLink> */}
    <SocialMedia />
  </div>
);

export default AboutPage;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import RightArrow from './RightArrow';
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
                I am a Software developer, ambitious, self-motivated, team worker, and a big believer in the self-taught
                approach.
              </p>
              <p>
                My favorite programming language is JavaScript, but Java was my best friend for the first 2 years of my
                career.
              </p>
              <p>
                Check out my projects in the{' '}
                <NavLink
                  className="special-link"
                  to={{
                    pathname: `/portfolio`,
                    state: {
                      transition: {
                        enterActive: 'navRightSlide-enter-active',
                        exitActive: 'navRightSlide-exit-active',
                      },
                      duration: 2800,
                    },
                  }}
                >
                  portfolio page
                </NavLink>.
              </p>
              <p>
                If you have an exciting idea and you want to achieve it together, feel free to email me at{' '}
                <span className="special-word">work@shadialtarsha.com</span> or fill a form in the{' '}
                <NavLink
                  className="special-link"
                  to={{
                    pathname: `/contact`,
                    state: {
                      transition: {
                        enterActive: 'navRightSlide-enter-active',
                        exitActive: 'navRightSlide-exit-active',
                      },
                      duration: 2800,
                    },
                  }}
                >
                  contact page
                </NavLink>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RightArrow to="skills" />
    <SocialMedia />
  </div>
);

export default AboutPage;

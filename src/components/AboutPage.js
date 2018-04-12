import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import SocialMedia from './SocialMedia';

const AboutPage = () => (
  <div>
    <Header />
    <main>
      <SocialMedia />
      <div>
        <div>
          <img src="/images/avatar.jpg" alt="me" width="200" height="200" />
        </div>
        <div>
          <h3>Hello, My name is Shadi Al-Tarsha.</h3>
          <p>
            Graduated as a Software Engineer. Ambitious, self-motivated, team worker, and a big believer in self-taught
            approach.
          </p>
          <p>
            My favorite programming language is JavaScript, but Java was my best friend for the first 2 years of my
            career.
          </p>
          <p>If you want to make something exsiting together, feel free to email me at shadi.altarsha.94@gmail.com</p>
        </div>
      </div>
    </main>
    <NavLink to="/skills">skills</NavLink>
  </div>
);

export default AboutPage;

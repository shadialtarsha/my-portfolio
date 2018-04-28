import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer id="page-footer">
    <h3>Let's talk</h3>
    <p>Wanna get in touch or talk about a project?</p>
    <p>
      Feel free to contact me via email at <span className="special-word">work@shadialtarsha.com</span>
    </p>
    <p>
      or drop a line in the form at the{' '}
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
  </footer>
);

export default Footer;

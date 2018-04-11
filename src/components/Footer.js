import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer>
    <h1>Let's talk</h1>
    <p>Wanna get in touch or talk about a project?</p>
    <p>Feel free to contact me via email at work@shadialtarsha.com</p>
    <p>
      or drop a line in the form at the <NavLink to="/contact">contact page</NavLink>
    </p>
  </footer>
);

export default Footer;

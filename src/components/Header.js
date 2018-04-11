import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/about" activeStyle={{ color: 'white' }} exact>
        <span>about</span>
      </NavLink>
      <NavLink to="/skills" activeStyle={{ color: 'white' }}>
        <span>skills</span>
      </NavLink>
      <NavLink to="/portfolio" activeStyle={{ color: 'white' }}>
        <span>portfolio</span>
      </NavLink>
      <NavLink to="/contact" activeStyle={{ color: 'white' }}>
        <span>contact</span>
      </NavLink>
    </nav>
  </header>
);

export default Header;

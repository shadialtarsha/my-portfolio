import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/about" className="header__nav__link" activeStyle={{ color: 'white' }} exact>
        <span>about</span>
      </NavLink>
      <NavLink to="/skills" className="header__nav__link" activeStyle={{ color: 'white' }}>
        <span>skills</span>
      </NavLink>
      <NavLink to="/portfolio" className="header__nav__link" activeStyle={{ color: 'white' }}>
        <span>portfolio</span>
      </NavLink>
      <NavLink to="/contact" className="header__nav__link" activeStyle={{ color: 'white' }}>
        <span>contact</span>
      </NavLink>
    </nav>
  </header>
);

export default Header;

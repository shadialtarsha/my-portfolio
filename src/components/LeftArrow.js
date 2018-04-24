import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftArrow = ({ to }) => (
  <NavLink to={`/${to}`} className="arrow arrow-left">
    <div className="lines">
      <div className="arrow__line arrow__line--left-upper" />
      <div className="arrow__line arrow__line--left-lower" />
    </div>
    <div className="arrow__link arrow__link--left">{to}</div>
  </NavLink>
);

export default LeftArrow;
